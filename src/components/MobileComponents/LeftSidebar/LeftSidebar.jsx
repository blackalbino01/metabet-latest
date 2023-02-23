import React from "react";
import { ContainerSidebar } from "./LeftSidebarStyle";
import MenuIcon from "../../../assets/images/mobile-view/humburger/menu.svg";
import CloseMenuIcon from "../../../assets/images/mobile-view/humburger/close-menu.svg";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../Footer/Footer";

import {
  first_array,
  sec_array,
  third_array,
} from "../../../JasonData/Sidebar_routes";
import OutsideClick from "./helperFunction";

const SidebarItems = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};
const SidebarItems1 = (props) => {
  const active1 = props.active1 ? "active1" : "";
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active1}`}>
        <img src={active1 ? props.white : props.icon} alt="images" />
        <span>{props.title}</span>
      </div>
    </div>
  );
};
const SidebarItems2 = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const LeftSidebar = () => {
  const location = useLocation();

  const activeItems = first_array.findIndex(
    (item) => item.route === location.pathname
  );
  const activeSecItems = sec_array.findIndex(
    (item) => item.route === location.pathname
  );
  const activethirdItems = third_array.findIndex(
    (item) => item.route === location.pathname
  );

  const OpenNav = () => {
    let result = document.getElementById("mySidenav");
    result.classList = "sidenav activated";
  };

  const CloseNav = () => {
    let result = document.getElementById("mySidenav");
    result.classList = "sidenav de-activated";
  };
  const boxRef = React.useRef(null);
  // boxOutsideClick will be true on outside click
  const boxOutsideClick = OutsideClick(boxRef);
  // console.log("Value", boxOutsideClick);

  return (
    <ContainerSidebar>
      <div className="OpenNavBar" onClick={OpenNav}>
        <img src={MenuIcon} alt="Menu" />
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={boxOutsideClick ? {} : { width: "0px" }}
      >
        <div href="/" className="closebtn" onClick={CloseNav}>
          <span>Menu</span>
          <img src={CloseMenuIcon} className="close-img" alt="Close Menu" />
        </div>

        <div className="menu">
          <div className="page-mobile">
            <div className="wrapper">
              <div className="content" ref={boxRef}>
                <div className="wrapper-link">
                  {first_array.map((item, index) => (
                    <Link to={item.route} key={index}>
                      <SidebarItems
                        title={item.display_name}
                        active={index === activeItems}
                      />
                    </Link>
                  ))}
                </div>
                <hr />
                <div className="wrapper-span">
                  <span>All Sports</span>
                </div>
                <div className="wrapper-link-1">
                  {sec_array.map((item, index) => (
                    <Link to={item.route} key={index}>
                      <SidebarItems1
                        icon={item?.icon}
                        white={item?.white}
                        title={item.display_name}
                        active1={index === activeSecItems}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ContainerSidebar>
  );
};

export default LeftSidebar;
