import React from "react";
import Temperature from "./Temperature";
import Cities from "./Cities";
import CurrentLoc from "./CurrentLoc";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="weather-html">
        <h1 id="city"> Tokyo</h1>
        <p id="date">Monday 16:00</p>
        <Cities />
        <CurrentLoc />
        <Temperature />
        <br />
        <br />
        <br />
        <div class="row weather-forecast" id="forecast" />
        <small>
          <a href="https://github.com/Simona-de/weather-react" target="blank">
            {" "}
            Oper source code
          </a>{" "}
          by Simona Delogu
        </small>
      </div>
    </div>
  );
}

export default App;
