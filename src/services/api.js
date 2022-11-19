import axios from 'axios';

const BASE_URL = "http://localhost/servicebus/run";

export const getData = async () => {
    const response = await axios.post(`${BASE_URL}/serviceGraphMousaviTask`, []);
    return JSON.parse(response.data);
};

export const postData = async (body) => {
    const response = await axios.post(`${BASE_URL}/ContactUs`, body);
    return response.status;
};