import { useMemo, useState } from "react";

const useSearch = (data = []) => {
  const [query, setQuery] = useState("");

  
  const getValue = (obj, path) =>
    path.split(".").reduce((acc, key) => acc?.[key], obj);
  
  const result = useMemo(() => {
    const keys = ["name", "username", "email", "address.city"];
    
    if (!query) return data;

    return data.filter(item =>
      keys.some(key => {
        const value = getValue(item, key);
        return value?.toLowerCase().includes(query.toLowerCase());
      })
    );
  }, [query, data]);

  return {
    query,
    setQuery,
    result,
  };
};

export default useSearch;
