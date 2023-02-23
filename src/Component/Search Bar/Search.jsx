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
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
    </div>
  );
}

export default Search;
