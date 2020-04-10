import React from 'react';

function Card({ children, event, ...restProps }) {
  return (
    <div className="card" style={{ ...restProps.style, fontSize: '12px' }}>
      <span style={{ color: 'gray' }}>
        {event.allday ? 'ALL DAY—' : `${event.start}—`}
      </span>
      <span style={{ fontWeight: 'bold' }}>{event.item}</span>
      <span style={{ color: 'green' }}>{event.location}</span>
    </div>
  );
}

Card.defaultProps = {
  event: {
    start: '9:00',
    end: '10:00',
    item: 'Sample Item',
    location: 'Sample Location'
  }
};

export default Card;
