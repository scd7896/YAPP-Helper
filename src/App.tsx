import * as React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import reducer from "./store/reducer";
import rootSaga from "./store/saga";
import RouterController from "./pages/RouteController";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterController />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
