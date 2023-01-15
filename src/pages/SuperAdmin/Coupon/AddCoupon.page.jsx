import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { color } from "../../../constants/Theme.js";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
const AddCoupon = () => {
  return (
    <div className="flex flex-col w-full h-full px-10 pt-5">
      <div className="flex h-[15%] w-[70%]">
        <div className="flex w-full items-center  justify-between">
          <div className="flex">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h2"
              sx={{
                fontSize: "28px",
                fontWeight: "700",
                color: color.darkGray,
              }}
            >
              AddCoupon
            </Typography>
          </div>
          <Button
            sx={{ color: color.mainRed, borderColor: color.mainRed }}
            variant="outlined"
            size="large"
            startIcon={<AddIcon />}
          >
            Add New
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-3">
        <Formik>
          <Form className="w-full h-full">
            <div className="flex flex-col w-[70%] h-full bg-white rounded-xl px-10 justify-center gap-4">
              <div className="flex flex-col gap-2">
                <InputLabel
                  htmlFor="couponName"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Coupon name
                </InputLabel>
                <TextFieldWrapper
                  normal
                  id="couponName"
                  label="Serice Name"
                  name="couponName"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="couponCode"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Coupon Code
                  </InputLabel>
                  <TextFieldWrapper normal id="couponCode" name="couponCode" />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="itemCount"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Item Count
                  </InputLabel>
                  <TextFieldWrapper normal id="itemCount" name="itemCount" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="limit"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Limit
                  </InputLabel>
                  <TextFieldWrapper normal id="limit" name="limit" />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="discountType"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Discount type
                  </InputLabel>
                  <TextFieldWrapper
                    select
                    normal
                    id="discountType"
                    name="discountType"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="discountAmount"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Discount Amount
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="discountAmount"
                    name="discountAmount"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="minimumSpend"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Minimum spend
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="minimumSpend"
                    name="minimumSpend"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="startDate"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    Start Date
                  </InputLabel>
                  <TextFieldWrapper normal id="startDate" name="startDate" />
                </div>
                <div className="flex flex-col gap-2 w-[48%]">
                  <InputLabel
                    htmlFor="End Date"
                    sx={{
                      color: color.darkGray,
                      fontSize: "21px",
                    }}
                  >
                    End Date
                  </InputLabel>
                  <TextFieldWrapper normal id="End Date" name="End Date" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <InputLabel
                  htmlFor="description"
                  sx={{
                    color: color.darkGray,
                    fontSize: "21px",
                  }}
                >
                  Description
                </InputLabel>
                <TextFieldWrapper
                  normal
                  sx={{ borderRadius: "0px" }}
                  multiline
                  rows={4}
                  id="description"
                  name="description"
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

export default AddCoupon;
