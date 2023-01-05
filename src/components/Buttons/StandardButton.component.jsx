import { Button, styled } from "@mui/material";
import { color } from "../../constants/Theme";

const StandardButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(color.indigo),
  backgroundColor: color.indigo,
  "&:hover": {
    backgroundColor: color.darkIndigo,
  },
  textTransform: "capitalize",
  borderRadius: "10px",
}));

export default StandardButton;
