import Header from "../components/Header";
import Main from "../components/Main";

function AppLayout({ handleSearch, weather, search, pictures }) {
  return (
    <>
      <Header />
      <Main
        pictures={pictures}
        handleSearch={handleSearch}
        weather={weather}
        search={search}
      />
    </>
  );
}

export default AppLayout;
