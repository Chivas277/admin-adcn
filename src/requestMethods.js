import axios from "axios";

const BASE_URL = "http://localhost:8000/v1/";
//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjNmNjAzOWY0OGE1M2U4MjJiNWZiYyIsImFkbWluIjp0cnVlLCJpYXQiOjE2NzA2NzkwMzQsImV4cCI6MzA4MjMxMDYzMTAzNH0.7F9ZnhKGFa7D0xecP8E2dE_oiSpkuqrSQn6T1mCrItA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
