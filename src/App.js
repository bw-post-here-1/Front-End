import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import ReactDOM from "react-dom";
// import Notes from "./components/Notes";
// import NoteForm from "./components/NoteForm";
// import data from "./data";

import PostContext from "./contexts/PostContext";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "../src/Styles.scss";
import CreateAccount from "./components/CreateAccount";

function App() {
    
    return ( 
    <Router>
        <div className = "App" >
            <nav>
                {/* <NavLink t>Home</NavLink> */}
            </nav>

            <Route exact path="/" component={Login} />
            <Route exact path="/new-user" component={CreateAccount} />

        </div>
    </Router>
    );
}


export default App;


