import { StyledSideBar } from "../styles/SideBar.styles";
import CityIcon from "./CityIcon";
import CurrentLoc from "./CurrentLoc";
import SearchBar from "./SearchBar";

function SideBar({ weather, handleSearch, search }) {
  const { location, country } = weather;
  return (
    <StyledSideBar style={{ border: "1px solid purple" }}>
      <CurrentLoc country={country} location={location} />
      <SearchBar handleSearch={handleSearch} search={search} />
      <CityIcon weather={weather} />
    </StyledSideBar>
  );
}

export default SideBar;
