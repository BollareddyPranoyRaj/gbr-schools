// app/parents/page.tsx

import { schoolData } from "../lib/schoolData";

export default function ParentsPage() {
  const { appFeatures } = schoolData;

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">Parent Portal & GBR App</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Stay connected with your child&apos;s academic journey. The GBR APP ensures smooth, real-time communication with the school.
        </p>
      </div>

      <div className="space-y-16">
        {/* GBR App Features Section */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-white/10 pb-2">
            Key Features of GBR APP
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-primary/10 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-accent mb-6">Benefits for Parents & Schools</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-accent font-bold">1.</span>
              <p className="text-text-main text-sm"><strong>Real-Time Communication:</strong> Stay informed with instant updates on announcements, circulars, homework, and school activities.</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent font-bold">2.</span>
              <p className="text-text-main text-sm"><strong>Centralized Information:</strong> All essential school information is stored in one place – making it easy to access and stay organized.</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent font-bold">3.</span>
              <p className="text-text-main text-sm"><strong>Time-Saving & Convenient:</strong> No need to call the school or wait for PTMs to stay updated. Communication is efficient and hassle-free.</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent font-bold">4.</span>
              <p className="text-text-main text-sm"><strong>Better Involvement:</strong> Enables parents to be more actively engaged in their child&apos;s school life, helping build a stronger home-school partnership.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
