import { StyledCurrLoc } from "../styles/CityIcon.styles";

function CurrentLoc({ country, location }) {
  return (
    <StyledCurrLoc>
      <div>🇮🇨</div>
      <div>
        <p>CURRENT LOCATION</p>
        <div>
          {country} {location}
        </div>
      </div>
    </StyledCurrLoc>
  );
}

export default CurrentLoc;
