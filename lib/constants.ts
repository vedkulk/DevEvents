export type EventItem = {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
  };
  
  export const events: EventItem[] = [
    {
      image: "/images/event1.png",
      title: "Next.js Global Summit 2025",
      slug: "nextjs-global-summit-2025",
      location: "San Francisco, USA",
      date: "March 14, 2025",
      time: "10:00 AM PST",
    },
    {
      image: "/images/event2.png",
      title: "AI & LLM Dev Conference",
      slug: "ai-llm-dev-conference",
      location: "Bangalore, India",
      date: "April 5, 2025",
      time: "9:30 AM IST",
    },
    {
      image: "/images/event3.png",
      title: "Google I/O Extended",
      slug: "google-io-extended-2025",
      location: "London, UK",
      date: "May 18, 2025",
      time: "12:00 PM GMT",
    },
    {
      image: "/images/event4.png",
      title: "React Native Live Workshop",
      slug: "react-native-live-workshop",
      location: "Berlin, Germany",
      date: "June 22, 2025",
      time: "2:00 PM CET",
    },
    {
      image: "/images/event5.png",
      title: "Open Source Developer Meetup",
      slug: "open-source-developer-meetup",
      location: "Toronto, Canada",
      date: "July 9, 2025",
      time: "11:00 AM EST",
    },
    {
      image: "/images/event6.png",
      title: "Web Performance Optimization Bootcamp",
      slug: "web-performance-optimization-bootcamp",
      location: "Online Event",
      date: "August 3, 2025",
      time: "6:00 PM UTC",
    },
  ];
  