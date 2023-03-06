import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageHeader from "../../../../components/Header/PageHeader.component";
import ListViewHeader from "../../../../components/PageFilterAndButton/ListViewHeader.component";
import TablePagination from "../../../../components/Pagination/TablePagination.component";
import UserListTable from "../../../../components/UserView/UserList/UserListTable.component";
import { routes } from "../../../../routes/siteRoutes.routes";
import { getUsers } from "../../../../utils/apis";

const ActiveRetailCompanies = () => {
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
      filterValue: "RetailCompany",
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
      Number.isInteger();
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
    navigate(routes.admin.registerDeliveryCompany);
  };
  const handleSearch = (keyword) => {
    setKeyWord(keyword);
  };

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);
  return companies.length > 0 ? (
    <div className=" w-full h-screen bg-transparent px-10 flex flex-col">
      <div className="flex flex-col w-full">
        <PageHeader title="Active Retail Outlets" handleSearch={handleSearch} />
        <ListViewHeader btnName="New Company" action={handleAction} />
      </div>
      <div className="flex flex-col h-[75%] w-full overflow-auto">
        <UserListTable
          route="/admin/retail-company/detail"
          companies={companies}
        />
      </div>
      <div className="h-[5%]">
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

export default ActiveRetailCompanies;
