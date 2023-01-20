import { Avatar, Button, Typography } from "@mui/material";
import PPic from "../../../assets/svg/PPic.svg";

const RiderPersonalInfo = () => {
  return (
    <div className="flex flex-col h-[80%] w-[90%] gap-10">
      <div className="flex rounded-xl h-[40%] w-full bg-white">
        <div className=" w-[25%]  h-full flex flex-col items-center justify-center">
          <Avatar src={PPic} className="w-[20%] h-[30%]" />
          <Typography className="font-bold text-base">Bolade Davies</Typography>
          <Typography className="text-lightGray">+2340101010110</Typography>
        </div>
        <div className=" w-[40%]">
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography className="text-lightGray w-[30%] font-bold">
              Email
            </Typography>
            <Typography className="text-darkGray font-bold">
              Boladedavies@gmail.com
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center px-10 h-[20%]">
            <Typography className="text-lightGray w-[30%] font-bold" Country>
              Country
            </Typography>
            <Typography className="text-darkGray font-bold">Nigeria</Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography className="text-lightGray w-[30%] font-bold">
              State of Origin
            </Typography>
            <Typography className="text-darkGray font-bold">Ogun</Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography className="text-lightGray w-[30%] font-bold">
              Address
            </Typography>
            <Typography className="text-darkGray font-bold">
              14, Sentma Street, Receive Avenue, Lagos
            </Typography>
          </div>
          <div className="flex w-full h-[20%] px-10 border-r-2 border-l-2 items-center">
            <Typography className="text-lightGray w-[30%] font-bold">
              Work Location
            </Typography>
            <Typography className="text-darkGray font-bold">Lagos</Typography>
          </div>
        </div>
        <div className=" w-[35%]">
          <div className="flex w-full h-[20%] border-b-2 items-center pl-10">
            <Typography className="text-lightGray w-[30%] font-bold" Country>
              Country
            </Typography>
            <Typography className="text-darkGray font-bold">Nigeria</Typography>
          </div>
          <div className="flex w-full justify-center items-center h-[80%] gap-10">
            <Button size="small" className="text-darkIndigo bg-lightBlue">
              Reset Password
            </Button>
            <Button size="small" className="text-mainRed bg-bgLightRed">
              Close Account
            </Button>
          </div>
        </div>
      </div>
      <div className="flex rounded-xl h-[40%] w-full bg-white">
        <div className=" w-[25%]  h-full flex flex-col items-center justify-center">
          <Typography className="font-bold text-base">Payment</Typography>
        </div>
        <div className=" w-[40%]">
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography className="text-lightGray w-[30%] font-bold">
              Credit Card
            </Typography>
            <Typography className="text-darkGray font-bold">
              3 2 2 3 2 3 X X X X X X 4 2 4 2
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center px-10 h-[20%]">
            <Typography className="text-lightGray w-[30%] font-bold" Country>
              Total Paid
            </Typography>
            <Typography className="text-darkGray font-bold">
              N450,000
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography className="text-lightGray w-[30%] font-bold">
              Credit Card
            </Typography>
            <Typography className="text-darkGray font-bold">
              3 2 2 3 2 3 X X X X X X 4 2 4 2
            </Typography>
          </div>
          <div className="flex w-full border-b-2 border-r-2 border-l-2 items-center h-[20%] px-10">
            <Typography className="text-lightGray w-[30%] font-bold">
              Refunds
            </Typography>
            <Typography className="text-darkGray font-bold">32,000</Typography>
          </div>
          <div className="flex w-full h-[20%] px-10 border-r-2 border-l-2 items-center">
            <Typography className="text-lightGray w-[30%] font-bold">
              Account Detail
            </Typography>
            <Typography className="text-darkGray font-bold">GTBank</Typography>
            <Typography className="text-darkGray font-bold">
              0123412344
            </Typography>
          </div>
        </div>
        <div className=" w-[35%]">
          <div className="flex w-full h-[20%] border-b-2 items-center pl-10">
            <Typography className="text-lightGray w-[30%] font-bold" Country>
              Transaction
            </Typography>
            <Typography className="text-darkGray font-bold">Details</Typography>
          </div>
          <div className="flex flex-col w-full items-center h-[80%] overflow-auto">
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography className="text-darkGray">Order Payment</Typography>
                <Typography className="text-darkIndigo">
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography className="text-lightGray">2,500.00</Typography>
                <Typography className="text-lightGray">
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  className="text-darkGray bg-bgWhiteSmoke"
                >
                  Receipt
                </Button>
              </div>
            </div>
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography className="text-darkGray">Order Payment</Typography>
                <Typography className="text-darkIndigo">
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography className="text-lightGray">2,500.00</Typography>
                <Typography className="text-lightGray">
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  className="text-darkGray bg-bgWhiteSmoke"
                >
                  Receipt
                </Button>
              </div>
            </div>
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography className="text-darkGray">Order Payment</Typography>
                <Typography className="text-darkIndigo">
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography className="text-lightGray">2,500.00</Typography>
                <Typography className="text-lightGray">
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  className="text-darkGray bg-bgWhiteSmoke"
                >
                  Receipt
                </Button>
              </div>
            </div>
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography className="text-darkGray">Order Payment</Typography>
                <Typography className="text-darkIndigo">
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography className="text-lightGray">2,500.00</Typography>
                <Typography className="text-lightGray">
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  className="text-darkGray bg-bgWhiteSmoke"
                >
                  Receipt
                </Button>
              </div>
            </div>
            <div className="flex w-full min-h-[25%] pl-4 items-center">
              <div className="flex flex-col w-[35%]">
                <Typography className="text-darkGray">Order Payment</Typography>
                <Typography className="text-darkIndigo">
                  Delivery : #003232
                </Typography>
              </div>
              <div className="flex flex-col w-[50%]">
                <Typography className="text-lightGray">2,500.00</Typography>
                <Typography className="text-lightGray">
                  Wed. Apr 7, 2021 14:20.20
                </Typography>
              </div>
              <div className="w-[30%]">
                <Button
                  variant="contained"
                  className="text-darkGray bg-bgWhiteSmoke"
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
