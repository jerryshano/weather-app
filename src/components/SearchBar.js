import { StyledSearchBar } from "../styles/CityIcon.styles";

function SearchBar({ handleSearch, items }) {
  function onInputSearch(event) {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
    }
  }

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
