import { useState } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    props.handleSearch(event.target.value);
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 p-2 rounded-md w-50"
      />
    </div>
  );
}

export default Search;