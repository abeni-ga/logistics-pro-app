export const BASEURL = "https://beta-gateway-bhwkuf2epa-uc.a.run.app";

export const account = {
  logIn: BASEURL + "/account/API/V1/account/login",
  register: BASEURL + "/account/API/V1/account/signup",
  uploadDocuments: BASEURL + "/account/API/V1/document/uploadDocuments",
  getUsers: BASEURL + "/account/api/v1/account",
  getUser: BASEURL + "/pool/API/V1/pool/getDeliveryRequests",
};
export const payment = {
  payBill: BASEURL + "/payment/api/v1/payment/bill",
};
