import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { Place } from "@/lib/places";
import { SafeImage } from "@/components/safe-image";

export function PlaceCard({ place, index, compact = false }: { place: Place; index: number; compact?: boolean }) {
  return (
    <article className={`destination-card ${compact ? "is-compact" : ""} reveal reveal-up`}>
      <Link className="destination-image" href={`/places/${place.slug}`}>
        <SafeImage src={place.hero} alt={place.name} loading="lazy" />
        <span className="destination-index">{String(index + 1).padStart(2, "0")}</span>
        {place.nearby && <span className="nearby-badge">Nearby side trip</span>}
      </Link>
      <div className="destination-body">
        <div className="destination-meta"><span>{place.category}</span><span><MapPin size={13} />{place.area}</span></div>
        <p className="destination-bangla">{place.bangla}</p>
        <h3><Link href={`/places/${place.slug}`}>{place.name}</Link></h3>
        <p>{place.summary}</p>
        <div className="destination-bottom">
          <span><Clock3 size={15} />{place.duration}</span>
          <Link href={`/places/${place.slug}`}>Full guide <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </article>
  );
}
