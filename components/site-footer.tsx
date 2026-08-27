import Link from "next/link";
import { ArrowUpRight, Leaf } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="global-footer">
      <div className="footer-main">
        <div>
          <Link className="global-brand dark" href="/"><span><Leaf size={17} /></span>Visit Meherpur</Link>
          <p>A thoughtful independent guide to Meherpur’s history, heritage and living landscapes.</p>
        </div>
        <div className="footer-links">
          <Link href="/places">All places</Link>
          <Link href="/plan">Trip planner</Link>
          <Link href="/travel-info">Travel information</Link>
          <Link href="/about">About Meherpur</Link>
        </div>
        <div className="footer-cta">
          <p>Not sure where to begin?</p>
          <Link href="/plan">Build a route <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Visit Meherpur · মেহেরপুর ভ্রমণ</span>
        <span>Confirm live hours and local access before travel.</span>
      </div>
    </footer>
  );
}
