import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleTemp(Response) {
    alert(
      `temperature in ${props.city} is ${Math.round(Response.data.main.temp)}`
    );
  }
  let apiKey = "71f687cf35794567462cfbc034ffcc9d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleTemp);
  return "hello";
}
