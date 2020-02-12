import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {router} from "./app/router";
// import "./stylesheets/style.css";
require("./stylesheets/style.css")
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
ReactDOM.render(router, document.getElementById('root'));
