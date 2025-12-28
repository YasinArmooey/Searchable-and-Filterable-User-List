import { useEffect, useState } from "react";
import UsersContext from "./UsersContext";
import { fetchData } from "../Services/api/ApiConfig";

const UsersProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false))
  }, []);

  return (
    <UsersContext.Provider value={{ data, loading, error }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
