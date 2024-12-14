import { StyledGrid } from "../styles/Grid.styles";
import { StyledSmImg } from "../styles/SmImg.styles";
import FeelsLike from "./FeelsLike";
import MaxTemp from "./MaxTemp";
import MinTemp from "./MinTemp";
import Sunset from "./Sunset";

function Grid({ pictures, sunset, feelsLike, maxTemp, minTemp, timezone }) {
  return (
    <StyledGrid>
      <StyledSmImg pictures={pictures}>
        <FeelsLike feelsLike={feelsLike} />
      </StyledSmImg>
      <StyledSmImg pictures={pictures}>
        <MaxTemp maxTemp={maxTemp} />
      </StyledSmImg>
      <StyledSmImg pictures={pictures}>
        <MinTemp minTemp={minTemp} />
      </StyledSmImg>
      <StyledSmImg pictures={pictures}>
        <Sunset timezone={timezone} sunset={sunset} />
      </StyledSmImg>
    </StyledGrid>
  );
}

export default Grid;
