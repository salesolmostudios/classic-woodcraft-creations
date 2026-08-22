import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/SiteChrome";
import { PhotoSlot } from "@/components/PhotoSlot";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Classic Finishes, Inc." },
      {
        name: "description",
        content:
          "A gallery of finish carpentry, custom cabinets, open-rail stair systems and laser-engraved woodwork built by Classic Finishes in Bothell, WA.",
      },
      { property: "og:title", content: "Our Work — Classic Finishes, Inc." },
      {
        property: "og:description",
        content:
          "Stairs, cabinets, trim, mantels and engraved pieces from a Bothell, WA father-and-son shop.",
      },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-4xl text-primary">Our work</h1>
        <p className="mt-4 max-w-prose text-muted-foreground">
          Every project below came out of the shop or off a job site in the greater
          Seattle area. The full running feed lives on{" "}
          <a
            className="text-accent hover:underline"
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram {site.handle}
          </a>
          .
        </p>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {photos.map((p) => (
            <PhotoSlot
              key={p.id}
              photo={p}
              className="break-inside-avoid"
              ratio={p.tall ? "aspect-3/4" : "aspect-4/3"}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
