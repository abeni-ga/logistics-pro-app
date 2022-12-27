import { SearchRounded } from "@mui/icons-material";
import { Avatar, InputAdornment, TextField } from "@mui/material";

const TopBar = ({ image, name }) => {
  return (
    <div className="bg-white flex flex-row w-full h-14 align-middle justify-between">
      <div className="p-2 ml-12">
        <TextField
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded />
              </InputAdornment>
            ),
          }}
          variant="standard"
          size="small"
        />
      </div>

      <div className="flex flex-row p-2 mr-10 gap-3">
        <Avatar src={image ?? ""} />
        <h3>{name ?? "user"}</h3>
      </div>
    </div>
  );
};

export default TopBar;