import { account, pool } from "../constants/ApiEndpoints";
import { apiAuth, apiNoAuth } from "./fetch";
import { clearLocalStorage } from "./tokenHandler";

export const login = async (header, body) => {
  const response = await apiNoAuth().post(account.logIn, body);
  return response;
};
export const register = async (header, body) => {
  const response = await apiAuth().post(account.register, body);
  return response;
};
export const logout = () => {
  clearLocalStorage();
  window.open("/", "_self");
};
export const uploadDocument = async (header, body) => {
  const head = {
    ...header,
    "content-type": "multipart/form-data",
  };
  const response = await apiAuth(head).post(account.uploadDocuments, body);
  return response;
};
export const getUsers = async (header, params) => {
  try {
    const head = {
      ...header,
    };
    const response = await apiAuth(head).get(account.getUsers + params);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
export const getOrders = async (header, params) => {
  try {
    const head = {
      ...header,
    };
    const response = await apiAuth(head).get(pool.inOrders + params);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getUser = async (header, params, userId) => {
  try {
    const head = {
      ...header,
    };
    const response = await apiAuth(head).get(
      `${account.getUser}/${userId}` + params
    );
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
