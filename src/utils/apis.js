import { account } from "../constants/ApiEndpoints";
import UseLocalStorage from "../hooks/useLocalStorage";
import { get, post } from "./fetch";

export const login = async (header, body) => {
  const response = await post(account.logIn, {
    header: {
      ...header,
      Authorization: `Bearer ${UseLocalStorage("token")}`,
    },
    body,
  });
  return response;
};

export const getUsers = async (header, params) => {
  const response = await get(account.getUsers + params, {
    header: {
      ...header,
      Authorization: `Bearer ${UseLocalStorage("token")}`,
    },
  });
  return response;
};
