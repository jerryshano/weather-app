import { FlexCont } from "../styles/SmImg.styles";

function MinTemp({ minTemp, pictures }) {
  return (
    <FlexCont pictures={pictures}>
      <div>Min Temp</div>
      <div>{minTemp}°C</div>
    </FlexCont>
  );
}

export default MinTemp;
