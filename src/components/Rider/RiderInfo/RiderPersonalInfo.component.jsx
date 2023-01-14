import { Avatar, Button, Typography } from "@mui/material";

import { color } from "../../../constants/Theme.js";
import PPic from "../../../assets/svg/PPic.svg";

const RiderPersonalInfo = () => {
  return (
    <div className="flex flex-col h-[80%] w-[90%] gap-10">
      <div className="flex rounded-xl h-[40%] w-full bg-white">
        <div className=" w-[25%]  h-full flex flex-col items-center justify-center">
          <Avatar src={PPic} sx={{ width: "20%", height: "30%" }} />
          <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
            Bolade Davies
          </Typography>
          <Typography sx={{ color: color.lightGray }}>
            +2340101010110
          </Typography>
        </div>
        <div className=" w-[40%]">
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
            >
              Email
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              Boladedavies@gmail.com
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center px-10 h-[20%]">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
              Country
            >
              Country
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              Nigeria
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
            >
              State of Origin
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              Ogun
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
            >
              Address
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              14, Sentma Street, Receive Avenue, Lagos
            </Typography>
          </div>
          <div className="flex w-full h-[20%] px-10 border-r-2 border-l-2 items-center">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
            >
              Work Location
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              Lagos
            </Typography>
          </div>
        </div>
        <div className=" w-[35%]">
          <div className="flex w-full h-[20%] border-b-2 items-center pl-10">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
              Country
            >
              Country
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              Nigeria
            </Typography>
          </div>
          <div className="flex w-full justify-center items-center h-[80%] gap-10">
            <Button
              size="small"
              sx={{
                color: color.darkIndigo,
                backgroundColor: color.lightBlue,
              }}
            >
              Reset Password
            </Button>
            <Button
              size="small"
              sx={{
                color: color.mainRed,
                backgroundColor: color.bgLightRed,
              }}
            >
              Close Account
            </Button>
          </div>
        </div>
      </div>
      <div className="flex rounded-xl h-[40%] w-full bg-white">
        <div className=" w-[25%]  h-full flex flex-col items-center justify-center">
          <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
            Payment
          </Typography>
        </div>
        <div className=" w-[40%]">
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
            >
              Credit Card
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              3 2 2 3 2 3 X X X X X X 4 2 4 2
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center px-10 h-[20%]">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
              Country
            >
              Total Paid
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              N450,000
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
            >
              Credit Card
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              3 2 2 3 2 3 X X X X X X 4 2 4 2
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
            >
              Refunds
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              32,000
            </Typography>
          </div>
          <div className="flex w-full h-[20%] px-10 border-r-2 border-l-2 items-center">
            <Typography
              sx={{ color: color.lightGray, width: "30%", fontWeight: "700" }}
            >
              Account Detail
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              GTBank
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              0123412344
            </Typography>
          </div>
        </div>
        <div className=" w-[35%]">
          <div className="flex w-full h-[20%] border-b-2 items-center pl-10">
            <Typography
              sx={{
                color: color.lightGray,
                width: "30%",
                fontWeight: "700r",
              }}
              Country
            >
              Transaction
            </Typography>
            <Typography sx={{ color: color.darkGray, fontWeight: "700" }}>
              Details
            </Typography>
          </div>
          <div className="flex flex-col w-full items-center h-[80%] overflow-auto">
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography sx={{ color: color.darkGray }}>
                  Order Payment
                </Typography>
                <Typography sx={{ color: color.darkIndigo }}>
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography sx={{ color: color.lightGray }}>
                  2,500.00
                </Typography>
                <Typography sx={{ color: color.lightGray }}>
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  sx={{
                    color: color.darkGray,
                    backgroundColor: color.bgWhiteSmoke,
                  }}
                >
                  Receipt
                </Button>
              </div>
            </div>
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography sx={{ color: color.darkGray }}>
                  Order Payment
                </Typography>
                <Typography sx={{ color: color.darkIndigo }}>
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography sx={{ color: color.lightGray }}>
                  2,500.00
                </Typography>
                <Typography sx={{ color: color.lightGray }}>
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  sx={{
                    color: color.darkGray,
                    backgroundColor: color.bgWhiteSmoke,
                  }}
                >
                  Receipt
                </Button>
              </div>
            </div>
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography sx={{ color: color.darkGray }}>
                  Order Payment
                </Typography>
                <Typography sx={{ color: color.darkIndigo }}>
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography sx={{ color: color.lightGray }}>
                  2,500.00
                </Typography>
                <Typography sx={{ color: color.lightGray }}>
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  sx={{
                    color: color.darkGray,
                    backgroundColor: color.bgWhiteSmoke,
                  }}
                >
                  Receipt
                </Button>
              </div>
            </div>
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography sx={{ color: color.darkGray }}>
                  Order Payment
                </Typography>
                <Typography sx={{ color: color.darkIndigo }}>
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography sx={{ color: color.lightGray }}>
                  2,500.00
                </Typography>
                <Typography sx={{ color: color.lightGray }}>
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  sx={{
                    color: color.darkGray,
                    backgroundColor: color.bgWhiteSmoke,
                  }}
                >
                  Receipt
                </Button>
              </div>
            </div>
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography sx={{ color: color.darkGray }}>
                  Order Payment
                </Typography>
                <Typography sx={{ color: color.darkIndigo }}>
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography sx={{ color: color.lightGray }}>
                  2,500.00
                </Typography>
                <Typography sx={{ color: color.lightGray }}>
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  sx={{
                    color: color.darkGray,
                    backgroundColor: color.bgWhiteSmoke,
                  }}
                >
                  Receipt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderPersonalInfo;
