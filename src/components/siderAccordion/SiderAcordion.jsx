import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomAccordion } from "./styled";
import CollapsibleTable from "./MatchList";

import { useState } from "react";
import { Link } from "react-router-dom";


export default function AccordionUsage() {
  const [first, setfirst] = useState({
    first:true,
    second:true,
    third:true,
  })
  const casinoList = [
    {
      name: "Our Casino",
      url: "/casino/ourCasino"
    }
    ,
    {
      name: "Our Virtual",
      url: "/casino/our-virtual"
    },
    {
      name: "Live Casino",
      url: "/livecasino"
    }
    ,
    {
      name: "Slot Game",
      url: "/slot"
    }

    ,
    {
      name: "Fantasy Game",
      url: "/fantasy"
    }
    ,
  ];
  // /livecasino

console.log(first)
  return (
    <div>

      <CustomAccordion onChange={() => setfirst((prev)=>{
        return{
          ...prev,first:!first["first"]
        }
      })} expanded={first["first"]}>
        <AccordionSummary

          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          All Sports
        </AccordionSummary>
        <CollapsibleTable />
      </CustomAccordion>


      <CustomAccordion onChange={() => setfirst((prev)=>{
        return{
          ...prev,second:!first["second"]
        }
      })} expanded={first["second"]}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            height: "30px",
            minHeight: "30px !important",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Others
        </AccordionSummary>
        <ul className="casino-sider-list">
          {casinoList.map((list, index) => {
            return (
              <Link key={list.name} to={list?.url}>
                <li  >
                  <span className={index == "0" || index == "1" ? "blink_me" : ""}>
                    {list?.name}
                  </span>
                </li>
              </Link>
            )
          })}
        </ul>
      </CustomAccordion>
      <CustomAccordion onChange={() => setfirst((prev)=>{
        return{
          ...prev,third:!first["third"]
        }
      })} expanded={first["third"]}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            height: "30px",
            minHeight: "30px !important",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Racing Sports
        </AccordionSummary>
        <ul className="casino-sider-list">

          <li   >
            <span>
              Horse Racing
            </span>
          </li>
          <li   >
            <span>
              Greyhound Racing
            </span>
          </li>

        </ul>
      </CustomAccordion>
    </div>
  );
}
