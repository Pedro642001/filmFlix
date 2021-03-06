import axios from "axios";

const api = axios.create({
    baseURL: "http://www.omdbapi.com",
    params: { apikey: `${ process.env.KEY_API }` },
});

export { api };
