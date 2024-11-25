import { Link } from "react-router-dom";
import { StyledCityIcon } from "../styles/CityIcon.styles";
function CityIcon({ weather }) {
  return (
    <Link to="/cityview" style={{ textDecoration: "none", color: "inherit" }}>
      <StyledCityIcon>
        <div>🇮🇨</div>
        <div>
          {weather.country} {weather.location}
        </div>
        <div>{weather.temperature}°C</div>
        <div>→</div>
      </StyledCityIcon>
    </Link>
  );
}

export default CityIcon;
