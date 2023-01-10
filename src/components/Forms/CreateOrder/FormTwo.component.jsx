import { InputLabel } from "@mui/material";
import TextFieldWrapper from "../../TextFieldWrapper/TextFieldWrapper";

const FormTwo = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-8 h-full w-[90%] bg-white rounded-2xl py-8">
        <div className="flex flex-col gap-8 w-full items-center justify-center">
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="customer-name">Receiver Name</InputLabel>
              <TextFieldWrapper
                name="reciever-name"
                id="reciever-name"
                placeholder="Type in Customer Name"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="reciever-phone-number">
                Phone Number
              </InputLabel>
              <TextFieldWrapper
                name="receiver-phone-number"
                id="receiver-phone-number"
                placeholder="Type in Customer Phone Number"
              />
            </div>
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="delivery-address">
                Pick Up Address
              </InputLabel>
              <TextFieldWrapper
                name="delivery-address"
                id="delivery-address"
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
                placeholder="Type in any Landmark"
              />
            </div>
            <TextFieldWrapper className="invisible" name="item-amount" />
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="delivery-data">Delivery Date</InputLabel>
              <TextFieldWrapper
                name="delivery-date"
                id="delivery-date"
                type="date"
                defaultValue="2017-05-24"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="note">Delivery Time</InputLabel>
              <TextFieldWrapper
                name="delivery-time"
                id="delivery-time"
                type="time"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
