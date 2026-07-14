import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// request => error
// response => err

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err),
);

// err => response => status === 401 => proccess => !!!!
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (err.response?.status === 401) {
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });

        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  },
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
