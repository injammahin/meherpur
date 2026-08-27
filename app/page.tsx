import Link from "next/link";
import { ArrowDown, ArrowRight, Clock3, Compass, MapPin, Route, Sparkles } from "lucide-react";
import { places } from "@/lib/places";
import { PlaceCard } from "@/components/place-card";
import { SafeImage } from "@/components/safe-image";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <SafeImage className="home-hero-image" src={places[0].hero} alt="Mujibnagar Memorial in Meherpur" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <p className="overline"><MapPin size={15} /> Khulna Division · Bangladesh</p>
          <h1>Meherpur,<br /><em>history lives here.</em></h1>
          <p>
            The complete visitor guide to Mujibnagar, indigo-era heritage, living farms, river landscapes and the quiet roads between them.
          </p>
          <div className="hero-link-row">
            <Link className="button-light" href="/places">Explore all places <ArrowRight /></Link>
            <Link className="button-ghost" href="/plan"><Route /> Build my trip</Link>
          </div>
        </div>
        <div className="hero-utility-bar">
          <span><strong>07</strong> detailed destination guides</span>
          <span><strong>25+</strong> real visitor highlights</span>
          <span><strong>01</strong> interactive route builder</span>
          <Link href="/travel-info">Before you travel <ArrowRight size={15} /></Link>
        </div>
        <a className="hero-scroll" href="#start"><ArrowDown /> Discover the district</a>
      </section>

      <section className="home-intro page-gutter" id="start">
        <div className="intro-label reveal reveal-left"><Compass /><span>One small district.<br />A defining national story.</span></div>
        <div className="intro-statement reveal reveal-right">
          <h2>Go beyond a list of pins. Understand <em>what happened, what to see</em> and how to make the journey easy.</h2>
          <p>Every guide combines history, photography, practical timing, map directions and the details most visitors usually have to search for separately.</p>
        </div>
      </section>

      <section className="home-destinations page-gutter">
        <div className="large-heading reveal reveal-up">
          <div><span>01</span><p>Essential Meherpur</p></div>
          <h2>Start with the places<br /><em>that shape the story.</em></h2>
        </div>
        <div className="destination-grid">
          {places.map((place, index) => <PlaceCard key={place.slug} place={place} index={index} compact />)}
        </div>
        <div className="center-action"><Link className="button-dark" href="/places">Search and filter every place <ArrowRight /></Link></div>
      </section>

      <section className="home-feature">
        <div className="home-feature-image reveal reveal-left">
          <SafeImage src={places[0].gallery[1].url} alt={places[0].gallery[1].alt} loading="lazy" />
          <span>Inside Mujibnagar · The large Bangladesh map</span>
        </div>
        <div className="home-feature-copy reveal reveal-right">
          <span className="section-kicker">A guide inside every guide</span>
          <h2>Mujibnagar is<br /><em>more than one monument.</em></h2>
          <p>
            Follow the memorial, mango grove, museum, oath-taking ground, map and sculptures as one connected experience—with the time, route and context to see them properly.
          </p>
          <div className="feature-facts">
            <span><Clock3 /> Allow 3–4 hours</span>
            <span><Sparkles /> 6 internal highlights</span>
          </div>
          <Link className="text-link" href="/places/mujibnagar">Open the complete Mujibnagar guide <ArrowRight /></Link>
        </div>
      </section>

      <section className="tool-preview page-gutter">
        <div className="tool-preview-copy reveal reveal-left">
          <span className="section-kicker light">Your trip, made practical</span>
          <h2>Choose places.<br /><em>We shape the day.</em></h2>
          <p>Select the places you care about and instantly see the time required, suggested number of days, a route link and a realistic planning budget.</p>
          <Link className="button-light" href="/plan">Open trip planner <ArrowRight /></Link>
        </div>
        <div className="tool-preview-panel reveal reveal-right">
          <div className="mini-route-head"><span>Sample route</span><strong>1 thoughtful day</strong></div>
          {[places[1], places[0], places[6]].map((place, index) => (
            <div className="mini-route-row" key={place.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{place.name}</strong><small>{place.duration}</small></div>
              <ArrowRight />
            </div>
          ))}
          <div className="mini-route-total"><span>Place time</span><strong>6.25 hours</strong></div>
        </div>
      </section>

      <section className="about-preview page-gutter">
        <div className="large-heading reveal reveal-up">
          <div><span>02</span><p>Understand the place</p></div>
          <h2>716.08 km² of history,<br /><em>farms and borderland.</em></h2>
        </div>
        <div className="about-preview-grid">
          <div className="about-numbers reveal reveal-left">
            <span><strong>705,356</strong>people · 2022 census</span>
            <span><strong>03</strong>upazilas</span>
            <span><strong>20</strong>unions</span>
            <span><strong>1971</strong>a defining national chapter</span>
          </div>
          <div className="about-preview-copy reveal reveal-right">
            <p>
              Before 1947, Meherpur belonged to Nadia. In 1971, Baidyanathtala became the oath-taking place of Bangladesh’s first provisional government. Today, the district’s identity continues through agriculture, rivers and three distinct upazilas.
            </p>
            <Link className="text-link" href="/about">Read the complete story of Meherpur <ArrowRight /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
