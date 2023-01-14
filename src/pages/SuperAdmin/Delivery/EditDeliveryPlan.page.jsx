import AddIcon from "@mui/icons-material/Add";
import { color } from "../../../constants/Theme.js";
import { Button, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
const AddCollectionCenter = () => {
  return (
    <div className="flex flex-col w-full h-full px-10 pt-5">
      <div className="flex h-[20%] w-full">
        <div className="flex w-full items-center  justify-between">
          <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
            Delivery Plans
          </Typography>
          <Button
            sx={{ color: color.darkIndigo, borderColor: color.darkIndigo }}
            variant="outlined"
            size="large"
            startIcon={<AddIcon />}
          >
            Add New
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full h-[80%] gap-3">
        <Formik>
          <Form className="w-full h-full">
            <div className="flex flex-col w-[70%] h-[90%] bg-white rounded-xl px-10 justify-center gap-4">
              <div className="flex flex-col gap-2">
                <InputLabel
                  htmlFor="serviceName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Service name
                </InputLabel>
                <TextFieldWrapper
                  normal
                  id="serviceName"
                  label="Serice Name"
                  name="serviceName"
                  placeholder="Same day delivery"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="serviceName"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Service name
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="serviceName"
                    name="serviceName"
                    placeholder="400"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="serviceName"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Service name
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="serviceName"
                    name="serviceName"
                    placeholder="400"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[48%]">
                <InputLabel
                  htmlFor="serviceName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Service name
                </InputLabel>
                <TextFieldWrapper
                  normal
                  id="serviceName"
                  name="serviceName"
                  placeholder="400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputLabel
                  htmlFor="serviceName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Service name
                </InputLabel>
                <TextFieldWrapper
                  normal
                  sx={{ borderRadius: "0px" }}
                  multiline
                  rows={4}
                  id="serviceName"
                  name="serviceName"
                  placeholder="Delivery within 45 mins"
                />
              </div>
              <Button
                variant="contained"
                sx={{
                  marginTop: "10px",
                  color: "white",
                  fontWeight: "700",
                  backgroundColor: color.darkIndigo,
                  alignSelf: "flex-start",
                  borderRadius: "8px",
                }}
              >
                Update plan
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddCollectionCenter;
