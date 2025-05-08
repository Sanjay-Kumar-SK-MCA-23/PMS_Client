import axios from "axios";

export const baseURL = "https://payroll-backend-8hkb.onrender.com/api";
export const baseURL_Image = "https://payroll-backend-8hkb.onrender.com/api";

export const instance = axios.create({
  baseURL: baseURL,
});
