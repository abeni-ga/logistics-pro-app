import CompanyAccountDetail from "./CompanyAccountDetail.component";
import CompanyInfoDetail from "./CompanyInfoDetail.component";
import CompanyOrdersList from "./CompanyOrderTable/CompanyOrdersList.component";
import RetailTableHeader from "../../PageFilterAndButton/RetailCompanyTableHeader.component";
import LogisticTableHeader from "../../PageFilterAndButton/LogisticCompanyTableHeader.component";
import PageHeader from "../../Header/PageHeader.component";
const CompanyDetail = (props) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <PageHeader title="Logistic Companies" backBtn className="h-[10%]" />
      <div className="flex w-full h-[85%] pt-4">
        <div className="flex flex-col w-[35%] h-full items-center">
          <CompanyInfoDetail user={props.user ? true : false} />
          <CompanyAccountDetail />
        </div>
        <div className=" flex flex-col w-[65%] h-full items-center gap-5">
          {props.logistic ? <LogisticTableHeader /> : <RetailTableHeader />}
          <CompanyOrdersList />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
