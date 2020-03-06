import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostRedit = props => {
  const [ redit, setRedit] = useState({
    id: Date.now(),
    title: "", 
    body: "" 
  });

  

  const handleChange = e => {
    setRedit({ ...redit, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = e => {
    e.preventDefault();
      setRedit({ ...redit});
      axios
        .post(" api ", redit)
        .then(res => {
          setRedit(redit);
          props.history.push("/");
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }
  
 return (
    <div className="redit">
      <form onSubmit={ handleSubmit }>
        <h1>
            <label htmlFor = "title" > Title </label>
            <input
              type="text"
              name="title"
              id = "title"
              value={ redit.title } 
              placeholder="Title"
              onChange={ handleChange }
            />
         
        </h1>
        <p>

        <label htmlFor = "info" > Post Title </label>   
        <textarea 
        id = "info"
        name = "body"
        placeholder = ""
        value = {redit.body}
        onChange = {handleChange}
        />
          
        </p>
     
        <button type="submit">
          Post-Redit
        </button>
      </form>
    </div>
  )
};

export default PostRedit;