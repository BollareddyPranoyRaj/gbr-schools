// app/calendar/page.tsx
import React from 'react';

export default function CalendarPage() {
  const festivals = [
    { date: "26.06.2026", day: "Fri", name: "Muharram" },
    { date: "15.08.2026", day: "Sat", name: "Independence Day" },
    { date: "25.08.2026", day: "Tue", name: "Eid-E-Milad" },
    { date: "04.09.2026", day: "Fri", name: "Janmastami" },
    { date: "14.09.2026", day: "Mon", name: "Ganesh Chaturthi" },
    { date: "02.10.2026", day: "Fri", name: "Gandhi Jayanthi" },
    { date: "19.10.2026", day: "Mon", name: "Durgastami" },
    { date: "20.10.2026", day: "Tue", name: "Vijaya Dashami" },
    { date: "08.11.2026", day: "Sun", name: "Deepavali" },
    { date: "25.12.2026", day: "Fri", name: "Christmas Day" },
    { date: "15.01.2027", day: "Fri", name: "Pongal" },
    { date: "16.01.2027", day: "Sat", name: "Kanuma Panduga" },
    { date: "26.01.2027", day: "Tue", name: "Republic Day" },
    { date: "06.03.2027", day: "Sat", name: "Maha Shivaratri" },
    { date: "09.03.2027", day: "Tue", name: "Idul Fitr" },
    { date: "22.03.2027", day: "Mon", name: "Holi" },
    { date: "26.03.2027", day: "Fri", name: "Good Friday" },
    { date: "05.04.2027", day: "Mon", name: "Babu Jagjivan Ram Jayanti" },
    { date: "07.04.2027", day: "Wed", name: "Ugadi" },
    { date: "14.04.2027", day: "Wed", name: "Dr Ambedkar Jayanti" },
    { date: "15.04.2027", day: "Thu", name: "Sri Rama Navami" }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Academic Calendar
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            List of festivals and holidays for the academic year 2026-2027.
          </p>
        </div>

        {/* Calendar Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider w-1/4">
                    Date
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider w-1/4">
                    Day
                  </th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Festival / Holiday
                  </th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-gray-100">
                {festivals.map((festival, index) => {
                  const isWeekend = festival.day === 'Sun';
                  
                  return (
                    <tr 
                      key={index} 
                      className="hover:bg-blue-50/50 transition-colors group"
                    >
                      {/* Date Column */}
                      <td className="py-4 px-6">
                        <span className="font-semibold text-gray-900 tabular-nums text-base">
                          {festival.date}
                        </span>
                      </td>
                      
                      {/* Day Column */}
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${
                          isWeekend 
                            ? 'bg-red-50 text-red-600 border border-red-100' 
                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                        }`}>
                          {festival.day}
                        </span>
                      </td>
                      
                      {/* Festival Name Column */}
                      <td className="py-4 px-6">
                        <span className="text-gray-900 font-medium group-hover:text-blue-700 transition-colors">
                          {festival.name}
                        </span>
                      </td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}