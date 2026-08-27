import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PlacesExplorer } from "@/components/places-explorer";

export const metadata: Metadata = {
  title: "Explore All Places",
  description: "Search and explore detailed travel guides for Mujibnagar, Meherpur heritage sites, farms, river landscapes and nearby memorials.",
};

export default function PlacesPage() {
  return (
    <main>
      <section className="inner-hero page-gutter">
        <p className="overline dark"><MapPin size={15} /> Destination directory</p>
        <h1>Every place,<br /><em>properly explained.</em></h1>
        <p>Search Meherpur by history, heritage, nature or agriculture. Every result opens a complete visitor guide—not a two-line listing.</p>
      </section>
      <section className="explorer-section page-gutter">
        <PlacesExplorer />
      </section>
    </main>
  );
}
