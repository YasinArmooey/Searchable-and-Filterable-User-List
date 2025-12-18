import SearchBar from "./SearchBar";
import LocationFilter from "./LocationFilter";

const Search = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center gap-3 p-2">
        <SearchBar />
        <LocationFilter />
      </div>
    </div>
  );
};

export default Search;
