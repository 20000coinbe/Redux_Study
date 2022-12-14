import axios from "axios";
import { push } from "redux-first-history";
import { put, call, delay, takeEvery } from "redux-saga/effects";

// GitHub API 호출을 시작하는 것
const GET_USERS_START = "redux-start/users/GET_USERS_START";

// 호출된 API에 대한 응답이 성공적일 때
const GET_USERS_SUCCESS = "redux-start/users/GET_USERS_SUCCESS";

// 호출된 API에 대한 응답이 실패할 때
const GET_USERS_FAIL = "redux-start/users/GET_USERS_FAIL";

// redux-promise-middleware

const GET_USERS = "redux-start/users/GET_USERS";

// promise-middleware의 고유한 형태(미들웨어에서 자동으로)
export const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "redux-start/users/GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED";

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// 리듀서
export default function reducer(state = initialState, action) {
  // promise-middleware 액션타입 추가
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      lading: true,
      data: action.data,
    };
  }

  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: true,
      data: action.payload,
    };
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.PAYLOAD,
    };
  }
  return state;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// thunk
export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      // sleep : API호출이 너무 빨라서
      await sleep(2000);
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

// redux-promise-middleware

export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      // try-catch 부분도 필요 없이 API만 호출
      // dispatch(getUsersStart()); 디스패치를 직접할 필요가 없다
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}

// saga 함수생성 (getUsersThunk와 비교)

function* getUsersSaga(action) {
  try {
    // dispatch(getUsersStart());
    yield put(getUsersStart());
    // await sleep(2000);
    yield delay(2000);
    // const res = await axios.get("https://api.github.com/users");
    const res = yield call(axios.get, "https://api.github.com/users");
    // dispatch(getUsersSuccess(res.data));
    yield put(getUsersSuccess(res.data));
    yield put(push("/"));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

// saga 액션타입정의
const GET_UERS_SAGA_START = "GET_UERS_SAGA_START";

// saga 액션타입을 사용할 액션생성함수
export function getUsersSagaStart() {
  return {
    type: GET_UERS_SAGA_START,
  };
}

// getUsersSaga를 사용할 수 있도록 등록한 상태
export function* usersSaga() {
  yield takeEvery(GET_UERS_SAGA_START, getUsersSaga);
}
