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
        <FormControl className="w-[40%]">
          <Select
            className="bg-white rounded-lg"
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
        <FormControl className="w-[60%]">
          <Select
            id="size"
            value={size}
            className="bg-white rounded-lg"
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
          className="bg-white w-[69%] rounded-lg"
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
          className="w-[30%]"
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
