import { useState } from "react";
import { StyledSideBar } from "../styles/SideBar.styles";
import CityIcon from "./CityIcon";
import CurrentLoc from "./CurrentLoc";
import SearchBar from "./SearchBar";

function SideBar({ weather, handleSearch, search }) {
  const { location, country } = weather;
  const [create, setCreate] = useState(false);
  const [items, setItems] = useState([]);

  const handleCreate = (value) => {
    setCreate(value);
  };

  const handleAdd = () => {
    if (create) {
      setItems([...items, <CityIcon weather={weather} />]);
      console.log(items);
    }
  };

  return (
    <StyledSideBar style={{ border: "1px solid purple" }}>
      <CurrentLoc country={country} location={location} />
      <SearchBar
        handleAdd={handleAdd}
        handleSearch={handleSearch}
        handleCreate={handleCreate}
      />
      {create &&
        items.map((item, index) => <CityIcon weather={weather} key={index} />)}
    </StyledSideBar>
  );
}

export default SideBar;
