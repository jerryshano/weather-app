import styled from "styled-components";

export const StyledSmImg = styled.div`
  border: 1px solid darkblue;
  flex-grow: 1;
  & :nth-child(2) {
    font-size: 2rem;
    color: #a11692;
  }
`;

export const FlexCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 15px;
`;
