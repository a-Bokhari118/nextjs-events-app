import Link from 'next/link';
import classes from './EventItem.module.css';
import Button from '../ui/Button';
const EventItem = ({ event: { title, image, date, location, id } }) => {
  const hdate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const daddress = location.replace(', ', '\n');
  const exploreLink = `events/${id}`;
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{hdate}</time>
          </div>
          <div className={classes.address}>
            <address>{daddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
