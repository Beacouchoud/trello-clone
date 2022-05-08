import React from "react";
import "../static/styles/button.css";

export const Button = (props) => {
    return (
        <button className="button-container" onClick="">
            <p className="Button">Add {props.type}</p>
        </button>
    );
};