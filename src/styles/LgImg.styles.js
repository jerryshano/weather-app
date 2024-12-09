import styled from "styled-components";

export const StyledLgImg = styled.div`
  border: 1px solid yellow;
  min-height: 250px;
  img {
    height: 50px;
    width: 50px;
  }
`;
export const FlexCont = styled.div`
  display: flex;
  align-items: center;
`;

export const Test = styled.div`
  & p:nth-child(2) {
    margin: 0;
    font-size: 4rem;
    color: #a11692;
    margin-left: 7px;
  }
  & :nth-child(3) {
    margin-left: 7px;
  }
`;
