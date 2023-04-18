import { useState } from "react";
import "./search.scss";
import { Link } from "react-router-dom";

const Search = ({ search }) => {
  const [searchString, setSearchString] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (searchString.length && searchString.trim()) {
      search(searchString);
    }
    setSearchString("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <Link className="link">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchString}
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
        />
      </Link>

      <button className="submit-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
