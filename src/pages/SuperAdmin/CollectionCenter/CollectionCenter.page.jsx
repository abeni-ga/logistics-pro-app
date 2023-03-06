import { Button, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CollectionItem from "../../../components/Collection/CollectionItem.component.jsx";
import { color } from "../../../constants/Theme.js";
import { getCollectionCenters } from "../../../utils/apis.js";
const CollectionCenter = () => {
  const navigate = useNavigate();
  const [collectionCenters, setcollectionCenters] = useState([]);
  const handleGetCollectionCenters = useCallback(async () => {
    const response = await getCollectionCenters({});
    if (response?.status < 300) {
      setcollectionCenters(response?.data?.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, []);
  useEffect(() => {
    handleGetCollectionCenters();
  }, [handleGetCollectionCenters]);
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
      <div className="flex flex-col w-full h-[80%] gap-2">
        {collectionCenters.map((collectionCenter, index) => (
          <CollectionItem collectionCenter={collectionCenter} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CollectionCenter;
