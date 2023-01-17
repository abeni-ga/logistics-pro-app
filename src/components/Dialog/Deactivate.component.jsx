import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { color } from "../../constants/Theme.js";
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
          <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
            Confirm deactivation
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
            }}
          >
            <CloseIcon />
          </IconButton>
          <img src={Deactive} alt="" />
          <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
            Are you sure you want to deactive plan?
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
            Deactive
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default DeactiveDialog;
