// import { useEffect, useState } from "react";
import { StyledMain } from "../styles/Main.styles";
import Content from "./Content";
import List from "./List";
import SideBar from "./SideBar";

function Main({ items, weather, handleAdd, handleSearch, search, pictures }) {
  return (
    <StyledMain>
      <SideBar
        items={items}
        weather={weather}
        handleAdd={handleAdd}
        handleSearch={handleSearch}
        search={search}
      />
      <Content weather={weather} pictures={pictures} />
      <List weather={weather} />
    </StyledMain>
  );
}

export default Main;
