import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initialState = [];

function todos(previousState = initialState, action) {
  // 형태 : { todos: [{ text: '코딩', done: false }, { text: "설거지", done: false }], filter: "ALL"}

  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  return previousState;
}

export default todos;
