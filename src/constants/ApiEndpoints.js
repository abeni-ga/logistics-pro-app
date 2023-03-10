export const BASEURL = "https://beta-gateway-bhwkuf2epa-uc.a.run.app";

export const account = {
  logIn: BASEURL + "/account/API/V1/account/login",
  register: BASEURL + "/account/API/V1/account/signup",
  uploadDocuments: BASEURL + "/account/API/V1/document/uploadDocuments",
  getUsers: BASEURL + "/account/api/v1/account",
  getUser: BASEURL + "/account/api/v1/account",
  recoveryPassword: BASEURL + "/account/API/V1/account/recover-password",
  activityLog: BASEURL + "/account/API/V1/activityLog",
  getRidersByStatus: BASEURL + "/rider/getRiderByWorkStatus",
};
export const pool = {
  inOrders: BASEURL + "/pool/API/V1/pool",
};
export const payment = {
  payBill: BASEURL + "/payment/api/v1/payment/bill",
  subscription: {
    getSubscriptions: BASEURL + "/payment/API/V1/subscription",
  },
  transaction: {
    getTransaction: BASEURL + "/payment/API/V1/transaction",
  },
};
export const configuration = {
  deliveryPlan: {
    getDeliveryPlan: BASEURL + "/pool/API/V1/deliveryPlan",
    addDeliveryPlan: BASEURL + "/pool/API/V1/deliveryPlan/addDeliveryPlan",
    editDeliveryPlan: BASEURL + "/pool/API/V1/deliveryPlan/updateDeliveryPlan",
  },
  markUp: {
    getMarkups: BASEURL + "/pool/API/V1/markup",
    getGeneralMarkups: BASEURL + "/pool/API/V1/markup/viewGeneralMarkup",
    getSpecificMarkups: BASEURL + "/pool/API/V1/markup/viewSpecificMarkup",
    addMarkups: BASEURL + "/pool/API/V1/markup/addMarkUp",
    editMarkups: BASEURL + "/pool/API/V1/markup/updateMarkup",
  },
};
export const collectionCenter = {
  getCollectionCenters: BASEURL + "/pool/API/V1/collectionCenter",
  getCollectionCenter: BASEURL + "/pool/API/V1/collectionCenter/:id",
  addCollectionCenter:
    BASEURL + "/pool/API/V1/collectionCenter/addCollectionCenter",
};
export const staff = {
  getStaffs: BASEURL + "/account/API/V1/staff",
  getStaff: BASEURL + "/account/API/V1/staff/:id",
  addStaff: BASEURL + "/account/API/V1/staff/addStaff",
  updateStaff: BASEURL + "/account/API/V1/staff/updateStaff",
  deactivateStaff: BASEURL + "/account/API/V1/staff/deactivateStaff",
};
export const coupon = {
  getCoupons: BASEURL + "/pool/API/V1/coupon",
  getCoupon: BASEURL + "/pool/API/V1/coupon/:id",
  addCoupon: BASEURL + "/pool/API/V1/coupon/addCoupon",
  updateCoupon: BASEURL + "/pool/API/V1/coupon/updateCoupon",
  deactivateCoupon: BASEURL + "/pool/API/V1/coupon/deactivateCoupon",
};
