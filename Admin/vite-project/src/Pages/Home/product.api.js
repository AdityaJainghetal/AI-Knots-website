import axios from "axios";

const API_URL = "https://ai-knots-website-xw9f.onrender.com/api/create";

export const createProductApi = (formData) => {
  return axios.post(API_URL, formData);
};
