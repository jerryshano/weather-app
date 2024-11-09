import { StyledHeader } from "../styles/Header.styles";
import logo from "../assests/weather.png";

function Header() {
  return (
    <StyledHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img style={{ height: "50px", width: "50px" }} src={logo} alt="" />
        <span>weather app</span>
      </div>
      <div
        style={{
          flexGrow: "3",
          flexBasis: "70px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        Here you can find an excellent weather app
      </div>
      <div style={{ flexGrow: "3", flexBasis: "70px", margin: "auto" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia
        cupiditate quod, cumque dolorum a veniam praesentium cum rem. Nesciunt?
      </div>
    </StyledHeader>
  );
}

export default Header;
