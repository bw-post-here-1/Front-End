/* jshint ignore:start */
import React, {useState} from "react";

const RedditForm = props => {
    
    const [note, setNote] = useState({
        title: "", 
        body: ""
    });
    
    const handleChanges = event => {
        console.log("event", event.target.value); 
        console.log("name", event.target.name); 
        
        setNote({
            ...note,
            [event.target.name]: event.target.value
        });

    };

    console.log("note", note);
    const submitForm = event => {
        console.log("submitting!");
        event.preventDefault(); 
        props.addNewNote(note); 
        setNote({
            title: "",
            body: ""
        }); 
    };
    
    return (<form onSubmit = {
            submitForm
        } > {} <label htmlFor = "title" > Title </label> {} 
        <input type = "text"
        placeholder = {`Enter ${Date.now()}`}
        id = "title"
        name = "title"
        value = {note.title}
        onChange = {handleChanges}
        /> 

         <label htmlFor = "note" > Post Title </label> 
         <textarea id = "note"
        name = "body"
        placeholder = "Content Here"
        value = {
            note.body
        }
        onChange = {
            handleChanges
        }
        />

       <button type = "submit" > Search </button>
           
       
           document.addEventListener('DomContentLoader', () => (
           document.getElementById('btn').addEventListener('click', addNewNote)
           ));
        </form>
    );
};

export default RedditForm;
