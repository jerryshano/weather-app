import { StyledContent } from "../styles/Content.styles";
import { StyledLgImg } from "../styles/LgImg.styles";
import Grid from "./Grid";
import LargeImage from "./LargeImage";

function Content({ weather, pictures }) {
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

  const { results } = pictures;
  const les = results[1].urls.small;
  return (
    <StyledContent>
      <StyledLgImg les={les}>
        <LargeImage
          icon={icon}
          temperature={temperature}
          location={location}
          main={main}
        />
      </StyledLgImg>
      <Grid
        pictures={pictures}
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
