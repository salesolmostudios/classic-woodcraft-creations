import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/SiteChrome";
import { PhotoSlot } from "@/components/PhotoSlot";
import { heroPhoto, homePhotos } from "@/lib/photos";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Classic Finishes, Inc. — Custom Woodwork in Bothell, WA" },
      {
        name: "description",
        content:
          "Father-and-son custom woodworking, finish carpentry, cabinet installation, open-rail systems and laser engraving in Bothell, Washington. Licensed, bonded, insured since 2003.",
      },
      { property: "og:title", content: "Classic Finishes, Inc. — Custom Woodwork in Bothell, WA" },
      {
        property: "og:description",
        content:
          "Finish carpentry, cabinets, open-rail systems and laser engraving from a retired woodworker and his son. Est. 2003.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.35em] text-accent">
              Est. {site.established} · Bothell, Washington
            </p>
            <h1 className="mt-4 text-4xl leading-tight font-semibold text-primary sm:text-5xl">
              One-of-a-kind custom work, cut and fit by hand.
            </h1>
            <p className="mt-5 max-w-prose text-muted-foreground">
              A retired woodworker got bored in retirement. So he and his son went back to
              the shop. Four decades of construction experience behind every joint —
              finish carpentry, cabinets, open-rail systems, custom woodwork and laser
              engraving for anybody who wants something built right.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Book a project
              </Link>
              <Link
                to="/work"
                className="rounded-sm border border-primary/30 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
              >
                See the work
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 text-sm">
              {[
                ["40+ yrs", "Experience"],
                ["2003", "Established"],
                ["Licensed", "Bonded & insured"],
              ].map(([a, b]) => (
                <div key={b}>
                  <dt className="font-display text-xl text-primary">{a}</dt>
                  <dd className="text-muted-foreground">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
          <PhotoSlot photo={heroPhoto} ratio="aspect-4/5" />
        </section>

        <section className="border-y border-border bg-card/70">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-3xl text-primary">What we do</h2>
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg text-primary">{s.title}</h3>
                  <div className="rule-line my-3" />
                  <p className="text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-primary">Recent work</h2>
            <a
              className="text-sm text-accent hover:underline"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              More on Instagram {site.handle}
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homePhotos.map((p) => (
              <PhotoSlot key={p.id} photo={p} />
            ))}
          </div>
          <div className="mt-8">
            <Link to="/work" className="text-sm text-accent hover:underline">
              View the full gallery →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
