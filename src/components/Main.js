import { useEffect, useState } from "react";
import { StyledMain } from "../styles/Main.styles";
import Content from "./Content";
import List from "./List";
import SideBar from "./SideBar";

function Main({ weather, handleSearch, search }) {
  const [pictures, setPictures] = useState([]);

  const { main } = weather;
  console.log(main);

  useEffect(() => {
    const fetchPics = async (main) => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?query=${main}&page=1&client_id=jtZrDriaHzgfjU77JCp_FSg0Xtqu65JUMeSTx49KiIQ`
        );
        const data = await response.json();
        if (data) {
          setPictures(data);
        }
      } catch (err) {
        console.log("unsplash error jj");
      }
    };
    fetchPics(main);
  }, [main]);

  return (
    <StyledMain>
      <SideBar weather={weather} handleSearch={handleSearch} search={search} />
      <Content weather={weather} pictures={pictures} />
      <List weather={weather} />
    </StyledMain>
  );
}

export default Main;
