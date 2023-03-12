import { Button, Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
import AddIcon from "@mui/icons-material/Add";
import CouponItem from "./CouponItem.pagecomp.jsx";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
import { useCallback, useEffect, useState } from "react";
import { getCoupons } from "../../../utils/apis.js";
import { toast } from "react-toastify";

const Coupon = () => {
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(undefined);

  const handleGetCoupon = useCallback(async () => {
    const response = await getCoupons({});
    if (response?.status < 300) {
      setCoupons(response?.data?.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, []);

  useEffect(() => {
    handleGetCoupon();
  }, [handleGetCoupon]);

  return (
    <div className="flex flex-col w-full h-full px-5">
      <div className="flex h-[10%]  w-full py-5 justify-between">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Coupons
        </Typography>
        <Button
          onClick={() => {
            navigate(routes.admin.addCoupon);
          }}
          variant="outlined"
          sx={{
            color: color.mainRed,
            borderColor: color.lightGray,
            ":hover": {
              borderColor: color.lightGray,
            },
          }}
          startIcon={<AddIcon />}
          size="large"
        >
          Add New
        </Button>
      </div>
      <div className="flex w-full h-[90%] justify-between">
        <div className="flex flex-col w-full gap-5">
          <div className="flex min-h-[10%] bg-blue-100 rounded-xl px-10 items-center">
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: color.darkGray,
                width: "15%",
              }}
            >
              Code
            </Typography>
            <Typography
              sx={{
                width: "30%",
                fontSize: "20px",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: color.darkGray,
              }}
            >
              Coupon title
            </Typography>
            <Typography
              sx={{
                width: "30%",
                fontSize: "20px",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: color.darkGray,
                paddingLeft: "30px",
              }}
            >
              Status
            </Typography>
            <Typography
              sx={{
                width: "15%",
                fontSize: "20px",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: color.darkGray,
              }}
            >
              Amount
            </Typography>
          </div>

          <div className="flex flex-col w-full h-full gap-2">
            {coupons && coupons.length < 1 && (
              <div className="flex w-full mt-5 items-center justify-center">
                <Typography className="text-gray-400 font-bold text-2xl">
                  No Coupons
                </Typography>
              </div>
            )}
            {coupons.map((coupon, index) => (
              <CouponItem
                couponId={coupon._id}
                onClick={() => {
                  setSelectedCoupon(coupon);
                }}
                status={coupon.isActive ? "Active" : "Expired"}
                amount={coupon.amount}
                code={coupon.couponCode}
                discountType={coupon.discountType}
                name={coupon.couponName}
                key={index}
              />
            ))}
          </div>
        </div>
        {selectedCoupon && (
          <div className="flex flex-col w-[20%] bg-white rounded-xl h-full pl-10 pr-5 gap-10 justify-center mx-2">
            <Typography
              sx={{
                fontSize: "30px",
                fontColor: color.darkGray,
                fontWeight: "700",
              }}
            >
              {selectedCoupon.couponCode}
            </Typography>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  {selectedCoupon.couponName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: color.darkGray,
                  }}
                >
                  {selectedCoupon.couponCode}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  Item count
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: color.darkGray,
                  }}
                >
                  {selectedCoupon.itemCount}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  Limit
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: color.darkGray,
                  }}
                >
                  {selectedCoupon.limit}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  Discount type
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: color.darkGray,
                  }}
                >
                  {selectedCoupon.discountType}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  Discount Amount
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: color.darkGray,
                  }}
                >
                  {selectedCoupon.amount}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  Minimum spend
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: color.darkGray,
                  }}
                >
                  {selectedCoupon.minimumSpend}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  Start Date
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: color.darkGray,
                  }}
                >
                  {new Date(selectedCoupon.startDate).toDateString()}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  End Date
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: color.darkGray,
                  }}
                >
                  {new Date(selectedCoupon.endDate).toDateString()}
                </Typography>
              </div>
            </div>
            <Button
              variant="outlined"
              size="large"
              sx={{
                fontSize: "22px",
                color: color.darkIndigo,
                borderColor: color.darkIndigo,
                ":hover": {
                  color: color.darkIndigo,
                  borderColor: color.darkIndigo,
                },
              }}
            >
              Activate
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coupon;
