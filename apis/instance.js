import axios from "axios";

const API_URL = "https://impacton-api.gdre.dev/";

export const instance = axios.create({
  baseURL: API_URL,
});
