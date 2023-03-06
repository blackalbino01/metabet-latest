import {React, useState, useEffect} from "react";
import { ContainerBet } from "./BetContainer.styles";
import { betData } from "./BetData";
import { useSelector } from "react-redux";
import Utils from "../../utilities.js";

const BetContainer = () => {
  const [bets, setBets] = useState([]);
  const [tReturned, setTReturned] = useState(0);
  const metaMaskAddress = useSelector((state) => state.wallet);

  if(metaMaskAddress.metaMaskAddress){
    Utils.AllUserBets(metaMaskAddress.metaMaskAddress.toString()).then(function (data) {
      setBets(data);
    });
  }

  const totalBets = (array, field, value) => {
    const filter =  array.filter((item) => item[field] === value);
    return filter;
  };

  const totalValue = (array, field) => {  
    let sum = 0; 
    array.forEach((item) => sum += Number(item[field]));
    return sum / 1e18;
  };

  const totalReturned = (user, token)=> {
    Utils.getTotalReturned(user,token).then(function(data){
      setTReturned(Number(data));
    });

    return tReturned;
  }

  const totalWon = (array) => {
    const arr = [];
    array.forEach((item) => {
    try{
      Utils.userStatus(item[0],item[2]).then(function(data){
        arr.push(data);
      });
    }
    catch(e){
      console.log(e)
    }
  });

    console.log(arr);
  };

  return (
    <ContainerBet>
      {betData.map((item, index) => {
        return (
          <>
            <div className="betHistory-container">
              <div className="bet-item-1">
                <div>
                  <img src={item.icon1} alt="" />
                </div>
                <div className="table-wrapper">
                  <div className="bet-th">
                    <span>{item.th_1}</span>
                    <span>{item.th_2}</span>
                    <span>{item.th_3}</span>
                    <span>{item.th_4}</span>
                    <span>{item.th_6}</span>
                    <span>{item.th_7}</span>
                    <span>{item.th_5}</span>
                  </div>
                  <div className="bet-td">
                    <span>{item.td_1}</span>
                    <span>
                    {metaMaskAddress.metaMaskAddress == null ? item.td_2 : totalBets(bets,1, item.addr).length}
                    </span>
                    <span>{item.td_3}</span>
                    <span>{item.td_4}</span>
                    <span>{metaMaskAddress.metaMaskAddress == null ? item.td_6 : totalValue(totalBets(bets,1, item.addr),3)}</span>
                    <span>{metaMaskAddress.metaMaskAddress == null || 
                      item.addr == "" ? item.td_6 : totalReturned(metaMaskAddress.metaMaskAddress.toString(), item.addr)}</span>
                    <img src={item.icon_2} alt="" />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </>
        );
      })}
    </ContainerBet>
  );
};

export default BetContainer;
