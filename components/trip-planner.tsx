"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Copy, MapPinned, Navigation, RotateCcw, Save, Users } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { places } from "@/lib/places";
import { SafeImage } from "@/components/safe-image";

type Style = "saver" | "balanced" | "comfort";
const styleRates: Record<Style, number> = { saver: 1800, balanced: 3200, comfort: 5200 };

export function TripPlanner() {
  const [selected, setSelected] = useState<string[]>(["mujibnagar", "amjhupi-nilkuthi"]);
  const [travellers, setTravellers] = useState(2);
  const [style, setStyle] = useState<Style>("balanced");
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("visit-meherpur-plan");
      if (saved) {
        const plan = JSON.parse(saved);
        if (Array.isArray(plan.selected)) setSelected(plan.selected);
        if (Number.isFinite(plan.travellers)) setTravellers(plan.travellers);
        if (["saver", "balanced", "comfort"].includes(plan.style)) setStyle(plan.style);
      }
    } catch { /* Keep the sensible default plan. */ }
  }, []);

  const selectedPlaces = useMemo(() => selected.map((slug) => places.find((place) => place.slug === slug)).filter(Boolean) as typeof places, [selected]);
  const placeHours = selectedPlaces.reduce((sum, place) => sum + place.durationHours, 0);
  const transferHours = Math.max(0, selectedPlaces.length - 1) * 0.75;
  const totalHours = placeHours + transferHours;
  const days = Math.max(1, Math.ceil(totalHours / 7));
  const budget = Math.round((styleRates[style] * travellers * days + 900 * days) / 100) * 100;

  const dayGroups = useMemo(() => {
    const groups: typeof places[] = [[]];
    let hours = 0;
    selectedPlaces.forEach((place) => {
      const next = place.durationHours + (hours ? 0.75 : 0);
      if (hours && hours + next > 7) { groups.push([place]); hours = place.durationHours; }
      else { groups[groups.length - 1].push(place); hours += next; }
    });
    return groups.filter((group) => group.length);
  }, [selectedPlaces]);

  const routeUrl = useMemo(() => {
    if (!selectedPlaces.length) return "/places";
    if (selectedPlaces.length === 1) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlaces[0].mapQuery)}`;
    const destination = selectedPlaces[selectedPlaces.length - 1].mapQuery;
    const waypoints = selectedPlaces.slice(0, -1).map((place) => place.mapQuery).join("|");
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&waypoints=${encodeURIComponent(waypoints)}`;
  }, [selectedPlaces]);

  const togglePlace = (slug: string, checked: boolean) => {
    setSelected((current) => checked ? [...current, slug] : current.filter((item) => item !== slug));
    setStatus("");
  };

  const savePlan = () => {
    window.localStorage.setItem("visit-meherpur-plan", JSON.stringify({ selected, travellers, style }));
    setStatus("Saved on this device");
  };

  const copyPlan = async () => {
    const text = ["My Meherpur trip", ...dayGroups.flatMap((group, index) => [`Day ${index + 1}`, ...group.map((place, placeIndex) => `${placeIndex + 1}. ${place.name} — ${place.duration}`)]), `Estimated visit + transfer time: ${totalHours.toFixed(1)} hours`, `Planning budget: around ৳${budget.toLocaleString()}`].join("\n");
    await navigator.clipboard.writeText(text);
    setStatus("Itinerary copied");
  };

  const resetPlan = () => {
    setSelected([]); setTravellers(2); setStyle("balanced"); setStatus("Planner reset");
    window.localStorage.removeItem("visit-meherpur-plan");
  };

  return (
    <div className="planner-app">
      <section className="planner-picker">
        <div className="planner-section-head"><span>Step 01</span><div><h2>Choose your places</h2><p>Select in the order you want to visit. You can change the route anytime.</p></div></div>
        <div className="planner-place-grid">
          {places.map((place) => {
            const checked = selected.includes(place.slug);
            return (
              <label className={`planner-place ${checked ? "selected" : ""}`} key={place.slug}>
                <SafeImage src={place.hero} alt="" loading="lazy" />
                <span className="planner-place-overlay" />
                <Checkbox checked={checked} onCheckedChange={(value) => togglePlace(place.slug, Boolean(value))} aria-label={`Add ${place.name} to trip`} />
                <div><small>{place.category} · {place.duration}</small><strong>{place.name}</strong><span>{place.bangla}</span></div>
              </label>
            );
          })}
        </div>
      </section>

      <section className="planner-controls">
        <div className="planner-section-head"><span>Step 02</span><div><h2>Set your pace</h2><p>These settings shape the time and rough planning budget.</p></div></div>
        <div className="control-grid">
          <label><span><Users /> Travellers</span><div className="stepper"><button type="button" onClick={() => setTravellers(Math.max(1, travellers - 1))}>−</button><strong>{travellers}</strong><button type="button" onClick={() => setTravellers(Math.min(12, travellers + 1))}>+</button></div></label>
          <label><span>Travel style</span><select value={style} onChange={(event) => setStyle(event.target.value as Style)}><option value="saver">Saver · local and simple</option><option value="balanced">Balanced · comfortable local</option><option value="comfort">Comfort · reserved transport</option></select></label>
        </div>
      </section>

      <section className="planner-result">
        <div className="planner-summary">
          <div><span>Selected</span><strong>{String(selectedPlaces.length).padStart(2, "0")}</strong><small>places</small></div>
          <div><span>Recommended</span><strong>{days}</strong><small>{days === 1 ? "day" : "days"}</small></div>
          <div><span>Total time</span><strong>{totalHours.toFixed(1)}</strong><small>hours incl. transfers</small></div>
          <div><span>Planning budget</span><strong>৳{budget.toLocaleString()}</strong><small>rough trip estimate</small></div>
        </div>

        {selectedPlaces.length ? (
          <div className="generated-route">
            {dayGroups.map((group, dayIndex) => (
              <div className="route-day" key={dayIndex}>
                <div className="route-day-label"><span>Day {String(dayIndex + 1).padStart(2, "0")}</span><small>{group.reduce((sum, place) => sum + place.durationHours, 0).toFixed(1)}h at places</small></div>
                <div>{group.map((place, index) => <article key={place.slug}><span>{index + 1}</span><div><strong>{place.name}</strong><small>{place.area} · {place.duration}</small></div><Check /></article>)}</div>
              </div>
            ))}
          </div>
        ) : <div className="planner-empty"><MapPinned /><p>Select at least one place to build your route.</p></div>}

        <div className="planner-actions">
          <a className="button-dark" href={routeUrl} target={selectedPlaces.length ? "_blank" : undefined} rel="noreferrer"><Navigation /> Open route in Maps</a>
          <button type="button" onClick={savePlan}><Save /> Save plan</button>
          <button type="button" onClick={copyPlan} disabled={!selectedPlaces.length}><Copy /> Copy itinerary</button>
          <button type="button" onClick={resetPlan}><RotateCcw /> Reset</button>
        </div>
        {status && <p className="planner-status" role="status"><Check />{status}</p>}
        <p className="budget-disclaimer">Budget is a planning estimate for food, local travel and simple accommodation—not a live price quote. Confirm fares, rooms and access before travel.</p>
      </section>
    </div>
  );
}
