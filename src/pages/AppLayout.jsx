import { FlexHeader } from "../styles/FlexHeader.styles";
import { FlexMain } from "../styles/FlexMain.styles";
import { FlexSideBar } from "../styles/FlexSideBar.styles";
import { FlexContent } from "../styles/FlexContent.styles";
import { FlexList } from "../styles/FlexList.styles";
import { ListItem } from "../styles/ListItem.styles";
import { LgImgDiv } from "../styles/LgImgDiv.styles";
import { SmImgContainer } from "../styles/SmImgContainer.styles";
import { SmImgDiv } from "../styles/SmImgDiv.styles";
import logo from "../assests/weather.png";

function AppLayout() {
  return (
    <>
      <FlexHeader>
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
          cupiditate quod, cumque dolorum a veniam praesentium cum rem.
          Nesciunt?
        </div>
      </FlexHeader>
      <FlexMain>
        <FlexSideBar>
          <span>sidebar</span>
        </FlexSideBar>
        <FlexContent>
          <LgImgDiv>lg</LgImgDiv>
          <SmImgContainer>
            <SmImgDiv>top l</SmImgDiv>
            <SmImgDiv>bottom right</SmImgDiv>
            <SmImgDiv>f</SmImgDiv>
            <SmImgDiv>sm</SmImgDiv>
          </SmImgContainer>
        </FlexContent>
        <FlexList>
          <ListItem>list item</ListItem>
          <ListItem>list item</ListItem>
          <ListItem>list item</ListItem>
          <ListItem>list item</ListItem>
        </FlexList>
      </FlexMain>
    </>
  );
}

export default AppLayout;
