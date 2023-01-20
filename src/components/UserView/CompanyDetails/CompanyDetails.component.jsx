import CompanyAccountDetail from "./CompanyAccountDetail.component";
import CompanyInfoDetail from "./CompanyInfoDetail.component";
import CompanyOrdersList from "./CompanyOrderTable/CompanyOrdersList.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RetailTableHeader from "../../PageFilterAndButton/RetailCompanyTableHeader.component";
import LogisticTableHeader from "../../PageFilterAndButton/LogisticCompanyTableHeader.component";
const CompanyDetail = (props) => {
  const history = useNavigate();
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="h-[10%] flex items-center gap-2 ml-8">
        <IconButton
          onClick={() => {
            history(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
      </div>
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
