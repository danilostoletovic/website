import { ImageResponse } from "next/og";
import { ogImage } from "@/lib/metadata";
import { site } from "@/lib/site";

export const alt = ogImage.alt;
export const size = { width: ogImage.width, height: ogImage.height };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#f4f1ea",
          color: "#141210",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>
          {site.name}
          <span style={{ color: "#ff4a1c" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          {site.headline}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30 }}>
          <div style={{ width: 64, height: 10, background: "#ff4a1c" }} />
          {`Web development by ${site.owner}`}
        </div>
      </div>
    ),
    size,
  );
}
