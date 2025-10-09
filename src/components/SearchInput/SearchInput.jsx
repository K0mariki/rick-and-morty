import "./SearchInput.scss";
import Icon from "../Icon";

export default function SearchInput(props) {
  const { searchInput, onChange } = props;

  return (
    <label className="search">
      <Icon className="search__icon" name="search" />
      <input
        type="text"
        className="search__input"
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        onChange={onChange}
        value={searchInput}
      />
    </label>
  );
}
