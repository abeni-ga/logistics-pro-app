import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageHeader from "../../../../components/Header/PageHeader.component";
import ListViewHeader from "../../../../components/PageFilterAndButton/ListViewHeader.component";
import TablePagination from "../../../../components/Pagination/TablePagination.component";
import UserListTable from "../../../../components/UserView/UserList/UserListTable.component";
import { getUsers } from "../../../../utils/apis";
const ViewLogisticsCompanies = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [pageLimit, setPageLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageSize, setPageSize] = useState(1);

  const [keyWord, setKeyWord] = useState("");

  const handleGetUsers = useCallback(async () => {
    const params = new URLSearchParams({
      limit: pageLimit,
      offset: offset * pageLimit,
      filterBy: "role",
      filterValue: "DeliveryCompany",
      populate: "detail",
      searchBy: "name",
      keyWord: keyWord,
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
      setCompanies(response?.data?.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, [pageLimit, offset, keyWord]);
  const handlePageLimit = (limit) => {
    setPageLimit(limit);
  };
  const handleOffset = (offSet) => {
    setOffset(offSet);
  };
  const handleAction = () => {
    navigate("/admin/logistics-company/register");
  };
  const handleSearch = (keyword) => {
    setKeyWord(keyword);
  };

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);
  return companies.length > 0 ? (
    <div className=" flex flex-col w-full h-screen items-center px-3">
      <div className="flex flex-col h-[15%] w-full">
        <PageHeader
          handleSearch={handleSearch}
          title="Active Logistic Companies"
        />
        <ListViewHeader btnName="Register Company" action={handleAction} />
      </div>
      <div className="flex flex-col h-[75%] w-full">
        <UserListTable companies={companies} />
      </div>
      <div className="h-[5%] w-full">
        <TablePagination
          pageSize={pageSize}
          pageLimit={pageLimit}
          handleOffSet={handleOffset}
          handlePageLimit={handlePageLimit}
        />
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default ViewLogisticsCompanies;
