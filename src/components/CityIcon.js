import { Link } from "react-router-dom";
import { StyledCityIcon } from "../styles/CityIcon.styles";

function CityIcon({ items, value }) {
  console.log(value);
  return (
    <Link to="/cityview" style={{ textDecoration: "none", color: "inherit" }}>
      <StyledCityIcon>
        <div>🇮🇨</div>
        <div>
          {value[0]} {value[1]}
        </div>
        <div>{value[2]}°C</div>
        <div>→</div>
      </StyledCityIcon>
    </Link>
  );
}

export default CityIcon;
