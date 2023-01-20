import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useState } from "react";

const TablePagination = () => {
  const [page, setPage] = useState(1);
  const handleNext = () => {
    setPage((prev) => (prev < 3 ? prev + 1 : prev));
  };
  const handlePrev = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-2">
        <Typography>Show 10 per pages</Typography>
        <KeyboardArrowDown />
      </div>
      <div className="flex gap-2">
        <KeyboardArrowLeft onClick={handlePrev} />
        <div className="flex gap-4">
          <span
            className={`${
              page === 1 ? "bg-blue-100 px-2 rounded text-blue-500" : ""
            }?`}
          >
            1
          </span>
          <span
            className={`${
              page === 2 ? "bg-blue-100 px-2 rounded text-blue-500" : ""
            }?`}
          >
            2
          </span>
          <span
            className={`${
              page === 3 ? "bg-blue-100 px-2 rounded text-blue-500" : ""
            }?`}
          >
            3
          </span>
        </div>

        <KeyboardArrowRight onClick={handleNext} className="text-blue-500" />
      </div>
    </div>
  );
};

export default TablePagination;
