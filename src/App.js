import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import ReactDOM from "react-dom";
import UpdateRedit from "./components/UpdateRedit";
import PostRedit from "./components/PostRedit";
import PostContext from "./contexts/PostContext";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "../src/Styles.scss";
import CreateAccount from "./components/CreateAccount";

function App() {
    
    return ( 
    <Router>
        <div className = "App" >

            <Route exact path="/" component={Login} />
            <Route exact path="/createaccount" component={CreateAccount} />
            <ProtectedRoute path = "/homepage" component={HomePage} />

            <ProtectedRoute path = "/updatereddit" component = { UpdateRedit } />
            <ProtectedRoute path = "/PostRedit" component = { PostRedit } />

        </div>
    </Router>
    );
}


export default App;


