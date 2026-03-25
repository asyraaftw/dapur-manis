"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import berryCheesecake from "@/img/items/berry-cheesecake.jpg";
import cheesecake from "@/img/items/cheesecake.jpg";
import chocFudge from "@/img/items/choc-fudge.jpg";
import choccake from "@/img/items/choccake.png";
import montblanc from "@/img/items/montblanc.jpg";
import truffle from "@/img/items/truffle.jpg";

const favoriteItems = [
  { image: berryCheesecake, alt: "Berry cheesecake" },
  { image: cheesecake, alt: "Cheesecake" },
  { image: chocFudge, alt: "Chocolate fudge cake" },
  { image: choccake, alt: "Chocolate cake" },
  { image: montblanc, alt: "Montblanc dessert" },
  { image: truffle, alt: "Chocolate truffle dessert" },
];

export function CrowdFavoritesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const syncPagination = () => {
      setActiveIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    syncPagination();
    api.on("select", syncPagination);
    api.on("reInit", syncPagination);

    return () => {
      api.off("select", syncPagination);
      api.off("reInit", syncPagination);
    };
  }, [api]);

  return (
    <>
      <Carousel className="w-full" opts={{ align: "start" }} setApi={setApi}>
        <CarouselContent>
          {favoriteItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <AspectRatio ratio={1 / 1} className="rounded-lg bg-muted">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="rounded-lg object-cover dark:brightness-20"
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>

      {snapCount > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to favorites slide ${index + 1}`}
              aria-pressed={activeIndex === index}
              onClick={() => api?.scrollTo(index)}
              className={
                activeIndex === index
                  ? "h-2.5 w-8 rounded-full bg-black"
                  : "h-2.5 w-2.5 rounded-full bg-black/25 transition-colors hover:bg-black/40"
              }
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
