import LocationSearch from "../common/Search/LocationFilter";
import useSearch from "../../Hooks/useSearch";
import { Button, Input, ResultsList } from "../Ui";
import { useUsers } from "../../context/UsersContext";
import Loading from "../Loading/Loading";
import { IoMdClose } from "react-icons/io";

  const SearchModalPanel = ({ closeModal }) => {
    const { data, loading } = useUsers();
    const { query, setQuery, search } = useSearch();
    const filterBySearch = data ? search(data) : [];


    return (
      <div
        className="fixed inset-0 flex items-center justify-center
        bg-black/30 z-50 backdrop-blur-sm shadow-lg"
      >
        {/* Container */}
        <div
          className="bg-white rounded-lg shadow-lg w-full max-w-3xl h-screen
          max-h-[90vh] overflow-y-hidden overflow-x-hidden flex flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <header className="w-full shadow-sm px-3 py-3">
            <div className="flex justify-between items-center">
              {/* search engine */}
              <div
                className="w-1/2 bg-[#f5f5f5] flex items-center justify-between
                gap-2 rounded-2xl px-2"
              >
                <Input
                  placeholder={"Search Users..."}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={"w-full"}
                />
                {/* Clear Search Filters */}
                {query && (
                  <Button
                    className={" rounded-2xl p-1"}
                    onClick={() => setQuery("")}
                  >
                    <IoMdClose />
                  </Button>
                )}
              </div>
              {/* Buttons*/}

              {/* location filter */}
              <div className=" flex items-center justify-between gap-5">
                <LocationSearch />
                {/* Close Modal */}
                <div className="">
                  <Button
                    onClick={() => closeModal(false)}
                    className={
                      " items-center justify-center p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity"
                    }
                  >
                    <IoMdClose />
                  </Button>
                </div>
              </div>
            </div>
          </header>
          {/* Modal Body */}
          {query && (
            <div className="flex-1 overflow-y-hidden overflow-x-hidden px-5">
              {loading && <Loading />}

              {!loading && filterBySearch.length === 0 && (
                <div className="p-3 text-center">No results</div>
              )}

              {!loading && filterBySearch.length > 0 && (
                <ResultsList data={filterBySearch} />
              )}
            </div>
          )}

          {/* Modal Footer */}
          <div className="bg-white mt-auto">
            <footer className="w-full flex items-center justify-center shadow-sm px-5 py-3">
              {/* pagination */}
              pagination
            </footer>
          </div>
      </div>
    </div>
  );
};

export default SearchModalPanel;
