import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./reducers/index";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import createSagaMiddleware from "redux-saga";

// function middleWare1(store) {
//   console.log("middleWare1", 0);

//   return (next) => {
//     console.log("middleWare1", 1);
//     return (action) => {
//       console.log("middleWare1", 2);
//       const returnValue = next(action);

//       console.log("middleWare1", 3);

//       return returnValue;
//     };
//   };
// }

// function middleWare2(store) {
//   console.log("middleWare2", 0);

//   return (next) => {
//     console.log("middleWare2", 1);
//     return (action) => {
//       console.log("middleWare2", 2);
//       const returnValue = next(action);

//       console.log("middleWare2", 3);

//       return returnValue;
//     };
//   };
// }

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, promise, sagaMiddleware))
);

export default store;
