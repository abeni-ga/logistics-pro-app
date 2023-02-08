import { Typography } from "@mui/material";
import RiderViewHeader from "../../PageFilterAndButton/RiderViewHeader.component";
import RiderAccountDetail from "../RiderInfo/RiderAccountDetail.component";
import RiderListTable from "../RIderListView/RiderListTable.component";
import RiderInfoDetail from "../RiderInfo/RiderInfoDetail.component";
import TablePagination from "../../Pagination/TablePagination.component";
import { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../../utils/apis";
import { toast } from "react-toastify";

const RiderList = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [riders, setRiders] = useState([]);
  const [offset, setOffset] = useState(1); //attach this to pagination

  const handleGetUsers = useCallback(async () => {
    const params = new URLSearchParams({
      limit: 10,
      offset: offset,
      populate: "detail",
      filterBy: "role", // if you want to add another filter lets say active riders pass role,accountStatus here
      filterValue: "Rider", // then here pass Rider,Active
    });
    const response = await getUsers({}, `?${params.toString()}`);
    if (response.status < 300) {
      setRiders(response.data?.data?.data);
    } else {
      toast.error(response.statusText);
    }
  }, [offset]);

  console.table(riders);

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-[95%] h-full items-center">
        <div className="flex items-start w-full">
          <Typography className="font-bold py-5 text-start">
            Active Riders
          </Typography>
        </div>
        <div className="w-full flex">
          <RiderViewHeader btnName={"New Rider"} />
        </div>
        <div className="flex w-full h-screen">
          <div
            className={` flex flex-col h-full gap-5 ${
              fullScreen ? "w-full" : "w-[65%]"
            }`}
          >
            <div className="w-full h-[80%] overflow-auto">
              <RiderListTable riders={riders} />
            </div>
            <div className="w-full h-[5%]">
              <TablePagination />
            </div>
          </div>
          {fullScreen ? null : (
            <div className=" w-[35%] h-full flex flex-col items-center pt-8">
              <RiderInfoDetail />
              <RiderAccountDetail review />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiderList;
