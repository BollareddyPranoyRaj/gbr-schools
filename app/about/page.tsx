// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';

const leadersData = [
  {
    name: "Sri. Bollareddy Pranoy Raj",
    role: "Dean",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Leading the strategic vision and academic growth of GBR Group of Schools, ensuring world-class infrastructure and pedagogical innovations to nurture future leaders.",
    highlights: [
      "Oversees campus development and global affiliations",
      "Drives the integration of digital learning systems",
      "Pioneered the 17-acre holistic campus design"
    ]
  },
  {
    name: "Dr. K. Srinivasa Rao",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Directing the academic administration, fostering school discipline, and guiding teachers and students towards achieving 100% academic excellence.",
    highlights: [
      "20+ years of educational leadership experience",
      "Ensures strict discipline and value-based standards",
      "Mentors senior students for competitive board exams"
    ]
  },
  {
    name: "Smt. M. Padmavathi",
    role: "Headmistress (HM)",
    image: "https://images.unsplash.com/photo-1580894732444-8febeb78fb3e?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Directing primary and department level operations, supervising curriculum delivery, and ensuring daily discipline and student welfare.",
    highlights: [
      "Oversees department-specific teaching methodologies",
      "Direct coordinator for student activities and campus clubs",
      "Ensures individual student care and parental communication"
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="text-center mb-12 pt-16 sm:pt-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 [text-wrap:balance]">
            About GBR Schools
          </h1>
          <p className="text-base text-text-muted max-w-2xl mx-auto">
            A legacy of academic excellence, holistic development, and shaping the global citizens of tomorrow.
          </p>
        </div>

        {/* About & Image Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <Image 
              src="https://res.cloudinary.com/dkoxrayf2/image/upload/f_auto,q_auto/v1785475730/about-page_ayd1om.png" 
              alt="GBR School Building" 
              width={800}
              height={500}
              priority
              className="w-full h-auto rounded-lg border border-border object-contain" 
            />
          </div>

          {/* About Text */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 id="legacy" className="scroll-mt-24 text-3xl font-bold text-primary [text-wrap:balance]">Our Legacy</h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                GBR Educational Institutions spread out over 17 acres, most far away from the town yet within the town limits, provides fresh air and ample opportunities for the holistic development of the children who will be accomplished individuals in many ways; happy and confident of leading their lot to a bright future.
              </p>
              <p>
                The Institution has carved a niche for itself in a matter of a few years. We believe that every child is unique and an effort is made to cater to his / her individuality. Multiple intelligence being the need of the hour, a different approach is adopted to take care of the children.
              </p>
              <p>
                Above all, the focus is to mould every child to be a responsible citizen of the world, with strong fundamentals and deep rooted values, to see them through the challenges of life.
              </p>
              <p className="font-medium text-primary">
                A school, we believe, should be a place where a child loves to be in and not where he / she dreads to go.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-background border border-border rounded-lg p-8 sm:p-12 flex flex-col sm:flex-row justify-around items-center gap-8">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2 tabular-nums">17</p>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Acres of Campus</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-border"></div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2 tabular-nums">17,000+</p>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Students Studied Since 1991</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-border"></div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-accent mb-2 tabular-nums">100%</p>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Commitment</p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-surface border border-border rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary" aria-hidden="true" />
            <h3 className="text-xl font-bold text-text-main mb-4 tracking-wide">VISION</h3>
            <p className="text-text-muted leading-relaxed">
              The Institution has carved a niche for itself in a matter of a few years. We believe that every child is unique and an effort is made to cater to his / her individuality. Multiple intelligence being the need of the hour, a different approach is adopted to take care of the children.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-surface border border-border rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent" aria-hidden="true" />
            <h3 className="text-xl font-bold text-text-main mb-4 tracking-wide">MISSION</h3>
            <p className="text-text-muted leading-relaxed">
              Our Mission is to make children aware of the beauty of the world around them, sensitise them to the environment, social and other wise, help them make responsible choices in life. We strive to enable children to see, feel, sense and touch life as it is. We at &quot;GBR&quot; build the base of a future India right from the first step the child takes to school and carries on till he passes out of its corridors as a knowing, caring, responsible and extremely conscientious citizen of India.
            </p>
          </div>

        </div>

        {/* Leadership Section (Zigzag Layout) */}
        <div className="space-y-16 lg:space-y-24 pt-8">
          <div className="border-b border-border pb-6">
            <h2 className="text-3xl font-bold text-primary tracking-wide">Our Leadership</h2>
            <p className="text-base text-text-muted mt-2">
              Meet the educational visionaries dedicated to maintaining GBR&apos;s legacy of academic rigor, holistic values, and discipline.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {leadersData.map((leader, index) => {
              const isImageLeft = index % 2 === 0;
              return (
                <div 
                  key={leader.role} 
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                    isImageLeft ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Leader Image */}
                  <div className="w-full lg:w-2/5 flex justify-center">
                    <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} - ${leader.role}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    </div>
                  </div>

                  {/* Leader Details */}
                  <div className="w-full lg:w-3/5 space-y-4 text-left">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                        {leader.role}
                      </span>
                      <h3 className="text-2xl font-bold text-text-main">{leader.name}</h3>
                    </div>
                    <p className="text-base text-text-muted leading-relaxed">
                      {leader.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {leader.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                          <svg className="w-4 h-4 text-accent shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Us redirect CTA section */}
        <div className="pt-12 text-center">
          <div className="bg-surface border border-border p-8 rounded-lg max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Want to Visit Us in Person?</h3>
            <p className="text-text-muted text-sm mb-6 leading-relaxed">
              We would love to show you around our 17-acre campus. Get in touch with our team to arrange a tour or ask any questions about our history and values.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-[var(--radius-sm)] hover:bg-primary/95 transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Contact Us & Schedule Tour
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}