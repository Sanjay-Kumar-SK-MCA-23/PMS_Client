import axios from "axios";

export const baseURL = "https://pms-server-b55d.onrender.com/api";
export const baseURL_Image = "https://pms-server-b55d.onrender.com/api";

export const instance = axios.create({
  baseURL: baseURL,
});
