import axios from "axios";

const apiConfig = axios.create({
    baseURL: "http://localhost:3333/api/v1",
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
});

apiConfig.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = "Bearer " + token;
    }
    return config;
});

export { apiConfig };
