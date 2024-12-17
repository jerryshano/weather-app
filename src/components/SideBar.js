import { useState } from "react";
import { StyledSideBar } from "../styles/SideBar.styles";
import CityIcon from "./CityIcon";
import CurrentLoc from "./CurrentLoc";
import SearchBar from "./SearchBar";

function SideBar({ items, weather, handleSearch, search }) {
  const { location, country } = weather;

  return (
    <StyledSideBar style={{ border: "1px solid purple" }}>
      <CurrentLoc country={country} location={location} />
      <SearchBar items={items} handleSearch={handleSearch} />
      {items.map((item, index) => (
        <CityIcon item={item} key={index} />
      ))}
    </StyledSideBar>
  );
}

export default SideBar;
