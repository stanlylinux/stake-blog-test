import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";

export const apiAdmin = axios.create({
  baseURL: "https://stake-cms.up.railway.app",
});

apiAdmin.interceptors.request.use(async (requestConfig: any) => {
  try {
    const result = await axios.post(
      "https://stake-cms.up.railway.app/api/auth/local",
      {
        identifier: "admin@admin.com",
        password: "ASDf1234567",
      }
    );
    const accessToken = result.data.jwt;
    console.log(accessToken, "<<< ");
    (requestConfig.headers as AxiosRequestHeaders)[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    return requestConfig;
  } catch (e) {
    console.log(e);
  }
});

export const fetcher = (url: string, params?: any) =>
  apiAdmin.get(url, params).then((res) => res);
