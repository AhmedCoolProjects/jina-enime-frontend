import axios from "axios";

export const appAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  // baseURL: "http://localhost:8000/api",
  //   headers: {
  //     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  //     "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
  //   },
});
