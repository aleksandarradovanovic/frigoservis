import React from "react";
// import {  Route, Router, browserHistory } from "react-router";
import { HashRouter, Route } from 'react-router-dom';
import App from "../App";
export const home = "/";

const router =
    // <Router history={browserHistory}>
    //     <Route path={"/"} component={App}>
    //         <Route path={"/home"} component={App} />

    //     </Route>
    // </Router>;
    <HashRouter>
         <Route path="/" component={App} />
    </HashRouter>

export { router };
