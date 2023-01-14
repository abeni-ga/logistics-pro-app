import { color } from "../../../constants/Theme.js";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputLabel,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
const AddCollectionCenter = () => {
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
              <div className="flex flex-col bg-white rounded-xl h-[95%] w-[35%] px-10 justify-center">
                <div className="flex flex-col gap-5">
                  <div className=" flex flex-col gap-1">
                    <InputLabel
                      htmlFor="planName"
                      sx={{ color: color.lightGray, fontWeight: "700" }}
                    >
                      Plan Name
                    </InputLabel>
                    <TextFieldWrapper
                      id="planName"
                      name="planName"
                      placeholder="Enter Plan Name"
                    />
                  </div>
                  <FormGroup>
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col">
                        <FormControlLabel
                          control={<Checkbox defaultChecked size="small" />}
                          label="Api Access"
                          size="small"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" small />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                      </div>
                      <div className="flex flex-col">
                        <FormControlLabel
                          control={<Checkbox defaultChecked size="small" />}
                          label="Api Access"
                          size="small"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" small />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                      </div>
                      <div className="flex flex-col">
                        <FormControlLabel
                          control={<Checkbox defaultChecked size="small" />}
                          label="Api Access"
                          size="small"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" small />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          label="Api Access"
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <div className="flex flex-col gap-1">
                    <InputLabel
                      htmlFor="planPrice"
                      sx={{ color: color.lightGray, fontWeight: "700" }}
                    >
                      Plan Price
                    </InputLabel>
                    <TextFieldWrapper
                      type="number"
                      id="planPrice"
                      name="planPrice"
                      placeholder="Enter Plan Price"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <InputLabel
                      htmlFor="validity"
                      sx={{ color: color.lightGray, fontWeight: "700" }}
                    >
                      Validity
                    </InputLabel>
                    <TextFieldWrapper
                      select
                      id="planPrice"
                      name="planPrice"
                      placeholder="Enter Plan Price"
                    />
                  </div>
                </div>
                <div className=" flex justify-between mt-10">
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
                    sx={{
                      color: "white",
                      backgroundColor: color.darkIndigo,
                      borderRadius: "10px",
                    }}
                    variant="contained"
                  >
                    Add Plan
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddCollectionCenter;
