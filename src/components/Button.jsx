import React from "react";
import "../static/styles/button.css";

export const Button = ({type}) => {
    return (
        <button className="button-container" onClick={()=>{}}>
            <p className="Button">Add {type}</p>
        </button>
    );
};