import axios from "axios";
const API=axios.create({
  baseURL: "https://resume-checker-backend.vercel.app",
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
});
export default API;