import axios from "axios";


const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export default function fetchData() {
    return axios.get(BASE_URL)
}