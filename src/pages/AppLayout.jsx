import Header from "../components/Header";
import Main from "../components/Main";

function AppLayout({
  items,
  handleAdd,
  handleSearch,
  weather,
  search,
  pictures,
}) {
  return (
    <>
      {/*<Header />*/}
      <Main
        items={items}
        pictures={pictures}
        handleAdd={handleAdd}
        handleSearch={handleSearch}
        weather={weather}
        search={search}
      />
    </>
  );
}

export default AppLayout;
