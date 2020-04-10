import React, { useState, useEffect } from 'react';
import Card from './Card';

function Events({ events }) {
  const [gridDp, setGridDp] = useState([]);

  useEffect(() => {
    // hard limit at 4 for width
    // these functions should live higher up on the ancestry line.
    (function newEvents(events) {
      function getNums(s) {
        return +s.replace(':', '');
      }
      const sortedEvents = events.sort(
        (a, b) => getNums(a.start) - getNums(b.start)
      );

      let maxTimes = [];

      sortedEvents.forEach((event, i) => {
        const c0 = getNums(event.start);
        const c1 = getNums(event.end);
        if (maxTimes[maxTimes.length - 1] !== undefined) {
          const a0 = maxTimes[maxTimes.length - 1][0];
          const a1 = maxTimes[maxTimes.length - 1][1];

          if (a0 < c0 && a1 < c0) {
            maxTimes.push([c0, c1]);
          } else if (a1 >= c0 && a1 < c1) {
            maxTimes[maxTimes.length - 1][1] = c1;
          }
        } else {
          maxTimes.push([c0, c1]);
        }
      });

      let lenTimes = [];
      let dp = [];

      sortedEvents.forEach((event, i) => {
        const a0 = getNums(event.start);
        const a1 = getNums(event.end);

        maxTimes.forEach((time, i) => {
          if (a0 >= time[0] && a1 <= time[1]) {
            lenTimes[i] ? lenTimes[i].push(event) : (lenTimes[i] = [event]);
          }
        });
      });

      lenTimes.forEach((subArr, i) => {
        let currRow = 1;
        let currCol = 1;
        let colSpan = 12 / subArr.length;
        let rowSpan = 0;
        subArr.forEach((e, i) => {
          const ss = e.start.split(':');
          const se = e.end.split(':');
          let ss0 = getNums(ss[0]);
          let ss1 = getNums(ss[1]);
          let se0 = getNums(se[0]);
          let se1 = getNums(se[1]);

          se1 === 30 ? (se1 = 1) : (se1 = 0);
          ss1 === 30 ? (ss1 = 1) : (ss1 = 0);

          currRow = (ss0 - 9) * 2 + 1 + ss1;
          rowSpan = (se0 - 9) * 2 + 1 + se1 - currRow;

          dp.push([currRow, rowSpan, currCol, colSpan]);
          currCol += colSpan;
        });
      });

      setGridDp(dp);
    })(events);
  }, [events]);

  /*

    // 9 : ((9-9) * 2) + 1 , ...check minutes +(0 or 1)  = 9
    // 10:30 : ((10-9) * 2) + 1, ...check minutes + 1 = 4
    // 12 : ((12-9) * 2) + 1 + 0 = 7
    // 1pm: ((13-9) * 2) + 1 + 0 = 9
    9     : 1
    9:30  : 2
    10    : 3
    10:30 : 4
    11    : 5
    11:30 : 6
    12    : 7
    12:30 : 8
    1     : 9
    1:30  : 10

   */

  return (
    <div className="events">
      {gridDp[0] &&
        events.map((event, i) => {
          let [currRow, rowSpan, currCol, colSpan] = gridDp[i];
          const ifSpan1 = {};
          if (rowSpan === 1) {
            ifSpan1.alignItems = 'center';
            ifSpan1.flexDirection = 'row';
          }
          const style = {
            // TODO: fix issues with font-sizing
            gridRow: `${currRow} / span ${rowSpan}`,
            gridColumn: `${currCol} / span ${colSpan}`,
            marginTop: '2px',
            border: '2px solid transparent',
            borderRight: 'none'
          };
          return (
            <div style={style}>
              <Card event={event} style={ifSpan1} />
            </div>
          );
        })}
    </div>
  );
}

export default Events;
