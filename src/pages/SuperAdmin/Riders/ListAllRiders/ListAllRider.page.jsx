import { Typography } from "@mui/material";
import RiderViewHeader from "../../../../components/PageFilterAndButton/RiderViewHeader.component";
import RiderAccountDetail from "../../../../components/Rider/RiderInfo/RiderAccountDetail.component";
import RiderListTable from "../../../../components/Rider/RIderListView/RiderListTable.component";
import RiderInfoDetail from "../../../../components/Rider/RiderInfo/RiderInfoDetail.component";
import TablePagination from "../../../../components/Pagination/TablePagination.component";
import { useEffect, useState } from "react";
import { getUsers } from "../../../../utils/apis";
import { toast } from "react-toastify";
const ListRiders = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [riders, setRiders] = useState([]);

  const handleGetUsers = async () => {
    try {
      const params = new URLSearchParams({
        limit: 10,
        offset: 1,
      });
      const response = await getUsers({}, `?${params.toString()}`);
      setRiders(response);
      console.log("riders", response);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col w-[95%] h-full items-center">
        <div className="flex items-start w-full">
          <Typography className="font-bold py-5 text-start">Riders</Typography>
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

export default ListRiders;
