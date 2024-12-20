import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function CityView() {
  const [view, setView] = useState([]);
  const {name} = useParams();
  console.log(name)

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${
                name
            }&units=metric&APPID=76d0bcbd868226d9268c69f256948555`
        );
        const data = await response.json();
        if (data) {
          setView({
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
        }
        console.log(data);
      } catch (err) {
        console.log("oooooohh no!", err);
      }
    };

    if (!name)  {
      return
    } else {
      fetchAPI();
    }
  }, [name]); // name ?

  const {desc, icon, location, country, maxTemp} = view;

  return <div>im CityView {desc} {icon} {location} {country} {maxTemp}</div>;
}

export default CityView;
