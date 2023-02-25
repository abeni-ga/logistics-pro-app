import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import FormComplete from "../../assets/svg/Form_Complete.svg";
import StandardButton from "../Buttons/StandardButton.component";
const SuccessDialogWithAction = ({ open, handleClose, content }) => {
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: "25%",
          height: "35%",
        },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          Success!
        </Typography>
        <img src={FormComplete} alt="" />
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {content}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <StandardButton onClick={handleClose}>Continue</StandardButton>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialogWithAction;
