import { Typography } from "@mui/material";
import CollectionItem from "../../../components/Collection/CollectionItem.component.jsx";
const CollectionCenter = () => {
  return (
    <div className="flex flex-col w-full h-full items-center px-10">
      <div className="flex h-[20%] w-full">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Collection Centers
        </Typography>
      </div>
      <div className="flex flex-col w-full h-[80%]">
        <CollectionItem />
      </div>
    </div>
  );
};

export default CollectionCenter;
