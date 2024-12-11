import { StyledSearchBar } from "../styles/CityIcon.styles";

function SearchBar({ handleSearch, handleCreate, handleAdd }) {
  function onInputSearch(event) {
    if (event.key === "Enter") {
      handleCreate(true);
      handleSearch(event.target.value);
      handleAdd();
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
