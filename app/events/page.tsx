// app/events/page.tsx
import type { Metadata } from "next";
import { v2 as cloudinary } from "cloudinary";
import EventsClient, { type SchoolEvent } from "./EventsClient";

type CloudinaryResource = {
  public_id: string;
  folder?: string;
  asset_folder?: string;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events | GBR Group of Schools",
  description: "Explore GBR Schools events through animated, interactive event carousels.",
};

// Securely configure Cloudinary on the server side
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// The base event data. Notice we are using 'folder' instead of a hardcoded 'images' array!
const baseEvents = [
  {
    id: "parents-activity",
    title: "Parents Activity Day",
    description: "Engaging workshops and collaborative activities bringing our school community and parents together.",
    duration: 34,
    folder: "school-website/events/parentsactivity",
    images: ["school-website/events/parentsactivity/parentsactivity-01", "school-website/events/parentsactivity/parentsactivity-02"],
  },
  {
    id: "40-years-celebration",
    title: "40 Years Celebration",
    description: "Honoring four decades of educational excellence and historic milestones.",
    duration: 38,
    reverse: true,
    folder: "school-website/events/40yearcelb",
    images: ["school-website/events/40yearcelb/40yearcelb-01", "school-website/events/40yearcelb/40yearcelb-02"],
  },
  {
    id: "christmas",
    title: "Christmas Celebration",
    description: "Spreading holiday cheer with festive carols, decorations, and seasonal performances.",
    duration: 36,
    folder: "school-website/events/chirstmas",
    images: ["school-website/events/chirstmas/chirstmas-01", "school-website/events/chirstmas/chirstmas-02"],
  },
  {
    id: "dussehra",
    title: "Dussehra Festival",
    description: "Celebrating traditional cultural heritages and seasonal festive rituals.",
    duration: 32,
    folder: "school-website/events/dusheera",
    images: ["school-website/events/dusheera/dusheera-01", "school-website/events/dusheera/dusheera-02"],
  },
  {
    id: "field-trip",
    title: "Educational Field Trip",
    description: "Experiential learning journeys outside the classroom boundaries.",
    duration: 30,
    reverse: true,
    folder: "school-website/events/fieldtrip",
    images: ["school-website/events/fieldtrip/fieldtrip-01"],
  },
  {
    id: "fruit-day",
    title: "Fruit Day Celebration",
    description: "Promoting healthy habits and learning about nature's vibrant nutrition.",
    duration: 30,
    folder: "school-website/events/fruitday",
    images: ["school-website/events/fruitday/fruitday-01"],
  },
  {
    id: "graduation-day",
    title: "Graduation Day",
    description: "Celebrating the hard work, milestones, and bright futures of our graduating students.",
    duration: 32,
    folder: "school-website/events/graduationday",
    images: ["school-website/events/graduationday/graduationday-01"],
  },
  {
    id: "pongal",
    title: "Pongal Festival",
    description: "Embracing seasonal harvest traditions with joy, community, and gratitude.",
    duration: 30,
    reverse: true,
    folder: "school-website/events/pongal",
    images: ["school-website/events/pongal/pongal-01"],
  },
  {
    id: "rainbow-kids",
    title: "Rainbow Kids Activities",
    description: "Fun, colorful, and creative developmental activities for our early learners.",
    duration: 30,
    folder: "school-website/events/rainbowkids",
    images: ["school-website/events/rainbowkids/rainbowkids-01"],
  },
  {
    id: "science-odyssey",
    title: "Science Odyssey Exhibit",
    description: "Showcasing student curiosity, innovative projects, and scientific discoveries.",
    duration: 34,
    folder: "school-website/events/science odyssey",
    images: ["school-website/events/science%20odyssey/science%20odyssey-01"],
  },
  {
    id: "sports-day",
    title: "Annual Sports Meet",
    description: "Celebrating teamwork, athletic dedication, and competitive school spirit.",
    duration: 38,
    reverse: true,
    folder: "school-website/events/sportsday",
    images: ["school-website/events/sportsday/sportsday-01"],
  },
];

// This must be an async function to fetch the data before rendering the page
export default async function EventsPage() {
  let resources: CloudinaryResource[] = [];

  try {
    // One prefix search replaces the previous eleven Admin API calls, preventing
    // the Events page from exhausting Cloudinary's rate-limited Admin API quota.
    const result = await cloudinary.search
      .expression("folder:school-website/events/*")
      .sort_by("public_id", "asc")
      .max_results(500)
      .execute();

    resources = result.resources as CloudinaryResource[];
  } catch {
    // Do not log the raw Cloudinary error: it includes request authentication details.
    console.error("Unable to load event images from Cloudinary.");
  }

  const populatedEvents: SchoolEvent[] = baseEvents.map((event) => {
    const folderImages = resources
      .filter((resource) => (resource.asset_folder ?? resource.folder) === event.folder)
      .map((resource) => resource.public_id);

    return {
      id: event.id,
      title: event.title,
      description: event.description,
      duration: event.duration,
      reverse: event.reverse,
      images: folderImages.length > 0 ? folderImages : event.images,
    };
  });

  // Pass the fully populated data directly into your beautiful client component
  return <EventsClient eventsData={populatedEvents} />;
}
