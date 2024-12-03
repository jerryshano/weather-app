import { StyledContent } from "../styles/Content.styles";
import { StyledLgImg } from "../styles/LgImg.styles";
import Grid from "./Grid";
import LargeImage from "./LargeImage";

function Content({ weather }) {
  const { temperature, icon, main, location } = weather;
  return (
    <StyledContent>
      <StyledLgImg>
        <LargeImage
          icon={icon}
          temperature={temperature}
          location={location}
          main={main}
        />
      </StyledLgImg>
      <Grid />
    </StyledContent>
  );
}

export default Content;
