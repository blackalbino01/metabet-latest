import styled from "styled-components";
import React, { useState } from "react";
import InvestorDeckPDF from "./InvestorDeckPDF";

const PDFProtectContainer = styled("div")`
  position: relative;
  .PDFProtector {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 175vh;
    position: absolute;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
    max-width: 400px;
    background: rgba(8, 29, 42, 0.7);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    transform: translate(0px, -190px);
  }

  form label {
    position: relative;
  }

  form input[type="text"],
  input[type="password"] {
    font-size: 14px;
    font-weight: 400;
    padding: 10px 15px 10px 55px;
    position: relative;
    width: 200px;
    height: 24px;
    border: none;
    background: rgba(27, 44, 56, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
    color: rgb(255, 255, 255);
    transition: color 0.3s ease-out;
    border-radius: 8px;

    &::placeholder {
      color: #fff;
    }
  }

  form input[type="text"] {
    margin-bottom: 15px;
  }
  /*continued styling for input */
  form input[type="checkbox"] {
    display: none;
  }

  form label i {
    font-size: 18px;
    left: 0px;
    top: 0px;
    position: absolute;
    height: 44px;
    width: 44px;
    color: #f7f3eb;
    background: rgba(27, 44, 56, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    line-height: 44px;
    transition: all 0.3s ease-out;
    pointer-events: none;
    border-radius: 8px;
  }

  form button[type="submit"] {
    margin-top: 15px;
    width: 270px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    padding: 12px 0;
    color: #fff;
    background: rgba(27, 44, 56, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);

    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    text-transform: uppercase;
    border: none;
    margin-bottom: 20px;
    border-radius: 10px;
    cursor: pointer;
  }

  .error {
    color: red;
    font-size: 16px;
    text-align: center;
    margin-top: 12px;
  }
`;

const PDFProtector = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      password: "88888",
    },
    {
      password: "pass2",
    },
  ];

  const errors = {
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.password === pass.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "pass", message: errors.pass });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="PDFProtector">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="password"
            name="pass"
            placeholder="Enter Password"
            required
          />
          {renderErrorMessage("pass")}
          <i class="fa fa-lock"></i>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  return (
    <PDFProtectContainer>
      {isSubmitted ? <InvestorDeckPDF /> : renderForm}
    </PDFProtectContainer>
  );
};

export default PDFProtector;
