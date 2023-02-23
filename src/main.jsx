import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./Font/Cabinet-Medium/CabinetGrotesk-Bold.ttf";
import { RouterProvider } from "react-router";

// Routes //
import Dashboard from "./routes/Dashboard";

// Components //
import WORLDCUPLANDINGPAGE from "./components/WorldcupLandingPage/WorldcupLandingPage";
// import DXY from "./components/DXY/DXY";
import BITCOIN from "./components/BitcoinPrice/Bitcoin";
import ETHEREUM from "./components/Ethereum/Ethereum";

import FOOTBALL from "./components/LandingPage/landingPage";

import CIRCKET from "./components/CricketBanners/CricketLandingPage";
import UFC from "./pages/UFC";
import POLITICS from "./pages/Polities";
import PoliticsDetails from "./components/Politics/PoliticsDetails";

import FEATUREDEVENT from "./components/FeaturedBanners/FeaturedBanners";
import EVENTINFO from "./components/FeaturedEvents/EventInfo";

import HOWITWORKS from "./components/HowItsWork/HowItWorks";
import MYACTIVEBETS from "./components/ActiveBet/ActiveBet";
import MYBETHISTORY from "./components/BETHistory/BETHistory";
import WHITEPAPER from "./components/WhitePaper/WhitePaper";
import AIRDROP from "./components/Airdrop/AirDrop";
import BUGBOUNTY from "./components/BugBounty/BugBounty";
import INVESTORDECK from "./components/InvestorDeck/InvestorDeck";
import CONTACTUS from "./components/Contact/Contact";
import SPONSORSHIP from "./components/Sponsorship/Sponsorship";
import COOKIES from "./components/Cookies/Cookies";
import PRIVACY from "./components/Privacy/Privacy";
import TERMS from "./components/Terms/Terms";
import Test from "./components/UFcComponents/Test";
import StatsComponent from "./components/Statistics/StatsComponent";
import DXYPage from "./pages/DXYPage";
import Truth2earn from "./components/Truth2earn/Truth2earn";
import TRUSCToken from "./components/TRUSCToken/TRUSCToken";

import REGFOOTBALL from "./pages/RegFootball";
// Leagues //
import CHAMPIONSLEAGUE from "./components/FootballLeagues/ChampionsLeague";
import LIGUE1 from "./components/FootballLeagues/Ligue1";
import LALIGA from "./components/FootballLeagues/Laliga";
import PREMIERLEAGUE from "./components/FootballLeagues/PremierLeague";
import SERIEA from "./components/FootballLeagues/SerieA";
import BUNDESLIGA from "./components/FootballLeagues/Bundesliga";

let persistor = persistStore(store);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <WORLDCUPLANDINGPAGE />,
      },
      {
        path: "/how-it-works",
        element: <HOWITWORKS />,
      },
      {
        path: "/my-active-bets",
        element: <MYACTIVEBETS />,
      },
      {
        path: "/my-bet-history",
        element: <MYBETHISTORY />,
      },
      {
        path: "/truth-2-earn",
        element: <Truth2earn />,
      },
      {
        path: "/TRUSC-Token",
        element: <TRUSCToken />,
      },
      {
        path: "/dxy",
        element: <DXYPage />,
      },
      {
        path: "/bitcoin",
        element: <BITCOIN />,
      },
      {
        path: "/ethereum",
        element: <ETHEREUM />,
      },
      {
        path: "/football",
        element: <REGFOOTBALL />,
        children: [
          {
            path: "champions-league",
            element: <CHAMPIONSLEAGUE group_type="champions-league" />,
          },
          {
            path: "ligue-1",
            element: <LIGUE1 group_type="ligue-1" />,
          },
          {
            path: "laliga",
            element: <LALIGA group_type="laliga" />,
          },
          {
            path: "premier-league",
            element: <PREMIERLEAGUE group_type="premier-league" />,
          },
          {
            path: "serie-a",
            element: <SERIEA group_type="serie-a" />,
          },
          {
            path: "bundesliga",
            element: <BUNDESLIGA group_type="bundesliga" />,
          },
        ],
      },
      {
        path: ":group/:title/stats/:id",
        element: <StatsComponent />,
      },
      {
        path: "/cricket",
        element: <CIRCKET />,
      },
      {
        path: "/ufc",
        element: <UFC />,
      },
      {
        path: "/event/:group/:title",
        element: <Test />,
      },
      {
        path: "/stats/:group/:title/:id",
        element: <StatsComponent />,
      },
      {
        path: "/politics",
        element: <POLITICS />,
      },
      {
        path: "/PoliticsDetails",
        element: <PoliticsDetails />,
      },
      {
        path: "/whitepaper",
        element: <WHITEPAPER />,
      },
      {
        path: "/airdrops",
        element: <AIRDROP />,
      },
      {
        path: "/bug-bounty",
        element: <BUGBOUNTY />,
      },
      {
        path: "/investordeck",
        element: <INVESTORDECK />,
      },
      {
        path: "/contact",
        element: <CONTACTUS />,
      },
      {
        path: "/sponsorship",
        element: <SPONSORSHIP />,
      },
      {
        path: "/cookies",
        element: <COOKIES />,
      },
      {
        path: "/privacy",
        element: <PRIVACY />,
      },
      {
        path: "/terms",
        element: <TERMS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
