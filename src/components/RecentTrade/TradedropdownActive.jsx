import "./TradeDropdownstyles.css";
import Khabib from "../../assets/images/Khabib.svg";
import mcgregor from "../../assets/images/mcgregor.svg";
import USDT from "../../assets/images/USDT.svg";
import NFTbuy from "../../assets/images/RecentTrade/NFTbuy.webp";
import { useDispatch, useSelector } from "react-redux";
import { metaMaskConnection } from "../../redux/walletConnect/walletConnectSlice";

function Dropdown() {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  return (
    <div className="dropdown">
      <div className="dropdown-Content-stats4">
        <div className="ctn">
          <div className="Bet">
            <div className="Player">
              <img src={Khabib} alt="Khabib" />
              <p>Khabib Nurmagomedov</p>
            </div>
            <div className="player-VS">
              <span>VS</span>
            </div>
            <div className="Player">
              <img src={mcgregor} alt="mcgregor" />
              <p>Conor McGregor</p>
            </div>
          </div>
          <div className="Values">
            <ul>
              <li>Khabib Win</li>
              <li>Tuesday 18 September, 2022</li>
              <li>Start Time: 20:00 GMT</li>
            </ul>
            <ul>
              <li>
                Value:12000.00
                <img src={USDT} alt="USDT" />{" "}
              </li>
              <a>Ethersan</a>
            </ul>
          </div>
          <div className="NFTbuy">
            <img src={NFTbuy} alt="NFTbuy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
