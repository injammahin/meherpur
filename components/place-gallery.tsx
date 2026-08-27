"use client";

import { useState } from "react";
import { Expand, X } from "lucide-react";
import { GalleryImage } from "@/lib/places";
import { SafeImage } from "@/components/safe-image";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function PlaceGallery({ images, placeName }: { images: GalleryImage[]; placeName: string }) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className={`place-gallery count-${Math.min(images.length, 5)}`}>
        {images.slice(0, 5).map((image, index) => (
          <button className={`gallery-photo gallery-${index + 1}`} type="button" key={`${image.url}-${index}`} onClick={() => setActive(image)}>
            <SafeImage src={image.url} alt={image.alt} loading="lazy" />
            <span className="gallery-expand"><Expand size={16} /> View</span>
            <small>{image.credit}</small>
          </button>
        ))}
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="gallery-dialog border-0 p-0 sm:max-w-[94vw]">
          <DialogTitle className="sr-only">{placeName} photograph</DialogTitle>
          <DialogDescription className="sr-only">Expanded destination photograph</DialogDescription>
          {active && <SafeImage src={active.url} alt={active.alt} />}
          {active && <p>{active.alt}<span>{active.credit}</span></p>}
          <DialogClose asChild><button className="gallery-close" type="button" aria-label="Close image"><X /></button></DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
