import { StyledGrid } from "../styles/Grid.styles";
import { StyledSmImg } from "../styles/SmImg.styles";
import FeelsLike from "./FeelsLike";
import MaxTemp from "./MaxTemp";
import MinTemp from "./MinTemp";
import Sunset from "./Sunset";

function Grid({ sunset, feelsLike, maxTemp, minTemp, timezone }) {
  return (
    <StyledGrid>
      <StyledSmImg>
        <FeelsLike feelsLike={feelsLike} />
      </StyledSmImg>
      <StyledSmImg>
        <MaxTemp minTemp={minTemp} maxTemp={maxTemp} />
      </StyledSmImg>
      <StyledSmImg>
        <MinTemp minTemp={minTemp} />
      </StyledSmImg>
      <StyledSmImg>
        <Sunset timezone={timezone} sunset={sunset} />
      </StyledSmImg>
    </StyledGrid>
  );
}

export default Grid;
