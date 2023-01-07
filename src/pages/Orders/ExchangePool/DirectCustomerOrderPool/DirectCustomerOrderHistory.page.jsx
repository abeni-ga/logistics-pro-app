import CompaniesOrderHistroyComp from "../../../../components/CompaniesOrder/CompaniesOrderHistoryComp.component";

const DirectCustomerOrderHistory = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-[15%] pl-12">header</div>
      <CompaniesOrderHistroyComp />
    </div>
  );
};

export default DirectCustomerOrderHistory;
