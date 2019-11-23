import React from "react";
import axios from "axios";

export default function Celsius() {
  return (
    <div className="col-6">
      <ul>
        <li>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            id="icon"
          />
          <span id="sky">Clear sky</span>
        </li>
        <li>
          <span className="temperature" id="temp">
            {25}
          </span>
          <span className="unit">
            {"25"}
            <a id="celsius">°C</a> | <a id="fahrenheit">F</a>
          </span>
        </li>
      </ul>
    </div>
  );
}
