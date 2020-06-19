import axios from "axios";

// axios.defaults.baseURL = 'https://localhost:9688';
axios.defaults.baseURL = 'https://139.180.190.100:9688';
export default function ajax(url, data, type = 'GET') {
    if (type === 'GET') {
        return axios.get(url);
    } else if (type === 'POST') {
        return axios.post(url, data);
    }

}