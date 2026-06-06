import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-px mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center py-24 text-center">
      <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rose">
        Oops · 404
      </p>
      <h1 className="mt-2 font-display text-5xl text-forest md:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 font-body font-normal text-forest/70">
        The gift you&rsquo;re looking for seems to have been delivered
        elsewhere. Let&rsquo;s get you back to something beautiful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back home</Button>
        <Button href="/shop" variant="secondary">
          Browse gifts
        </Button>
      </div>
    </section>
  );
}
