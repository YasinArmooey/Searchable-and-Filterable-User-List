import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// ** Static fetching**

export default function api() {
    return axios.get(BASE_URL)
}