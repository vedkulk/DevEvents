import BookEvent from '@/components/BookEvent';
import EventCard from '@/components/EventCard';
import { Booking, IEvent } from '@/database';
import { getSimilarEventsBySlug } from '@/lib/actions/events.action';
import { cacheLife } from 'next/cache';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const EventDetailItem = ({ icon, alt, label }: { icon: string, label: string, alt: string }) => {
  return (
    <div className='flex-row-gap-2 items-center'>
      <Image src={icon} alt={alt} width={17} height={17} />
      <p>{label}</p>
    </div>
  )
}

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => {
  return (
    <div className='agenda'>
      <h2>Agenda</h2>
      <ul>
        {agendaItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const EventTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <h2 className="whitespace-nowrap">Tags:</h2>
      {tags.map((tag) => (
        <span className="pill" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};


const EventsDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  'use cache'
  cacheLife('hours')
  const bookings = 10
  const { slug } = await params;
  const response = await fetch(`${BASE_URL}/api/events/${slug}`, { cache: "no-store" });

  // Parse the response
  const data = await response.json();
  
  // Handle error cases
  if (!data.success || !data.event) {
    return notFound();
  }
  
  // Keep the full event object
  const event = data.event;
  
  // Destructure the fields you need for display
  const { description, image, overview, date, time, location, mode, agenda, audience, tags, organizer } = event;

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  return (
    <section id='event'>
      <div className='header'>
        <h1>Event Description</h1>
        <p className='mt-2'>{description}</p>
      </div>
      <div className='details'>
        {
          <div className='content'>
            <Image src={image} alt="banner" width={800} height={800} className='banner' />
            <section className="flex-col-gap-2">
              <h2>
                Overview
              </h2>
              <p>
                {overview}
              </p>
            </section>
            <section className="flex-col gap-2">
              <h2>Event Details</h2>
              <EventDetailItem icon='/icons/calendar.svg' alt='calendar' label={date} />
              <EventDetailItem icon='/icons/clock.svg' alt='time' label={time} />
              <EventDetailItem icon='/icons/pin.svg' alt='location' label={location} />
              <EventDetailItem icon='/icons/mode.svg' alt='mode' label={mode} />
              <EventDetailItem icon='/icons/audience.svg' alt='audience' label={audience} />
            </section>
            <EventAgenda agendaItems={agenda} />
            <section className="flex-col gap-2">
              <h2>About the Organizer</h2>
              <p>{organizer}</p>
            </section>
            <EventTags tags={tags} />
          </div>
        }
        {
          <aside className='booking'>
            <div className='signup-card'>
              <h2>
                Book Your Spot
              </h2>
              {
                bookings > 0 ? (
                  <p>Join {bookings} people who have already booked their spot!</p>
                ) : (
                  <p>Be the first one to book a spot!</p>
                )
              }
              <BookEvent eventId={event._id} slug={event.slug}/>
            </div>
          </aside>
        }
      </div>
      <div className='flex w-full flex-col gap-4 pt-20'>
        <h2>Similar Events</h2>
        <div className="events">
          {similarEvents.length > 0 && similarEvents.map((similarEvent: IEvent) => (
            <EventCard key={similarEvent._id} {...similarEvent} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsDetailsPage;
