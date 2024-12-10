import { FlexCont } from "../styles/SmImg.styles";

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = hour + ":" + min;
  return time;
}

function Sunset({ timezone, sunset }) {
  const time = timeConverter(sunset);
  return (
    <FlexCont>
      <div>Sunet</div>
      <div>{time}</div>
    </FlexCont>
  );
}

export default Sunset;
