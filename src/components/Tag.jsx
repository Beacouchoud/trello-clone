import React from "react";
import "../static/styles/tag.css";

export const Tag = (props) => {
    return (
        <div className="tag-container">
            <p className={"tag " + props.color}>{props.text}</p>
        </div>
    );
};