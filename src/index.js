import React from "react";
import ReactDOM from "react-dom";
import './'
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


import { BarraN } from "./components/NavBar";
import { Foter } from "./components/Foter";


import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(<BarraN/>, document.getElementById('root'));
ReactDOM.render(<Foter/>, document.getElementById('root'));


