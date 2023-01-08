import RiderAccountDetail from "../../../components/Rider/RiderAccountDetail.component";
import RiderListTable from "../../../components/Rider/RiderListTable.component";

const ListAllRider = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-[10%]">header</div>
      <div className="flex w-full h-screen">
        <div className="w-[65%] flex justify-center h-full">
          <div className="w-[90%]">
            <RiderListTable />
          </div>
        </div>
        <div className="w-[35%] h-full flex items-center justify-center">
          <RiderAccountDetail />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ListAllRider;
