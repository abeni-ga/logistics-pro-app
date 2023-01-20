import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Deactive from "../../assets/svg/Deactivate.svg";
const DeactiveDialog = (props) => {
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
          <Typography className="text-xl font-bold">
            Confirm deactivation
          </Typography>
          <IconButton className="absolute top-0 right-0">
            <CloseIcon />
          </IconButton>
          <img src={Deactive} alt="" />
          <Typography className="text-xl font-bold">
            Are you sure you want to deactive plan?
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <div className="flex w-full justify-center">
          <Button
            className="text-white bg-darkIndigo rounded-lg mb-5 hover:text-white hover:bg-darkIndigo"
            onClick={props.handleClose}
          >
            Deactive
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default DeactiveDialog;
