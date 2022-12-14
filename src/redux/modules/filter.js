import { createActions, handleActions } from "redux-actions";

// 초기값
const initialState = "ALL";

export const { showAll, showComplete } = createActions(
  "SHOW_ALL",
  "SHOW_COMPLETE",
  {
    prefix: "redux-start/filter",
  }
);

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "COMPLETE",
  },
  initialState,
  { prefix: "redux-start/filter" }
);

export default reducer;

// 액션 타입 정의
// const SHOW_ALL = "redux-start/filter/SHOW_ALL";
// const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// 액션 생성 함수
// export function showAll() {
//   return {
//     type: SHOW_ALL,
//   };
// }

// export function showComplete() {
//   return {
//     type: SHOW_COMPLETE,
//   };
// }

// 리듀서
// export default function reducer(previousState = initialState, action) {
//   // 형태 : { todos: [{ text: '코딩', done: false }, { text: "설거지", done: false }], filter: "ALL"}

//   if (action.type === SHOW_COMPLETE) {
//     return "COMPLETE";
//   }

//   if (action.type === SHOW_ALL) {
//     return "ALL";
//   }

//   return previousState;
// }
