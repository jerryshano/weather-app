function LargeImage({ icon }) {
  return (
    <>
      <div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
          />
        </div>
        <div>test</div>
      </div>
    </>
  );
}

export default LargeImage;
