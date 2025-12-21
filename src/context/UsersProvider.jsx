import { useEffect, useState } from "react";
import fetchData from "../Services/api/Api";
import UsersContext from "./UsersContext";

const UsersProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await fetchData();
        setData(response.data);
      } catch (err) {
        setError({
          uiMessage: err.response
            ? "We’re having trouble reaching the server. Please try again later."
            : "No internet connection. Please check your connection and try again.",
          status: err.response?.status,
          devMessage: err,
        });
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ data, loading, error }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
