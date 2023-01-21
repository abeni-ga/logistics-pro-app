import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import FormComplete from "../../assets/svg/Form_Complete.svg";
const SuccessDialogWithAction = (props) => {
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: "25%",
          height: "35%",
        },
      }}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        sx=
        {{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
        <Typography className="text-xl font-bold">Success!</Typography>
        <img src={FormComplete} alt="" />
        <Typography className="text-xl font-bold">
          Order Was Successful
        </Typography>
      </DialogContent>
      <DialogActions>
        <div className="flex w-full justify-center">
          <Button
            onClick={props.handleClose}
            className="text-white bg-darkIndigo rounded-lg mb-5 hover:text-white hover:bg-darkIndigo"
          >
            Continue
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialogWithAction;
