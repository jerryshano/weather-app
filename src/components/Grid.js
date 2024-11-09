import { StyledGrid } from "../styles/Grid.styles";
import { StyledSmImg } from "../styles/SmImg.styles";

function Grid() {
  return (
    <StyledGrid>
      <StyledSmImg>top l</StyledSmImg>
      <StyledSmImg>bottom right</StyledSmImg>
      <StyledSmImg>f</StyledSmImg>
      <StyledSmImg>sm</StyledSmImg>
    </StyledGrid>
  );
}

export default Grid;
