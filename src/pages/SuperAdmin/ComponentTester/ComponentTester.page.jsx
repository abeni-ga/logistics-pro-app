/* import { Checkbox, Radio, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import Fragile from "../../../assets/svg/fragile.svg";
import Notepad from "../../../assets/svg/notepad.svg";
import Sms from "../../../assets/svg/sms.svg";
import Credit from "../../../assets/svg/credit-card.svg";
import Wallet from "../../../assets/svg/wallet.svg";
import Cash from "../../../assets/svg/cash.svg";

const FinalizeForm = () => {
  const [selectedInsurance, setSelectedInsurance] = useState(undefined);
  const [selectedPayment, setSelectedPayment] = useState(undefined);
  // const handleInsuranceChange = (event) => {
    setSelectedInsurance(event.target.value);
  };
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  // const controlInsuranceProps = (item) => ({
  //   checked: selectedInsurance === item,
  //   onChange: handleInsuranceChange,
  //   value: item,
  //   name: "insurance",
  //   inputProps: { "aria-label": item },
  // });
  const controlPaymentProps = (item) => ({
    checked: selectedPayment === item,
    onChange: handlePaymentChange,
    value: item,
    name: "insurance",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="w-full h-full  flex ">
      <Formik>
        <Form className="ml-10 w-[85%] h-full rounded-xl flex flex-col gap-4 p-4">
          <Typography className="font-bold">Optional Details</Typography>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 bg-white rounded">
              <Checkbox />
              <img src={Fragile} alt="icon" />
              <div className="flex flex-col">
                <Typography className="font-bold text-sm">Fragile</Typography>
                <Typography>Select if your item is fragile</Typography>
              </div>
            </div>
            <div className="flex gap-2 bg-white rounded">
              <Checkbox />
              <img src={Notepad} alt="icon" />
              <div className="flex flex-col">
                <Typography className="font-bold text-sm">
                  Delivery Note
                </Typography>
                <Typography>
                  Select if you have a delivery note to drop-off along with your
                  item
                </Typography>
              </div>
            </div>
            <div className="flex gap-2 bg-white rounded">
              <Checkbox />
              <img src={Sms} alt="icon" />
              <div className="flex flex-col">
                <Typography className="font-bold text-sm">
                  Pick up SMS
                </Typography>
                <Typography>
                  Select if you want sender to receive order number and
                  instructions to prepare for pick up via SMS notification after
                  order created.
                </Typography>
              </div>
            </div>
          </div>

          <Typography className="font-bold">Payment Method</Typography>
          <div className="flex gap-10 bg-white rounded">
            <div className="flex gap-2 items-center">
              <Radio {...controlPaymentProps("Credit/Debit Card")} />
              <div className="flex items-center gap-2">
                <img src={Credit} alt="" />
                <Typography>Credit/Debit Card</Typography>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Radio {...controlPaymentProps("Wallet")} />
              <div className="flex items-center gap-2">
                <img src={Wallet} alt="" />
                <Typography>Wallet</Typography>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Radio {...controlPaymentProps("Cash On Delivery")} />
              <div className="flex items-center gap-2">
                <img src={Cash} alt="" />
                <Typography>Cash On Delivery</Typography>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Radio {...controlPaymentProps("Credit Limit")} />
              <div className="flex items-center gap-2">
                <Typography>Credit Limit</Typography>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Radio {...controlPaymentProps("Draft Order")} />
              <div className="flex items-center gap-2">
                <Typography>Draft Order</Typography>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Radio {...controlPaymentProps("None")} />
              <div className="flex items-center gap-2">
                <Typography>None</Typography>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FinalizeForm;
 */
