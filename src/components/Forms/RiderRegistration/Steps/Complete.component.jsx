import { Typography } from "@mui/material";
import FormCompleted from "../../../../assets/svg/Form_Complete.svg";
const Complete = () => {
  return (
    <div className="flex flex-col rounded w-full h-full items-center gap-4">
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Success!
      </Typography>
      <img className="w-40" src={FormCompleted} alt="" />
      <Typography sx={{ fontWeight: "bold" }}>
        Registeration Complete
      </Typography>
    </div>
  );
};

export default Complete;
