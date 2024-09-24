import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "/api",
    headers: {
        "app_id": import.meta.env.VITE_SCHIPHOL_API_APP_ID,
        "app_key":import.meta.env.VITE_SCHIPHOL_API_APP_KEY,
        "ResourceVersion":"v4",
    }
});

export default axiosInstance;