import fetchData from "../Services/api/Api";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const UsersContext = createContext();

export const UserProvider = ({ Children }) => {
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
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ data, loading, error }}>
      {Children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("WE HAVE A PROBLEM WITH UsersContext");
  }
  return context;
};
