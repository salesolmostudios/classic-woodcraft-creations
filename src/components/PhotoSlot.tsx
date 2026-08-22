import type { Photo } from "@/lib/photos";

export function PhotoSlot({
  photo,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  photo: Photo;
  className?: string;
  ratio?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-sm border border-border bg-secondary ${ratio} ${className}`}
    >
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.caption}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Photo slot
          </span>
          <span className="text-sm text-muted-foreground/80">{photo.caption}</span>
        </div>
      )}
      {photo.src ? (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/85 to-transparent p-4 text-sm text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
          {photo.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
