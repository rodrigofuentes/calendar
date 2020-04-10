import React, { useState, useEffect } from 'react';

import Day from './Day/';
import Background from './Background';
import Container from './Container';
import Card from './Container/Card';

import styles from './Calendar.module.scss';
// mock data
import data from '../../data';

function Calendar() {
  const [currentDay, setCurrentDay] = useState('');
  const [allDay, setAllDay] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // An api call happens...
    const response = JSON.parse(data);
    const { day, events } = response;

    (function getDate(day) {
      const parseDay = new Date(day);
      // some error checking etc
      const formatDay = parseDay.toLocaleString('default', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      });
      setCurrentDay(formatDay);
    })(day);

    (function getEvents(events) {
      const newEvents = [];
      const newAllDays = [];

      events.forEach(event => {
        if (event?.allday) newAllDays.push(event);
        else newEvents.push(event);
      });
      setAllDay(newAllDays);
      setEvents(newEvents);
    })(events);
  }, []);

  return (
    <div className={styles['main-container']}>
      <Background text="Calendar" />
      <Day day={currentDay} />
      <div className={styles.alldays}>
        <div className={styles['alldays-inner']}>
          {allDay.map((event, i) => {
            return (
              <Card
                event={event}
                style={{ alignItems: 'center', flexDirection: 'row' }}
                key={i}
              ></Card>
            );
          })}
        </div>
      </div>
      <Container events={events} />
    </div>
  );
}

export default Calendar;
