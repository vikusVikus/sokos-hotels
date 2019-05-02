import React from "react";
import "./styles/App.css";
import Room from "./components/Room";

function App() {
  return (
    <div className="app">
      <div className="inner-border">
        <Room />
      </div>
    </div>
  );
}

export default App;
