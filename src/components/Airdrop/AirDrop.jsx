import React, { useEffect } from "react";
import { AirdropContainer } from "./Airdrop.styles";
import { Helmet } from "react-helmet";

const AirDrop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AirdropContainer>
      <div className="page">
        <div className="wrapper">
          <div className="content">
            <div className="wrapper-air">
              <div id="63507-fwljyeog" class="sw_container"></div>
              <Helmet>
                <script
                  type="text/javascript"
                  src="https://sweepwidget.com/w/j/w_init.js"
                ></script>
              </Helmet>
            </div>
          </div>
        </div>
      </div>
    </AirdropContainer>
  );
};

export default AirDrop;
