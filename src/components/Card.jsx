import React from "react";
import "../static/styles/card.css";
import { Button } from "./Button";
import { Tag } from "./Tag";

export const Card = (props) => {
    return (
        <div className="card-container">
            <p className="card-title">{props.title}</p>
            <p className="card-description">{props.description}</p>
            {props.tag && <Tag text={props.tag} color={props.color}></Tag>}
        </div>
    );
};