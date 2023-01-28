import PageHeader from "../../../../components/Header/PageHeader.component";
import RetailTableHeader from "../../../../components/PageFilterAndButton/RetailCompanyTableHeader.component";
import CompanyAccountDetail from "../../../../components/UserView/CompanyDetails/CompanyAccountDetail.component";
import CompanyInfoDetail from "../../../../components/UserView/CompanyDetails/CompanyInfoDetail.component";
import CompanyOrdersList from "../../../../components/UserView/CompanyDetails/CompanyOrderTable/CompanyOrdersList.component";

const RetailCompanyDetail = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <PageHeader title="Retail Outlets" backBtn className="h-[10%]" />
      <div className="flex w-full h-[85%] pt-4">
        <div className="flex flex-col w-[35%] h-full items-center">
          <CompanyInfoDetail user={false} />
          <CompanyAccountDetail retail />
        </div>
        <div className=" flex flex-col w-[65%] h-full items-center gap-5">
          <RetailTableHeader />
          <CompanyOrdersList />
        </div>
      </div>
    </div>
  );
};

export default RetailCompanyDetail;
