import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cargo from "../../assets/svg/Cargo.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PageHeader = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2 h-20">
      {props.backBtn ? (
        <IconButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      ) : null}

      <Typography className="font-bold text-2xl">{props.title}</Typography>
      {props.summary ? <img src={Cargo} alt="" /> : null}
    </div>
  );
};

export default PageHeader;
