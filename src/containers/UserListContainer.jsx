import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import {
  getUsersFail,
  getUsersStart,
  getUsersThunk,
} from "../redux/modules/users";

const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);

  const dispatch = useDispatch();

  //   const start = useCallback(() => {
  //     dispatch(getUsersStart());
  //   }, [dispatch]);

  //   const success = useCallback(
  //     (data) => {
  //       dispatch(getUsersSuccess(data));
  //     },
  //     [dispatch]
  //   );

  //   const fail = useCallback(
  //     (error) => {
  //       dispatch(getUsersFail(error));
  //     },
  //     [dispatch]
  //   );

  // const getUsers = useCallback(
  //   async function getUsers() {
  //     try {
  //       dispatch(getUsersStart());
  //       const res = await axios.get("https://api.github.com/users");
  //       dispatch(getUsersSuccess(res.data));
  //     } catch (error) {
  //       dispatch(getUsersFail(error));
  //     }
  //   },
  //   [dispatch]
  // );

  const getUsers = useCallback(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
};
export default UserListContainer;
