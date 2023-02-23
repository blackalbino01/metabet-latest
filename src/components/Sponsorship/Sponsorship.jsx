import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { TermsContainer } from "./Sponsorship.styles";
import sponsor from "../../assets/images/WorldcupBanner/sponsor.webp";
import dress from "../../assets/images/WorldcupBanner/dress.webp";
import Nairaland from "../../assets/images/WorldcupBanner/Nairaland.webp";
import { NavLink } from "react-router-dom";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const src = "https://www.youtube.com/watch?v=sMAp80zohDQ";
  return (
    <>
      <TermsContainer>
        <span>Contact Us</span>
        <div>
          <img src={sponsor} alt="sponsor" />
        </div>
        <div className="headlines">
          <p>
            MetaBet Charitable Foundation sponsors Football Academies for
            children with team shirts, shorts, banners and awards for events and
            activities...
            <br />
            The Project team will sponsor a youth Golden Boot tournament in 2023{" "}
            <br />
            To Have Your Kids/Childrens Football Club/Academy Sponsored by
            MetaBet, the New Web3 Crypto Price Prediction and Web3 Sports Book
            platform,
            <br /> contact us...
          </p>
          <div className="Nairaland">
            <img src={dress} alt="dress" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sponsorship@metamaskbet.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
            <div>
              <img src={Nairaland} alt="Nairaland" />
            </div>
          </div>
          <div className="video-container-sponsor">
            <ReactPlayer url={src} />
          </div>
        </div>
      </TermsContainer>
    </>
  );
};

export default Terms;
