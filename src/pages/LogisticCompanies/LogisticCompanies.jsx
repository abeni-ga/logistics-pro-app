import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Select,
  Typography,
  MenuItem,
  TextField,
} from "@mui/material";
import Menu from "../../assets/svg/Menu.svg";
import List from "../../assets/svg/List.svg";
import { logisticsCompany } from "../../data/LogisticsCompany.js";
import UserView from "../../components/Card/UserView.component";
const LogisticsCompany = () => {
  const [type, setType] = useState(null);
  const [quantity, setQuantity] = useState(null);
  return (
    <div className="w-full h-full bg-transparent p-10 flex flex-col gap-5 flex-wrap min-w-min">
      <Typography variant="h4">Logistic Companies</Typography>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Button sx={{ backgroundColor: "white", borderRadius: "12px" }}>
            <IconButton>
              <img src={Menu} alt="" />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "12px" }}
          >
            <IconButton color="">
              <img src={List} alt="" />
            </IconButton>
          </Button>
        </div>
        <div className="flex items-center gap-20">
          <Button size="large" variant="contained">
            Register Company
          </Button>
          <div className="flex items-center">
            <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: "white" }}>
              <Select
                id="type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <MenuItem default value={10}>
                  Ten
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 160 }}>
              <Select
                sx={{ backgroundColor: "white" }}
                id="quantity"
                value={quantity}
                placeholder="show"
                label=""
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ backgroundColor: "white" }}
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
          </div>
        </div>
      </div>
      <div className="flex p-4 items-center w-full bg-red-200">
        <span className="w-1/12 h-1"></span>
        <Typography sx={{ width: "20%" }}>Company Name</Typography>
        <Typography sx={{ width: "8.333333%" }}>Reg. No</Typography>
        <Typography sx={{ width: "16.666667%" }}>Reference Name</Typography>
        <Typography sx={{ width: "16.666667%" }}>Subscription</Typography>
        <Typography sx={{ width: "8.333333%" }}>Payment</Typography>
        <Typography sx={{ width: "8.333333%" }}>Riders</Typography>
        <Typography sx={{ width: "8.333333%" }}>Status</Typography>
      </div>
      <div className="flex flex-col gap-4">
        {logisticsCompany.map((comp) => {
          return <UserView />;
        })}
      </div>
    </div>
  );
};

export default LogisticsCompany;

// <div className="flex">

//   <div>
//     <div>
//     </div>
//     <div className="flex items-center">
//     </div>
//   </div>
// </div>;
