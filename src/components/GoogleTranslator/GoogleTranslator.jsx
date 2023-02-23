import React from "react";
import styled from "styled-components";

const GoogleContainer = styled("div")`
  display: flex;
  padding: 0 8px;

  .goog-te-gadget {
    span {
      display: none;
    }

    text {
      color: #fff;
      display: none;
    }

    .goog-te-combo {
      padding: 10px 0px 10px 0px;
      border-radius: 8px;
    }
  }
`;

const GoogleTranslator = () => {
  var selectTag = document.querySelector(".goog-te-combo");
  // var optionInnerText = document.querySelector(".goog-te-combo>option");
  // var ptext = optionInnerText.textContent;
  // var span = document.createElement("span");
  // var textWord = document.createTextNode("Water");
  // span.appendChild(textWord);

  // console.log("tests", selectTag);

  // for (var i = 0; i < selectTag.length; i++) {
  //   if (selectTag.options[i].text === "French") {
  //     selectTag.options[i].text = "Freedom 😂😂:/";
  //   }
  // }

  return (
    <GoogleContainer>
      <div id="google_translate_element"></div>
    </GoogleContainer>
  );
};

export default GoogleTranslator;
