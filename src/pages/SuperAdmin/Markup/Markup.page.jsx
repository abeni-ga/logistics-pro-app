import { Button, InputLabel, Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
import AddIcon from "@mui/icons-material/Add";
import MarkUp from "../../../assets/svg/Markup.svg";
import MarkupItem from "../Markup/MarkupItem.pagecomp.jsx";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper.jsx";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
const Markup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full px-5">
      <div className="flex h-[10%]  w-full py-5 justify-between">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Markup
        </Typography>
        <Button
          onClick={() => {
            navigate(routes.admin.addMarkup);
          }}
          variant="outlined"
          sx={{
            color: color.mainRed,
            borderColor: color.lightGray,
            ":hover": {
              borderColor: color.lightGray,
            },
          }}
          startIcon={<AddIcon />}
          size="large"
        >
          Add New
        </Button>
      </div>
      <div className="flex w-full h-[90%] justify-between">
        <div className="flex flex-col w-[68%] gap-5">
          <div className="flex min-h-[10%] bg-blue-100 rounded-xl items-center">
            <div className="flex w-[10%] h-2"></div>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: color.darkGray,
                width: "80%",
              }}
            >
              Company
            </Typography>
            <Typography
              sx={{
                width: "15%",
                fontSize: "24px",
                fontWeight: "700",
                color: color.darkGray,
              }}
            >
              Manage
            </Typography>
          </div>

          <div className="flex flex-col w-full h-full">
            <MarkupItem />
          </div>
        </div>
        <div className="flex flex-col w-[30%] bg-white h-[60%] px-10 gap-5 justify-center">
          <Typography
            sx={{
              fontSize: "24px",
              fontColor: color.darkGray,
              fontWeight: "700",
            }}
          >
            GT Bank
          </Typography>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <img src={MarkUp} alt="" className="self-start mt-1" />
              <div>
                <Typography sx={{ color: color.darkGray }}>Mark Up</Typography>
                <Typography sx={{ color: color.darkIndigo, fontWeight: "700" }}>
                  ₦200
                </Typography>
              </div>
            </div>
            <a href="#e" className="text-[#9CA3AF]">
              Edit
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <Formik>
              <Form>
                <div className="flex flex-col gap-2">
                  <InputLabel
                    htmlFor="type"
                    sx={{
                      color: color.darkGray,
                    }}
                  >
                    Type
                  </InputLabel>
                  <TextFieldWrapper
                    select
                    normal
                    id="type"
                    placeholder="Type"
                    name="type"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <InputLabel
                    htmlFor="mode"
                    sx={{
                      color: color.darkGray,
                    }}
                  >
                    Mode
                  </InputLabel>
                  <TextFieldWrapper
                    select
                    normal
                    id="mode"
                    placeholder="Mode"
                    name="mode"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <InputLabel
                    htmlFor="rate"
                    sx={{
                      color: color.darkGray,
                    }}
                  >
                    Rate
                  </InputLabel>
                  <TextFieldWrapper
                    normal
                    id="rate"
                    placeholder="Enter Rate"
                    name="rate"
                  />
                </div>
              </Form>
            </Formik>
          </div>
          <Button
            variant="contained"
            sx={{
              borderRadius: "8px",
              alignSelf: "flex-start",
              color: "white",
              backgroundColor: color.darkIndigo,
              ":hover": {
                color: "white",
                backgroundColor: color.darkIndigo,
              },
            }}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Markup;
