import { useState , useRef } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import {Button , Lists } from '../../Ui'
import useClickOutside from "../../../Hooks/useClickOutSide";
const LocationFilter = () => {
  const [open, setOpen] = useState(false);

 const containerRef = useRef(null);

  useClickOutside(containerRef, () => setOpen(false));
  return (
    <div ref={containerRef} className="w-full relative">
      <Button
        className="w-full flex items-center justify-between px-4 py-3 rounded-2xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="font-semibold">Find By Location</span>
        {open ? <FaAngleUp /> : <FaAngleDown />}
      </Button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl z-10">
          <Lists />
        </div>
      )}
    </div>
  );
};

export default LocationFilter;
