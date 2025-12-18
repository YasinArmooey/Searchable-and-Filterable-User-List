import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Button , Input } from "../../Ui";
// import Lists from "../ui/Lists";

const SearchBar = () => {
  return (
    <div className="w-full relative">
      <div className="w-full flex items-center gap-2 bg-[#e6e6e6] rounded-2xl">
        <Button className="px-3 py-3 rounded-full m-2 cursor-pointer">
          <IoSearch />
        </Button>

        <Input placeholder="Search..." />

        <Button className="m-2 rounded-md p-1">
          <IoMdClose />
        </Button>
      </div>

      <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl z-10">
        {/* <Lists /> */}
      </div>
    </div>
  );
};

export default SearchBar;
