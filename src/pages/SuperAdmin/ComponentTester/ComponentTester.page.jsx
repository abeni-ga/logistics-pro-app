import { Avatar, Button, MenuItem, TextField, Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
import AddIcon from "@mui/icons-material/Add";
import StaffItem from "../Staff/StaffItem.pagecomp.jsx";
const Staff = () => {
  const user = [
    {
      value: "customer",
      label: "Customer",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full px-5">
      <div className="flex h-[20%]  w-full py-5 "></div>
      <div className="flex w-full h-[90%] gap-5 justify-end">
        <div className="flex flex-col w-[65%] gap-2 bg-blue-200">
          <div className="flex h-[10%] w-full bg-white rounded-lg items-center">
            <TextField
              id="outlined-select-report-data"
              select
              defaultValue="transaction"
            >
              {user.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="flex  h-[10%] w-full bg-white rounded-lg"></div>
          <Typography>Showing 124 Results</Typography>
          <div className="flex h-[10%] w-full bg-slate-100 rounded-lg px-5 items-center">
            <Typography sx={{ width: "20%", color: color.darkGray }}>
              ID
            </Typography>
            <Typography sx={{ width: "30%", color: color.darkGray }}>
              Customer
            </Typography>
            <div className="w-[30%]"></div>
            <Typography sx={{ width: "20%", color: color.darkGray }}>
              Amount
            </Typography>
          </div>
          <div className="flex h-[10%] w-full bg-slate-100 px-5 items-center">
            <div className="flex flex-col w-[20%]">
              <Typography>P01923</Typography>
              <Typography>12/12/21 02:35pm</Typography>
            </div>
            <div className="flex flex-col w-[30%]">
              <Typography>Chinedu Joseph</Typography>
              <Typography>Pay on drop-off</Typography>
            </div>
            <div className="flex w-[30%]">
              <Typography
                sx={{
                  backgroundColor: color.lightGreen,
                  paddingX: "50px",
                  borderRadius: "20px",
                }}
              >
                Paid
              </Typography>
            </div>
            <Typography sx={{ width: "20%" }}>₦1,500</Typography>
          </div>
        </div>
        <div className="flex flex-col w-[25%] bg-white h-full rounded-t-lg px-10">
          <Typography
            sx={{
              fontSize: "30px",
              fontColor: color.darkGray,
              fontWeight: "700",
            }}
          >
            Order Ref No
          </Typography>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Sender
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                }}
              >
                Chinedu Joseph
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Pick up address
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                }}
              >
                14b wole ariyo street, Lekki Phase 1
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                }}
              >
                08170000560
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Package type
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                }}
              >
                Parcel
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Receiver
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                }}
              >
                Chinedu Joseph
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Pick up address
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                }}
              >
                14b wole ariyo street, Lekki Phase 1
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                }}
              >
                08170000560
              </Typography>
            </div>
          </div>
          <Button
            variant="outlined"
            size="large"
            sx={{
              fontSize: "22px",
              color: color.darkIndigo,
              borderColor: color.darkIndigo,
              ":hover": {
                color: color.darkIndigo,
                borderColor: color.darkIndigo,
              },
            }}
          >
            Manage Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Staff;
