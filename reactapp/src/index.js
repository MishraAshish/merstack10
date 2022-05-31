console.log("Entry Point of our application");
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./app/State/store";

import AppComponent from "./app/app";

render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>,//which application you want to render,
    document.getElementById("root") //bootstrapping of application in root element of index.html
)