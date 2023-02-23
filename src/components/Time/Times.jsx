import React, { useEffect, useState } from "react";

function Times({ date }) {
  // function changeTimezone(date, ianatz) {
  //   // suppose the date is 12:00 UTC
  //   const invdate = new Date(
  //     date.toLocaleString("en-US", {
  //       timeZone: ianatz,
  //     })
  //   );

  //   const diff = date.getTime() - invdate.getTime();

  //   return new Date(date.getTime() - diff); // needs to substract
  // }
  // console.log(date, "date");

  // const getDateObject = (e) => changeTimezone(new Date(e), "Poland");

  // console.log("first ew", getDateObject(date));
  const deadline = new Date(date);
  const gmt = new Date(date);

  let newVal_1 = gmt.toString();
  newVal_1 = newVal_1.slice(16, 21);

  // console.log("first", newVal_1.slice(16, 21));

  let newVal = deadline.toString();
  newVal = newVal.split(" ").slice(0, 4).join(" ");
  // const newVal_1 = deadline.slice(0, 20);
  // let newVal_2 = newVal.split(" ").slice(5, 6).join(" ");
  // console.log("deadline", newVal_1);
  // console.log(newVal, "newVal");
  // const deadline = new Date("Sun 11, 2023 15:37:25").getTime();

  useEffect(() => {
    const x = setInterval(function () {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      const distance = deadline - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo_1"
      document.getElementById("demo_1").innerHTML =
        (days ? days + "d " : null) +
        hours +
        "h " +
        minutes +
        "m " +
        seconds +
        "s ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo_1").innerHTML = "Event Ended";
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);
  return (
    <>
      <span style={{ fontSize: "14px" }}>{`${newVal}`}</span>
      <span style={{ fontSize: "14px" }}>00:00 GMT</span>
      <div
        id="demo_1"
        style={{
          fontSize: "13px",
          textAlign: "center",
          color: "yellow",
        }}
      ></div>
    </>
  );
}

export default Times;
