import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/SiteChrome";
import { PhotoSlot } from "@/components/PhotoSlot";
import { shopPhoto, trimPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Classic Finishes, Inc., Bothell WA" },
      {
        name: "description",
        content:
          "How Glenn Langermann started Classic Finishes in Bothell, Washington in 2003, and how a father-and-son team turned four decades of carpentry into custom woodwork and laser engraving.",
      },
      { property: "og:title", content: "Our Story — Classic Finishes, Inc." },
      {
        property: "og:description",
        content:
          "Four decades of construction, a Bothell shop, and a retired woodworker who could not sit still.",
      },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-4xl text-primary">Our story</h1>
        <div className="mt-10 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-muted-foreground">
            <p>
              Classic Finishes, Inc. has been working out of Bothell, Washington since
              August of 2003. It's owned by {site.owner}, who has spent more than four
              decades on job sites across the Puget Sound — framing, trimming, hanging
              cabinets and building stairs long before it was a business with a name on
              the license.
            </p>
            <p>
              The company started the way a lot of good shops do: enough builders kept
              asking for the same guy by name that it made sense to make it official.
              Finish carpentry became the core of the work — the trim, casing, cabinetry
              and rail systems that show up in the last few weeks of a build and end up
              being the part homeowners actually run their hands across.
            </p>
            <p>
              Retirement didn't take. Glenn got bored, the tools were still sharp, and his
              son came in alongside him. Between the two of them the shop shifted toward
              one-of-a-kind custom work: pieces drawn up with the customer, built to fit a
              specific room, a specific wall, a specific idea. Add a laser to a woodshop
              and suddenly names, logos, maps and signage get burned right into the piece.
            </p>
            <p>
              Today it's still a small, licensed, bonded and insured operation working the
              greater Seattle and Eastside area out of {site.address}. Small enough that
              you talk to the person building it. Experienced enough that it comes out
              square.
            </p>
            <div className="rule-line" />
            <p className="text-sm">
              Want something built?{" "}
              <a className="text-accent hover:underline" href={site.phoneHref}>
                {site.phone}
              </a>{" "}
              ·{" "}
              <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
          <div className="space-y-4">
            <PhotoSlot photo={shopPhoto} ratio="aspect-3/4" />
            <PhotoSlot photo={trimPhoto} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
