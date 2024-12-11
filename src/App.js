import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import GlobalStyles from "./styles/Globalstyles";
import CityView from "./components/CityView";

function App() {
  // const [pictures, setPictures] = useState([]);

  // const fetchPics = async (weather) => {
  //   try {
  //     const response = await fetch(
  //       `https://api.unsplash.com/search/photos/?query=${weather}&page=1&client_id=jtZrDriaHzgfjU77JCp_FSg0Xtqu65JUMeSTx49KiIQ`
  //     );
  //     const data = await response.json();
  //     if (data) {
  //       setPictures(data);
  //     }
  //   } catch (err) {
  //     console.log("unsplash error jj");
  //   }
  // };
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            search ? search : "London"
          }&units=metric&APPID=76d0bcbd868226d9268c69f256948555`
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
  }, [search]);

  console.log(weather);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route
          index
          element={
            <AppLayout
              search={search}
              handleSearch={handleSearch}
              weather={weather}
            />
          }
        ></Route>
        <Route
          path="cityview"
          element={<CityView weather={weather} />}
          weather={weather}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
