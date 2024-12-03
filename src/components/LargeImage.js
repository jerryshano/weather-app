function LargeImage({ icon, temperature, main, location }) {
  return (
    <>
      <div>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <div>{main}</div>
      </div>
      <div>{temperature}°C</div>
      <div>{location}</div>
    </>
  );
}

export default LargeImage;
