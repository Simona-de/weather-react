import React from "react";

export default function Cities() {
  return (
    <div className="Cities">
      <form id="enter-city">
        <input
          type="text"
          placeholder="enter city"
          id="city-input"
          autoComplete="off"
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
