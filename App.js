/* jshint ignore:start */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import data from "./data";
import "./styles.scss";

function App() {
    
    const [notes, setNotes] = useState([{
        
        id: 1,
        title: "Welcome Reddit User",
        body: " Text Will save and appear here with SubReddit suggestions below"
    }]);

    
    const addNewNote = note => {
        const newNote = {
            id: Date.now(),
            title: note.title,
            body: note.body
        };

        setNotes([...notes, newNote]);
    };
    return ( 
    <div className = "App" >
        <Route exact path="/" component={Login} />
        <h1> Reddit Post  </h1> 

        <NoteForm addNewNote = {
        addNewNote}
        /> 
        <Notes 
        notes = {notes}
        />  
    </div>
    );
}


export default App;


