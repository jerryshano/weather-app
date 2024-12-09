import { StyledContent } from "../styles/Content.styles";
import { StyledLgImg } from "../styles/LgImg.styles";
import Grid from "./Grid";
import LargeImage from "./LargeImage";

function Content({ weather }) {
  const {
    timezone,
    maxTemp,
    minTemp,
    temperature,
    icon,
    main,
    location,
    feelsLike,
    sunset,
  } = weather;
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
      <Grid
        sunset={sunset}
        timezone={timezone}
        feelsLike={feelsLike}
        minTemp={minTemp}
        maxTemp={maxTemp}
      />
    </StyledContent>
  );
}

export default Content;
