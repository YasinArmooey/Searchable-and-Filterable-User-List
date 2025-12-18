import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Button, Input } from "../../Ui";
import useSearchUsers from "../../../Hooks/useSearch";

const SearchBar = () => {
  const { query, setQuery, filteredData, loading } = useSearchUsers();

  return (
    <div className="w-full relative">
      <div className="w-full flex items-center gap-2 bg-[#e6e6e6] rounded-2xl">
        <Button className="px-3 py-3 rounded-full m-2" disabled>
          <IoSearch />
        </Button>

        <Input
          placeholder="Search by city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <Button
            className="m-2 rounded-md p-1"
            onClick={() => setQuery("")}
          >
            <IoMdClose />
          </Button>
        )}
      </div>

      {query && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl z-10 max-h-60 overflow-y-auto">
          {loading && (
            <div className="p-3 text-center text-sm">Loading...</div>
          )}

          {!loading && filteredData.length === 0 && (
            <div className="p-3 text-center text-sm">No results</div>
          )}

          {filteredData.map((item) => (
            <div
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
