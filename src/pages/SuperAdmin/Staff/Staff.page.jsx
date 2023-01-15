import { Avatar, Button, Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
import AddIcon from "@mui/icons-material/Add";
import StaffItem from "../Staff/StaffItem.pagecomp.jsx";
const Staff = () => {
  return (
    <div className="flex flex-col w-full h-full px-5">
      <div className="flex h-[10%]  w-full py-5 justify-between">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Staff
        </Typography>
        <Button
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
        <div className="flex flex-col w-[78%] gap-5">
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
            <StaffItem />
          </div>
        </div>
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
              First Name: Sodiq
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: color.darkGray,
                fontWeight: "700",
              }}
            >
              Last Name: Alase
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: color.darkGray,
                fontWeight: "700",
              }}
            >
              Email: sodiq@touchcore.com.ng
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: color.darkGray,
                fontWeight: "700",
              }}
            >
              Phone: 0903000000
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
