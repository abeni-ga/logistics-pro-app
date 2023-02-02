import { useRoutes } from "react-router-dom";

// routes
import AuthenticationRoutes from "./Authentication.routes";
import AdminRoutes from "./AdminRoutes.routes";
import CompanyAdminRoutes from "./CompanyAdminRoutes.routes";

export default function Routes() {
  return useRoutes([AdminRoutes, AuthenticationRoutes, CompanyAdminRoutes]);
}
