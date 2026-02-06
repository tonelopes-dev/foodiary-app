import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://ggi7kpwf5a.execute-api.us-east-1.amazonaws.com",
});
