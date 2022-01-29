import axios from 'axios';

const baseURL = 'http://localhost:3002/';

export const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer 9ysicbwwue.54bbvxswwer.rete82hjh42`
    }
});
