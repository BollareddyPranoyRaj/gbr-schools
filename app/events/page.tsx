import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events | GBR Group of Schools",
  description: "Explore GBR Schools events through animated, interactive event carousels.",
};

export default function EventsPage() {
  return <EventsClient />;
}