import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <button onClick={() => props.addRandomTodo()}>Add todo</button>
    </div>
  );
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
