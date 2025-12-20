import { useState, useMemo } from "react";

const useSearch = (data = [], keys = []) => {
  const [query, setQuery] = useState("");

  const result = useMemo(() => {
    if (!query) return data;

    return data.filter(item =>
      keys.some(key => {
        const value = key
          .split(".")
          .reduce((acc, k) => acc?.[k], item);

        return value
          ?.toString()
          .toLowerCase()
          .includes(query.toLowerCase());
      })
    );
  }, [data, query, keys]);

  return { query, setQuery, result };
};

export default useSearch;