import { apiAdmin } from "../utils/axios";
import { useState, useEffect } from "react";

export const useApi = (url: string) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const articleData = await apiAdmin.get(url);
    setData(articleData.data.data);
  };
  useEffect(() => {
    fetchData();
  });
  return data;
};
