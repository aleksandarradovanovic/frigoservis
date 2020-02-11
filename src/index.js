import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {router} from "./app/router";
// import "./stylesheets/style.css";
require("./stylesheets/style.css")
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(router, document.getElementById('root'));
