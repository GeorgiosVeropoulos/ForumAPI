import axios from "axios";

const serverInstance = axios.create({
    baseURL: "http://localhost:7185/api/"
});
export default serverInstance;