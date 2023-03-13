import { Checkbox, Radio, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Insurance from "../../../assets/svg/insurance.svg";

const FormTwo = ({ deliveryAddress, setDeliveryAddress }) => {
  const [selectedInsurance, setSelectedInsurance] = useState(undefined);
  const handleInsuranceChange = (event) => {
    setSelectedInsurance(event.target.value);
  };
  const controlInsuranceProps = (item) => ({
    checked: selectedInsurance === item,
    onChange: handleInsuranceChange,
    value: item,
    name: "insurance",
    inputProps: { "aria-label": item },
  });
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-8 h-full w-[90%] bg-white rounded-2xl py-8">
        <div className="flex flex-col gap-8 w-full items-center justify-center">
          <div className="ml-10 w-[85%] h-full rounded-xl flex flex-col gap-4 p-4">
            {/* <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="receiverName">Receiver Name</InputLabel>
              <TextFieldWrapper
                name="recieverName"
                id="recieverName"
                placeholder="Type in Customer Name"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="recieverPhone">Phone Number</InputLabel>
              <TextFieldWrapper
                name="receiverPhone"
                id="receiverPhone"
                placeholder="Type in Customer Phone Number"
              />
            </div>
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="deliveryAddress">
                Delivery Address
              </InputLabel>
              <GooglePlacesAutocomplete
                name="address"
                apiKey={googleApiKey}
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ["ng"],
                  },
                }}
                selectProps={{
                  deliveryAddress,
                  onChange: setDeliveryAddress,
                  placeholder: "",
                  styles: {
                    input: (provided) => ({
                      ...provided,
                      height: "50px",
                    }),
                    option: (provided) => ({
                      ...provided,
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                    }),
                  },
                }}
              />
            </div>
          </div>
          //  <div className="flex gap-8 w-[90%]">
          //   <div className="w-full flex flex-col gap-2">
          //     <InputLabel htmlFor="landmark">Landmark</InputLabel>
          //     <TextFieldWrapper
          //       name="landmark"
          //       id="landmark"
          //       placeholder="Type in any Landmark"
          //     />
          //   </div>
          //   <TextFieldWrapper className="invisible" name="item-amount" />
          // </div> 
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="deliveryData">Delivery Date</InputLabel>
              <TextFieldWrapper
                name="deliveryDate"
                id="deliveryDate"
                type="date"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="deliveryTime">Delivery Time</InputLabel>
              <TextFieldWrapper
                name="deliveryTime"
                id="deliveryTime"
                type="time"
              />
            </div> */}
            <Typography className="font-bold">Optional Details</Typography>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 bg-white rounded">
                <Checkbox />
                <img src={""} alt="icon" />
                <div className="flex flex-col">
                  <Typography className="font-bold text-sm">Fragile</Typography>
                  <Typography>Select if your item is fragile</Typography>
                </div>
              </div>
              <div className="flex gap-2 bg-white rounded">
                <Checkbox />
                <img src={""} alt="icon" />
                <div className="flex flex-col">
                  <Typography className="font-bold text-sm">
                    Delivery Note
                  </Typography>
                  <Typography>
                    Select if you have a delivery note to drop-off along with
                    your item
                  </Typography>
                </div>
              </div>
              <div className="flex gap-2 bg-white rounded">
                <Checkbox />
                <img src={""} alt="icon" />
                <div className="flex flex-col">
                  <Typography className="font-bold text-sm">
                    Pick up SMS
                  </Typography>
                  <Typography>
                    Select if you want sender to receive order number and
                    instructions to prepare for pick up via SMS notification
                    after order created.
                  </Typography>
                </div>
              </div>
            </div>
            <Typography className="font-bold">Insurance</Typography>
            <div className="flex gap-10 bg-white rounded">
              <div className="flex gap-2 items-center">
                <Radio {...controlInsuranceProps("Standard")} />
                <div className="flex items-center gap-2">
                  <img src={Insurance} alt="" />
                  <Typography>Standard Insurance</Typography>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Radio {...controlInsuranceProps("Comprehnsive")} />
                <div className="flex items-center gap-2">
                  <img src={Insurance} alt="" />
                  <Typography>Comprehnsive Insurance</Typography>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Radio {...controlInsuranceProps("None")} />
                <div className="flex items-center gap-2">
                  <Typography>None</Typography>
                </div>
              </div>
            </div>
            <Typography className="font-bold">
              Extra Notification Contacts
            </Typography>
            <div className="flex gap-10 bg-white rounded p-4 items-center">
              <Checkbox /> <Typography>Contact 1</Typography> <TextField />
              <a href="#l">Add another</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
