const BASEURL = "api.pool.com";

export const account = {
  logIn: BASEURL + "/account/api/v1/user/login",
  getUsers: BASEURL + "/account/api/v1/user",
};
export const payment = {
  payBill: BASEURL + "/payment/api/v1/payment/bill",
};
