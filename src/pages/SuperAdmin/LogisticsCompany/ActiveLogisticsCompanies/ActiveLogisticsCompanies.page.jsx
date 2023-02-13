import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageHeader from "../../../../components/Header/PageHeader.component";
import ListViewHeader from "../../../../components/PageFilterAndButton/ListViewHeader.component";
import TablePagination from "../../../../components/Pagination/TablePagination.component";
import UserListTable from "../../../../components/UserView/UserList/UserListTable.component";
import { getUsers } from "../../../../utils/apis";
const ActiveLogisticsCompanies = () => {
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
      searchBy: "firstName,lastName",
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
      console.log(response?.data?.data);
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
    navigate("/admin/logistics-company/register");
  };
  const handleSearch = (keyword) => {
    setKeyWord(keyword);
  };

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);
  return (
    <div className=" w-full h-screen bg-transparent p-10 flex flex-col">
      <div className="flex flex-col h-[20%] w-full">
        <PageHeader
          handleSearch={handleSearch}
          title="Active Logistic Companies"
        />
        <ListViewHeader btnName="Register Company" action={handleAction} />
      </div>
      <div className="flex flex-col h-[75%] w-full overflow-auto">
        <UserListTable
          companies={companies}
          route="/admin/logistics-company/detail"
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
  );
};

export default ActiveLogisticsCompanies;
