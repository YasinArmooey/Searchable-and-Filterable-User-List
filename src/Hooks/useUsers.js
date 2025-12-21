import { useContext } from "react";
import { UsersContext } from "../context";

const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("WE HAVE PROBLEM IN CONTEXT AREA!");
  }
  return context;
};

export default useUsers;
