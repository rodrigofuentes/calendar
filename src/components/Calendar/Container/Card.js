import React from "react";

function Card({ children, event, ...restProps }) {
  return (
    <div className="card">
      <span style={{ color: "gray" }}>
        {event.allday ? "ALL DAY—" : `${event.start}—`}
      </span>
      <span style={{ fontWeight: "bold" }}>{event.item}</span>
      <span style={{ color: "green" }}>{event.location}</span>
    </div>
  );
}

Card.defaultProps = {
  event: {},
};

export default Card;
