export default function Loading() {
  return (
    <section className="p-6">
      <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
      <div className="mt-4 h-4 w-80 bg-gray-200 rounded animate-pulse" />
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="h-40 bg-gray-200 rounded animate-pulse" />
        <div className="h-40 bg-gray-200 rounded animate-pulse" />
      </div>
    </section>
  );
}
