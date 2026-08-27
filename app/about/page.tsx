import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Landmark, Leaf, MapPinned, Wheat } from "lucide-react";
import { SafeImage } from "@/components/safe-image";

export const metadata: Metadata = {
  title: "About Meherpur",
  description: "A complete introduction to Meherpur District—its history, geography, population, upazilas, rivers, agriculture and national significance.",
};

const landscape = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg/3840px-Natural_Landscape_of_Meherpur_District%2C_Bangladesh_%282025%29.jpg";

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <SafeImage src={landscape} alt="Green landscape and water in Meherpur District" />
        <div />
        <div className="about-hero-copy">
          <p className="overline">About the district · মেহেরপুর</p>
          <h1>Small in area.<br /><em>Immense in meaning.</em></h1>
          <p>Meherpur is a western border district where Bangladesh’s national history meets fertile farmland, old river systems and the everyday life of three upazilas.</p>
        </div>
      </section>

      <section className="district-facts page-gutter">
        <article><strong>716.08</strong><span>square kilometres</span></article>
        <article><strong>705,356</strong><span>people · 2022 census</span></article>
        <article><strong>03</strong><span>upazilas</span></article>
        <article><strong>20</strong><span>unions</span></article>
        <article><strong>259</strong><span>villages</span></article>
      </section>

      <section className="about-story page-gutter">
        <div className="about-story-label reveal reveal-left"><BookOpen /><span>The district in context</span></div>
        <div className="about-story-copy reveal reveal-right">
          <p>Meherpur was once part of Nadia in undivided Bengal and later a subdivision of Kushtia. It became a full district in 1984. Its most important national moment came earlier, on 17 April 1971, when Bangladesh’s first provisional government took oath at Baidyanathtala—today’s Mujibnagar.</p>
          <p>The district is now organised into Meherpur Sadar, Gangni and Mujibnagar upazilas. The western edge meets India, while Kushtia and Chuadanga connect it to the rest of Bangladesh. Its flat, fertile landscape supports a strong agricultural economy.</p>
        </div>
      </section>

      <section className="about-pillars page-gutter">
        <article className="reveal reveal-up"><Landmark /><span>01</span><h2>History</h2><p>From an old Nadia settlement to the oath-taking place of the first provisional government, Meherpur’s local history repeatedly connects to larger national change.</p></article>
        <article className="reveal reveal-up"><MapPinned /><span>02</span><h2>Borderland</h2><p>Meherpur sits on Bangladesh’s western frontier. The border, old routes and connections with Nadia remain part of the district’s geography and memory.</p></article>
        <article className="reveal reveal-up"><Wheat /><span>03</span><h2>Agriculture</h2><p>Fertile plains support rice, vegetables, fruit, oilseeds and nursery production. Farms and horticulture centres make agriculture visible to curious visitors.</p></article>
        <article className="reveal reveal-up"><Leaf /><span>04</span><h2>Rivers</h2><p>The Bhairab, Mathabhanga and Kajla belong to the district’s water history. Changing flow and siltation have altered them, but their landscapes still matter.</p></article>
      </section>

      <section className="history-timeline page-gutter">
        <div className="detail-heading reveal reveal-up"><span>Timeline</span><div><p>Selected turning points</p><h2>How Meherpur<br /><em>became Meherpur.</em></h2></div></div>
        <div className="timeline-list">
          {[
            ["16th century", "Meherpur town appears in historical accounts as an old settlement in the Nadia region."],
            ["British period", "Indigo factories at Amjhupi and Bhatpara become part of the district’s difficult colonial agricultural history."],
            ["1947", "After Partition, Meherpur becomes part of Kushtia District in East Bengal."],
            ["17 April 1971", "The first provisional government of Bangladesh takes oath at Baidyanathtala, later named Mujibnagar."],
            ["24 February 1984", "Meherpur becomes a full district separate from Kushtia."],
            ["2000", "Mujibnagar Upazila is created from part of Meherpur Sadar."],
          ].map(([year, text], index) => <article key={year} className="reveal reveal-up"><span>{String(index + 1).padStart(2, "0")}</span><h3>{year}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="upazila-section page-gutter">
        <div className="detail-heading compact reveal reveal-up"><span>03</span><div><p>The three upazilas</p><h2>Three different<br /><em>ways into the district.</em></h2></div></div>
        <div className="upazila-grid">
          <article><span>Meherpur Sadar</span><h3>Town, Amjhupi and civic life</h3><p>The administrative centre, with Amjhupi Nilkuthi, the agricultural farm, urban markets and access to much of the district.</p></article>
          <article><span>Gangni</span><h3>Heritage ruins and open country</h3><p>The largest upazila, home to Bhatpara Nilkuthi, DC Eco Park and broad agricultural landscapes.</p></article>
          <article><span>Mujibnagar</span><h3>National history and mango groves</h3><p>The district’s most important visitor area, centred on the historic oath-taking landscape and memorial complex.</p></article>
        </div>
      </section>

      <section className="about-sources page-gutter">
        <h2>Information, not mythology.</h2>
        <p>This guide uses the Meherpur District administration, the Meherpur Zilla Development Plan, Banglapedia, the 2022 census and destination-specific sources. Where online listings are geographically misleading, the guide says so clearly.</p>
        <div><a href="https://www.mzdp.gov.bd/about-mzdp.php" target="_blank" rel="noreferrer">District facts and 2022 population</a><a href="https://en.banglapedia.org/index.php/Meherpur_District" target="_blank" rel="noreferrer">Banglapedia district history</a><a href="https://meherpur.gov.bd/pages/static-pages/69812070a31054345f1e1fe4" target="_blank" rel="noreferrer">Official geography profile</a></div>
        <Link className="button-dark" href="/places">Explore the places <ArrowRight /></Link>
      </section>
    </main>
  );
}
