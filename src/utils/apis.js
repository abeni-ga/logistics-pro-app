import { account } from "../constants/ApiEndpoints";
import { apiAuth, apiNoAuth } from "./fetch";
import { clearLocalStorage, getToken } from "./tokenHandler";

export const login = async (header, body) => {
  const response = await apiNoAuth().post(account.logIn, body);
  return response;
};

export const logout = () => {
  clearLocalStorage();
  window.open("/", "_self");
};

export const getUsers = async (header, params) => {
  try {
    const head = {
      ...header,
      Authorization: `Bearer ${getToken("pool_token")}`,
    };
    console.log(head);
    const response = await apiAuth(head).get(account.getUsers + params);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
