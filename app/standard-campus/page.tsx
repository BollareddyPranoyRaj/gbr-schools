export default function StandardCampusPage() {
  const strengths = [
    {
      title: "Open, Ventilated Campus",
      description: "Spacious classrooms and open corridors support a bright, energetic school day.",
      icon: "▦",
    },
    {
      title: "Large Playgrounds",
      description: "Outdoor spaces for cricket, volleyball, football, athletics, and daily fitness.",
      icon: "◎",
    },
    {
      title: "Strong Academic Routine",
      description: "A disciplined environment focused on steady learning, punctuality, and results.",
      icon: "✓",
    },
  ];

  const highlights = [
    "Nursery to 10th grade learning pathway",
    "Balanced academics, activities, and sports",
    "Well-structured student supervision",
    "Shared GBR values, curriculum, and parent communication",
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary">E.M.S Campus</h1>
          <p className="mx-auto max-w-2xl text-text-muted">
            A spacious, naturally ventilated campus built for academic discipline, outdoor activity, and everyday student confidence.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-gray-200 bg-[var(--color-surface)] p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-primary">Campus Strengths</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {strengths.map((item) => (
                <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-5">
                  <div className="mb-4 text-3xl font-bold text-accent">{item.icon}</div>
                  <h3 className="mb-2 font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary p-8 text-white shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Why Families Choose E.M.S</h2>
            <ul className="space-y-4">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
