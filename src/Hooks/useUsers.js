import { useEffect, useState } from "react";
import fetchData from "../Services/api/Api";

const useUsers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await fetchData()
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return { data, loading, error };
}

export default useUsers;
