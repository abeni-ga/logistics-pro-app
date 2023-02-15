import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageHeader from "../../../../components/Header/PageHeader.component";
import RetailTableHeader from "../../../../components/PageFilterAndButton/RetailCompanyTableHeader.component";
import CompanyAccountDetail from "../../../../components/UserView/CompanyDetails/CompanyAccountDetail.component";
import CompanyInfoDetail from "../../../../components/UserView/CompanyDetails/CompanyInfoDetail.component";
import CompanyOrdersList from "../../../../components/UserView/CompanyDetails/CompanyOrderTable/CompanyOrdersList.component";
import { getUser } from "../../../../utils/apis";

const RetailCompanyDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(undefined);
  const handleGetUser = useCallback(async () => {
    const params = new URLSearchParams({
      populate: "detail",
    });
    const response = await getUser({}, `?${params.toString()}`, id);
    if (response?.status < 300) {
      setUser(response.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, [id]);
  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  return user ? (
    <div className="flex flex-col w-full h-screen">
      <PageHeader title="Retail Outlets" backBtn className="h-[10%]" />
      <div className="flex w-full h-[85%] pt-4">
        <div className="flex flex-col w-[35%] h-full items-center">
          <CompanyInfoDetail customer={false} />
          <CompanyAccountDetail retail />
        </div>
        <div className=" flex flex-col w-[65%] h-full items-center gap-5">
          <RetailTableHeader user={user} />
          <CompanyOrdersList user={user} />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default RetailCompanyDetail;
