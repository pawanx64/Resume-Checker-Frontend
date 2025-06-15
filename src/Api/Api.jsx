import axios from "axios";
const API=axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
});
export default API;