export default function Home() {
  return (
    <main id="home" className="flex-1">
      <section className="w-full border-y border-border bg-amber-50 text-black">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium tracking-[0.24em] text-muted-foreground uppercase">
              Homemade desserts
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Fresh cakes and sweet treats for every table.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Dapur Manis serves simple homemade desserts with clean
              ingredients, soft textures, and flavors that work for everyday
              orders or special occasions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <section className="border border-border bg-card p-6 text-card-foreground">
            <h2 className="text-lg font-semibold">Custom Cakes</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Birthday cakes, celebration cakes, and simple designs made to
              order.
            </p>
          </section>
          <section
            id="about"
            className="border border-border bg-card p-6 text-card-foreground"
          >
            <h2 className="text-lg font-semibold">Daily Bakes</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Brownies, cookies, and dessert boxes prepared in small batches.
            </p>
          </section>
          <section
            id="contact"
            className="border border-border bg-card p-6 text-card-foreground"
          >
            <h2 className="text-lg font-semibold">Easy Ordering</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Contact us through WhatsApp or Instagram for prices, menus, and
              delivery slots.
            </p>
          </section>
        </div>
      </section>
      {/*  */}
      <section className="w-full border-y border-border bg-amber-50 text-black">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium tracking-[0.24em] text-muted-foreground uppercase">
              Homemade desserts
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Fresh cakes and sweet treats for every table.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Dapur Manis serves simple homemade desserts with clean
              ingredients, soft textures, and flavors that work for everyday
              orders or special occasions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
