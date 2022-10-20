import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function addTodo(text) {
  // 어떤 TODO인지 모르기 떄문에 todo를 받아와서 넣어주웠다
  return {
    type: ADD_TODO,
    text,
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export function showAll() {
  return {
    type: SHOW_ALL,
  };
}

export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  };
}

///////////// users

// GitHub API 호출을 시작하는 것
export const GET_USERS_START = "GET_USERS_START";

// 호출된 API에 대한 응답이 성공적일 때
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

// 호출된 API에 대한 응답이 실패할 때
export const GET_USERS_FAIL = "GET_USERS_FAIL";

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

export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

// redux-promise-middleware

const GET_USERS = "GET_USERS";

// promise-middleware의 고유한 형태(미들웨어에서 자동으로)
export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "GET_USERS_REJECTED";

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
