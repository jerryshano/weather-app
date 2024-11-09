import { StyledMain } from "../styles/Main.styles";
import { StyledSideBar } from "../styles/SideBar.styles";
import Content from "./Content";
import List from "./List";

function Main() {
  return (
    <StyledMain>
      <StyledSideBar>
        <span>sidebar</span>
      </StyledSideBar>
      <Content />
      <List />
    </StyledMain>
  );
}

export default Main;
