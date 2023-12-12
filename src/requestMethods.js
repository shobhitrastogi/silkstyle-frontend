import axios from "axios";
    const BASE_URL = "http://localhost:5000/api"
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzRjZjkwOWRhYjZlYTY0ZTFiMmI5OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5OTUxMjc4OSwiZXhwIjoxNjk5NzcxOTg5fQ.Wk-RQOa6xfRrHHusrrXw-ckctNXyR5PQCTHLZOfJJBg"
    export const publicRequest=  axios.create({
        baseURL:BASE_URL,
    })
    export const userRequest=  axios.create({
        baseURL:BASE_URL,
        header:{token:`shobhit ${TOKEN}`}
    })