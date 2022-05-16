import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import '../static/styles/board.css';
import { Button } from "./Button";
import { Column } from "./Column";


export const Board = ({ }) => {

    const dispatch = useDispatch();
    const board = useSelector(state => state.board);

    return (
        <div className="board-container">
            <h1>Board Name</h1>
            <div class="flex-container">
                {
                    board.columns.map((columnId, index) => {
                        return <Column columnId={columnId} key={columnId} index={index}></Column>
                    })
                }
                <Button type="column"></Button>
            </div>
        </div>
    );
};