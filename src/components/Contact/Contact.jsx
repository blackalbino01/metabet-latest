import React from "react";
import { useState } from "react";
import axios from "axios";
import { ContactContainer } from "./Contact.style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Owner Images //
import OwnerImg_1 from "../../assets/images/contact/contact_1.gif";
import OwnerImg_2 from "../../assets/images/contact/contact_2.gif";
import OwnerImg_3 from "../../assets/images/contact/contact_3.gif";

// Social Icons //
import IconImg_1 from "../../assets/images/contact/contact_4.webp";
import IconImg_3 from "../../assets/images/contact/contact_5.webp";
import { contactFormApi } from "../../api/API";
import { useEffect } from "react";
import { social_icons_data } from "../../JasonData/Sidebar_routes";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [rich, setRich] = useState({
    name: "",
    email: "",
    mail: "marketing@metabetmask.com",
    message: "",
  });

  const [thom, setThom] = useState({
    name: "",
    email: "",
    mail: "betsupport@metabetmask.com",
    message: "",
  });

  const [mich, setMich] = useState({
    name: "",
    email: "",
    mail: "tokensale@metabetmask.com",
    message: "",
  });

  const handleChange_1 = (e) => {
    const { name, value } = e.target;
    setRich((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange_2 = (e) => {
    const { name, value } = e.target;
    setThom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange_3 = (e) => {
    const { name, value } = e.target;
    setMich((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let userMessage = {
    name: "",
    email: "",
    mail: "",
    message: "",
  };

  const inputFieldClear = () => {
    setRich({
      name: "",
      email: "",
      message: "",
    });
    setThom({
      name: "",
      email: "",
      message: "",
    });
    setMich({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rich.message == "") {
      userMessage = {
        name: rich.name,
        email: rich.email,
        mail: rich.mail,
        message: rich.message,
      };
    } else if (!thom.message == "") {
      userMessage = {
        name: thom.name,
        email: thom.email,
        mail: thom.mail,
        message: thom.message,
      };
    } else if (!mich.message == "") {
      userMessage = {
        name: mich.name,
        email: mich.email,
        mail: mich.mail,
        message: mich.message,
      };
    }

    try {
      const res = await axios.post(contactFormApi, {
        userMessage,
      });
      if (res.status === 200) {
        console.log(res);
        toast.success("Messages Sent Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        inputFieldClear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContainer>
      <ToastContainer />
      <div className="background">
        {thom.name == "" &&
          thom.email == "" &&
          thom.message == "" &&
          mich.name == "" &&
          mich.email == "" &&
          mich.message == "" && (
            <div className="contact--wrapper">
              <div className="Owner--info">
                <div>
                  <img src={OwnerImg_1} alt="" width={140} />
                </div>
                <span>Sponsorship</span>
                <div className="social--icons">
                  <img src={IconImg_1} alt="Telegram" />
                </div>
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  value={rich.name}
                  onChange={handleChange_1}
                  placeholder="Name"
                  maxLength="200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={rich.email}
                  onChange={handleChange_1}
                  placeholder="Email"
                  maxLength="200"
                  required
                />
                <textarea
                  name="message"
                  type="text"
                  value={rich.message}
                  placeholder="Type Message"
                  onChange={handleChange_1}
                  maxLength="200"
                  required
                />
              </div>
              <div className="check-box">
                <button
                  className={
                    !rich.message == "" ? "enabled-btn" : "disabled-btn"
                  }
                  disabled={!rich.message == "" ? false : true}
                  onClick={handleSubmit}
                >
                  {!rich.mesg == "" ? "Send Message" : "Type Message"}
                </button>
              </div>
            </div>
          )}
        {rich.name == "" &&
          rich.email == "" &&
          rich.message == "" &&
          mich.name == "" &&
          mich.email == "" &&
          mich.message == "" && (
            <div className="contact--wrapper">
              <div className="Owner--info">
                <div>
                  <img src={OwnerImg_2} alt="Marketing" width={140} />
                </div>
                <span>Marketing</span>
                <div className="social--icons">
                  <img src={IconImg_1} alt="Telegram" />
                </div>
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  value={thom.name}
                  onChange={handleChange_2}
                  placeholder="Name"
                  maxLength="200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={thom.email}
                  onChange={handleChange_2}
                  placeholder="Email"
                  maxLength="200"
                  required
                />
                <textarea
                  name="message"
                  type="text"
                  value={thom.message}
                  placeholder="Type Message"
                  onChange={handleChange_2}
                  maxLength="200"
                  required
                />
              </div>
              <div className="check-box">
                <button
                  className={
                    !thom.message == "" ? "enabled-btn" : "disabled-btn"
                  }
                  disabled={!thom.message == "" ? false : true}
                  onClick={handleSubmit}
                >
                  {!thom.mesg == "" ? "Send Message" : "Type Message"}
                </button>
              </div>
            </div>
          )}
        {rich.name == "" &&
          rich.email == "" &&
          rich.message == "" &&
          thom.name == "" &&
          thom.email == "" &&
          thom.message == "" && (
            <div className="contact--wrapper">
              <div className="Owner--info">
                <div>
                  <img src={OwnerImg_3} alt="Token Sale" width={140} />
                </div>
                <span>Support</span>
                <div className="social--icons">
                  <img src={IconImg_1} alt="Telegram" />
                </div>
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  value={mich.name}
                  onChange={handleChange_3}
                  placeholder="Name"
                  maxLength="200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={mich.email}
                  onChange={handleChange_3}
                  placeholder="Email"
                  maxLength="200"
                  required
                />
                <textarea
                  name="message"
                  type="text"
                  value={mich.message}
                  placeholder="Type Message"
                  onChange={handleChange_3}
                  maxLength="200"
                  required
                />
              </div>
              <div className="check-box">
                <button
                  className={
                    !mich.message == "" ? "enabled-btn" : "disabled-btn"
                  }
                  disabled={!mich.message == "" ? false : true}
                  onClick={handleSubmit}
                >
                  {!mich.message == "" ? "Send Message" : "Type Message"}
                </button>
              </div>
            </div>
          )}
        <div className="social-icons">
          {social_icons_data.map((item) => {
            return (
              <a
                href={item.route_link}
                key={item.id}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.icon}
                  alt={item.icon_name}
                  style={{ margin: item.space && item.space }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
