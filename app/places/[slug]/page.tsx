import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, ExternalLink, MapPin, Navigation, ShieldCheck, SunMedium } from "lucide-react";
import { placeBySlug, places } from "@/lib/places";
import { SafeImage } from "@/components/safe-image";
import { PlaceGallery } from "@/components/place-gallery";
import { PlaceCard } from "@/components/place-card";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) return { title: "Place not found" };
  return { title: place.name, description: place.summary };
}

function mapUrl(query: string, directions = false) {
  return `https://www.google.com/maps/${directions ? "dir" : "search"}/?api=1&${directions ? "destination" : "query"}=${encodeURIComponent(query)}`;
}

export default async function PlaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) notFound();
  const related = places.filter((item) => item.slug !== place.slug && (item.category === place.category || item.area.includes("Meherpur"))).slice(0, 3);
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(place.mapQuery)}&output=embed`;

  return (
    <main>
      <section className="place-hero">
        <SafeImage className="place-hero-image" src={place.hero} alt={place.name} />
        <div className="place-hero-overlay" />
        <div className="place-hero-content">
          <Link className="back-link" href="/places"><ArrowLeft /> All places</Link>
          <p className="overline"><MapPin size={15} />{place.area}</p>
          <p className="hero-bangla">{place.bangla}</p>
          <h1>{place.name}</h1>
          <p>{place.summary}</p>
        </div>
        <div className="place-hero-facts">
          <span><Clock3 /><small>Allow</small><strong>{place.duration}</strong></span>
          <span><SunMedium /><small>Best time</small><strong>{place.bestTime}</strong></span>
          <a href={mapUrl(place.mapQuery, true)} target="_blank" rel="noreferrer"><Navigation /><small>Open route</small><strong>Get directions</strong></a>
        </div>
      </section>

      {place.nearby && (
        <div className="accuracy-note page-gutter"><ShieldCheck /><p><strong>Location check:</strong> {place.locationNote}. It is included because it is a useful side trip from Meherpur.</p></div>
      )}

      <nav className="detail-jump-nav" aria-label="On this page">
        <a href="#story">Story</a><a href="#inside">What to see</a><a href="#gallery">Gallery</a><a href="#visit">Plan your visit</a><a href="#map">Map</a>
      </nav>

      <section className="place-story page-gutter" id="story">
        <div className="story-label reveal reveal-left"><span>01</span><p>Understand the place</p></div>
        <div className="story-copy reveal reveal-right">
          <p className="story-lead">{place.overview}</p>
          <div className="history-block"><span>Why it matters</span><p>{place.history}</p></div>
          <div className="place-tags">{place.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
      </section>

      <section className="inside-section page-gutter" id="inside">
        <div className="detail-heading reveal reveal-up"><span>02</span><div><p>Inside the destination</p><h2>Do not miss<br /><em>these details.</em></h2></div></div>
        <div className="highlight-list">
          {place.highlights.map((highlight, index) => (
            <article className="highlight-item reveal reveal-up" key={highlight.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{highlight.bangla}</p><h3>{highlight.name}</h3></div>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading page-gutter reveal reveal-up"><span>03</span><div><p>Visual guide</p><h2>See the place<br /><em>before you go.</em></h2></div></div>
        <PlaceGallery images={place.gallery} placeName={place.name} />
      </section>

      <section className="visit-section page-gutter" id="visit">
        <div className="visit-intro reveal reveal-left"><span className="section-kicker">04 · Plan your visit</span><h2>A smoother visit<br /><em>starts here.</em></h2></div>
        <div className="visit-cards reveal reveal-right">
          <article><Clock3 /><span>Time needed</span><h3>{place.duration}</h3><p>Do not count the road time from Meherpur town.</p></article>
          <article><SunMedium /><span>Best light</span><h3>{place.bestTime}</h3><p>{place.bestSeason}</p></article>
          <article><Navigation /><span>Getting there</span><h3>{place.locationNote}</h3><p>{place.gettingThere}</p></article>
          <article className="wide"><ShieldCheck /><span>Visitor note</span><h3>Travel thoughtfully</h3><p>{place.visitorNote}</p></article>
        </div>
      </section>

      <section className="map-section page-gutter" id="map">
        <div className="map-heading reveal reveal-left"><span>05</span><div><p>Location</p><h2>See it on<br /><em>the map.</em></h2></div></div>
        <div className="big-map reveal reveal-right">
          <iframe src={embed} title={`Map showing ${place.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div><span><MapPin />{place.area}</span><a href={mapUrl(place.mapQuery, true)} target="_blank" rel="noreferrer">Start directions <ExternalLink /></a></div>
        </div>
      </section>

      <section className="source-note page-gutter">
        <p>Information starting point: <a href={place.sourceUrl} target="_blank" rel="noreferrer">{place.sourceLabel} <ArrowUpRight /></a>. Local hours, access and conditions can change.</p>
      </section>

      <section className="related-section page-gutter">
        <div className="detail-heading compact reveal reveal-up"><span>06</span><div><p>Continue exploring</p><h2>Nearby stories.</h2></div></div>
        <div className="destination-grid related-grid">{related.map((item, index) => <PlaceCard place={item} index={index} key={item.slug} compact />)}</div>
        <div className="center-action"><Link className="button-dark" href="/plan">Add places to a route <ArrowRight /></Link></div>
      </section>
    </main>
  );
}
