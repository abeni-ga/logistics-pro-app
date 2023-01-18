import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  styled,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StandardButton from "../Buttons/StandardButton.component";

const FilterAndActionButton = (props) => {
  const [action, setAction] = useState("export");
  const [size, setSize] = useState(7);
  const SearchBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: "10px",
    },
  }));
  return (
    <div className="flex flex-col md:flex-row items-center w-full gap-1 2xl:gap-4 ">
      <div className="flex w-full md:w-[35%] gap-1 items-center">
        <FormControl sx={{ width: "40%" }}>
          <Select
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
            id="quantity"
            value={action}
            placeholder="show"
            label=""
            onChange={(e) => {
              setAction(e.target.value);
            }}
          >
            <MenuItem value={"export"}>Export</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            width: "60%",
          }}
        >
          <Select
            id="size"
            value={size}
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            <MenuItem default value={7}>
              7
            </MenuItem>
            <MenuItem value={8}>9</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex w-full md:w-[64%] items-center gap-1">
        <SearchBox
          sx={{ backgroundColor: "white", width: "69%", borderRadius: "10px" }}
          variant="outlined"
          placeholder="search company here"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <StandardButton
          sx={{ width: "30%" }}
          variant="contained"
          onClick={props.action}
        >
          {props.btnName}
        </StandardButton>
      </div>
    </div>
  );
};

export default FilterAndActionButton;
