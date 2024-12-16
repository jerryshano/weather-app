import { useState } from "react";
import { StyledSideBar } from "../styles/SideBar.styles";
import CityIcon from "./CityIcon";
import CurrentLoc from "./CurrentLoc";
import SearchBar from "./SearchBar";

function SideBar({ items, weather, handleSearch, search, handleAdd }) {
  const { location, country } = weather;
  const [value, setValue] = useState([]);

  function handleValue(val) {
    setValue(val);
  }
  // console.log(value, typeof value);

  return (
    <StyledSideBar style={{ border: "1px solid purple" }}>
      <CurrentLoc country={country} location={location} />
      <SearchBar
        items={items}
        value={value}
        handleSearch={handleSearch}
        handleValue={handleValue}
      />
      {value.map((item, index) => (
        <CityIcon items={items} key={index} value={value} />
      ))}
    </StyledSideBar>
  );
}

export default SideBar;
