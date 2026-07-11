// app/transport/page.tsx
import React from 'react';
import { Bus, MapPin, ShieldCheck, Users, AlertCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Transport Facilities | GBR Educational Institutions',
  description: 'Extensive and safe transport network covering Anaparthi, Rajahmundry, and 40+ surrounding villages.',
};

const routesData = [
  {
    hub: "Rajahmundry & Urban Route",
    villages: ["Rajahmundry City", "Morampudi", "Bommuru", "Dowleswaram", "Vemagiri", "Kadiyam", "Kadiyapulanka"]
  },
  {
    hub: "Mandapeta & Surroundings",
    villages: ["Mandapeta", "Alamuru", "Jonada", "Arthamuru", "Tapeshwaram", "Dwarapudi", "Medapadu"]
  },
  {
    hub: "Ramachandrapuram Route",
    villages: ["Ramachandrapuram", "Draksharamam", "Hasanbada", "Kota", "Vella", "Choppella", "Yanam (Border)"]
  },
  {
    hub: "Biccavolu & Rural Network",
    villages: ["Biccavolu", "Illapalli", "Balabhadrapuram", "Penumarthi", "Komaripalem", "Tossipudi", "G. Mamidada"]
  },
  {
    hub: "Anaparthi Local & Borders",
    villages: ["Anaparthi (All colonies)", "Kutukuluru", "Polamuru", "Ramavaram", "Mahendrawada", "Koppavaram", "Pedaparthi"]
  },
  {
    hub: "Samalkot Route",
    villages: ["Samalkot", "Peddapuram", "Vetlapalem", "G. Medapadu", "Bhimavaram", "Unduru", "Kirlampudi"]
  }
];

export default function TransportPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-20">
      
      {/* 1. Cinematic Hero Section */}
      <div className="bg-[#0B2046] text-white py-24 px-6 md:px-12 text-center relative overflow-hidden border-b-[6px] border-amber-500">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-amber-400/30">
            <Bus size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-4xl mx-auto leading-tight">
            Transport Network
          </h1>
          <p className="text-amber-400 mt-4 text-xl font-medium tracking-wide uppercase">
            Connecting 40+ Villages
          </p>
          <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
            A reliable, extensive, and highly secure fleet ensuring your child&apos;s daily commute is comfortable and safe.
          </p>
        </div>
      </div>

      {/* 2. Safety Commitment & Fleet Showcase */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-4">Our Safety Commitment</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We take the responsibility of your child&apos;s daily commute seriously with strict operational protocols.</p>
        </div>

        {/* Safety Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition duration-300">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Fleet & Speed Control" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl text-blue-600 shadow-sm flex items-center gap-2">
                <ShieldCheck size={24} />
                <span className="font-bold text-sm">Speed Governors</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0B2046] mb-3">Speed Governors</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Every bus is equipped with speed limiters to ensure strictly controlled, safe driving speeds at all times, prioritizing student safety over everything else.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition duration-300">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bus Attendants" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl text-amber-600 shadow-sm flex items-center gap-2">
                <Users size={24} />
                <span className="font-bold text-sm">Bus Attendants</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0B2046] mb-3">Bus Attendants</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Dedicated support staff on board to assist young students with boarding, seating, and de-boarding safely, ensuring a smooth and monitored journey.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition duration-300">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Experienced Drivers" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl text-emerald-600 shadow-sm flex items-center gap-2">
                <AlertCircle size={24} />
                <span className="font-bold text-sm">Experienced Drivers</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0B2046] mb-3">Experienced Drivers</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Our fleet is operated only by verified, highly experienced drivers with flawless local route knowledge and a strong track record of safe driving.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition duration-300">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558227845-a764d93bd052?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Designated Stops" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl text-rose-600 shadow-sm flex items-center gap-2">
                <MapPin size={24} />
                <span className="font-bold text-sm">Designated Stops</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0B2046] mb-3">Designated Stops</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Fixed, secure pickup and drop-off points planned meticulously to minimize walk time for students and streamline the daily transport schedule.</p>
            </div>
          </div>
        </div>

        {/* Massive Fleet Photo Below the 4 Cards */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative group">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" /* Replace this src with your exact fleet image path */
            alt="GBR Transport Fleet on Campus" 
            className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-500" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 translate-y-4 group-hover:translate-y-0 transition duration-500">
            <h3 className="text-3xl md:text-5xl font-bold text-white font-serif mb-3">Our Massive Fleet</h3>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light">
              One of the largest institutional transport networks in the region, ready to safely commute thousands of students every single day.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The 40+ Villages Grid */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0B2046] mb-4">Extensive Route Coverage</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Connecting rural and urban landscapes to ensure no student misses out on quality education due to distance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routesData.map((route, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <MapPin className="text-amber-500" size={24} />
                  <h3 className="font-bold text-xl text-[#0B2046]">{route.hub}</h3>
                </div>
                <ul className="space-y-3">
                  {route.villages.map((village, vIndex) => (
                    <li key={vIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-amber-400 font-bold mt-0.5">•</span> 
                      {village}
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-gray-400 text-sm italic mt-4">
                    <span className="text-gray-300 font-bold mt-0.5">+</span> 
                    and nearby hamlets...
                  </li>
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Helpdesk / CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20 text-center">
        <div className="bg-[#0B2046] text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-bl-full"></div>
          
          <Phone className="mx-auto text-amber-500 mb-6" size={48} />
          <h2 className="text-3xl font-bold font-serif mb-4">Need Transport Details?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            If you do not see your specific village listed, or if you need exact pickup timings and fee structures, our Transport Manager is ready to help.
          </p>
          
          <Link 
            href="/admissions" 
            className="inline-flex items-center gap-2 bg-amber-500 text-[#0B2046] px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition shadow-lg"
          >
            Contact Transport Office
          </Link>
        </div>
      </section>

    </main>
  );
}