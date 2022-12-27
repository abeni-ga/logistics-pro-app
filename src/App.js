import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from "./components/common/sidebar/sidebar";
import Dashboard from "./components/pages/Dashboard/dashboard";
import Earning from "./components/pages/earning/earning";
import OrderHistory from "./components/pages/Order_History/orderHistory";
import Report from "./components/pages/Report/report";
import Setting from "./components/pages/Setting/Setting";
import Supports from "./components/pages/Support/support";
function App() {
  return (
    <div className="h-screen w-100%">
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/earning" element={<Earning />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/supports" element={<Supports />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
