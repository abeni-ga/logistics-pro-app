import { Button, Typography } from "@mui/material";
import { color } from "../../../constants/Theme.js";
import AddIcon from "@mui/icons-material/Add";
import CouponItem from "./CouponItem.pagecomp.jsx";
import { useNavigate } from "react-router-dom";
const Coupon = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full px-5">
      <div className="flex h-[10%]  w-[75%] py-5 justify-between">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Coupons
        </Typography>
        <Button
          onClick={() => {
            navigate("/admin/setting/coupon/add");
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
        <div className="flex flex-col w-[78%] gap-5">
          <div className="flex min-h-[10%] bg-blue-100 rounded-xl px-10 items-center">
            <Typography
              sx={{
                fontSize: "24px",
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
                fontSize: "24px",
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
                fontSize: "24px",
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
                fontSize: "24px",
                fontFamily: "Roboto",
                fontWeight: "700",
                color: color.darkGray,
              }}
            >
              Amount
            </Typography>
          </div>

          <div className="flex flex-col w-full h-full">
            <CouponItem />
          </div>
        </div>
        <div className="flex flex-col w-[20%] bg-white rounded-xl h-full pl-10 pr-5 gap-10 justify-center">
          <Typography
            sx={{
              fontSize: "30px",
              fontColor: color.darkGray,
              fontWeight: "700",
            }}
          >
            VAL021
          </Typography>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Name
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: color.darkGray,
                }}
              >
                Valentine promo
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
                14b wole ariyo street, Lekki Phase 1
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
                08170000560
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
                Parcel
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
                Chinedu Joseph
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
                14b wole ariyo street, Lekki Phase 1
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
                08170000560
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
                08170000560
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
      </div>
    </div>
  );
};

export default Coupon;
