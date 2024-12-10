import { StyledSearchBar } from "../styles/CityIcon.styles";

function SearchBar({ handleSearch, search }) {
  function onInputSearch(event) {
    if (event.key === "Enter") {
      console.log("hello");
      handleSearch(event.target.value);
    }
  }
  console.log(search);
  return (
    <StyledSearchBar>
      <input
        onKeyDown={onInputSearch}
        type="text"
        placeholder="Search.."
        required
      />
    </StyledSearchBar>
  );
}

export default SearchBar;
