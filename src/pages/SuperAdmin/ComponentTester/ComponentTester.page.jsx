import {
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { color } from "../../../constants/Theme.js";
import Revert from "../../../assets/svg/revert.svg";
import { styled } from "@mui/system";
import List1 from "../../../assets/svg/List1.svg";
const Staff = () => {
  const [userType, setUserType] = useState("transaction");
  const user = [
    {
      value: "customer",
      label: "Customer",
    },
  ];
  const SearchBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: "10px",
    },
  }));
  return (
    <div className="flex flex-col w-full h-full px-5">
      <div className="flex h-[20%]  w-[91%] items-center self-end">
        <div className="flex flex-col gap-10 w-[60%]">
          <Typography
            variant="h2"
            sx={{ color: color.gray, fontSize: "24px", fontWeight: "700" }}
          >
            Report
          </Typography>
          <TextField
            onChange={(e) => {
              setUserType(e.target.value);
            }}
            id="outlined-select-report-data"
            select
            value={userType}
            defaultValue="transaction"
            sx={{ width: "25%" }}
          >
            {user.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2 bg-white rounded-lg w-40 py-2 pl-5 items-center">
            <img src={Revert} alt="" />
            <div className="flex flex-col ">
              <Typography sx={{ color: color.gray }}>Total</Typography>
              <Typography sx={{ fontWeight: "700", color: color.gray }}>
                N25,550
              </Typography>
            </div>
          </div>
          <div className="flex gap-2 bg-green-50 rounded-lg w-40 py-2 pl-5 items-center">
            <img src={Revert} alt="" />
            <div className="flex flex-col ">
              <Typography sx={{ color: color.gray }}>Wallet Payment</Typography>
              <Typography sx={{ fontWeight: "700", color: color.gray }}>
                N25,550
              </Typography>
            </div>
          </div>
          <div className="flex gap-2 bg-red-50 rounded-lg w-40 py-2 pl-5 items-center">
            <img src={Revert} alt="" />
            <div className="flex flex-col ">
              <Typography sx={{ color: color.gray }}>Cash Received</Typography>
              <Typography sx={{ fontWeight: "700", color: color.gray }}>
                N25,550
              </Typography>
            </div>
          </div>
          <div className="flex gap-2 bg-green-50 rounded-lg w-40 py-2 pl-5 items-center">
            <img src={Revert} alt="" />
            <div className="flex flex-col ">
              <Typography sx={{ color: color.gray }}>Transfered</Typography>
              <Typography sx={{ fontWeight: "700", color: color.gray }}>
                N25,550
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[90%] gap-5 justify-end">
        <div className="flex flex-col w-[65%] gap-2">
          <div className="flex h-[10%] w-full gap-10  rounded-lg items-center">
            <TextField
              id="outlined-select-report-data"
              select
              value={userType}
              defaultValue="transaction"
              sx={{ width: "15%" }}
            >
              {user.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="flex gap-5">
              <Typography
                sx={{
                  borderRadius: "20px",
                  color: "#fb923c",
                  paddingX: "15px",
                  backgroundColor: "#fed7aa",
                }}
              >
                Failed
              </Typography>
              <Typography
                sx={{
                  borderRadius: "20px",
                  color: color.gray,
                  paddingX: "15px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Pending
              </Typography>
              <Typography
                sx={{
                  borderRadius: "20px",
                  color: color.gray,
                  paddingX: "15px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Successful
              </Typography>
            </div>
          </div>
          <div className="flex  h-[10%] gap-10 w-full bg-white rounded-lg items-center">
            <div className="flex gap-2 bg-white p-1 rounded-lg items-center">
              From:
              <TextField
                variant="standard"
                size="small"
                type="date"
                InputProps={{
                  style: {
                    height: "15px",
                  },
                  disableUnderline: true,
                }}
              />
              To:
              <TextField
                variant="standard"
                type="date"
                size="small"
                InputProps={{
                  style: {
                    height: "15px",
                  },
                  disableUnderline: true,
                }}
              />
            </div>
            <TextField
              id="outlined-select-report-data"
              select
              value={userType}
              defaultValue="transaction"
              sx={{ width: "15%" }}
            >
              {user.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <SearchBox
              sx={{
                backgroundColor: "white",
                width: "45%",
                borderRadius: "10px",
              }}
              variant="outlined"
              placeholder="search company here"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <img src={List1} alt="" />
          </div>
          <Typography>Showing 124 Results</Typography>
          <div className="flex h-[10%] w-full bg-gray- rounded-lg px-5 items-center">
            <Typography
              sx={{
                width: "20%",
                color: color.gray,
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              ID
            </Typography>
            <Typography
              sx={{
                width: "30%",
                color: color.gray,
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Customer
            </Typography>
            <div className="w-[30%]"></div>
            <Typography
              sx={{
                width: "20%",
                color: color.gray,
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Amount
            </Typography>
          </div>
          <div className="flex h-[10%] w-full bg-slate-100 px-5 items-center">
            <div className="flex flex-col w-[20%]">
              <Typography sx={{ fontSize: "20px", color: color.gray }}>
                P01923
              </Typography>
              <Typography sx={{ fontSize: "12px", color: color.gray }}>
                12/12/21 02:35pm
              </Typography>
            </div>
            <div className="flex flex-col w-[30%]">
              <Typography sx={{ fontSize: "20px", color: color.gray }}>
                Chinedu Joseph
              </Typography>
              <Typography sx={{ color: color.gray }}>
                Pay on drop-off
              </Typography>
            </div>
            <div className="flex w-[30%]">
              <Typography
                sx={{
                  backgroundColor: color.lightGreen,
                  paddingX: "100px",
                  borderRadius: "20px",
                  paddingY: "5px",
                }}
              >
                Paid
              </Typography>
            </div>
            <Typography
              sx={{ width: "20%", fontSize: "20px", color: color.gray }}
            >
              ₦1,500
            </Typography>
          </div>
        </div>
        <div className="flex flex-col w-[25%] bg-white h-full rounded-t-lg px-10 pt-10">
          <MoreVertIcon sx={{ alignSelf: "end" }} />
          <Typography
            sx={{
              fontSize: "24px",
              color: color.gray,
              fontWeight: "700",
              marginBottom: "30px",
            }}
          >
            Order Ref No
          </Typography>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Sender
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: color.gray,
                }}
              >
                Chinedu Joseph
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Pick up address
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: color.gray,
                }}
              >
                14b wole ariyo street, Lekki Phase 1
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: color.gray,
                }}
              >
                08170000560
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Package type
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: color.gray,
                }}
              >
                Parcel
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Receiver
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: color.gray,
                }}
              >
                Chinedu Joseph
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Pick up address
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: color.gray,
                }}
              >
                14b wole ariyo street, Lekki Phase 1
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: color.gray,
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
              alignSelf: "center",
              marginTop: "30px",
              width: "80%",
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
