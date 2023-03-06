import { Dialog, DialogContent, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Delete from "../../assets/svg/Delete.svg";
import StandardButton from "../Buttons/StandardButton.component";
const DeleteDialog = (props) => {
  return (
    <Dialog
      PaperProps={{
        sx: {
          display: "flex",
          width: "25%",
          height: "35%",
        },
      }}
      open={props.open}
      onClose={props.handleClose}
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
          position: "relative",
        }}
      >
        <CloseIcon
          onClick={props.handleClose}
          sx={{
            position: "absolute",
            right: "2px",
            top: "2px",
          }}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Confirm delete
        </Typography>
        <img src={Delete} alt="" />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Are you sure you want to delete plan?
        </Typography>
        <StandardButton onClick={props.handleClose}>Delete</StandardButton>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
