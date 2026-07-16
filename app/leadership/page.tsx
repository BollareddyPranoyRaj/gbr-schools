// app/leadership/page.tsx

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Leadership & Management</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Meet the dedicated visionaries and educators guiding GBR Schools toward academic excellence.
        </p>
      </div>

      <div className="space-y-16">
        {/* Principal's Message */}
        <section className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 bg-gray-200 rounded-full border-4 border-white shadow-lg flex items-center justify-center overflow-hidden relative">
              {/* Placeholder for Principal's Photo */}
              <span className="text-gray-400 font-medium">Photo</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-primary mb-2">Message from the Principal</h2>
            <h3 className="text-accent font-medium mb-6">Dr. Academic Leader</h3>
            <div className="space-y-4 text-text-muted text-sm leading-relaxed">
              <p>
                Welcome to GBR Schools. Our institution has carved a niche for itself in a matter of a few years. We firmly believe that every child is unique, and our dedicated faculty makes a conscious effort to cater to individual learning styles.
              </p>
              <p>
                In today&apos;s rapidly changing world, multiple intelligence is the need of the hour. We adopt a different approach to take care of the children, making them aware of the beauty of the world around them while sensitizing them to the environment and society.
              </p>
              <p>
                We strive to enable children to see, feel, sense, and touch life as it is. Our goal is to build the base of a future India right from the first step a child takes into our school, ensuring they graduate as knowing, caring, responsible, and extremely conscientious citizens.
              </p>
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-8 border-b border-gray-200 pb-2 text-center md:text-left">Board of Directors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center border-2 border-white shadow-sm">
                   <span className="text-gray-400 text-sm">Photo</span>
                </div>
                <h3 className="text-lg font-semibold text-primary">Director Name {item}</h3>
                <p className="text-accent text-sm mb-3">Board Member</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  Dedicated to fostering an environment of holistic education and continuous infrastructural development at GBR Schools.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
