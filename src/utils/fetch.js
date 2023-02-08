import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { BASEURL } from "../constants/ApiEndpoints";
import { logout } from "./apis";
import { getToken } from "./tokenHandler";

export function apiAuth(headers) {
  const instance = axios.create({
    baseURL: BASEURL,
    headers: {
      ...headers,
    },
  });
  instance.interceptors.response.use(async (request) => {
    const user = jwt_decode(getToken("pool_token"));
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (isExpired) {
      logout();
    }
    return request;
  });
  return instance;
}

export const apiNoAuth = (headers) => {
  const instance = axios.create({
    baseURL: BASEURL,
    headers,
  });
  return instance;
};
