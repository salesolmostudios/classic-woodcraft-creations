/**
 * PHOTO SLOTS — Instagram work photos.
 *
 * Instagram blocks automated downloading, so each slot below is empty until a
 * real photo is dropped in. To fill one:
 *   1. Save the image into `src/assets/` (e.g. src/assets/stair-rail.jpg)
 *   2. Import it at the top of this file:  import stairRail from "@/assets/stair-rail.jpg";
 *   3. Set `src: stairRail` on the matching slot.
 *
 * No AI-generated imagery is used anywhere on this site.
 */

export type Photo = {
  id: string;
  caption: string;
  /** Set to an imported image from src/assets to fill the slot. */
  src?: string;
  /** Layout hint for the gallery grid. */
  tall?: boolean;
};

export const photos: Photo[] = [
  { id: "hero", caption: "Featured project", tall: true },
  { id: "stairs", caption: "Open-rail stair system" },
  { id: "cabinets", caption: "Custom cabinet installation", tall: true },
  { id: "trim", caption: "Finish carpentry & trim detail" },
  { id: "engraving", caption: "Laser-engraved woodwork" },
  { id: "builtin", caption: "Built-in shelving" },
  { id: "mantel", caption: "Custom mantel" },
  { id: "shop", caption: "In the shop" },
  { id: "table", caption: "One-of-a-kind table" },
  { id: "door", caption: "Custom door & casing" },
  { id: "rail-detail", caption: "Rail and newel detail", tall: true },
  { id: "finish", caption: "Finished room" },
];

export const heroPhoto = photos[0];
export const homePhotos = photos.slice(1, 7);
