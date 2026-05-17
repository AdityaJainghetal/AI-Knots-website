import axios from "axios";

const API_URL = "https://ai-knots-website-2.onrender.com/api/create";

export const createProductApi = (formData) => {
  return axios.post(API_URL, formData);
};
