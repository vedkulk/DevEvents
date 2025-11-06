export default function Loading() {
  return (
    <section id="event-loading" className="p-6">
      <div className="header">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="mt-2 h-4 w-80 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="details mt-6 flex flex-col gap-6">
        <div className="w-full h-64 bg-gray-200 rounded animate-pulse" />
        <div className="flex flex-col gap-2">
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </section>
  );
}
