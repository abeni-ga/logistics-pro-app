import { Button, Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
import CheckIcon from "@mui/icons-material/Check";

const RegistrationDocument = () => {
  return (
    <div className="flex w-[80%] justify-center items-center">
      <Typography sx={{ width: "50%" }}>Business Registration Slip</Typography>
      <Typography
        sx={{
          color: "green",
          width: "25%",
          textAlign: "center",
        }}
      >
        <CheckIcon />
      </Typography>
      <div className="w-[25%]">
        <Button
          sx={{
            textTransform: "capitalize",
            borderRadius: "10px",
            borderColor: color.lightGray,
          }}
          variant="outlined"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default RegistrationDocument;
