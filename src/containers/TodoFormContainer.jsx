import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TotoForm";
import { addTodo } from "../redux/actions";

const TodoFormContainer = () => {
  const dispatch = useDispatch();

  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
};
// connect(
//   (state) => ({}),
//   (dispatch) => ({
//     add: (text) => {
//       dispatch(addTodo(text));
//     },
//   })
// )(TodoForm);

export default TodoFormContainer;
