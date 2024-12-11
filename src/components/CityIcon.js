import { Link } from "react-router-dom";
import { StyledCityIcon } from "../styles/CityIcon.styles";
function CityIcon({ weather }) {
  const { country, location, temperature } = weather;
  return (
    <Link to="/cityview" style={{ textDecoration: "none", color: "inherit" }}>
      <StyledCityIcon>
        <div>🇮🇨</div>
        <div>
          {country} {location}
        </div>
        <div>{temperature}°C</div>
        <div>→</div>
      </StyledCityIcon>
    </Link>
  );
}

export default CityIcon;
