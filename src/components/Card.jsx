import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../static/styles/card.css";
import { Button } from "./Button";
import { Tag } from "./Tag";

export const Card = ({cardId}) => {

    const dispatch = useDispatch();
    const card = useSelector((state) => state.card[cardId]);

    return (
        <div className="card-container">
            <p className="card-description">{card.text}</p>
        </div>
    );
};