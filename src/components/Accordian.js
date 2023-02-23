import React, { useState } from "react";
import StatdropdownActive from "../Components/Stats4/StatdropdownActive";
import { TabTableData } from "./TabTable2/TabTableData";

const Accordian = () => {
  const [isOpen, setOpen] = useState(false);
  const [showAccord, setShowAccord] = useState();
  const [addStyle, setAddStyle] = useState();
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        style={{ flexDirection: "column" }}
      >
        {TabTableData.map((item) => (
          <>
            <div className="Head">
              <div
                className="Hwrapper"
                style={{ display: "flex", gap: "10px", width: "100px" }}
              >
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>{" "}
              </div>
              <div className="item changeItem">
                <p>{item.odds}</p> <p> {item.poolSize}</p>{" "}
                <button
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
                  Bet
                </button>{" "}
              </div>{" "}
            </div>
            {item.id === showAccord && (
              <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">
                  <StatdropdownActive
                    img={item.img}
                    amount={item.amount}
                    pool={item.pool}
                    odd={item.odd}
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
