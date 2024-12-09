import { FlexCont } from "../styles/SmImg.styles";

function FeelsLike({ feelsLike }) {
  return (
    <FlexCont>
      <div>Feels Like</div>
      <div>{feelsLike}°C</div>
    </FlexCont>
  );
}

export default FeelsLike;
