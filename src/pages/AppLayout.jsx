import Header from "../components/Header";
import Main from "../components/Main";

function AppLayout({ handleSearch, weather, search }) {
  return (
    <>
      <Header />
      <Main handleSearch={handleSearch} weather={weather} search={search} />
    </>
  );
}

export default AppLayout;
