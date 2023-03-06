import { InputLabel, Typography } from "@mui/material";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { googleApiKey } from "../../../constants/ApiKey";
import TextFieldWrapper from "../../TextFieldWrapper/TextFieldWrapper";

const FormOne = ({ pickupAddress, setPickupAddress, plans }) => {
  // const deliveryType = [{ name: "Delivery Type", value: "deliveryType" }];

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
              <InputLabel htmlFor="deliveryPlan">Delivery Type</InputLabel>
              <TextFieldWrapper
                options={plans}
                name="deliveryPlan"
                id="deliveryPlan"
                select
                placeholder="Select Delivery Type"
                label="Select Delivery Type"
              ></TextFieldWrapper>
            </div>
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="itemName">Item Name</InputLabel>
              <TextFieldWrapper
                name="itemName"
                id="itemName"
                placeholder="Type Item Name"
                label="Item Name"
              ></TextFieldWrapper>
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="itemAmount">Item Amount</InputLabel>
              <TextFieldWrapper
                name="itemAmount"
                id="itemAmount"
                placeholder="Type in Amount of Items"
                label="Type in Amount of Items"
              />
            </div>
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="customerName">Customer Name</InputLabel>
              <TextFieldWrapper
                name="customerName"
                id="customerName"
                placeholder="Type in Customer Name"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="phone">Phone Number</InputLabel>
              <TextFieldWrapper
                name="phone"
                id="phone"
                placeholder="Type in Customer Phone Number"
              />
            </div>
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <TextFieldWrapper
                name="email"
                id="email"
                placeholder="Type in Customer Email Addrss"
              />
            </div>
            <TextFieldWrapper className="invisible" name="item-amount" />
          </div>
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="pickupAddress">Pick Up Address</InputLabel>
              <GooglePlacesAutocomplete
                name="address"
                apiKey={googleApiKey}
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ["ng"],
                  },
                }}
                selectProps={{
                  pickupAddress,
                  onChange: setPickupAddress,
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
          <div className="flex gap-8 w-[90%]">
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
