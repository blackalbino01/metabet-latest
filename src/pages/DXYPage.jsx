import React, { useEffect } from "react";
import DXYComponent from "../Components/DXY/DXYComponent";

const DXYPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DXYComponent />
    </>
  );
};

export default DXYPage;
