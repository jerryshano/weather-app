import { FlexCont } from "../styles/SmImg.styles";

function FeelsLike({ feelsLike, pictures }) {
  return (
    <FlexCont pictures={pictures}>
      <div>Feels Like</div>
      <div>{feelsLike}°C</div>
    </FlexCont>
  );
}

export default FeelsLike;
