import { StyledContent } from "../styles/Content.styles";
import { StyledLgImg } from "../styles/LgImg.styles";
import Grid from "./Grid";
import LargeImage from "./LargeImage";

function Content({ weather }) {
  const { temperature, icon } = weather;
  return (
    <StyledContent>
      <StyledLgImg>
        {temperature}°C
        <LargeImage icon={icon} />
      </StyledLgImg>
      <Grid />
    </StyledContent>
  );
}

export default Content;
