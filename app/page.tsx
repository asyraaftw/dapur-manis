import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CrowdFavoritesCarousel } from "@/components/crowd-favorites-carousel";
import { CARD_TITLES } from "@/constants-list";
import { HeroSlides } from "@/components/hero-slides";
import Image from "next/image";

export default function Home() {
  return (
    <main
      id="home"
      className="flex-1 bg-[linear-gradient(180deg,_#fecdd3_0%,_#fbd5df_22%,_#f7e4d6_48%,_#edf3db_74%,_#e8f3d6_100%)]"
    >
      <section className="w-full text-black">
        {/* <section className="w-full border-y border-border bg-[linear-gradient(90deg,_#fecdd3_0%,_#fecdd3_50%,_#bbf7d0_50%,_#bbf7d0_100%)] text-black"> */}
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium tracking-[0.24em] text-muted-foreground uppercase">
              Homemade desserts
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Freshly Baked Cakes and Delightful Sweet Treats for Every Occasion
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              At Dapur Manis, we believe that every bite should feel like home.
              Our selection of desserts is crafted with care using simple,
              wholesome ingredients, creating soft, delicate textures and
              balanced flavors that delight the senses. Whether you’re looking
              for a comforting everyday treat, a special birthday cake, or an
              elegant dessert for a celebration, our homemade creations are
              designed to make every moment a little sweeter. From classic
              favorites to unique seasonal specials, Dapur Manis brings warmth,
              joy, and sweetness to every table.
            </p>
          </div>
        </div>
      </section>

      <HeroSlides />

      {/* Carousel */}
      {/* <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 bg-rose-200"> */}
      <section className="w-full text-black">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-12">
          <p className="text-2xl font-medium tracking-[0.24em] text-muted-foreground uppercase text-center pb-8">
            Crowd favorites
          </p>
          <p className="text-md font-medium uppercase text-center pb-8">
            Our most popular treats, loved by all.
          </p>
          <CrowdFavoritesCarousel />
        </div>
      </section>

      {/* Top Pick */}
      <section className="w-full text-black">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-12">
          <p className="text-2xl font-medium tracking-[0.24em] text-muted-foreground uppercase text-center pb-8">
            Our Picks
          </p>
          <p className="text-md font-medium uppercase text-center pb-8">
            Crafted treats for life’s special moments
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {/* 1 */}
            {CARD_TITLES?.map((x) => {
              return (
                <>
                  <Card className="relative mx-auto w-full max-w-sm pt-6 rounded-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold tracking-tight">
                        {x.title}
                      </CardTitle>
                      <CardDescription className="text-md font-medium tracking-tight">
                        {/* <CardDescription> */}
                        {x.description}
                      </CardDescription>
                    </CardHeader>
                    {/* <CardFooter>
                      <Button className="w-full">View Event</Button>
                    </CardFooter> */}
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
