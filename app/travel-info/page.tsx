import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Backpack, BusFront, CalendarDays, CarFront, CircleAlert, MapPinned, PhoneCall, TrainFront } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Information",
  description: "How to reach Meherpur, move locally, choose the best season, stay safe and plan one or two days in the district.",
};

export default function TravelInfoPage() {
  return (
    <main>
      <section className="inner-hero travel-hero page-gutter">
        <p className="overline dark"><MapPinned size={15} /> Practical visitor information</p>
        <h1>Arrive prepared.<br /><em>Travel more calmly.</em></h1>
        <p>Transport choices, realistic route timing, seasonal guidance and safety notes for first-time visitors to Meherpur.</p>
      </section>

      <section className="transport-section page-gutter">
        <div className="detail-heading reveal reveal-up"><span>01</span><div><p>Getting to Meherpur</p><h2>Choose the route<br /><em>that fits your day.</em></h2></div></div>
        <div className="transport-grid">
          <article className="reveal reveal-up"><BusFront /><span>Direct bus</span><h3>Dhaka → Meherpur</h3><p>Multiple operators serve the route. A road journey commonly takes around 6–7 hours, but traffic and breaks can change this significantly.</p><strong>Best for · simple direct arrival</strong></article>
          <article className="reveal reveal-up"><TrainFront /><span>Train + road</span><h3>Dhaka → Chuadanga</h3><p>Take a train toward Chuadanga, then continue to Meherpur by road. Check current railway schedules and keep transfer time.</p><strong>Best for · travellers who prefer rail</strong></article>
          <article className="reveal reveal-up"><CarFront /><span>Private vehicle</span><h3>Flexible district route</h3><p>A reserved car gives the easiest access to rural sites and removes uncertainty about return transport from Mujibnagar or Gangni.</p><strong>Best for · families and short visits</strong></article>
        </div>
        <p className="live-info-note"><CircleAlert /> Schedules, fares and journey times change. Check the operator on your travel date instead of relying on an old timetable.</p>
      </section>

      <section className="local-movement page-gutter">
        <div className="local-movement-copy reveal reveal-left"><span className="section-kicker light">Moving inside the district</span><h2>Short distances.<br /><em>Different transport needs.</em></h2><p>Town easy-bikes work well for nearby places. For Mujibnagar, Gangni, At Kobor or a full-day route, reserve a vehicle and agree on waiting time and the return fare before leaving.</p></div>
        <div className="movement-list reveal reveal-right">
          <article><span>01</span><div><h3>Easy-bike</h3><p>Best for town and nearby Amjhupi trips.</p></div></article>
          <article><span>02</span><div><h3>CNG / auto-rickshaw</h3><p>Useful for point-to-point trips when return transport is confirmed.</p></div></article>
          <article><span>03</span><div><h3>Reserved car</h3><p>The simplest choice for a group, multiple sites or rural side trips.</p></div></article>
          <article><span>04</span><div><h3>Walking</h3><p>Excellent inside complexes—not between distant destinations.</p></div></article>
        </div>
      </section>

      <section className="season-section page-gutter">
        <div className="detail-heading compact reveal reveal-up"><span>02</span><div><p>When to visit</p><h2>Every season<br /><em>changes the experience.</em></h2></div></div>
        <div className="season-grid">
          <article><span>Oct–Feb</span><h3>Comfort season</h3><p>Cooler walking weather, clearer full-day routes and the easiest period for outdoor heritage sites.</p></article>
          <article><span>Mar–May</span><h3>Hot and bright</h3><p>Start very early, rest at midday and carry more water. Farm flowering schedules may create special short windows.</p></article>
          <article><span>Jun–Sep</span><h3>Green monsoon</h3><p>Lush landscapes, but heat, rain, mud and waterlogged paths can complicate rural access.</p></article>
          <article><span>17 April</span><h3>Mujibnagar Day</h3><p>Historically meaningful and potentially busy. Expect commemorative activity and different access conditions.</p></article>
        </div>
      </section>

      <section className="ready-grid page-gutter">
        <article className="packing-card reveal reveal-left"><Backpack /><h2>Pack lightly, pack usefully.</h2><ul><li>Water and sun protection</li><li>Comfortable walking shoes</li><li>Power bank and offline map</li><li>Respectful clothing for memorials</li><li>Small cash for local transport</li></ul></article>
        <article className="safety-card reveal reveal-right"><PhoneCall /><h2>Keep the basics ready.</h2><ul><li><strong>999</strong> · National emergency service</li><li>Share your route with someone</li><li>Avoid isolated riverbanks after dark</li><li>Confirm farm and museum access</li><li>Ask permission before photographing staff</li></ul></article>
      </section>

      <section className="trip-options page-gutter">
        <div className="detail-heading compact reveal reveal-up"><span>03</span><div><p>Suggested pace</p><h2>One day or two?</h2></div></div>
        <div className="trip-option-grid">
          <article><CalendarDays /><span>One focused day</span><h3>Amjhupi + Mujibnagar</h3><p>Begin at Amjhupi Nilkuthi, continue to the full Mujibnagar complex and finish under the mango trees.</p><Link href="/plan">Build this route <ArrowRight /></Link></article>
          <article><CalendarDays /><span>Two fuller days</span><h3>Add Gangni, farms and river</h3><p>Keep the main historical route on day one. Use day two for Bhatpara, a seasonal farm or a careful Bhairab riverside stop.</p><Link href="/plan">Build a two-day plan <ArrowRight /></Link></article>
        </div>
      </section>
    </main>
  );
}
