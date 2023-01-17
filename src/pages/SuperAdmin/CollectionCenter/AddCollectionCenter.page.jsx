import { color } from "../../../constants/Theme.js";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Formik, Form } from "formik";
import SuccessDialogWithAction from "../../../components/Dialog/SuccessDialogWithButton.component";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { useState } from "react";
const AddCollectionCenter = () => {
  const [open, setOpen] = useState(false);
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
        <Formik>
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
                      id="centerName"
                      name="centerName"
                      placeholder="Enter center Name"
                    />
                  </div>
                  <TextFieldWrapper
                    id="centerName"
                    name="centerName"
                    placeholder="Enter center Name"
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
                  onClick={() => {
                    setOpen(true);
                  }}
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
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default AddCollectionCenter;
