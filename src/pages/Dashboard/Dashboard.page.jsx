import CompanyAccountDetail from "../../components/UserView/CompanyDetails/CompanyAccountDetail.component";
import CompanyInfoDetail from "../../components/UserView/CompanyDetails/CompanyInfoDetail.component";
const Dashboard = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col items-center w-[35%] bg-slate-200">
        <div className="h-40 bg-black w-full">4</div>
        <div className="flex flex-col w-[90%] items-center justify-center">
          <CompanyInfoDetail />
          <CompanyAccountDetail />
        </div>
      </div>
      <div className="flex w-[50%] bg-slate-500">2</div>
    </div>
  );
};

export default Dashboard;
