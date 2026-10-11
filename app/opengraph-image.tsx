import { ImageResponse } from "next/og";
import { ogImage } from "@/lib/metadata";
import { site } from "@/lib/site";

export const alt = ogImage.alt;
export const size = { width: ogImage.width, height: ogImage.height };
export const contentType = "image/png";

// Colours mirror the tokens in app/globals.css.
const ink = "#101014";
const text = "#f7f5f0";
const accent = "#ff4a1c";

export default function OpengraphImage() {
  const splitAt = site.headline.indexOf("?") + 1;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: ink,
          color: text,
          borderBottom: `24px solid ${accent}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 40 }}>
          DAN
          <div style={{ display: "flex", background: accent, color: ink, padding: "4px 12px" }}>
            DELIVERS
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 112, lineHeight: 0.95 }}>
          <div style={{ display: "flex" }}>{site.headline.slice(0, splitAt).toUpperCase()}</div>
          <div style={{ display: "flex", color: accent }}>
            {site.headline.slice(splitAt).trim().toUpperCase()}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a8a8b3" }}>
          {`Websites · Web apps · Android apps · by ${site.fullName}`}
        </div>
      </div>
    ),
    size,
  );
}
