import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import * as Yup from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Formik, Form } from "formik";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import SuccessDialogWithAction from "../../../components/Dialog/SuccessDialogWithButton.component";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { color } from "../../../constants/Theme.js";
import { googleApiKey } from "../../../constants/ApiKey";
import { addCollectionCenter } from "../../../utils/apis";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes";
const AddCollectionCenter = () => {
  const [address, setAddress] = useState(undefined);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleAddCollectionCenter = async (values) => {
    try {
      await addCollectionCenter({}, values);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center px-10 pt-5">
      <div className="flex h-[20%] w-full">
        <div className="flex items-center">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
            Add Collection Centers
          </Typography>
        </div>
      </div>
      <div className="flex flex-col w-full h-[80%]">
        <Formik
          initialValues={{
            name: "",
            landmark: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            const newValue = { ...values, location: address.label };
            handleAddCollectionCenter(newValue);
          }}
        >
          <Form className="w-full h-full">
            <div className="flex flex-col gap-10 w-full h-full">
              <div className="flex flex-col bg-white rounded-xl h-[60%] w-[35%] px-10 justify-center">
                <div className="flex flex-col gap-5">
                  <div className="w-[50%] flex flex-col gap-1">
                    <InputLabel
                      htmlFor="centerName"
                      sx={{ color: color.lightGray, fontWeight: "700" }}
                    >
                      Center Name
                    </InputLabel>
                    <TextFieldWrapper
                      id="name"
                      name="name"
                      placeholder="Enter center Name"
                    />
                  </div>
                  <GooglePlacesAutocomplete
                    name="address"
                    id="address"
                    apiKey={googleApiKey}
                    autocompletionRequest={{
                      componentRestrictions: {
                        country: ["ng"],
                      },
                    }}
                    selectProps={{
                      address,
                      onChange: setAddress,
                      placeholder: "24, Gbolahan Street, Ajah, Lagos",
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
                  <div className="w-[50%] flex flex-col gap-1">
                    <InputLabel
                      htmlFor="landmark"
                      sx={{ color: color.lightGray, fontWeight: "700" }}
                    >
                      Landmark?
                    </InputLabel>
                    <TextFieldWrapper
                      id="landmark"
                      name="landmark"
                      placeholder="Type if any landmark"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[35%] flex justify-between">
                <Button
                  sx={{
                    color: color.darkIndigo,
                    borderColor: color.darkIndigo,
                    borderRadius: "10px",
                  }}
                  variant="outlined"
                >
                  {" "}
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    color: "white",
                    backgroundColor: color.darkIndigo,
                    borderRadius: "10px",
                  }}
                  variant="contained"
                >
                  Add center
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
        <SuccessDialogWithAction
          content="Collection center was successfully added"
          open={open}
          handleClose={() => {
            navigate(routes.admin.collectionCenter);
          }}
        />
      </div>
    </div>
  );
};

export default AddCollectionCenter;
