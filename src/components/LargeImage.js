import { FlexCont, Test } from "../styles/LgImg.styles";

function LargeImage({ icon, temperature, main, location, pictures }) {
  return (
    <Test>
      <FlexCont>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <div>{main}</div>
      </FlexCont>
      <p>{temperature}°C</p>
      <div>{location}</div>
    </Test>
  );
}

export default LargeImage;
