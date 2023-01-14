import { Avatar, Button, Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
import Admin from "../../../assets/svg/Admin.svg";
import TextFieldWrapper from "../../../components/TextFieldWrapper/TextFieldWrapper";
import AdminProfileCard from "../../../components/AdminProfile/AdminProfile.component.jsx";
import { Form, Formik } from "formik";
const AdminProfile = () => {
  return (
    <div className="flex flex-col w-full h-full items-center px-10">
      <div className="flex h-[10%] w-full pt-5">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Profile
        </Typography>
      </div>
      <div className="flex w-full h-[80%]">
        <div className="flex flex-col w-[80%] h-full gap-10 pr-5">
          <div className="flex ">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <Avatar src={Admin} />
                  <div className="flex flex-col">
                    <Typography sx={{ fontWeight: "700" }}>
                      Jude Adam
                    </Typography>
                    <Typography sx={{ color: color.lightGray }}>
                      Admin
                    </Typography>
                  </div>
                </div>
                <a className="text-blue-900" href="#d">
                  Change Picture
                </a>
              </div>
            </div>
          </div>
          <Formik>
            <Form className="w-full h-full">
              <div className="flex flex-col w-full gap-10">
                <div className="flex w-full justify-between">
                  <div className="w-[48%]">
                    <TextFieldWrapper
                      name="first-name"
                      size="small"
                      sx={{ backgroundColor: "white" }}
                      placeholder="Jude Adam"
                    />
                  </div>
                  <div className="w-[48%]">
                    <TextFieldWrapper
                      name="last-name"
                      size="small"
                      sx={{ backgroundColor: "white" }}
                      placeholder="Jude Adam"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-[48%]">
                    <TextFieldWrapper
                      name="email"
                      size="small"
                      sx={{ backgroundColor: "white" }}
                      placeholder="admajudejude@gmail.com"
                    />
                  </div>
                  <div className="w-[48%]">
                    <TextFieldWrapper
                      name="password"
                      size="small"
                      sx={{ backgroundColor: "white" }}
                      placeholder="abcdefg"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="w-[48%]">
                    <TextFieldWrapper
                      name="address"
                      size="small"
                      sx={{ backgroundColor: "white" }}
                      placeholder="08080808080808"
                    />
                  </div>
                  <div className="w-[48%]">
                    <TextFieldWrapper
                      name="last-name"
                      size="small"
                      sx={{ backgroundColor: "white" }}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-end">
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: color.darkIndigo,
                      borderRadius: "8px",
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="flex flex-col w-[30%] h-[90%] bg-white rounded-xl overflow-auto px-10 gap-10 pt-5">
          <Typography
            variant="h3"
            sx={{ fontSize: "20px", color: color.lightGray, fontWeight: "700" }}
          >
            Admins(4)
          </Typography>
          <AdminProfileCard />
          <AdminProfileCard />
          <AdminProfileCard />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
