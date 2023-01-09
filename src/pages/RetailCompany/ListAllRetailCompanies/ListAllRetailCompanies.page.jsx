import ListAllCompanies from "../../../components/CompaniesList/CompaniesListAll.component";
const ListAllRetailCompanies = () => {
  return (
    <div>
      <ListAllCompanies
        route="/admin/retail-company/detail"
        title="Retail Outlet"
        btnName="New Company"
      />
    </div>
  );
};

export default ListAllRetailCompanies;
