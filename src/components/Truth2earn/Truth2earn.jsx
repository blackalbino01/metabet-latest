import React, { useEffect, useState } from "react";
import { Container, Truth2earnContainer } from "./Truth2earn.styles";
import { Filter } from "../ActiveBet/ActiveBetData";
import FeaturedBanners from "../../Components/FeaturedBanners/FeaturedBanners";
import { Politics_banner_data } from "../../JasonData/FeaturedBannerData";
import VoteBtnUp from "../../assets/images/Vote_btn_Up.webp";
import VoteBtnDown from "../../assets/images/Vote_btn_Down.webp";
import eventended from "../../assets/images/Event_ended_btn.png";
import Truth2earnDropdown from "./Truth2earnDropdown";
import Progressbar from "../Progressbar/Progressbar";

const Truth2earn = (props) => {
  const pathname = window.location.pathname;
  const [isOpen, setOpen] = useState(false);
  const [showAccord, setShowAccord] = useState(false);
  const [addStyle, setAddStyle] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(showAccord);
    setOpen(showAccord);
  }, [showAccord]);

  return (
    <Container>
      <div className="filter-btn">
        {Filter.map((item) => {
          return (
            <>
              <button
                style={
                  item.id === 1 ? { color: "#FFFFFF" } : { color: "#577184" }
                }
              >
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </button>
            </>
          );
        })}
      </div>
      <Truth2earnContainer displayType="grid" gridTemplateColum="1fr 1fr 1fr">
        {Politics_banner_data.map((item, index) => {
          return (
            <div className="truth2earn">
              <FeaturedBanners
                id={item.id}
                key={index}
                data_name={item.data_name}
                background_img={item.background_img}
                vote_btn={item.vote_btn}
                vote_up={item.vote_up}
                route_path={item.route_path}
              />
              <div className="vote">
                {item.event_status === false ? (
                  <>
                    {" "}
                    <img
                      src={item.id === showAccord ? VoteBtnUp : VoteBtnDown}
                      onClick={() => {
                        setShowAccord(!isOpen ? item.id : false);
                      }}
                      alt="eventEnded"
                    />
                  </>
                ) : (
                  <img src={eventended} alt="eventEnded" />
                )}
              </div>
              {item.id === showAccord && (
                <div
                  className={`accordion-item get_accord ${
                    !isOpen ? "collapsed" : ""
                  }`}
                >
                  <div className="accordion-content">
                    <Truth2earnDropdown
                      Truth_data={item.Truth_data}
                      verdict_title={item.verdict_title}
                    />
                    <Progressbar />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Truth2earnContainer>
    </Container>
  );
};

export default Truth2earn;
