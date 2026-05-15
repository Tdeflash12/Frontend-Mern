export default function Loading() {
  return (
    <div className="min-h-[60vh] animate-pulse" style={{ animationDuration: "1.2s" }}>
      <div className="container mx-auto px-4 py-10 grid gap-8 lg:grid-cols-2 items-start">
        <div className="h-96 w-full overflow-hidden rounded-2xl bg-gray-100" />

        <div className="space-y-6">
          <div className="h-6 w-48 rounded-full bg-gray-200" />
          <div className="h-5 w-32 rounded-full bg-gray-200" />

          <div className="space-y-3">
            <div className="h-4 w-full max-w-lg rounded-full bg-gray-200" />
            <div className="h-4 w-full max-w-lg rounded-full bg-gray-200" />
            <div className="h-4 w-5/6 max-w-lg rounded-full bg-gray-200" />
          </div>

          <div className="mt-4 flex items-center gap-4">
            <div className="h-10 w-36 rounded-full bg-gray-200" />
            <div className="h-10 w-36 rounded-full bg-gray-200" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="h-12 w-full rounded-full bg-gray-200" />
            <div className="h-12 w-full rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
