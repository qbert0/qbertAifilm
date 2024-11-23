import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie"
});

instance.interceptors.response.use(
  (response) => {
    const data = response.data;
    return data; // Return the extracted data directly
  },
  (error) => Promise.reject(error)
);

export default instance;