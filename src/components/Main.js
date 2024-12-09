import { useEffect, useState } from "react";
import { StyledMain } from "../styles/Main.styles";
import { StyledSideBar } from "../styles/SideBar.styles";
import Content from "./Content";
import List from "./List";
import SideBar from "./SideBar";

function Main() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?zip=94088,us&units=metric&APPID=76d0bcbd868226d9268c69f256948555`
        );
        const data = await response.json();
        if (data)
          setWeather({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            country: data.sys.country,
            visibility: data.visibility,
            clouds: data.clouds.all,
            feelsLike: data.main.feels_like,
            maxTemp: data.main.temp_max,
            minTemp: data.main.temp_min,
            sunset: data.sys.sunset,
            timezone: data.timezone,
            desc: data.weather[0].description,
            icon: data.weather[0].icon,
            main: data.weather[0].main,
          });
        console.log(data);
      } catch (err) {
        console.log("oooooohh no!", err);
      }
    };
    fetchAPI();
  }, []);

  console.log(weather);

  return (
    <StyledMain>
      <StyledSideBar>
        <SideBar weather={weather} />
      </StyledSideBar>
      <Content weather={weather} />
      <List weather={weather} />
    </StyledMain>
  );
}

export default Main;
