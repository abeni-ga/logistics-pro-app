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

const FilterAndActionButton = ({ btnName }) => {
  const [action, setAction] = useState("export");
  const [size, setSize] = useState(7);
  const SearchBox = styled(TextField)(() => ({
    "& fieldset": {
      borderRadius: "10px",
    },
  }));
  return (
    <div className="flex items-center w-full gap-4">
      <FormControl sx={{ m: 1, width: "15%" }}>
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
          m: 1,
          width: "20%",
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
      <SearchBox
        sx={{ backgroundColor: "white", width: "40%", borderRadius: "10px" }}
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

      <StandardButton variant="contained">{btnName}</StandardButton>
    </div>
  );
};

export default FilterAndActionButton;
