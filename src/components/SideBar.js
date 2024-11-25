import CityIcon from "./CityIcon";

function SideBar({ weather }) {
  return (
    <div>
      <CityIcon weather={weather} />
    </div>
  );
}

export default SideBar;
