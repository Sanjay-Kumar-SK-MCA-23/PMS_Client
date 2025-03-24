import axios from "axios";

export const baseURL = "http://pms-server-b55d.onrender.com/api";
export const baseURL_Image = "http://pms-server-b55d.onrender.com/api";

export const instance = axios.create({
  baseURL: baseURL,
});
