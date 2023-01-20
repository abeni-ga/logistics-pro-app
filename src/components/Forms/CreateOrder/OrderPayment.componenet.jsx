import { Button, MenuItem, Radio, Select, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import SuccessDialog from "../../Dialog/SuccessDialog.component.jsx";
import { useNavigate } from "react-router-dom";

const OrderPayment = () => {
  const [open, setOpen] = useState(false);
  const [paymentType, setpaymentType] = useState("cash");
  const [deliveryDate, setdeliveryDate] = useState("same-day");
  const navigate = useNavigate();

  const handleDateSelection = (e) => {
    setpaymentType(e.target.value);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/admin/dashboard");
    console.log("closed");
  };
  return (
    <div className="flex w-[90%] h-[80%] justify-center">
      <div className="flex justify-center w-full h-[70%] items-center">
        <div className="flex flex-col bg-white rounded-xl w-[30%] h-[80%] px-6 justify-center gap-1">
          <Typography className="text-base font-bold mb-4 text-lightGray">
            Order Payment Summary
          </Typography>
          <div className="flex flex-col">
            <Typography className="text-lightGray">Pick-up:</Typography>
            <div className="flex">
              <LocationOnIcon className="text-orange-700" />
              <Typography className="text-darkGray font-bold">
                14, Kumolu Street. Ikeja, Lagos
              </Typography>
            </div>
          </div>
          <div className="w-full h-[30%] bg-slate-100 rounded-xl"></div>
          <div className="flex flex-col">
            <Typography className="text-lightGray">To:</Typography>
            <div className="flex">
              <LocationOnIcon className="text-orange-700" />
              <Typography className="text-darkGray font-bold">
                14, Kumolu Street. Ikeja, Lagos
              </Typography>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <Typography className="text-lightGray font-bold">
                  Avr. Distance to Pick-up
                </Typography>
                <Typography className="text-lightGray">4.2km</Typography>
              </div>
              <div className="flex justify-between">
                <Typography className="text-lightGray font-bold">
                  Est. Distance to delivery
                </Typography>
                <Typography className="text-lightGray">4.2km</Typography>
              </div>
              <div className="flex justify-between">
                <Typography className="text-lightGray font-bold">
                  Est. Fair Total
                </Typography>
                <Typography className="text-lightGray">N14,320.00</Typography>
              </div>
            </div>
            <div className="flex justify-between">
              <Typography className="text-darkGray font-bold">TOTAL</Typography>
              <Typography className="text-darkGray">N14,150.00</Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-xl w-[30%] h-full justify-center gap-20">
          <div className="flex flex-col w-full px-10 gap-5">
            <div className="flex flex-col gap-5">
              <Typography className="text-lightGray font-bold">
                Select Payment Type
              </Typography>
              <Select
                className="bg-bgWhiteSmoke"
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
              <Typography className="text-lightGray font-bold">
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
                    <Typography className="text-darkGray font-bold">
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
                    <Typography className="text-darkGray font-bold">
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
                    <Typography className="text-darkGray font-bold">
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
                    <Typography className="text-darkGray font-bold">
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
              className="text-darkIndigo border-darkIndigo rounded-lg"
            >
              Cancel
            </Button>
            <Button
              className="text-white bg-darkIndigo rounded-lg"
              onClick={() => {
                setOpen(true);
              }}
              variant="outlined"
            >
              Finish
            </Button>
          </div>
        </div>
      </div>
      <SuccessDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default OrderPayment;
