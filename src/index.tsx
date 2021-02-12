import * as React from "react";
import * as ReactDom from "react-dom";
import { loadableReady } from "@loadable/component";
import App from "./App";

loadableReady(() => {
  ReactDom.hydrate(<App />, document.querySelector("#root"));
});
