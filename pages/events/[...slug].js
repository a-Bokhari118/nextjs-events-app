import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
const FilteredEvenstPage = () => {
  const router = useRouter();
  const filterdData = router.query.slug;
  if (!filterdData) {
    return <p className='center'>Loading...</p>;
  }

  const filterdYear = filterdData[0];
  const filterdMonth = filterdData[1];

  const numYear = Number(filterdYear);
  const numMonth = Number(filterdMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filter</p>;
  }

  const filterdEvnets = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filterdEvnets || filterdEvnets.length === 0) {
    return <p>No Events Found</p>;
  }
  return (
    <>
      <EventList items={filterdEvnets} />
    </>
  );
};

export default FilteredEvenstPage;
