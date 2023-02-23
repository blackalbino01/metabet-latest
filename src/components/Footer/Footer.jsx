import React from "react";
import { Container } from "./Footer.styles";
import footerlogo from "../../assets/images/Logo/footerlogo.webp";
import { NavLink } from "react-router-dom";
import { third_array } from "../../JasonData/Sidebar_routes";

const SidebarItems = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        {props.curr_img && (
          <img
            src={props.curr_img}
            alt={props.alt_Title}
            style={{ maxWidth: props.imgMaxWidth }}
          />
        )}
        {props.title && <span>{props.title}</span>}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <Container>
        <hr className="bottom-hr" />
        <div className="list--item-1">
          <ul>
            <li>
              <NavLink to="/whitepaper">Whitepaper</NavLink>
            </li>
            <li>
              <NavLink to="/Airdrops">Airdrops</NavLink>
            </li>
            <li>
              <NavLink to="/BugBounty">Bug Bounty</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://t.me/petdognft"
                target="_blank"
                without
                rel="noreferrer"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@truthtoken"
                target="_blank"
                without
                rel="noreferrer"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/metabet"
                target="_blank"
                without
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div className="list--item-2">
          <ul>
            <li>
              <NavLink to="/investordeck">Investor Deck</NavLink>
            </li>
            <li>
              <a
                href="https://www.dextools.io/app/en/bnb/pair-explorer/0xe728a76ce13e79221e4b0885e6f4909b06966142"
                target="_blank"
                without
                rel="noreferrer"
              >
                DEX tools
              </a>
            </li>
            <li>
              <a
                href="https://bscscan.com/token/0x438fc473ba340d0734e2d05acdf5bee775d1b0a4"
                target="_blank"
                without
                rel="noreferrer"
              >
                BSC Scan
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://www.reddit.com/r/FootballerToken/"
                target="_blank"
                without
                rel="noreferrer"
              >
                Reddit
              </a>
            </li>
            <li>
              <NavLink to="/contact">Support</NavLink>
            </li>
            <li>
              <NavLink to="/Sponsorship">Sponsorship</NavLink>
            </li>
          </ul>
        </div>
        <div className="currcency-wrapper">
          {third_array.map((item, index) => (
            <a href={item.route} key={index} target="_blank" rel="noreferrer">
              <SidebarItems
                alt_Title={item.display_alt_name}
                curr_img={item.img}
                imgMaxWidth={item.img_width}
              />
            </a>
          ))}
        </div>
        <hr className="bottom-hr" />
        <div className="footerlogo">
          <div className="footerlogo-img">
            <img src={footerlogo} alt="footerlogo" />
          </div>
          <p>© 2022 Metabetmask.com | All rights reserved.</p>
        </div>
        <div className="terms">
          <ul>
            <li>
              <NavLink to="/Cookies">Cookies</NavLink>
            </li>
            <li>
              <NavLink to="/Privacy">Privacy</NavLink>
            </li>
            <li>
              <NavLink to="/Terms">Terms</NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Footer;
