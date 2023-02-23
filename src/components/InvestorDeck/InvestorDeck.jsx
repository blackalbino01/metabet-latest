import React from "react";
import { useEffect } from "react";
import PDFProtector from "../PDFProtector/PDFProtector";

const InvestorDeck = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PDFProtector />
    </>
  );
};

export default InvestorDeck;
