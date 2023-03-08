import {
  account,
  collectionCenter,
  configuration,
  payment,
  pool,
} from "../constants/ApiEndpoints";
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
export const getDeliveryPlans = async (header) => {
  try {
    const head = {
      ...header,
    };
    const response = await apiAuth(head).get(
      configuration.deliveryPlan.getDeliveryPlan
    );
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
export const addDeliveryPlan = async (header, body) => {
  const response = await apiAuth().post(
    configuration.deliveryPlan.addDeliveryPlan,
    body
  );
  return response;
};
export const getMarkups = async (header) => {
  try {
    const head = {
      ...header,
    };
    const response = await apiAuth(head).get(configuration.markUp.getMarkups);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
export const addMarkup = async (header, body) => {
  const response = await apiAuth().post(configuration.markUp.addMarkups, body);
  return response;
};
export const getSubscriptions = async (header) => {
  try {
    const head = {
      ...header,
    };
    const response = await apiAuth(head).get(
      payment.subscription.getSubscriptions
    );
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
export const getCollectionCenters = async (header) => {
  try {
    const head = {
      ...header,
    };
    const response = await apiAuth(head).get(
      collectionCenter.getCollectionCenters
    );
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
export const addCollectionCenter = async (header, body) => {
  const response = await apiAuth().post(
    collectionCenter.addCollectionCenter,
    body
  );
  return response;
};
export const editDeliveryPlan = async (header, body) => {
  const response = await apiAuth().patch(
    configuration.deliveryPlan.editDeliveryPlan,
    body
  );
  return response;
};
export const editMarkup = async (header, body) => {
  const response = await apiAuth().patch(
    configuration.markUp.editMarkups,
    body
  );
  return response;
};

export const recoveryPassword = async (header, body) => {
  const response = await apiNoAuth().post(account.recoveryPassword, body);
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
