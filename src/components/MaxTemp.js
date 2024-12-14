import { FlexCont } from "../styles/SmImg.styles";

function MaxTemp({ maxTemp, pictures }) {
  return (
    <FlexCont pictures={pictures}>
      <div>Max Temp</div>
      <div>{maxTemp}°C</div>
    </FlexCont>
  );
}

export default MaxTemp;
