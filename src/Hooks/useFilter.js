import { useMemo } from "react";

const useFilter = (data, selectedCity) => {
  return useMemo(() => {
    if (!selectedCity) return data; // اگر هیچ شهری انتخاب نشده بود، همه دیتا را برگردان
    return data.filter(user => user.address?.city === selectedCity); // فقط کاربران آن شهر
  }, [data, selectedCity]);
};

export default useFilter;
