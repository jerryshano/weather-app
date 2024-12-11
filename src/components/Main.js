import { StyledMain } from "../styles/Main.styles";
import Content from "./Content";
import List from "./List";
import SideBar from "./SideBar";

function Main({ weather, handleSearch, search }) {
  return (
    <StyledMain>
      <SideBar weather={weather} handleSearch={handleSearch} search={search} />
      <Content weather={weather} />
      <List weather={weather} />
    </StyledMain>
  );
}

export default Main;
