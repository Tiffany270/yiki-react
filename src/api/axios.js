import axios from "axios";

axios.defaults.baseURL = 'https://localhost:9688';
// axios.defaults.baseURL = 'https://149.248.19.225:9688';
export default function ajax(url, data, type = 'GET') {
    if (type === 'GET') {
        return axios.get(url);
    } else if (type === 'POST') {
        return axios.post(url, data);
    }

}