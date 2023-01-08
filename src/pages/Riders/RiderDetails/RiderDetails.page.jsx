import FilterAndActionButton from "../../../components/PageFilterAndButton/OrderViewHeader";
import RiderAccountDetail from "../../../components/Rider/RiderAccountDetail.component";
import RiderOrderTable from "../../../components/Rider/RiderOrderTable.compnent";

const RiderDetails = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-[15%]">header</div>
      <div className="flex w-full h-screen">
        <div className="w-[35%] h-full flex items-center justify-center">
          <RiderAccountDetail />
        </div>
        <div className="w-[65%] flex justify-center h-min">
          <div className="flex items-center w-[98%] flex-col gap-2">
            <FilterAndActionButton btnName="Search" />
            <RiderOrderTable />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RiderDetails;

// <div className="w-[90%]">
//   <RiderOrderTable />
// </div>
