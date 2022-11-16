import React from 'react';
import axios from 'axios';
const BASE_URL = "";

export const getData = async () => {
    const response = await axios.post(`${BASE_URL}`, []);
}