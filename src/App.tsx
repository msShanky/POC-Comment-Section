import React from "react";
import logo from "./logo.svg";
import { Reset } from "styled-reset";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </>
  );
};

export default App;
