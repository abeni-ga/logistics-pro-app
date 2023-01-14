import { Button, MenuItem, Radio, Select, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { color } from "../../../constants/Theme.js";
import { useState } from "react";

const OrderPayment = () => {
  const [paymentType, setpaymentType] = useState("cash");
  const [deliveryDate, setdeliveryDate] = useState("same-day");

  const handleDateSelection = (e) => {
    setpaymentType(e.target.value);
  };
  return (
    <div className="flex w-[90%] h-[80%] justify-center">
      <div className="flex justify-center w-full h-[70%] items-center">
        <div className="flex flex-col bg-white rounded-xl w-[30%] h-[80%] px-6 justify-center gap-1">
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "15px",
              color: color.lightGray,
            }}
          >
            Order Payment Summary
          </Typography>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>Pick-up:</Typography>
            <div className="flex">
              <LocationOnIcon sx={{ color: "orange" }} />
              <Typography sx={{ fontWeight: "700", color: color.darkGray }}>
                14, Kumolu Street. Ikeja, Lagos
              </Typography>
            </div>
          </div>
          <div className="w-full h-[30%] bg-slate-100 rounded-xl"></div>
          <div className="flex flex-col">
            <Typography sx={{ color: color.lightGray }}>To:</Typography>
            <div className="flex">
              <LocationOnIcon sx={{ color: "orange" }} />
              <Typography sx={{ fontWeight: "700", color: color.darkGray }}>
                14, Kumolu Street. Ikeja, Lagos
              </Typography>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <Typography sx={{ fontWeight: "700", color: color.lightGray }}>
                  Avr. Distance to Pick-up
                </Typography>
                <Typography sx={{ color: color.lightGray }}>4.2km</Typography>
              </div>
              <div className="flex justify-between">
                <Typography sx={{ fontWeight: "700", color: color.lightGray }}>
                  Est. Distance to delivery
                </Typography>
                <Typography sx={{ color: color.lightGray }}>4.2km</Typography>
              </div>
              <div className="flex justify-between">
                <Typography sx={{ fontWeight: "700", color: color.lightGray }}>
                  Est. Fair Total
                </Typography>
                <Typography sx={{ color: color.lightGray }}>
                  N14,320.00
                </Typography>
              </div>
            </div>
            <div className="flex justify-between">
              <Typography sx={{ fontWeight: "700", color: color.darkGray }}>
                TOTAL
              </Typography>
              <Typography sx={{ color: color.darkGray }}>N14,150.00</Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-xl w-[30%] h-full justify-center gap-20">
          <div className="flex flex-col w-full px-10 gap-5">
            <div className="flex flex-col gap-5">
              <Typography sx={{ fontWeight: "700", color: color.lightGray }}>
                Select Payment Type
              </Typography>
              <Select
                sx={{
                  backgroundColor: color.bgWhiteSmoke,
                }}
                id="quantity"
                value={deliveryDate}
                placeholder="show"
                label=""
                onChange={(e) => {
                  setdeliveryDate(e.target.value);
                }}
                fullWidth
              >
                <MenuItem value={"export"}>Export</MenuItem>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Typography sx={{ fontWeight: "700", color: color.lightGray }}>
                Select Payment Type
              </Typography>

              <div className="flex flex-col w-full">
                <div className="flex w-full justify-between">
                  <div className="flex items-center">
                    <Radio
                      checked={paymentType === "cash"}
                      onChange={handleDateSelection}
                      value="all-time"
                      name="date-radio-buttons"
                      inputProps={{ "aria-label": "Cash on Delivery" }}
                    />
                    <Typography
                      sx={{ fontWeight: "bold", color: color.darkGray }}
                    >
                      Cash on Delivery
                    </Typography>
                  </div>
                  <div className="flex items-center">
                    <Radio
                      checked={paymentType === "card"}
                      onChange={handleDateSelection}
                      value="all-time"
                      name="date-radio-buttons"
                      inputProps={{ "aria-label": "Card Payment" }}
                    />
                    <Typography
                      sx={{ fontWeight: "bold", color: color.darkGray }}
                    >
                      Card Payment
                    </Typography>
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="flex items-center">
                    <Radio
                      checked={paymentType === "wallet"}
                      onChange={handleDateSelection}
                      value="all-time"
                      name="date-radio-buttons"
                      inputProps={{ "aria-label": "Wallet" }}
                    />
                    <Typography
                      sx={{ fontWeight: "bold", color: color.darkGray }}
                    >
                      Wallet
                    </Typography>
                  </div>
                  <div className="flex items-center">
                    <Radio
                      checked={paymentType === "bank"}
                      onChange={handleDateSelection}
                      value="all-time"
                      name="date-radio-buttons"
                      inputProps={{ "aria-label": "Bank Tramsfer" }}
                    />
                    <Typography
                      sx={{ fontWeight: "bold", color: color.darkGray }}
                    >
                      Bank Transfer
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between pl-10 pr-6">
            <Button
              variant="outlined"
              sx={{
                color: color.darkIndigo,
                borderColor: color.darkIndigo,
                borderRadius: "10px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                backgroundColor: color.darkIndigo,
                borderRadius: "10px",
              }}
            >
              Finish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
