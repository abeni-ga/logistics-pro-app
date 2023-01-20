import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Delete from "../../assets/svg/Delete.svg";
const DeleteDialog = (props) => {
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
          <Typography className="text-xl font-bold">Confirm delete</Typography>
          <IconButton className="absolute top-0 right-0">
            <CloseIcon />
          </IconButton>
          <img src={Delete} alt="" />
          <Typography className="text-xl font-bold">
            Are you sure you want to delete plan?
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <div className="flex w-full justify-center">
          <Button
            onClick={props.handleClose}
            className="text-white bg-darkIndigo rounded-lg mb-5 hover:text-white hover:bg-darkIndigo"
          >
            Delete
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
