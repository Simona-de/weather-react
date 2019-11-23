import React from "react";

export default function Header() {
  return (
    <div className="col-6">
      <ul className="details">
        <li>
          Humidity <span id="Humidity" />%
        </li>
        <li>
          Wind <span id="Wind" />
          km/h
        </li>
      </ul>
    </div>
  );
}
