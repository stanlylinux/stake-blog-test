import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export const apiAdmin = axios.create({
  baseURL: "https://stake-cms.up.railway.app",
  // baseURL: "http://localhost:1337",
});

apiAdmin.interceptors.request.use(async (requestConfig: any) => {
  try {
    const accessToken = Cookies.get("access-token-stake-blog");
    if (!accessToken) {
      const result = await axios.post(
        "https://stake-cms.up.railway.app/api/auth/local",
        // "http://localhost:1337/api/auth/local",
        {
          identifier: "admin",
          password: "SelamatJalan1!",
        }
      );

      Cookies.set("access-token-stake-blog", result?.data.jwt);
    }
    (requestConfig.headers as AxiosRequestHeaders)[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    return requestConfig;
  } catch (e) {
    console.log(e, "????");
  }
});

export const fetcher = (url: string, params?: any) =>
  apiAdmin.get(url, params).then((res) => res);
