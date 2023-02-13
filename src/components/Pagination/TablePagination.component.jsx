import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Button, Popover, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const TablePagination = ({
  handlePageLimit,
  handleOffSet,
  pageLimit,
  pageSize,
}) => {
  const [page, setPage] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [offSet, setOffSet] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [limit, setLimit] = useState(pageLimit);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  console.log("limit", pageLimit);
  console.log("pageSize", pageSize);
  useEffect(() => {
    handlePageLimit(limit);
  }, [handlePageLimit, limit]);
  useEffect(() => {
    handleOffSet(offSet);
    console.log("offset", offSet);
  }, [handleOffSet, offSet]);
  const handleNext = () => {
    console.log(page, pageSize);
    setPage((prev) => (pageSize > prev && prev < 3 ? prev + 1 : prev));
    setPageNo((prev) => (page === 3 && prev < pageSize - 2 ? prev + 1 : prev));
    setOffSet((prev) => (pageSize - 1 > prev ? prev + 1 : prev));
  };
  const handlePrev = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
    setPageNo((prev) => (page === 1 && prev > 1 ? prev - 1 : prev));
    setOffSet((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-2">
        <Typography>Show {limit} per pages</Typography>
        <KeyboardArrowDown onClick={handleClick} />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="flex flex-col">
            <Button
              onClick={() => {
                setLimit(7);
              }}
              className="w-[150px] text-darkGray"
            >
              7
            </Button>
            <div className="w-full h-0.5 bg-slate-200"></div>
            <Button
              onClick={() => {
                setLimit(10);
              }}
              className="w-[150px] text-darkGray"
            >
              10
            </Button>
            <div className="w-full h-0.5 bg-slate-200"></div>
            <Button
              onClick={() => {
                setLimit(20);
              }}
              className="w-[150px] text-darkGray"
            >
              20
            </Button>
          </div>
        </Popover>
      </div>
      <div className="flex gap-2">
        <KeyboardArrowLeft onClick={handlePrev} />
        <div className="flex gap-4">
          <span
            className={`${
              page === 1 ? "bg-blue-100 px-2 rounded text-blue-500" : ""
            }?`}
          >
            {pageNo}
          </span>
          {pageSize > 1 ? (
            <span
              className={`${
                page === 2 ? "bg-blue-100 px-2 rounded text-blue-500" : ""
              }?`}
            >
              {pageNo + 1}
            </span>
          ) : null}
          {pageSize > 2 ? (
            <span
              className={`${
                page === 3 ? "bg-blue-100 px-2 rounded text-blue-500" : ""
              }?`}
            >
              {pageNo + 2}
            </span>
          ) : null}
        </div>

        <KeyboardArrowRight onClick={handleNext} className="text-blue-500" />
      </div>
    </div>
  );
};

export default TablePagination;
