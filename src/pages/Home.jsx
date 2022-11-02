import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { push } from "redux-first-history";

const Home = () => {
  // const dispatch = useDispatch();

  // const click = () => {
  //   // reducer안에 router라는 데이터로 관라가 되고 있다 -> 액션을 디스패치해서 이동이 가능하다
  //   dispatch(push("/todos"));
  // };
  return (
    <>
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        {/* <button onClick={click}>todos롤 이동</button> */}
      </div>
    </>
  );
};

export default Home;
