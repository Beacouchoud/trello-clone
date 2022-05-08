import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Board } from "./components/Board";

function App(props) {
  return (<Board></Board>);
}

const mapStateToProps = (state) => ({ state: state, hola: 44 });

const mapDispatchToProps = (dispacth) => ({
  addRandomTodo: () =>
    dispacth({
      type: "ADD_TODO",
      payload: "borra esta tarea!",
    }),
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
