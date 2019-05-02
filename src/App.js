import React from "react";
import "./styles/App.css";
import RoomList from "./components/RoomList";

function App() {
  return (
    <div className="app">
      <div className="inner-border">
        <RoomList />
      </div>
    </div>
  );
}

export default App;
