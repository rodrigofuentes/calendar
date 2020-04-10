/**
 * DATA NOTES:
 * Max width for items is 4 , otherwise it breaks
 * Time is hardcoded to only work from 9AM to 9PM
 *
 *
 */

const data = {
  day: new Date().toDateString(),
  events: [
    {
      allday: true,
      item: 'Sample Item',
      location: 'Sample Location'
    },
    {
      start: '9:30',
      end: '10:00',
      item: 'Sample Item',
      location: 'Sample Location'
    },
    {
      start: '9:00',
      end: '10:00',
      item: 'Sample Item',
      location: 'Sample Location'
    },
    {
      start: '11:00',
      end: '12:30',
      item: 'Sample Item',
      location: 'Sample Location'
    },
    {
      start: '13:00',
      end: '14:30',
      item: 'Sample Item',
      location: 'Sample Location'
    },
    {
      start: '14:00',
      end: '15:00',
      item: 'Sample Item',
      location: 'Sample Location'
    },
    {
      start: '17:00',
      end: '20:00',
      item: 'Sample Item',
      location: 'Sample Location'
    },
    {
      start: '17:00',
      end: '17:30',
      item: 'Sample Item',
      location: 'Sample Location'
    },
    {
      start: '17:30',
      end: '19:00',
      item: 'Sample Item',
      location: 'Sample Location'
    }
  ]
};
// const jsonData = JSON.stringify(data);
module.exports = JSON.stringify(data);
