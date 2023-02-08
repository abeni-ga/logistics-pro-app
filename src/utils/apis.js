import { account } from "../constants/ApiEndpoints";
import UseLocalStorage from "../hooks/useLocalStorage";
import { apiAuth, apiNoAuth, get } from "./fetch";

export const login = async (header, body) => {
  const response = await apiNoAuth().post(account.logIn, body);
  console.log("response", response);
  return response;
};
export const logout = () => {
  localStorage.clear();
  window.open("/", "_self");
};
export const getUsers = async (header, params) => {
  console.log("getUsers function", params);
  const head = {
    ...header,
    Authorization: `Bearer ${UseLocalStorage("token")}`,
  };
  const response = await apiAuth(head).get(account.getUsers + params);
  console.log("res", response);
  return response;
};
