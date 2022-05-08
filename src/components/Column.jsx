import React from "react";
import "../static/styles/column.css"
import { Button } from "./Button";
import { Card } from "./Card";

export const Column = ({ }) => {
    return (
        <div className="column-container">
            <p className="column-name">Column name</p>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Button type="card"></Button>
        </div>
    );
};