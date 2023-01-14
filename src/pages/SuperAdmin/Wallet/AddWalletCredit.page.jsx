import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { color } from "../../../constants/Theme.js";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
const AddWalletCredit = () => {
  return (
    <div className="flex flex-col w-full h-full px-10 pt-5">
      <div className="flex h-[20%] w-full items-center justify-between">
        <div className="flex items-center">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
            Add wallet credit
          </Typography>
        </div>
        <Button
          sx={{ color: color.darkIndigo, borderColor: color.darkIndigo }}
          size="large"
          variant="outlined"
          startIcon={<AddIcon />}
        >
          Add New
        </Button>
      </div>
      <div className="flex flex-col w-full h-[80%] gap-3">
        <Formik>
          <Form className="w-full h-full">
            <div className="flex flex-col w-[70%] h-[50%] bg-white rounded-xl px-10 justify-center gap-4">
              <div className="flex flex-col gap-2 w-[50%]">
                <InputLabel
                  htmlFor="serviceName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Partner Name
                </InputLabel>
                <TextFieldWrapper
                  select
                  normal
                  id="partnerName"
                  name="partnerName"
                  label="Search or Select partner"
                />
              </div>
              <div className="flex flex-col gap-2 w-[50%]">
                <InputLabel
                  htmlFor="serviceName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Amount
                </InputLabel>
                <TextFieldWrapper
                  normal
                  id="amount"
                  name="amount"
                  placeholder="Enter amount"
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
                Credit
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddWalletCredit;
