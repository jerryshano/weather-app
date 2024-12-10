import styled from "styled-components";

export const StyledCityIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & div:first-child {
    padding: 10px;
    background-color: grey;
    border-radius: 5px;
  }
`;

export const StyledCurrLoc = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  & div:first-child {
    padding: 10px;
    background-color: grey;
    border-radius: 5px;
  }
  p {
    margin: 0;
    font-size: 10px;
  }
`;

export const StyledSearchBar = styled.div`
  input {
    background-color: #54513d;
    border-radius: 5px;
    outline: 0;
    width: 92%;
    padding: 10px;
    border: none;
    font-size: 17px;
  }
`;
