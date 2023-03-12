import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { color } from "../../../constants/Theme.js";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { addCoupon } from "../../../utils/apis.js";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
const AddCoupon = () => {
  const navigate = useNavigate();

  const handleAddCoupon = async (values) => {
    try {
      await addCoupon({}, values);
      navigate(routes.admin.coupon);
    } catch (error) {
      console.log(error);
    }
  };

  const INITIAL_VALUES = {
    couponName: "",
    couponCode: "",
    itemCount: "",
    limit: "",
    discountType: "",
    minimumSpend: "",
    startDate: "",
    endDate: "",
    description: "",
  };

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
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => {
            console.log(values);
            handleAddCoupon(values);
          }}
        >
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
                  id="couponName"
                  label="Coupon Name"
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
                  <TextFieldWrapper id="couponCode" name="couponCode" />
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
                  <TextFieldWrapper id="itemCount" name="itemCount" />
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
                  <TextFieldWrapper id="limit" name="limit" />
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
                    id="discountType"
                    name="discountType"
                    options={[
                      { name: "Fixed", value: "Fixed" },
                      { name: "Percent", value: "Percent" },
                    ]}
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
                  <TextFieldWrapper id="discountAmount" name="amount" />
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
                  <TextFieldWrapper id="minimumSpend" name="minimumSpend" />
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
                  <TextFieldWrapper
                    id="startDate"
                    name="startDate"
                    type="date"
                  />
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
                  <TextFieldWrapper id="End Date" name="endDate" type="date" />
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
                type="submit"
              >
                Add
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddCoupon;
