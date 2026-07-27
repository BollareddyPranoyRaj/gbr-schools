// app/loading.tsx

export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-background flex flex-col items-center justify-center">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-2 border-border rounded-full" />
        <div className="absolute inset-0 border-2 border-primary rounded-full border-t-transparent animate-spin" />
      </div>
      <p className="mt-4 text-text-muted text-sm font-medium">
        Loading...
      </p>
    </div>
  );
}