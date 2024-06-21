import Axios, { AxiosError, AxiosInstance } from 'axios';
import { ErrorResponse } from '../types/base.type';

class AxiosClass {
    $axios: AxiosInstance;

    constructor() {
        this.$axios = Axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL,
            timeout: 300000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            // withCredentials: true
        });

        //   this.$axios.interceptors.request.use(function (config) {
        //     const accessToken = getCookie(getEncodeCookieKey("accessToken"));
        //     if (accessToken != null) {
        //       config.headers.Authorization = `Bearer ${accessToken}`;
        //     }
        //     return config;
        //   });
    }

    async get(url: string, query?: any) {
        try {
            const response = await this.$axios.get(url, { params: query });
            return response.data;
        } catch (error: any) {
            console.log(error.message);
            return false;
        }
    }

    async post(url: string, data: any) {
        try {
            const response = await this.$axios.post(url, data);

            return response.data;
        } catch (error: any) {
            console.log(error.message);
            return false;
        }
    }

    async patch(url: string, data: any) {
        try {
            const response = await this.$axios.patch(url, data);
            return response.data;
        } catch (error: any) {
            console.log(error.message);
            return false;
        }
    }

    async put(url: string, data: any) {
        try {
            const response = await this.$axios.put(url, data);
            return response.data;
        } catch (error: any) {
            console.log(error.message);
            return false;
        }
    }

    async delete(url: string, data?: any) {
        try {
            const response = await this.$axios.delete(url, {
                data: data,
            });
            return response.data;
        } catch (error: any) {
            console.log(error.message);
            return false;
        }
    }
}

const axiosIntance = new AxiosClass();
export default axiosIntance;
