"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { categories, places } from "@/lib/places";
import { PlaceCard } from "@/components/place-card";

export function PlacesExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return places.filter((place) => {
      const categoryMatch = category === "All" || place.category === category;
      const queryMatch = !term || [place.name, place.bangla, place.area, place.summary, ...place.tags]
        .join(" ").toLowerCase().includes(term);
      return categoryMatch && queryMatch;
    });
  }, [query, category]);

  return (
    <>
      <div className="explorer-tools reveal reveal-up">
        <label className="place-search">
          <Search size={19} />
          <span className="sr-only">Search destinations</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by place, area or experience…" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={17} /></button>}
        </label>
        <div className="category-filters" aria-label="Filter by category">
          {categories.map((item) => (
            <button key={item} type="button" className={category === item ? "active" : ""} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="explorer-status"><span>{String(filtered.length).padStart(2, "0")} guides</span><span>Detailed maps · galleries · visit notes</span></div>
      {filtered.length ? (
        <div className="destination-grid explorer-grid">
          {filtered.map((place) => <PlaceCard key={place.slug} place={place} index={places.indexOf(place)} />)}
        </div>
      ) : (
        <div className="empty-places">
          <p>No destination matches that search.</p>
          <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Show every place</button>
        </div>
      )}
    </>
  );
}
