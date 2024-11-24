import { StyledMain } from "../styles/Main.styles";
import { StyledSideBar } from "../styles/SideBar.styles";
import Content from "./Content";
import List from "./List";
import SideBar from "./SideBar";

function Main() {
  return (
    <StyledMain>
      <StyledSideBar>
        <SideBar />
        <SideBar />
      </StyledSideBar>
      <Content />
      <List />
    </StyledMain>
  );
}

export default Main;
