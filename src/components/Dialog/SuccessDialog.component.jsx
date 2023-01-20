import { Dialog, DialogContent, Typography } from "@mui/material";
import FormComplete from "../../assets/svg/Form_Complete.svg";
const SuccessDialog = (props) => {
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: "25%",
          height: "30%",
        },
      }}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <div className="flex flex-col items-center gap-5 justify-center">
          <Typography className="text-xl font-bold">Success!</Typography>
          <img src={FormComplete} alt="" />
          <Typography className="text-xl font-bold">
            Order Was Successful
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
