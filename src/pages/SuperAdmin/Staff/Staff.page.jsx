import { Avatar, Button, Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
import AddIcon from "@mui/icons-material/Add";
import StaffItem from "../Staff/StaffItem.pagecomp.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
import { useCallback, useEffect, useState } from "react";
import { getStaffs } from "../../../utils/apis.js";
import { toast } from "react-toastify";
const Staff = () => {
  const navigate = useNavigate();
  const [staffs, setStaffs] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(undefined);

  const handleGetStaff = useCallback(async () => {
    const response = await getStaffs({});
    if (response?.status < 300) {
      setStaffs(response?.data?.data?.data);
      console.log(response?.data?.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, []);

  useEffect(() => {
    handleGetStaff();
  }, [handleGetStaff]);
  return (
    <div className="flex flex-col w-full h-full px-5">
      <div className="flex h-[10%]  w-full py-5 justify-between">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Staff
        </Typography>
        <Button
          onClick={() => {
            navigate(routes.admin.addStaff);
          }}
          variant="outlined"
          sx={{
            color: color.mainRed,
            borderColor: color.lightGray,
            ":hover": {
              borderColor: color.lightGray,
            },
          }}
          startIcon={<AddIcon />}
          size="large"
        >
          Add New
        </Button>
      </div>
      <div className="flex w-full h-[90%] justify-between">
        <div
          className={`flex flex-col  gap-5 ${
            selectedStaff ? "w-[78%]" : "w-full"
          }`}
        >
          <div className="flex min-h-[10%] bg-blue-100 rounded-xl items-center">
            <div className="flex w-[10%] h-2"></div>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: color.darkGray,
                width: "80%",
              }}
            >
              Company
            </Typography>
            <Typography
              sx={{
                width: "15%",
                fontSize: "24px",
                fontWeight: "700",
                color: color.darkGray,
              }}
            >
              Manage
            </Typography>
          </div>

          <div className="flex flex-col w-full h-full">
            {staffs.map((staff, index) => (
              <StaffItem
                staff={staff}
                onClick={() => {
                  setSelectedStaff(staff);
                }}
                key={index}
              />
            ))}
          </div>
        </div>
        {selectedStaff ? (
          <div className="flex flex-col w-[20%] bg-white h-full rounded-t-lg px-10 gap-20 items-center pt-10">
            <div className="flex flex-col gap-5">
              <Avatar sx={{ width: "100px", height: "100px" }} />
              <Typography
                sx={{
                  fontSize: "19px",
                  color: color.darkGray,
                  fontWeight: "700",
                }}
              >
                User Name
              </Typography>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                  fontWeight: "700",
                }}
              >
                {`First Name:${selectedStaff?.firstName}`}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                  fontWeight: "700",
                }}
              >
                {`Last Name: ${selectedStaff?.lastName}`}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                  fontWeight: "700",
                }}
              >
                {`Email: ${selectedStaff?.email}`}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                  fontWeight: "700",
                }}
              >
                {`Phone:${selectedStaff?.phone}`}
              </Typography>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Staff;
