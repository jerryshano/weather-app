import { FlexCont } from "../styles/SmImg.styles";

function MinTemp({ minTemp }) {
  return (
    <FlexCont>
      <div>Min Temp</div>
      <div>{minTemp}°C</div>
    </FlexCont>
  );
}

export default MinTemp;
