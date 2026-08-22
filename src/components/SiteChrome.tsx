import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { logo } from "@/lib/photos";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/story", label: "Our Story" },
  { to: "/booking", label: "Book a Project" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link to="/" className="flex items-center gap-3 leading-tight">
          <img src={logo} alt="Classic Finishes Woodworking logo" className="h-11 w-11 object-contain" />
          <span>
            <span className="block font-display text-lg font-semibold text-primary">
              Classic Finishes
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              Est. {site.established} · Bothell, WA
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <h2 className="font-display text-lg text-primary">{site.name}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Licensed, bonded and insured general contracting. Owned by {site.owner}.
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-display text-base text-primary">Contact</h3>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>
              <a className="hover:text-foreground" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href={site.phoneHref}>
                {site.phone}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="font-display text-base text-primary">Follow</h3>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>
              <a
                className="hover:text-foreground"
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram {site.handle}
              </a>
            </li>
            <li>
              <a
                className="hover:text-foreground"
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name} · Bothell, Washington
      </div>
    </footer>
  );
}
