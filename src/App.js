/* jshint ignore:start */
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import ReactDOM from "react-dom";
import UpdateRedit from "./components/UpdateRedit";
import PostRedit from "./components/PostRedit";


// import Notes from "./components/Notes";
// import NoteForm from "./components/NoteForm";
// import data from "./data";

import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "../src/Styles.scss";

function App() {
    
    return ( 
    <Router>
        <div className = "App" >

            <Route exact path="/" component={Login} />
            <Route path = "/" component = { UpdateRedit } />
            <Route path = "/" component = { PostRedit } />

        </div>
    </Router>
    );
}


export default App;


