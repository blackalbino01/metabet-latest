import "../RecentTrade/TradedropdownActive";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { metaMaskConnection } from "../../redux/walletConnect/walletConnectSlice";
import { useState } from "react";
import MetabetMask from "../../abis/MetabetMask.json";
import MetabetMask2 from "../../abis/MetabetMask2.json";
import BEP20 from "../../abis/ERC20.json";
import {
  BET_ADDRESS,
  ZERO_ADDRESS,
  METABET_ADDRESS,
  BET_ADDRESS2,
} from "../../constants";
import Utils from "../../utilities";

function Dropdown({ id, token, img, amount, pool, odd, size, win, betWinId }) {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const [enterAmount, setEnterAmount] = useState(0);
  const [teamT, setTeamT] = useState(0);

  // console.log("Bet Amount", betWinId);
  const total = Number(enterAmount) + Number(pool);

  if (betWinId !== "") {
    Utils.EventOdd(id, betWinId, token).then(function (data) {
      setTeamT(Number(data / 1e18));
    });
  }

  const multiplier = total / (teamT + Number(enterAmount));
  const payout = multiplier * Number(enterAmount);
  const BetNow = async (_id, _token, _amount, userResult) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        let chainId = await ethereum.request({ method: "eth_chainId" });
        console.log("Connected to chain " + chainId);

        // String, hex code of the chainId of the bsc test network
        const testnetChainId = "0x61";
        const mumbaiid = "0x13881";
        const polygon = "0x89";
        const bsc = "0x38";
        if (_token === METABET_ADDRESS) {
          if (chainId !== polygon) {
            alert("You are not connected to the Polygon Network!");
            return;
          } else {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const tokenContract = new ethers.Contract(token, BEP20.abi, signer);
            const connectedContract = new ethers.Contract(
              BET_ADDRESS2,
              MetabetMask2.abi,
              signer
            );

            console.log("Going to pop wallet now to pay gas...");

            let Txn = await tokenContract.approve(
              BET_ADDRESS2,
              ethers.utils.parseUnits(_amount)
            );
            console.log(await signer.getAddress());
            Txn = await connectedContract.bet(
              _id,
              _token,
              ethers.utils.parseUnits(_amount),
              userResult
            );
            await Txn.wait();
            return;
          }
        }
        if (chainId !== bsc) {
          alert("You are not connected to the bsc Network!");
          return;
        } else {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const tokenContract = new ethers.Contract(_token, BEP20.abi, signer);
          const connectedContract = new ethers.Contract(
            BET_ADDRESS,
            MetabetMask.abi,
            signer
          );

          if (_token === ZERO_ADDRESS) {
            const Txn = await connectedContract.betBNB(
              _id,
              ethers.utils.parseEther(_amount),
              userResult,
              { value: ethers.utils.parseEther(_amount) }
            );
            await Txn.wait();
            return;
          }

          console.log("Going to pop wallet now to pay gas...");

          let Txn = await tokenContract.approve(
            BET_ADDRESS,
            ethers.utils.parseUnits(_amount)
          );
          console.log(await signer.getAddress());
          Txn = await connectedContract.bet(
            _id,
            _token,
            ethers.utils.parseUnits(_amount),
            userResult
          );
          await Txn.wait();
          return;
        }
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("payout", payout);

  return (
    <>
      <div className="payments-inputs-wrapper">
        <label>
          <div className="status">
            <div>
              <img src={img} alt="img" />
            </div>
            <span>{amount}</span>
          </div>
          <input
            type="text"
            placeholder="0.0000"
            onChange={(e) => setEnterAmount(e.target.value)}
          />
        </label>
        <label>
          <div className="status_3">
            <div>
              <img src={img} alt="img" />
            </div>
          </div>
          <input type="text" placeholder={pool} disabled />
        </label>
        <label>
          <div className="status_3">
            <div>
              <img src={img} alt="img" />
            </div>
          </div>
          <input type="text" placeholder={pool} disabled />
        </label>
        <label>
          <div className="status_4">
            <div>
              <img src={img} alt="img" />
            </div>
            <input type="text" placeholder={odd} disabled />
          </div>
        </label>
        <label>
          <div className="status_5">
            <div>
              <img src={img} alt="img" />
            </div>
            {/* <span>
              {payout.toFixed(2) === "NaN" ? "0.000" : payout.toFixed(2)}
            </span> */}
          </div>
          <input
            type="text"
            placeholder={
              payout.toFixed(2) === "NaN" ? "0.000" : payout.toFixed(2)
            }
            disabled
          />
        </label>
        {!metaMaskAddress.metaMaskAddress ? (
          <button
            className="bet-btn"
            id="btn"
            onClick={() => dispatch(metaMaskConnection())}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className="bet-btn"
            id="btn"
            style={{ background: "#fc4c1e" }}
            onClick={() => BetNow(id, token, enterAmount, betWinId)}
          >
            BET
          </button>
        )}
      </div>
    </>
  );
}

export default Dropdown;
