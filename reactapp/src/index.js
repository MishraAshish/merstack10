console.log("Entry Point of our application");
import React from "react";
import { render } from "react-dom";

import AppComponent from "./app/app";

render(
    <AppComponent/>,//which application you want to render,
    document.getElementById("root") //bootstrapping of application in root element of index.html
)