import React from "react";
// import useUsers from "../../Hooks/useUsers";


const Lists = () => {
  // const { data  } = useUsers();

  return (
  <div className="bg-white rounded-lg shadow-md max-w-sm mx-auto">
  <ul className="space-y-3 p-4 overflow-y-auto h-60">
    {/* {data.map((user) => (
      <>
     
      <li
        key={user.id}
        className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
      >
        {user.address.city}
      </li>
      </>
    ))} */}
  </ul>
</div>


  );
};

export default Lists;
