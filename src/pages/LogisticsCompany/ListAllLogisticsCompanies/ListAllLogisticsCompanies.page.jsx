import ListAllCompanies from "../../../components/CompaniesList/CompaniesListAll.component";
const ListAllLogisticsCompanies = () => {
  return (
    <div>
      <ListAllCompanies
        route="/admin/logistics-company/detail"
        title={"Logistic Companies"}
        btnName="Register Company"
      />
    </div>
  );
};

export default ListAllLogisticsCompanies;
