// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            About GBR Schools
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A legacy of academic excellence, holistic development, and shaping the global citizens of tomorrow.
          </p>
        </div>

        {/* About & Image Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Placeholder */}
          <div className="w-full lg:w-1/2 h-[450px] bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center relative overflow-hidden shadow-sm">
            {/* 
              Replace this block with your actual next/image component when you have the Cloudinary link 
              <Image src="YOUR_LINK" alt="GBR School Building" fill className="object-cover" />
            */}
            <span className="text-gray-400 font-medium">School Building Image Placeholder</span>
          </div>

          {/* About Text */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Legacy</h2>
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
        <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-12 shadow-sm flex flex-col sm:flex-row justify-around items-center gap-8">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#b8860b] mb-2">17</p>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Acres of Campus</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#b8860b] mb-2">2000+</p>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Students Enrolled</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#b8860b] mb-2">100%</p>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Commitment</p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-[#789c4a]/10 border border-[#789c4a]/30 rounded-xl p-8 shadow-sm">
            <div className="bg-[#789c4a] inline-block px-4 py-1.5 rounded-md mb-6">
              <h3 className="text-lg font-bold text-white tracking-wide">VISION</h3>
            </div>
            <p className="text-text-muted leading-relaxed">
              The Institution has carved a niche for itself in a matter of a few years. We believe that every child is unique and an effort is made to cater to his / her individuality. Multiple intelligence being the need of the hour, a different approach is adopted to take care of the children.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#e6c755]/15 border border-[#e6c755]/40 rounded-xl p-8 shadow-sm">
            <div className="bg-[#e6c755] inline-block px-4 py-1.5 rounded-md mb-6">
              <h3 className="text-lg font-bold text-[#5a4a18] tracking-wide">MISSION</h3>
            </div>
            <p className="text-text-muted leading-relaxed">
              Our Mission is to make children aware of the beauty of the world around them, sensitise them to the environment, social and other wise, help them make responsible choices in life. We strive to enable children to see, feel, sense and touch life as it is. We at "GBR" build the base of a future India right from the first step the child takes to school and carries on till he passes out of its corridors as a knowing, caring, responsible and extremely conscientious citizen of India.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}