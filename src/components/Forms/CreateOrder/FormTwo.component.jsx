import { InputLabel } from "@mui/material";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { googleApiKey } from "../../../constants/ApiKey";
import TextFieldWrapper from "../../TextFieldWrapper/TextFieldWrapper";

const FormTwo = ({ deliveryAddress, setDeliveryAddress }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-8 h-full w-[90%] bg-white rounded-2xl py-8">
        <div className="flex flex-col gap-8 w-full items-center justify-center">
          <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
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
          {/* <div className="flex gap-8 w-[90%]">
            <div className="w-full flex flex-col gap-2">
              <InputLabel htmlFor="landmark">Landmark</InputLabel>
              <TextFieldWrapper
                name="landmark"
                id="landmark"
                placeholder="Type in any Landmark"
              />
            </div>
            <TextFieldWrapper className="invisible" name="item-amount" />
          </div> */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
