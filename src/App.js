import React from "react";
import "./styles/App.css";
import SelectRoom from "./components/SelectRoom";
import RoomList from "./components/RoomList";

function App() {
  return (
    <div className="app">
      <div className="inner-border">
        <SelectRoom />
        <RoomList />
      </div>
    </div>
  );
}

export default App;

/*
TODO add later
<a
	className="icon-source-link"
	href="https://icons8.com/icon/7546/bedroom"
>
	Bedroom icon by Icons8
</a>*/
