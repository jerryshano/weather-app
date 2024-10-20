import styled from "styled-components";

const FlexHeader = styled.div`
  display: flex;
  border: 2px solid darkgreen;
  height: 100px;
`;
const FlexMain = styled.div`
  display: flex;
  min-height: calc(100vh - 100px);
`;
const FlexSideBar = styled.div`
  border: 1px solid purple;
  display: flex;
  flex-grow: 1;
`;
const FlexContent = styled.div`
  border: 1px solid darkblue;
  display: flex;
  flex-grow: 4;
`;
const FlexList = styled.div`
  border: 1px solid darkblue;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;
const ListItem = styled.div`
  border: 1px solid darkblue;
  flex-grow: 1;
`;
function AppLayout() {
  return (
    <>
      <FlexHeader>
        <span>header</span>
      </FlexHeader>
      <FlexMain>
        <FlexSideBar>
          <span>sidebar</span>
        </FlexSideBar>
        <FlexContent>
          <span>content area</span>
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
