import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';
const AllEventsPage = () => {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
