/* jshint ignore:start */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

const HomePage = props => {
    
    const [note, setNote] = useState();
    
    useEffect(() => {
        axios
            .get("https://post-here-subreddit-predictor.herokuapp.com/api/posts")
            .then(res => {
                console.log("Notes ", res);
                setNote(res);
            })
            .catch(err => console.log(err));
    }, []); 

    
    return ( 
        <div>
            {note.map(x => (
                <h1>{x}</h1>
            ))}
        </div>
    );
};

export default HomePage;
