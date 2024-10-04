import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL; // Correct variable name
const apiKey = import.meta.env.VITE_API_KEY; // Correct variable name


export default axios.create({
  baseURL: apiBaseUrl,
  params: {
    key: apiKey,
  },
});
