import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import RiderViewHeader from "../../../../components/PageFilterAndButton/RiderViewHeader.component";
import RiderAccountDetail from "../../../../components/Rider/RiderInfo/RiderAccountDetail.component";
import RiderListTable from "../../../../components/Rider/RIderListView/RiderListTable.component";
import RiderInfoDetail from "../../../../components/Rider/RiderInfo/RiderInfoDetail.component";
import TablePagination from "../../../../components/Pagination/TablePagination.component";
import { useCallback, useEffect, useState } from "react";
import { getUsers } from "../../../../utils/apis";
import { toast } from "react-toastify";

const ActiveRiderList = () => {
  const [userDetail, setUserDetail] = useState(null);
  const [riders, setRiders] = useState([]);
  const [pageSize, setPageSize] = useState(1);
  const [offset, setOffset] = useState(0); //attach this to pagination
  const [pageLimit, setPageLimit] = useState(7);
  const [keyWord, setKeyWord] = useState("");

  const handleGetUsers = useCallback(async () => {
    const params = new URLSearchParams({
      limit: pageLimit,
      offset: offset * pageLimit,
      populate: "detail",
      filterBy: "role", // if you want to add another filter lets say active riders pass role,accountStatus here
      filterValue: "Rider", // then here pass Rider,Active
      searchBy: "firstName,lastName",
      keyword: keyWord,
    });
    const response = await getUsers({}, `?${params.toString()}`);
    if (response?.status < 300) {
      if (
        Number.isInteger(
          response?.data?.data?.meta?.total / response?.data?.data?.meta?.limit
        )
      ) {
        setPageSize(
          response?.data?.data?.meta?.total / response?.data?.data?.meta?.limit
        );
      } else {
        setPageSize(
          parseInt(
            response?.data?.data?.meta?.total /
              response?.data?.data?.meta?.limit
          ) + 1
        );
      }
      console.log("riders", response.data?.data?.data);
      setRiders(response.data?.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, [offset, pageLimit, keyWord]);

  const handleOffset = (pageOffSet) => {
    setOffset(pageOffSet);
  };
  const handleSearch = (key) => {
    setKeyWord(key);
  };

  const handleUserDetail = (rider) => {
    setUserDetail(rider);
  };

  const handlePageLimit = (limit) => {
    setPageLimit(limit);
  };

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers, pageLimit, offset]);

  return riders.length > 0 ? (
    <div className="flex flex-col w-full h-screen items-center px-3">
      <div className="flex items-start w-full h-[5%]">
        <Typography className="font-bold py-5 text-start">
          Active Riders
        </Typography>
      </div>
      <div className="w-full flex h-[15%]">
        <RiderViewHeader
          btnName={"New Rider"}
          handleSearch={handleSearch}
          setRiders={setRiders}
          handlePageLimit={handlePageLimit}
          pageLimit={pageLimit}
        />
      </div>
      <div className="flex w-full h-[80%]">
        <div
          className={` flex flex-col gap-5 ${
            !userDetail ? "w-full" : "w-[65%]"
          }`}
        >
          <div className="w-full h-[80%]">
            <RiderListTable
              riders={riders}
              userDetail={userDetail}
              handleUserDetail={handleUserDetail}
            />
            <div className="w-full h-[5%]">
              <TablePagination
                handlePageLimit={handlePageLimit}
                handleOffSet={handleOffset}
                pageSize={pageSize}
                pageLimit={pageLimit}
              />
            </div>
          </div>
        </div>
        {!userDetail ? null : (
          <div className=" w-[35%] h-full flex flex-col items-center pt-8 relative">
            <CloseIcon
              className="absolute top-0 right-8"
              onClick={() => {
                handleUserDetail(null);
              }}
            />
            <RiderInfoDetail user={userDetail} />
            <RiderAccountDetail review user={userDetail} />
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default ActiveRiderList;
