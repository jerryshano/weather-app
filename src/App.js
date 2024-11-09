// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import GlobalStyles from "./styles/Globalstyles";

function App() {
  // const [pictures, setPictures] = useState([]);
  // const [weather, setWeather] = useState([]);

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

  // let fetchAPI = async (locParam) => {
  //   try {
  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${locParam}&APPID=76d0bcbd868226d9268c69f256948555`
  //     );
  //     const data = await response.json();
  //     if (data)
  //       setWeather({
  //         humidity: data.main.humidity,
  //         windSpeed: data.wind.speed,
  //         temperature: Math.floor(data.main.temp),
  //         location: data.name,
  //         country: data.sys.country,
  //         visibility: data.visibility,
  //         clouds: data.clouds.all,
  //         weather: data.weather[0].main,
  //       });
  //     console.log(data);
  //   } catch (err) {
  //     console.log("oooooohh no!");
  //   }
  // };
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
