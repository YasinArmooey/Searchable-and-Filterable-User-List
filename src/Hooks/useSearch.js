import { useMemo, useState } from "react";
import useUsers from "./useUsers";

const useSearchUsers = () => {
  const { data, loading, error } = useUsers();
  const [query, setQuery] = useState("");

  const filteredData = useMemo(() => {
    if (!query.trim()) return [];
    return data.filter((item) =>
      item.address.city.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  return {
    query,
    setQuery,
    filteredData,
    loading,
    error,
  };
};

export default useSearchUsers;
