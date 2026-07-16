// app/loading.tsx

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-primary font-medium tracking-wide animate-pulse">
        Loading GBR Schools...
      </p>
    </div>
  );
}