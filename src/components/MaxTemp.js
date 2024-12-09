import { FlexCont } from "../styles/SmImg.styles";

function MaxTemp({ maxTemp }) {
  return (
    <FlexCont>
      <div>Max Temp</div>
      <div>{maxTemp}°C</div>
    </FlexCont>
  );
}

export default MaxTemp;
