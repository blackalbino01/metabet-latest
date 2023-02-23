import React, { useEffect, useState } from "react";
import StatdropdownActive from "../../Components/Stats4/StatdropdownActive";

import BNB_Icon from "../../assets/images/small_currency_icons/icon_1.webp";
import ETH_Icon from "../../assets/images/small_currency_icons/icon_2.webp";
import USDT_Icon from "../../assets/images/small_currency_icons/icon_3.webp";
import USDC_Icon from "../../assets/images/small_currency_icons/icon_4.webp";
import BUSD_Icon from "../../assets/images/small_currency_icons/icon_5.webp";
import TRUSC_Icon from "../../assets/images/small_currency_icons/icon_6.webp";
import TRUEAI_Icon from "../../assets/images/small_currency_icons/icon_7.webp";
import GOAL_Icon from "../../assets/images/small_currency_icons/icon_8.webp";
import METABET_Icon from "../../assets/images/small_currency_icons/icon_9.webp";

import Utils from "../../utilities";
import {
  ZERO_ADDRESS,
  GOAL_ADDRESS,
  BUSD_ADDRESS,
  METABET_ADDRESS,
} from "../../constants";

const Accordian = (props) => {
  const pathname = window.location.pathname;
  const [isOpen, setOpen] = useState(false);
  const [showAccord, setShowAccord] = useState(false);
  const [addStyle, setAddStyle] = useState();
  const [goalData_size, setGoalDataSize] = useState(null);
  const [bnbData_size, setBnbDataSize] = useState(null);
  const [busdData_size, setBusdDataSize] = useState(null);
  const [metabetData_size, setMetabetDataSize] = useState(null);
  const [goalData_total, setGoalDataTotal] = useState(null);
  const [bnbData_total, setBnbDataTotal] = useState(null);
  const [busdData_total, setBusdDataTotal] = useState(null);
  const [metabetData_total, setMetabetDataTotal] = useState(null);
  const [goalData_odd, setGoalDataOdd] = useState(null);
  const [bnbData_odd, setBnbDataOdd] = useState(null);
  const [busdData_odd, setBusdDataOdd] = useState(null);
  const [metabetData_odd, setMetabetDataOdd] = useState(null);
  const [valData, setValData] = useState();

  const detailGoal = () => {
    Utils.PoolSize(props.id, GOAL_ADDRESS).then(function (data) {
      setGoalDataSize(data);
    });
    Utils.PoolTotal(props.id, GOAL_ADDRESS).then(function (data) {
      setGoalDataTotal((data / 1e18).toFixed(2));
    });
  };

  const detailBnb = () => {
    Utils.PoolSize(props.id, ZERO_ADDRESS).then(function (data) {
      setBnbDataSize(data);
    });
    Utils.PoolTotal(props.id, ZERO_ADDRESS).then(function (data) {
      setBnbDataTotal((data / 1e18).toFixed(2));
    });
  };

  const detailBusd = () => {
    Utils.PoolSize(props.id, BUSD_ADDRESS).then(function (data) {
      setBusdDataSize(data);
    });
    Utils.PoolTotal(props.id, BUSD_ADDRESS).then(function (data) {
      setBusdDataTotal((data / 1e18).toFixed(2));
    });
  };

  const detailMetabet = () => {
    Utils.PoolSize(props.id, METABET_ADDRESS).then(function (data) {
      setMetabetDataSize(data);
    });
    Utils.PoolTotal(props.id, METABET_ADDRESS).then(function (data) {
      setMetabetDataTotal((data / 1e18).toFixed(2));
    });
  };

  useEffect(() => {
    detailBnb();
    detailBusd();
    detailGoal();
    detailMetabet();
  }, []);

  if (props.winBtn !== "") {
    Utils.EventOdd(props.id, props.winBtn, GOAL_ADDRESS).then(function (data) {
      data === 0
        ? setGoalDataOdd(null)
        : setGoalDataOdd(goalData_total / (data / 1e18));
    });
    Utils.EventOdd(props.id, props.winBtn, BUSD_ADDRESS).then(function (data) {
      data === 0
        ? setBusdDataOdd(null)
        : setBusdDataOdd(busdData_total / (data / 1e18));
    });
    Utils.EventOdd(props.id, props.winBtn, ZERO_ADDRESS).then(function (data) {
      data === 0
        ? setBnbDataOdd(null)
        : setBnbDataOdd(bnbData_total / (data / 1e18));
    });
    Utils.EventOdd(props.id, props.winBtn, METABET_ADDRESS).then(function (
      data
    ) {
      data === 0
        ? setMetabetDataOdd(null)
        : setMetabetDataOdd(metabetData_total / (data / 1e18));
    });
  }

  let FifaTableData = [
    {
      id: 1,
      name: "GOAL",
      poolSize: goalData_size,
      poolCricket: "0.0000",
      numbers_bets: "0.0000",
      outer_odds: goalData_odd == null ? "0.00" : goalData_odd.toFixed(2),
      payouts: "0.0000",
      img: GOAL_Icon,
      amount: "Enter Amount",
      pool: goalData_total,
      odd: goalData_odd == null ? "0.00" : goalData_odd.toFixed(2),
      win: "Possible Win",
      display_none: "none",
      token: GOAL_ADDRESS,
    },
    {
      id: 2,
      name: "BNB",
      poolSize: bnbData_size,
      poolCricket: "0.0000",
      numbers_bets: "0.0000",
      outer_odds: bnbData_odd == null ? "0.00" : bnbData_odd.toFixed(2),
      payouts: "0.0000",
      img: BNB_Icon,
      amount: "Enter Amount",
      pool: bnbData_total,
      odd: bnbData_odd == null ? "0.00" : bnbData_odd.toFixed(2),
      win: "Possible WIN",
      token: ZERO_ADDRESS,
    },
    {
      id: 3,
      name: "ETH",
      poolSize: bnbData_size,
      poolCricket: "0.0000",
      numbers_bets: "0.0000",
      outer_odds: bnbData_odd == null ? "0.00" : bnbData_odd.toFixed(2),
      payouts: "0.0000",
      img: ETH_Icon,
      amount: "Enter Amount",
      pool: bnbData_total,
      odd: bnbData_odd == null ? "0.00" : bnbData_odd.toFixed(2),
      win: "Possible WIN",
      token: ZERO_ADDRESS,
    },
    {
      id: 4,
      name: "USDT",
      poolSize: bnbData_size,
      poolCricket: "0.0000",
      numbers_bets: "0.0000",
      outer_odds: bnbData_odd == null ? "0.00" : bnbData_odd.toFixed(2),
      payouts: "0.0000",
      img: USDT_Icon,
      amount: "Enter Amount",
      pool: bnbData_total,
      odd: bnbData_odd == null ? "0.00" : bnbData_odd.toFixed(2),
      win: "Possible WIN",
      token: ZERO_ADDRESS,
    },
    {
      id: 5,
      name: "USDC",
      poolSize: bnbData_size,
      poolCricket: "0.0000",
      numbers_bets: "0.0000",
      outer_odds: bnbData_odd == null ? "0.00" : bnbData_odd.toFixed(2),
      payouts: "0.0000",
      img: USDC_Icon,
      amount: "Enter Amount",
      pool: bnbData_total,
      odd: bnbData_odd == null ? "0.00" : bnbData_odd.toFixed(2),
      win: "Possible WIN",
      token: ZERO_ADDRESS,
    },
    {
      id: 6,
      name: "BUSD",
      poolSize: busdData_size,
      poolCricket: "0.0000",
      numbers_bets: "0.0000",
      outer_odds: busdData_odd == null ? "0.00" : busdData_odd.toFixed(2),
      payouts: "0.0000",
      img: BUSD_Icon,
      amount: "Enter Amount",
      pool: busdData_total,
      odd: busdData_odd == null ? "0.00" : busdData_odd.toFixed(2),
      win: "Possible WIN",
      token: BUSD_ADDRESS,
    },
    {
      id: 7,
      name: "TRUSC",
      poolSize: busdData_size,
      poolCricket: "0.0000",
      numbers_bets: "0.0000",
      outer_odds: busdData_odd == null ? "0.00" : busdData_odd.toFixed(2),
      payouts: "0.0000",
      img: TRUSC_Icon,
      amount: "Enter Amount",
      pool: busdData_total,
      odd: busdData_odd == null ? "0.00" : busdData_odd.toFixed(2),
      win: "Possible WIN",
      token: BUSD_ADDRESS,
    },
    {
      id: 8,
      name: "TRUEAI",
      poolSize: busdData_size,
      poolCricket: "0.0000",
      numbers_bets: "0.0000",
      outer_odds: busdData_odd == null ? "0.00" : busdData_odd.toFixed(2),
      payouts: "0.0000",
      img: TRUEAI_Icon,
      amount: "Enter Amount",
      pool: busdData_total,
      odd: busdData_odd == null ? "0.00" : busdData_odd.toFixed(2),
      win: "Possible WIN",
      token: BUSD_ADDRESS,
    },
    {
      id: 9,
      name: "METABET",
      poolSize: metabetData_size,
      poolCricket: "0.0000",
      numbers_bets: "0.0000",
      outer_odds: metabetData_odd == null ? "0.00" : metabetData_odd.toFixed(2),
      payouts: "0.0000",
      img: METABET_Icon,
      amount: "Enter Amount",
      pool: metabetData_total,
      odd: metabetData_odd == null ? "0.00" : metabetData_odd.toFixed(2),
      win: "Possible WIN",
      token: METABET_ADDRESS,
    },
  ];

  // console.log("first", props.id);

  return (
    <div className="accordion-wrapper">
      <div className={`accordion-title ${isOpen ? "open" : ""}`}>
        {FifaTableData.map((item) => (
          <>
            <div
              className={
                item.id === 1 &&
                (pathname === "/Ethereum" ||
                  pathname === "/Bitcoin" ||
                  pathname === "/PoliticsDetails" ||
                  pathname === "/UFC-Events" ||
                  pathname === "/Cricket-Event" ||
                  pathname === "/dxy")
                  ? "hide"
                  : `Head Head-${item.id}` && pathname === "/football-stats"
                  ? "Head"
                  : `Head Head-${item.id}`
              }
              style={isOpen ? { borderRadius: "8px" } : {}}
            >
              <div className={`Hwrapper`}>
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </div>
              <div className="item changeItem">
                <button
                  disabled={
                    !props.eventStatus || props.bitAndEth == false
                      ? false
                      : true
                  }
                  onClick={() => {
                    setOpen(!isOpen);
                    setShowAccord(item.id);
                    setAddStyle(item.id);
                  }}
                  style={
                    item.id === addStyle
                      ? { background: "#fc4c1e" }
                      : { background: "#7b7b7b" }
                  }
                >
                  {!props.eventStatus || props.bitAndEth == false
                    ? "Bet Now"
                    : "Event Ended"}
                </button>
              </div>
            </div>
            {item.id === showAccord && (
              <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">
                  <StatdropdownActive
                    id={props.id}
                    betWinId={props.winBtn}
                    token={item.token}
                    img={item.img}
                    amount={item.amount}
                    pool={item.pool}
                    odd={item.odd}
                    size={item.poolSize}
                    win={item.win}
                  />
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
