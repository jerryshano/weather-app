import { StyledContent } from "../styles/Content.styles";
import { LgImg } from "../styles/LgImg.styles";
import Grid from "./Grid";

function Content({ weather }) {
  const { temperature } = weather;
  return (
    <StyledContent>
      <LgImg>{temperature}°C</LgImg>
      <Grid />
    </StyledContent>
  );
}

export default Content;
