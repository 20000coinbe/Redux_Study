import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./modules/index";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import rootSaga from "./modules/rootSaga";

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

// const { createReduxHistory, routerMiddleware, routerReducer } =
//   createReduxHistoryContext({
//     history: createBrowserHistory(),
//   });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, promise, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
