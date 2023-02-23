import fox_1 from "../../assets/images/TRUSC/fox_1.webp";
import trusc from "../../assets/images/TRUSC/trusc.webp";
import USDC from "../../assets/images/TRUSC/USDC.webp";
import BNB from "../../assets/images/TRUSC/BNB.webp";
import BUSD from "../../assets/images/TRUSC/BUSD.webp";
import ETH from "../../assets/images/TRUSC/ETH.webp";

export const Tdata = [
  {
    id: 1,
    trusc: trusc,
    text_1: "$0.05",
  },
  {
    id: 2,
    fox_1: fox_1,
    rate: "25.00",
    title: "POOLED",
    dollar_rate: "$25",
    dollar_text: "VOLUME 24H",
    currency: ETH,
    currency_text: "$0.00",
  },
  {
    id: 3,
    fox_1: fox_1,
    rate: "25.00",
    title: "EARNED TRUSC",
    dollar_rate: "$1M",
    dollar_text: "CIRCULATING SUPPLY",
    currency: BUSD,
    currency_text: "$0.00",
  },
  {
    id: 4,
    fox_1: fox_1,
    rate: "25.00",
    title: "MY BALANCE",
    dollar_rate: "$250M",
    dollar_text: "TOTAL SUPPLY",
    currency: BNB,
    currency_text: "$0.00",
  },
  {
    id: 5,
    dollar_rate: "$250M",
    dollar_text: "MAXIMUM SUPPLY",
    currency: USDC,
    currency_text: "$25.00",
  },
];
