import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import { IEvent } from '@/database'
import { events } from '@/lib/constants';
import React from 'react'

const Hello = async () => {
  const response = await fetch(`/api/events`, { next: { revalidate: 60 } });
  const data = await response.json();
  const eventsList: IEvent[] = data.events;

  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev Event You Cannot Miss!</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events?.length > 0 ? (
            events.map((event) => (
              <li className="list-none" key={event.title}>
                <EventCard {...event} />
              </li>
            ))
          ) : (
            <p>No events found</p>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Hello
