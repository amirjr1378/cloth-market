import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import add from "./fontAwesomeConfig";
import { PersistGate } from "redux-persist/integration/react";
import Catch from "./components/Catch";
add();
ReactDOM.render(
  <Catch>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </Catch>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
