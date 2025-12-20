import { useRef, useMemo } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Button, DropDown } from "../../Ui";

import useClickOutside from "../../../Hooks/useClickOutSide";
import useOpen from "../../../Hooks/useOpen";
import { useUsers } from "../../../context/UsersContext";
import useFilter from "../../../Hooks/useFilter";

const LocationFilter = () => {
  const { selectedCity, setSelectedCity } = useFilter();
  const { open, setOpen, toggle } = useOpen();

  const containerRef = useRef(null);

  useClickOutside(containerRef, () => {
    if (open) setOpen(false);
  });

  const { data = [] } = useUsers();

  const cities = useMemo(() => {
    return [
      ...new Set(
        data
          .map((user) => user.address?.city)
          .filter(Boolean)
      ),
    ];
  }, [data]);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setOpen(false);
  };

  const handleClearCity = (e) => {
    e.stopPropagation();
    setSelectedCity("");
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <Button
        className="flex items-center justify-between px-4 py-3 rounded-2xl w-full"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="font-semibold">
          {selectedCity || "Find By Location"}
        </span>

        {open ? <FaAngleUp /> : <FaAngleDown />}

        {selectedCity && (
          <span
            onClick={handleClearCity}
            className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <IoMdClose />
          </span>
        )}
      </Button>

      {open && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-lg
          rounded-2xl z-10 max-h-[60vh] overflow-y-auto"
        >
          <DropDown role="listbox">
            {cities.length === 0 && (
              <li className="px-3 py-2 text-gray-400 cursor-default">
                No locations found
              </li>
            )}

            {cities.map((city) => (
              <li
                key={city}
                role="option"
                tabIndex={0}
                onClick={() => handleSelectCity(city)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSelectCity(city);
                }}
                className="px-3 py-2 m-3 cursor-pointer hover:bg-[#f5f5f5] rounded-md"
              >
                {city}
              </li>
            ))}
          </DropDown>
        </div>
      )}
    </div>
  );
};

export default LocationFilter;
