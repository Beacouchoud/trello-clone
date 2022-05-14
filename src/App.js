import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Board } from "./components/Board";

function App(props) {
  return (<Board></Board>);
}

const mapStateToProps = (state) => ({ state: state, hola: 44 });

const mapDispatchToProps = (dispacth) => ({});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
