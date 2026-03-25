"use client";

import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import slide1 from "@/img/slides/1.svg";
import slide2 from "@/img/slides/2.svg";
import slide3 from "@/img/slides/3.svg";
import slide4 from "@/img/slides/4.svg";
import slide5 from "@/img/slides/5.svg";
import slide6 from "@/img/slides/6.svg";
import slide7 from "@/img/slides/7.svg";
import slide8 from "@/img/slides/8.svg";
import slide9 from "@/img/slides/9.svg";
import slide10 from "@/img/slides/10.svg";

const slides: StaticImageData[] = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
];

export function HeroSlides() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateActiveIndex = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    updateActiveIndex();
    api.on("select", updateActiveIndex);
    api.on("reInit", updateActiveIndex);

    return () => {
      api.off("select", updateActiveIndex);
      api.off("reInit", updateActiveIndex);
    };
  }, [api]);

  return (
    <section className="w-full text-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-12">
        <Carousel
          className="w-full"
          opts={{ align: "start", loop: true }}
          setApi={setApi}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-1">
                  <AspectRatio
                    ratio={16 / 9}
                    className="overflow-hidden rounded-lg bg-card"
                  >
                    <Image
                      src={slide}
                      alt={`Dapur Manis slide ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
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
      </div>
    </section>
  );
}
