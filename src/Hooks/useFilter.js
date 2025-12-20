import { useState, useMemo } from "react";

const useFilter = (data = []) => {
  const [selectedCity, setSelectedCity] = useState("");

  const filteredData = useMemo(() => {
    if (!selectedCity) return data;
    return data.filter(
      user => user.address?.city === selectedCity
    );
  }, [data, selectedCity]);

  return {
    selectedCity,
    setSelectedCity,
    filteredData,
  };
};

export default useFilter;