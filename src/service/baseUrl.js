import axios from "axios";

const api = axios.create({
  baseURL: "https://61d3bc23b4c10c001712ba53.mockapi.io/",
});

export default api;
