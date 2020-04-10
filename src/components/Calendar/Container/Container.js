import React from "react";

import Events from "./Events";

import "./Container.scss";

function Container(props) {
  function makeTimeArray(start, end) {
    // hardcoded from 9am to 9pm
    const MINUTE_INTERVAL = 30;
    const ts = new Date(1970, 0, 1, start, 0, 0, 0); // 50400000
    const te = new Date(1970, 0, 1, end, 30, 0, 0); // 59400000

    const timeArray = [];
    while (ts.getTime() <= te.getTime()) {
      const timeString = ts
        .toLocaleTimeString("default", { hour: "numeric", minute: "numeric" })
        .replace(/(AM|PM)/g, "")
        .trim();
      timeArray.push(timeString);
      ts.setMinutes(ts.getMinutes() + MINUTE_INTERVAL);
    }
    return timeArray;
  }

  return (
    <div className="calendar-container">
      <Events />
      <div className="calendar-inner">
        <div className="time-container am">
          <h1>AM</h1>
          <div className="inner-container">
            {makeTimeArray(9, 11).map((time, i) => {
              return (
                <div className="child" key={i}>
                  {time}
                </div>
              );
            })}
          </div>
        </div>
        <div className="time-container pm">
          <h1>PM</h1>
          <div className="inner-container">
            {makeTimeArray(12, 20).map((time, i) => {
              return (
                <div className="child" key={i}>
                  {time}
                </div>
              );
            })}
            <div className="child"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
