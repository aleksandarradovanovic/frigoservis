import React from "react";
import {  Route, Router,IndexRoute, browserHistory } from "react-router";
import App from "../App";
import Test from "./components/Test";
export const home = "/";

const router =

    <Router history={browserHistory}>
        <Route exact path={"/"} component={App}>
            {/* <IndexRoute component={<App/>} /> */}
            <Route exact path={'/about'} component={Test} />
        </Route>
    </Router>;

export { router };
