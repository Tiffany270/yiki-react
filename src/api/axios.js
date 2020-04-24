import axios from "axios";

axios.defaults.baseURL = 'https://192.168.29.1:9688';
export default function ajax(url, data, type = 'GET') {
    if (type === 'GET') {
        return axios.get(url);
    } else if (type === 'POST') {
        return axios.post(url, data);
    }

}