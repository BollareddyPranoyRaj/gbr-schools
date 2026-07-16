// app/gallery/page.tsx

export default function GalleryPage() {
  // Placeholder array for gallery images/videos
  const galleryItems = [
    { id: 1, title: "Annual Sports Day", category: "Events" },
    { id: 2, title: "Science Exhibition", category: "Academics" },
    { id: 3, title: "Cultural Festival", category: "Events" },
    { id: 4, title: "Computer Lab", category: "Infrastructure" },
    { id: 5, title: "Library Reading Session", category: "Academics" },
    { id: 6, title: "E.M.S Campus Playground", category: "Infrastructure" },
    { id: 7, title: "Award Ceremony", category: "Events" },
    { id: 8, title: "Art & Craft Workshop", category: "Academics" },
    { id: 9, title: "A.C. Campus Classrooms", category: "Infrastructure" },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Campus Gallery</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Take a glimpse into the vibrant life, events, and world-class facilities at GBR Schools.
        </p>
      </div>

      {/* Filter Tabs (Visual Only for now) */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button className="px-6 py-2 bg-primary text-white rounded-full text-sm font-medium transition-colors">
          All
        </button>
        <button className="px-6 py-2 bg-[var(--color-surface)] border border-gray-200 text-text-muted hover:text-primary hover:border-primary/30 rounded-full text-sm font-medium transition-colors">
          Infrastructure
        </button>
        <button className="px-6 py-2 bg-[var(--color-surface)] border border-gray-200 text-text-muted hover:text-primary hover:border-primary/30 rounded-full text-sm font-medium transition-colors">
          Academics
        </button>
        <button className="px-6 py-2 bg-[var(--color-surface)] border border-gray-200 text-text-muted hover:text-primary hover:border-primary/30 rounded-full text-sm font-medium transition-colors">
          Events
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="group relative bg-[var(--color-surface)] border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 aspect-video flex flex-col">
            {/* Placeholder for actual Cloudinary Image */}
            <div className="flex-grow bg-gray-100 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
              <svg className="w-12 h-12 text-gray-300 group-hover:text-primary/30 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-100 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-primary font-semibold text-sm">{item.title}</h3>
              <p className="text-accent text-xs mt-1">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}