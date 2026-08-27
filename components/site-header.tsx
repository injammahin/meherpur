"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const links = [
  ["Explore", "/places"],
  ["Plan a trip", "/plan"],
  ["Travel info", "/travel-info"],
  ["About Meherpur", "/about"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const nextY = window.scrollY;
      setSolid(nextY > 24);
      setHidden(nextY > lastY && nextY > 150);
      lastY = nextY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`global-header ${solid ? "is-solid" : ""} ${hidden ? "is-hidden" : ""}`}>
        <Link className="global-brand" href="/" aria-label="Visit Meherpur home">
          <span><Leaf size={17} strokeWidth={1.7} /></span>
          Visit Meherpur
        </Link>
        <nav className="global-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="header-plan" href="/plan">Build my trip <ArrowRight size={16} /></Link>
        <button className="header-menu" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={21} />
        </button>
      </header>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="nav-sheet border-0 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Visit Meherpur menu</SheetTitle>
            <SheetDescription>Navigate the travel guide</SheetDescription>
          </SheetHeader>
          <div className="nav-sheet-inner">
            <div className="nav-sheet-top">
              <span className="global-brand dark"><Leaf size={17} /> Visit Meherpur</span>
              <SheetClose asChild><button className="circle-close" type="button" aria-label="Close menu"><X /></button></SheetClose>
            </div>
            <nav className="nav-sheet-links" aria-label="Mobile navigation">
              {links.map(([label, href], index) => (
                <SheetClose asChild key={href}>
                  <Link href={href}><span>0{index + 1}</span>{label}<ArrowRight /></Link>
                </SheetClose>
              ))}
            </nav>
            <div className="nav-sheet-footer">
              <p>History, orchards, rivers and practical routes—made clear for every traveller.</p>
              <SheetClose asChild><Link href="/plan">Open trip planner <ArrowRight size={16} /></Link></SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
