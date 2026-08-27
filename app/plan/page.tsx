import type { Metadata } from "next";
import { Route } from "lucide-react";
import { TripPlanner } from "@/components/trip-planner";

export const metadata: Metadata = {
  title: "Interactive Trip Planner",
  description: "Choose Meherpur destinations, estimate visit time and budget, save an itinerary and open the route in Google Maps.",
};

export default function PlanPage() {
  return (
    <main>
      <section className="inner-hero planner-page-hero page-gutter">
        <p className="overline dark"><Route size={15} /> Interactive travel tool</p>
        <h1>Build a Meherpur trip<br /><em>that actually fits.</em></h1>
        <p>Select places in your preferred order. The planner estimates time, suggests the number of days, creates a map route and remembers the plan on your device.</p>
      </section>
      <section className="planner-app-wrap page-gutter"><TripPlanner /></section>
    </main>
  );
}
