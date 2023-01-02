import { Typography } from "@mui/material";
import FormCompleted from "../../../assets/svg/Form_Complete.svg";
const Complete = () => {
  return (
    <div className="flex flex-col rounded w-full h-min items-center justify-center gap-4 p-10">
      <Typography variant="h5">Success!</Typography>
      <img className="w-40" src={FormCompleted} alt="" />
      <Typography>Registeration Complete</Typography>
    </div>
  );
};

export default Complete;
