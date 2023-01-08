import { Typography } from "@mui/material";
import ListViewHeader from "../PageFilterAndButton/ListViewHeader.component.jsx";
import CompaniesListTable from "./CompaniesListTable.component.jsx";
const ListAllCompanies = (prop) => {
  return (
    <div className=" w-screen lg:w-full h-full bg-transparent p-10 flex flex-col gap-5 flex-wrap min-w-min">
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {prop.title}
      </Typography>
      <ListViewHeader btnName={prop.btnName} />
      <CompaniesListTable route={prop.route} />
    </div>
  );
};

export default ListAllCompanies;
