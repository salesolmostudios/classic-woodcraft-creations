import wineBox from "@/assets/wine-box.png.asset.json";
import wineCaddy from "@/assets/wine-caddy.png.asset.json";
import candleLid from "@/assets/candle-lid.png.asset.json";
import epoxyClock from "@/assets/epoxy-clock.png.asset.json";
import ranchSign from "@/assets/ranch-sign.png.asset.json";
import salmonBoard from "@/assets/salmon-board.png.asset.json";
import slabTable from "@/assets/slab-table.png.asset.json";
import flag from "@/assets/flag.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";

export type Photo = {
  id: string;
  caption: string;
  src?: string;
  tall?: boolean;
};

export const logo = logoAsset.url;

export const photos: Photo[] = [
  {
    id: "slab-table",
    caption: "Live-edge cookie slab table with walnut bowties in epoxy",
    src: slabTable.url,
    tall: true,
  },
  {
    id: "wine-caddy",
    caption: "\"Live, Love, Wine\" engraved bottle-and-glass caddy",
    src: wineCaddy.url,
    tall: true,
  },
  {
    id: "ranch-sign",
    caption: "King Valley Ranch — carved live-edge slab sign",
    src: ranchSign.url,
  },
  {
    id: "salmon-board",
    caption: "Maple & walnut salmon-inlay serving board with coasters",
    src: salmonBoard.url,
  },
  {
    id: "epoxy-clock",
    caption: "Cherry round with green epoxy river clock",
    src: epoxyClock.url,
    tall: true,
  },
  {
    id: "wine-box",
    caption: "Sliding-lid mahogany wine presentation box",
    src: wineBox.url,
    tall: true,
  },
  {
    id: "flag",
    caption: "Hand-built maple and oak American flag",
    src: flag.url,
  },
  {
    id: "candle-lid",
    caption: "Turned oak candle lid on a cut-glass tumbler",
    src: candleLid.url,
  },
];

export const heroPhoto = photos[0]!;
export const homePhotos = photos.slice(1, 7);
export const shopPhoto = photos[1]!;
export const trimPhoto = photos[3]!;
