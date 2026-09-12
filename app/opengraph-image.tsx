import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MathAlarm — Wake up. Think first.";

/* Each path is a single literal so Turbopack can scope the file trace; a
   variadic helper here makes it trace the whole project into the bundle. */
const geistBold = readFileSync(
  join(process.cwd(), "assets/fonts/Geist_700Bold.ttf"),
);
const mono = readFileSync(
  join(process.cwd(), "assets/fonts/JetBrainsMono_500Medium.ttf"),
);
const glyph = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/mathalarm-glyph.png"),
).toString("base64")}`;
const screen = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/screens/wake-solving.png"),
).toString("base64")}`;

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
          position: "relative",
          backgroundColor: "#09090e",
          padding: 72,
          fontFamily: "Geist",
        }}
      >
        {/* The device bleeds off the bottom edge so the card reads as product,
            not as a text banner. */}
        <div
          style={{
            position: "absolute",
            top: 96,
            right: 84,
            width: 268,
            height: 581,
            display: "flex",
            overflow: "hidden",
            borderRadius: 34,
            border: "1px solid rgba(255, 255, 255, 0.14)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={screen} width={268} height={581} alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              overflow: "hidden",
              borderRadius: 16,
              backgroundImage:
                "linear-gradient(135deg, #ff2e93 0%, #7b2cbf 55%, #00f0ff 100%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={glyph} width={140} height={140} alt="" />
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 30,
              color: "#ffffff",
            }}
          >
            MathAlarm
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: -4,
              color: "#ffffff",
            }}
          >
            Wake up.
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: -4,
              color: "#ff2e93",
            }}
          >
            Think first.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: 24,
            color: "#6e6e80",
          }}
        >
          Android · Built with Expo &amp; React Native
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
