import axios from 'axios';

const BASE_URL = "";

export const getData = async () => {
    const response = await axios.post(`${BASE_URL}`, []);
    return response.data;
}