import { StyledList } from "../styles/List.styles";
import { StyledListItem } from "../styles/ListItem.styles";

function List({ weather }) {
  const { windSpeed, desc, feelsLike, clouds, humidity } = weather;

  return (
    <StyledList>
      <StyledListItem>
        <div>🌧</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Rain</div>
          <div>{feelsLike}mm</div>
        </div>
        <p>{desc}</p>
      </StyledListItem>
      <StyledListItem>
        <div>🌬</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Wind</div>
          <div>{windSpeed}km/h</div>
        </div>
        <p>{desc}</p>
      </StyledListItem>
      <StyledListItem>
        <div>☁️</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Cloudy</div>
          <div>{clouds}%</div>
        </div>
        <p>{desc}</p>
      </StyledListItem>
      <StyledListItem>
        <div>💧</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Humidity</div>
          <div>{humidity}%</div>
        </div>
        <p>{desc}</p>
      </StyledListItem>
    </StyledList>
  );
}

export default List;
