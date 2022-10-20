import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

const initialState = "ALL";

function filter(previousState = initialState, action) {
  // 형태 : { todos: [{ text: '코딩', done: false }, { text: "설거지", done: false }], filter: "ALL"}

  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  return previousState;
}

export default filter;
