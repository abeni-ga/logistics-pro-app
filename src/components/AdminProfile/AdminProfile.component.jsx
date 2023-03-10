import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Admin from "../../assets/svg/Admin.svg";

const AdminProfile = () => {
  return (
    <div className="flex flex-col w-full gap-4 border-b pb-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Avatar src={Admin} />
          <div className="flex flex-col">
            <Typography className="font-bold">Jude Adam</Typography>
            <Typography className="text-lightGray">Admin</Typography>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="flex p-5 border-2 rounded-xl gap-10">
        <div className="flex flex-col gap-2">
          <Typography className="text-darkIndigo">Registration - 24</Typography>
          <Typography className="text-darkIndigo">Supports - 24</Typography>
          <Typography className="text-darkIndigo">
            Orders created - 48
          </Typography>
        </div>
        <div className="flex flex-col gap-2">
          <Typography className="text-darkIndigo">Registration - 24</Typography>
          <Typography className="text-darkIndigo">Supports - 24</Typography>
          <Typography className="text-darkIndigo">
            Orders created - 48
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
