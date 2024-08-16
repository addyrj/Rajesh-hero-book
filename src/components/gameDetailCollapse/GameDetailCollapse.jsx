
////style
import "./styles.scss"
import DetailOdds from "./DetailOdds";
import { useEffect, useState } from "react";
const GameDetailCollapse = ({ checkFancy,profithandler, setSelectionId, profitLoss, betPlaceData, fun, odddata, collapseName, betPlaceHandler }) => {
  const oddsColor = ["back", "back1", "back2", "lay", "lay1", "lay2"]
 

 
  return (
    <div className="game-market market-4 ">
      <div className="market-title">
        <span>{collapseName}</span>
      </div>
      <div className="market-header">

        <div className="odds-row-container flex items-center" >
          <div className="odds-row-left-col px-[5px]">
            <p>
              Max:1
            </p>
          </div>
          <div className="odds-row-right-col grid grid-cols-6">
            <DetailOdds height={28} />
            <DetailOdds height={28} />
            <DetailOdds height={28} value={"Back"} item={oddsColor[0]} />
            <DetailOdds height={28} value={"Lay"} item={oddsColor[3]} />
            <DetailOdds height={28} />
            <DetailOdds height={28} />

          </div>
        </div>
      </div>
      {odddata?.runner_json?.map((list, index) => {
      const findSelectionId = profitLoss?.find((item) => item?.selectionId == list?.selectionId)?.winLoss
        const findFancySelection = checkFancy ? profitLoss?.map((elm) => {
          if (elm?.marketId == odddata?.market_id) {
            if (elm.selectionId == list?.selectionId) {
              return elm?.winLoss
            }
          }
        }) : null
        return (
          <div className="odds-row-container flex items-center" key={list?.selectionName} >
            <div className="odds-row-left-col px-[5px]">{list?.selectionName}
              <span style={{ color: findSelectionId > 0 ? "green" : "red" }}>{checkFancy ? findFancySelection : findSelectionId && findSelectionId}</span>

            </div>

            <div className="odds-row-right-col grid grid-cols-6 relative" onClick={() => {
              if (checkFancy) {

                setSelectionId(odddata)
                profithandler(betPlaceData?.stack, betPlaceData?.odds, betPlaceData?.is_back, odddata)

              } else if (!checkFancy) {

                setSelectionId(odddata?.runner_json)
                profithandler(betPlaceData?.stack, betPlaceData?.odds, betPlaceData?.is_back, odddata?.runner_json)
              }
            }
            }
            >
              {list?.ex?.availableToBack.map((item, index) => {
                return (

                  <DetailOdds profithandler={profithandler} selectionId={list?.selectionId} marketId={odddata?.market_id} matchName={list?.selectionName} lay={1} betPlaceHandler={betPlaceHandler} index={index} item={oddsColor[index]} key={item?.selectionName} value={item?.price} price={item?.size} height={44} border={true} fun={fun} />
                )
              }).reverse()}
              {list?.ex?.availableToLay.map((item, index) => {
                return (

                  <DetailOdds profithandler={profithandler} selectionId={list?.selectionId} matchName={list?.selectionName} lay={0} betPlaceHandler={betPlaceHandler} index={index} item={oddsColor[index + 3]} key={item?.selectionName} value={item?.price} price={item?.size} height={44} border={true} fun={fun} />
                )
              })}
              {list?.GameStatus === "SUSPENDED" &&
                <div className="suspend absolute w-full h-full text-[red] font-bold flex items-center justify-center">
                  Suspended
                </div>
              }
            </div>
          </div>
        )
      })}


    </div>
  )
};

export default GameDetailCollapse;
