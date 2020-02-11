import React from "react";
import { IndexRoute, Route, Router, browserHistory } from "react-router";
import App from "../App";
export const home = "/";

const router =
    <Router history={browserHistory}>
        <Route path={"/"} component={App}>
            <Route path={"/home"} component={App} />

        </Route>
    </Router>;

export { router };
