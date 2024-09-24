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

/*Schiphol api'ına yaptığım api çağrılarında yaşadığım CORS hatalarını Proxy oluşturarak çözdüm proxy detaylarına vite.config.ts dosyasından ulaşabilirsiniz. 
 Proxy oluşturduğum için instance içerisinde bulunan baseURL kısmına sadece api yazarak erişim sağlayabiliyorum. */ 