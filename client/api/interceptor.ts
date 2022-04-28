import axios from "axios";
import {toast} from "react-toastify";

const baseURL = process.env.NEXT_PUBLIC_ENV === 'development'
            ?
            process.env.NEXT_PUBLIC_API_DEV_URI
            :
            process.env.NEXT_PUBLIC_API_PROD_URI

console.log(process.env.NEXT_PUBLIC_ENV)

export const apiInstance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});

apiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Не определенная ошибка', {
            toastId: 'ResponseInterceptor'
        })
        return Promise.reject(error);
    },
);