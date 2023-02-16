// site routes will be here
export const routes = {
  admin: {
    dashboard: "/admin/dashboard",
    riders: "/admin/riders",
    riderDetail: "/admin/riders/detail",
    riderHistory: "/admin/riders/history",
    deliveryCompany: "/admin/logistics-company",
    deliveryCompanyDetail: "/admin/logistics-company/detail",
    retailCompanyDetail: "/admin/retail-company/detail",
    customerDetail: "/admin/direct-customer/detail",
    retailCompany: "/admin/retail-company",

    orders: "/admin/orders",
    orderHistory: "/admin/order-history",

    earning: "/admin/earning",
    report: "/admin/report",
    setting: "/admin/setting",
    support: "/admin/support",
  },
  company: {
    confirm: "/company/confirm",
    recovery: "/company/recovery",
    signin: "/company/signin",
    createPassword: "/company/new",
    vertify: "/company/vertify",
    dashboard: "/company-admin/dashboard",
    riders: "/company-admin/riders",
    orders: "/company-admin/orders",
    orderHistory: "/company-admin/order-history",
    earning: "/company-admin/earning",
    report: "/company-admin/report",
    setting: "/company-admin/setting",
    support: "/company-admin/support",
    riderDetail: "/company-admin/riders/detail",
    internalSummary: "/company-admin/orders/in-summary",
  },
};
