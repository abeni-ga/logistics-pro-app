import { Button, Typography } from "@mui/material";
import { color } from "../../constants/Theme.js";
const EarningTableItem = () => {
  return (
    <div className="flex w-full justify-between border-b-2 py-4">
      <div className="flex flex-col items-start w-[20%] ">
        <Typography
          sx={{
            backgroundColor: color.bgWhiteSmoke,
            padding: "1px 8px",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        >
          1
        </Typography>
        <Typography sx={{ color: color.darkIndigo, fontSize: "14px" }}>
          #011211211
        </Typography>
        <Typography sx={{ color: color.lightGray, fontSize: "14px" }}>
          02/03/21 10:25
        </Typography>
      </div>
      <div className="flex flex-col w-[20%] items-center">
        <Typography
          sx={{ textAlign: "center", fontSize: "14px", color: color.bolow }}
        >
          Cash
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "14px", color: color.darkGray }}
        >
          N110,100,500.00
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            width: "75%",
            fontSize: "14px",
            color: color.darkIndigo,
            backgroundColor: color.lightBlue,
            borderRadius: "6px",
          }}
        >
          N150.00
        </Typography>
      </div>
      <div className="flex flex-col items-center w-[20%]">
        <Typography
          sx={{ textAlign: "center", fontSize: "14px", color: color.black }}
        >
          FZ <br /> Deliveries
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            width: "75%",
            color: color.brightGreen,
            backgroundColor: color.lightGreen,
            borderRadius: "6px",
          }}
        >
          Completed
        </Typography>
      </div>
      <div className="flex items-center justify-end w-[20%]">
        <Button
          sx={{
            color: color.lightGray,
            borderColor: color.lightGray,
            borderRadius: "8px",
          }}
          variant="outlined"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default EarningTableItem;
