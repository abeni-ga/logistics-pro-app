import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { color } from "../../constants/Theme.js";
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
        <div className="flex flex-col items-center gap-5 justify-center">
          <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
            Success!
          </Typography>
          <img src={FormComplete} alt="" />
          <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
            Order Was Successful
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <div className="flex w-full justify-center">
          <Button
            onClick={props.handleClose}
            sx={{
              color: "white",
              backgroundColor: color.darkIndigo,
              borderRadius: "10px",
              marginBottom: "20px",
              ":hover": {
                color: "white",
                backgroundColor: color.darkIndigo,
              },
            }}
          >
            Continue
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialogWithAction;
