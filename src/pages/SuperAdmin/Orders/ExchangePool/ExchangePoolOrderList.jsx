import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ExchangePool from "../../../../components/OrderPool/ExchangePool/ExchangePool.component";
import { getOrders } from "../../../../utils/apis";

const ExchangeOrderPool = () => {
  const [orders, setOrders] = useState([]);
  const [pageLimit, setPageLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageSize, setPageSize] = useState(1);
  const [keyWord, setKeyWord] = useState("");

  const handleGetOrders = useCallback(async () => {
    const params = new URLSearchParams({
      limit: pageLimit,
      offset: offset * pageLimit,
      searchBy: "name",
      keyWord: keyWord,
    });
    const response = await getOrders({}, `?${params.toString()}`);
    if (response?.status < 300) {
      console.log(response);
      if (
        Number.isInteger(
          response?.data?.data?.meta?.total / response?.data?.data?.meta?.limit
        )
      ) {
        setPageSize(
          response?.data?.data?.meta?.total / response?.data?.data?.meta?.limit
        );
      } else {
        setPageSize(
          parseInt(
            response?.data?.data?.meta?.total /
              response?.data?.data?.meta?.limit
          ) + 1
        );
      }
      setOrders(response?.data?.data?.data);
    } else {
      Number.isInteger();
      toast.error(response?.statusText);
    }
  }, [pageLimit, offset, keyWord]);
  const handlePageLimit = (limit) => {
    setPageLimit(limit);
  };
  const handleOffset = (offSet) => {
    setOffset(offSet);
  };
  const handleSearch = (keyword) => {
    setKeyWord(keyword);
  };

  useEffect(() => {
    handleGetOrders();
  }, [handleGetOrders]);
  return orders.length > 0 ? (
    <ExchangePool
      orders={orders}
      handleOffset={handleOffset}
      handlePageLimit={handlePageLimit}
      handleSearch={handleSearch}
      pageSize={pageSize}
      pageLimit={pageLimit}
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default ExchangeOrderPool;
