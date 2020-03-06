import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateRedit = props => {
  const [ update, setUpdate ] = useState({
    id: "",
    title: "",
    body: "",
  });

  const { id } = useParams();

  const handleChange = e => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = e => {
    e.preventDefault();
    
      axios
        .put(` api /${id}`, update)
        .then(res => {
          props.history.push("/");
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }
  

  useEffect(() => {
    axios
      .get(` api /${id}`)
      .then(res => {
          console.log(res.data);
          // updating to the new updated list. Filling the form with existing data.
          setUpdate(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="updateRedit">
      <form onSubmit={handleSubmit}>
        <h1>
          
            <input
              type="text"
              name="title"
              value={update.title}
              placeholder="Title"
              onChange={handleChange}
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
          UpdateRedit
        </button>
      </form>
    </div>
  )
};

export default UpdateRedit;