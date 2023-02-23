import React from "react";
import { useEffect } from "react";
import { BugContainer } from "./bug.styles";
import { Helmet } from "react-helmet";

const BugBounty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BugContainer>
      <div className="page">
        <div className="wrapper">
          <div className="content">
            <div className="wrapper-bug">
              <div id="64520-mcvtrq90" class="sw_container"></div>
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
    </BugContainer>
  );
};

export default BugBounty;
