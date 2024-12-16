import { StyledSearchBar } from "../styles/CityIcon.styles";

function SearchBar({ handleValue, handleSearch, items, value }) {
  function onInputSearch(event) {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
      // console.log(items, typeof items);
      handleValue(items);
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
