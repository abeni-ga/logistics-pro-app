import CompaniesOrderPoolTable from "../../../../../components/OrderPool/CompaniesOrderTable.component";

const DirectCustomerOrderPool = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center ">
      <div className="h-[20%] w-95%">header</div>
      <div className="w-[95%] h-[80%]">
        <CompaniesOrderPoolTable />
      </div>
    </div>
  );
};

export default DirectCustomerOrderPool;
