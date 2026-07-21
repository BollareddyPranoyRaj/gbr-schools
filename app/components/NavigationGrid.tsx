// app/components/NavigationGrid.tsx

import Link from "next/link";

// The consolidated data array
const menuSections = [
  {
    title: "About GBR",
    description: "Learn about our legacy, vision, and meet the leadership team.",
    href: "/about",
  },
{ 
    title: "A.C. Campus", 
    description: "Explore the modern facilities and vibrant student life at our A.C. Campus.",
    href: "/ac-campus", 
  },
  { 
    title: "E.M.S. Campus", 
    description: "Discover the rich heritage and academic excellence of our E.M.S. Campus.",
    href: "/standard-campus",
  },
  {
    title: "Our Campuses",
    description: "Explore the facilities and student life at our A.C. and E.M.S. campuses.",
    href: "/campuses", 
  },
  {
    title: "Academics",
    description: "Explore school timings, curriculum, and award systems.",
    href: "/academics",
  },
  {
    title: "Admissions & FAQ",
    description: "View fee policy, admission procedures, and common parent questions.",
    href: "/admissions",
  },
  {
    title: "Notice Board",
    description: "Check important circulars, latest news, and the academic calendar.",
    href: "/notices",
  },
  {
    title: "Events",
    description: "Browse campus celebrations and animated event highlights.",
    href: "/events",
  },
  {
    title: "Parent Portal",
    description: "Access the GBR Parent App, transport guidelines, and uniform rules.",
    href: "/parents",
  },
  {
    title: "Alumni",
    description: "Connect with the global GBR alumni network.",
    href: "/alumni",
  },
  {
    title: "Careers",
    description: "Find open teaching and administrative roles at GBR Schools.",
    href: "/careers",
  },
  {
    title: "Contact",
    description: "Reach the school office and admissions team.",
    href: "/contact",
  },
];

export default function NavigationGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuSections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="flex flex-col p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-200"
          >
            <h3 className="text-xl font-bold text-primary mb-3">
              {section.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}