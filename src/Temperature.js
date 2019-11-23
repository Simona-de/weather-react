import React, { useState } from "react";
import axios from "axios";
import Celsius from "./Celsius";
import HumidityWind from "./HumidityWind";

export default function Temperature(probs) {
  const [weather, setWeather] = useState({});

  function ShowTemperature(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }
  let apiKey = "71f687cf35794567462cfbc034ffcc9d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${probs.city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(ShowTemperature);

  https: return (
    <div className="row">
      <Celsius />
      <HumidityWind />
    </div>
  );
}
