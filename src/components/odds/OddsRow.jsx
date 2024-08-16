import HttpsIcon from '@mui/icons-material/Https';
import Tv from "../../assets/svg/tv";
import { bmIcon, facebook } from "../../assets";
import OddsButton from "./OddsButton";
import { Link } from "react-router-dom";
import moment from "moment";
import { useMediaQuery } from "../../useMediaQuery";
import OddsRowHeading from "./OddsRowHeading";
////styles
import "./styles.scss";
const OddsRow = ({ item }) => {
  const isMobile = useMediaQuery("(max-width:780px)")
  return (
    <Link to={`/game-detail/${item?.sport_id}/${item?.match_id}/${item?.market_id}`}>
      <div className="odds-row-container w-full flex justify-between gap-4">
        <div className="odds-row-left-col w-[60%] flex justify-between pl-2 items-center">
          <span className="text-[13px]">{item?.name}{isMobile ? <br /> : "/"}
            <p>
            {moment(
              parseInt(
                item && item.start_date ? item.start_date : null,
              ) * 1000,
            )
              .utcOffset("+05:30")
              .format("DD/MM/YYYY, HH:mm:ss ")}
              {/* {item && moment(Number(item?.start_date)).format("DD/MM/YYYY , hh:mm:ss")} */}
            </p>
          </span>
          <div className="icon-di flex
            items-center
            gap-[10px]">
            <div className="active-match"></div>
            <Tv />
            <img src={facebook} alt="" className=" h-[12px]" />
            <img src={bmIcon} alt="" className=" h-[12px]" />
          </div>
        </div>
        {isMobile &&
          <OddsRowHeading />
        }
        <div className="odds-row-right-col w-[40%] ">
          <ul className="w-full grid grid-cols-3 ">


            <li className="w-full grid grid-cols-2 relative">
              <OddsButton price={item && item?.runner_json[0]?.ex?.availableToBack[0].price ? item?.runner_json[0]?.ex?.availableToBack[0].price : "-"} />
              {item && item?.InplayStatus === "CLOSE" ?
                <div className="lock-odds bg-[#373636d6] absolute left-0 top-0 w-full h-full flex items-center justify-center">
                  <HttpsIcon />
                </div> : ""}
              <OddsButton lay={true} price={item && item?.runner_json[0]?.ex?.availableToLay[0].price ? item?.runner_json[0]?.ex?.availableToLay[0].price : "-"} /></li>
            <li className="w-full grid grid-cols-2">
              <OddsButton price={item?.runner_json[2]?.ex?.availableToBack[0].price ? item?.runner_json[2]?.ex?.availableToBack[0].price : "-"} />

              <OddsButton lay={true} price={item?.runner_json[2]?.ex?.availableToLay[0].price ? item?.runner_json[2]?.ex?.availableToLay[0].price : "-"} /></li> <li className="w-full grid grid-cols-2 relative">
              {item && item?.InplayStatus === "CLOSE" ?
                <div className="lock-odds bg-[#373636d6] absolute left-0 top-0 w-full h-full flex items-center justify-center">
                  <HttpsIcon />
                </div> : ""}
              <OddsButton price={item?.runner_json[1]?.ex.availableToBack[0].price} />
              <OddsButton lay={true} price={item?.runner_json[1]?.ex.availableToLay[0].price} /></li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default OddsRow;
