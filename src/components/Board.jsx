import React from "react";
import '../static/styles/board.css';
import { Button } from "./Button";
import { Column } from "./Column";

export const Board = ({ }) => {
    return (
        <div className="board-container">
            <h1>Board Name</h1>
            <div class="flex-container">
                <Column></Column>
                <Column></Column>
                <Column></Column>
                <Column></Column>
                <Column></Column>
                <Button type="column"></Button>
            </div>
        </div>
    );
};