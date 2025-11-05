import { notFound } from 'next/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventsDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  // Await params in Next.js 15+
  const { slug } = await params;

  const response = await fetch(`${BASE_URL}/api/events/${slug}`, { cache: "no-store" });

  if (!response.ok) {
    return notFound();
  }

  const { data } = await response.json();

  if (!data) return notFound();

  return (
    <section>
      <h1>Event Details: {data.title}</h1>
    </section>
  );
};

export default EventsDetailsPage;