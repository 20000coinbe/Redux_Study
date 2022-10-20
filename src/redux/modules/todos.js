// 액션 타입 정의
const ADD_TODO = "redux-start/todos/ADD_TODO";
const COMPLETE_TODO = "redux-start/todos/COMPLETE_TODO";

// 액션 생성 함수
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

// 초기값
const initialState = [];

// 리듀서
export default function reducer(previousState = initialState, action) {
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
