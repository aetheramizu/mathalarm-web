import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/* The shipped app icon leaves ~⅓ of its canvas as padding, which renders the
   clock at roughly 5px in a browser tab. This redraws it: the same gradient on
   a rounded tile, with the glyph scaled up to fill the frame. */
const glyph = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "mathalarm-glyph.png"),
).toString("base64")}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 15,
          backgroundImage:
            "linear-gradient(135deg, #ff2e93 0%, #7b2cbf 55%, #00f0ff 100%)",
        }}
      >
        {/* Oversized so the glyph's own padding falls outside the tile.
            next/image cannot be used here: this renders through satori. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={glyph} width={132} height={132} alt="" />
      </div>
    ),
    size,
  );
}
