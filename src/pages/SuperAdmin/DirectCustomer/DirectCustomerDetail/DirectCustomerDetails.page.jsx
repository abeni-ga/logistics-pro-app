import PageHeader from "../../../../components/Header/PageHeader.component.jsx";
import RetailTableHeader from "../../../../components/PageFilterAndButton/RetailCompanyTableHeader.component.jsx";
import CompanyAccountDetail from "../../../../components/UserView/CompanyDetails/CompanyAccountDetail.component.jsx";
import CompanyInfoDetail from "../../../../components/UserView/CompanyDetails/CompanyInfoDetail.component.jsx";
import CompanyOrdersList from "../../../../components/UserView/CompanyDetails/CompanyOrderTable/CompanyOrdersList.component.jsx";
const DirectCustomerDetail = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <PageHeader title="View Customers" backBtn className="h-[10%]" />
      <div className="flex w-full h-[85%] pt-4">
        <div className="flex flex-col w-[35%] h-full items-center">
          <CompanyInfoDetail user={true} />
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

export default DirectCustomerDetail;
