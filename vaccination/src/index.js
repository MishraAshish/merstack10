console.log("Entry Point of our application");
import React from "react";
//import { render } from "react-dom";
import * as ReactDOM from 'react-dom/client';
import AppComponent from "./app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
      <AppComponent/>
);

// render(//provider provides access to states (store) in components either being publisher or subscriber
//     <Provider store={store}> 
//         <AppComponent/>
//     </Provider>,//which application you want to render,
//     document.getElementById("root") //bootstrapping of application in root element of index.html
// )