import { Link } from "react-router-dom";
import { StyledCityIcon } from "../styles/CityIcon.styles";

function CityIcon({ item }) {
  return (
    <Link to="/cityview" style={{ textDecoration: "none", color: "inherit" }}>
      <StyledCityIcon>
        <div>🇮🇨</div>
        <div>
          {item[0]} {item[1]}
        </div>
        <div>{item[2]}°C</div>
        <div>→</div>
      </StyledCityIcon>
    </Link>
  );
}

export default CityIcon;
