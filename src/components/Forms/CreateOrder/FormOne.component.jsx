import { InputLabel, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import TextFieldWrapper from "../../TextFieldWrapper/TextFieldWrapper";

const FormOne = () => {
  const [orderType, setOrderType] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [itemType, setItemType] = useState("");
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col h-full w-[90%] gap-4 bg-white rounded-2xl">
        <div className="border-b-2 w-full h-20 flex items-center justify-center">
          <Typography variant="h6" className="w-[90%] font-bold text-darkGray">
            New Order
          </Typography>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <Typography className="w-[90%] font-bold">Pick Up</Typography>
          <div className="flex gap-4 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="order-type">Order Type</InputLabel>
              <TextFieldWrapper
                value={orderType}
                name="order-type"
                id="order-type"
                select
                placeholder="Select Order Type"
                label="Select Order Type"
                defaultValue="order-type"
                onChange={(event) => {
                  setOrderType(event.target.value);
                }}
              >
                <MenuItem value={"order-type"}>OrderType</MenuItem>
              </TextFieldWrapper>
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="delivery-type">Delivery Type</InputLabel>
              <TextFieldWrapper
                value={deliveryType}
                name="delivery-type"
                id="delivery-type"
                select
                placeholder="Select Delivery Type"
                label="Select Delivery Type"
                defaultValue="delivery-type"
                onChange={(event) => {
                  setDeliveryType(event.target.value);
                }}
              >
                <MenuItem value={"delivery-type"}>DeliveryType</MenuItem>
              </TextFieldWrapper>
            </div>
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="item-type">Item Type</InputLabel>
              <TextFieldWrapper
                value={itemType}
                name="item-type"
                id="item-type"
                select
                placeholder="Select Item Type"
                label="Select Item Type"
                defaultValue="item-type"
                onChange={(event) => {
                  setItemType(event.target.value);
                }}
              >
                <MenuItem value={"item-type"}>ItemType</MenuItem>
              </TextFieldWrapper>
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="item-amount">Item Amount</InputLabel>
              <TextFieldWrapper
                name="item-amount"
                id="item-amount"
                placeholder="Type in Amount of Items"
                label="Type in Amount of Items"
              />
            </div>
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="customer-name">Customer Name</InputLabel>
              <TextFieldWrapper
                name="customer-name"
                id="customer-name"
                placeholder="Type in Customer Name"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="customer-phone-number">
                Phone Number
              </InputLabel>
              <TextFieldWrapper
                name="customer-phone-number"
                id="customer-phone-number"
                placeholder="Type in Customer Phone Number"
              />
            </div>
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="customer-email-address">
                Email Address
              </InputLabel>
              <TextFieldWrapper
                name="customer-email-address"
                id="customer-email-address"
                placeholder="Type in Customer Email Addrss"
              />
            </div>
            <TextFieldWrapper className="invisible" name="item-amount" />
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="pick-up-address">Pick Up Address</InputLabel>
              <TextFieldWrapper
                name="pick-up-address"
                id="pick-up-address"
                placeholder="24, Gbolahan Street..."
              />
            </div>
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="landmark">Landmark</InputLabel>
              <TextFieldWrapper
                name="landmark"
                id="landmark"
                placeholder="Type in any landmark"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="note">Add Note</InputLabel>
              <TextFieldWrapper
                name="note"
                id="note"
                multiline
                placeholder="Type Some Addition note"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
