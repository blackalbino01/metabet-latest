import PL from "../assets/images/PL.png";
import Boxing from "../assets/images/Boxing.png";
import BoxingW from "../assets/images/BoxingW.webp";
import Cricket from "../assets/images/Cricket.png";
import CricketW from "../assets/images/CricketW.webp";
import Politics from "../assets/images/Politics.png";
import PoliticsW from "../assets/images/PoliticsW.webp";
import Bitcoin from "../assets/images/Bitcoin.svg";
import BitcoinW from "../assets/images/BitcoinW.webp";
import DXY from "../assets/images/DXY.webp";
import DXYW from "../assets/images/DXYW.webp";
import FootballW from "../assets/images/FootballW.webp";

// currcency Logos //
import currency_1 from "../assets/images/FeaturedEvent/bitmart.png";
import currency_2 from "../assets/images/FeaturedEvent/Hotbit.webp";
import currency_3 from "../assets/images/FeaturedEvent/pancake.webp";
import Ethere from "../assets/images/FeaturedEvent/Ethereum.webp";
import EthereW from "../assets/images/FeaturedEvent/white-Ethereum.webp";

// Social Icons //
import Icon_1 from "../assets/images/sidebar-social-icons/social_3.webp";
import Icon_2 from "../assets/images/sidebar-social-icons/social_4.webp";
import Icon_3 from "../assets/images/sidebar-social-icons/social_5.webp";
import Icon_4 from "../assets/images/sidebar-social-icons/social_7.webp";
import Icon_5 from "../assets/images/sidebar-social-icons/social_6.webp";
import Icon_6 from "../assets/images/sidebar-social-icons/social_1.webp";

export const first_array = [
  {
    display_name: "How it works?",
    route: "/How-it-works",
  },
  {
    display_name: "My Active Bet's",
    route: "/My-Active-Bets",
  },
  {
    display_name: "My Bet History",
    route: "/My-Bet-History",
  },
  {
    display_name: "Truth 2 earn",
    route: "/Truth-2-earn",
  },
  {
    display_name: "TRUSC Token",
    route: "/TRUSC-Token",
  },
];
export const sec_array = [
  {
    display_name: "DXY",
    route: "/dxy",
    icon: DXY,
    white: DXYW,
  },
  {
    display_name: "Bitcoin Price Bets",
    route: "/Bitcoin",
    icon: Bitcoin,
    white: BitcoinW,
  },
  {
    display_name: "Ethereum Price Bets",
    route: "/Ethereum",
    icon: Ethere,
    white: EthereW,
  },
  {
    display_name: "Football",
    route: "/Football",
    icon: PL,
    white: FootballW,
  },
  {
    display_name: "Cricket",
    route: "/Cricket",
    icon: Cricket,
    white: CricketW,
  },

  {
    display_name: "UFC",
    route: "/UFC",
    icon: Boxing,
    white: BoxingW,
  },
  {
    display_name: "Trending Events",
    route: "/Politics",
    icon: Politics,
    white: PoliticsW,
  },
];

export const third_array = [
  {
    display_alt_name: "Bitmart",
    img: currency_1,
    route:
      "https://www.bitmart.com/trade/en?layout=basic&theme=dark&symbol=GOAL_USDT",
    img_width: "30px",
  },
  {
    display_alt_name: "HotBit",
    img: currency_2,
    route: "https://www.hotbit.io/exchange?symbol=GOAL_USDT",
    img_width: "40px",
  },
  {
    display_alt_name: "Pancake",
    img: currency_3,
    route:
      "https://pancakeswap.finance/swap?outputCurrency=0x438Fc473Ba340D0734E2D05acdf5BEE775D1B0A4&inputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    img_width: "45px",
  },
];

export const fourth_array = [
  {
    display_name: "Cookies",
    route: "/Cookies",
  },
  {
    display_name: "Privacy",
    route: "/Privacy",
  },
  {
    display_name: "Terms",
    route: "/Terms",
  },
];

export const social_icons_data = [
  {
    id: 1,
    icon: Icon_1,
    icon_name: "Telegram",
    route_link: "https://t.me/petdognft",
  },
  {
    id: 2,
    icon: Icon_2,
    icon_name: "Discord",
    route_link: "https://discord.gg/metabet",
  },
  {
    id: 3,
    icon: Icon_3,
    icon_name: "Twitter",
    route_link: "https://twitter.com/metabetmask",
  },
  {
    id: 4,
    icon: Icon_4,
    icon_name: "Medium",
    route_link: "https://medium.com/@truthtoken",
    space: "0px 7px",
  },
  {
    id: 5,
    icon: Icon_5,
    icon_name: "Riddit",
    route_link: "https://reddit.com/r/footballertoken",
  },
  {
    id: 6,
    icon: Icon_6,
    icon_name: "FaceBook",
    route_link: "https://www.facebook.com/metmaskbet",
  },
];
