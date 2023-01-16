import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../../../components/Collection/CollectionItem.component.jsx";
import { color } from "../../../constants/Theme.js";
const CollectionCenter = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full items-center px-10">
      <div className="flex h-[15%] w-full items-center justify-between">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Collection Centers
        </Typography>
        <Button
          variant="outlined"
          sx={{ color: color.darkIndigo, borderColor: color.darkIndigo }}
          onClick={() => {
            navigate("/admin/collection-center/add");
          }}
        >
          Add New
        </Button>
      </div>
      <div className="flex flex-col w-full h-[80%]">
        <CollectionItem />
      </div>
    </div>
  );
};

export default CollectionCenter;
