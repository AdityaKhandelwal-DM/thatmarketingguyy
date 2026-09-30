import { ImageResponse } from "next/og";

/*
 * 1200×630 share image for the service pages (LinkedIn, WhatsApp, X, Slack
 * previews). Rendered at build time by each route's opengraph-image.tsx.
 * Brand: white surface, Bice Blue #036D9A, Maize #FDEA6F highlight with dark
 * text, Montserrat. The platform is shown with its own logo.
 */

export const ogSize = { width: 1200, height: 630 };

async function montserrat(weight: 600 | 700): Promise<ArrayBuffer | null> {
  try {
    // No browser UA → Google Fonts serves TTF, which the image renderer reads.
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Montserrat:wght@${weight}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null; // falls back to the renderer's built-in sans
  }
}

const metaLogo = (
  <svg width="220" height="138" viewBox="0 0 48 30">
    <path
      fill="#0081FB"
      d="M13.4 2C7.1 2 2 9.4 2 17.8 2 23.2 4.6 27 9 27c3.1 0 5.4-1.6 9.2-7.5l2.9-4.5c.5.8 1 1.6 1.5 2.5l2 3.3C28.7 27 31.4 29 35 29c4.4 0 7-3.6 7-9.2C42 10 36.8 2 30.4 2c-3.6 0-6.4 2.2-9 5.6C18.9 4.1 16.6 2 13.4 2zm.4 5c1.7 0 3.2 1.3 5.6 4.7l-3 4.6c-2.7 4.2-3.9 5.2-5.6 5.2-1.8 0-2.9-1.6-2.9-4.2C7.9 11.6 10.6 7 13.8 7zm16.4 0c3.3 0 6.3 5.4 6.3 11.6 0 2.5-.9 4-2.6 4-1.6 0-2.5-1-5-5l-2.5-4C24.4 9.4 27 7 30.2 7z"
    />
  </svg>
);

const googleAdsLogo = (
  <svg width="200" height="200" viewBox="0 0 48 48">
    <rect x="14.5" y="5" width="13" height="35" rx="6.5" fill="#FBBC04" transform="rotate(30 21 22.5)" />
    <rect x="20.5" y="5" width="13" height="35" rx="6.5" fill="#4285F4" transform="rotate(-30 27 22.5)" />
    <circle cx="10.5" cy="35.5" r="6.5" fill="#34A853" />
  </svg>
);

export async function serviceOgImage(opts: {
  platform: "meta" | "google";
  headline: string;
  sub: string;
  stats: string[];
}) {
  const [bold, semi] = await Promise.all([montserrat(700), montserrat(600)]);
  const fonts = [
    ...(bold ? [{ name: "Montserrat", data: bold, weight: 700 as const, style: "normal" as const }] : []),
    ...(semi ? [{ name: "Montserrat", data: semi, weight: 600 as const, style: "normal" as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          fontFamily: "Montserrat",
        }}
      >
        <div style={{ display: "flex", flex: 1, padding: "64px 72px 0", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: 40 }}>
            <div style={{ display: "flex", alignItems: "center", fontSize: 22, fontWeight: 600, color: "#036D9A", letterSpacing: 2 }}>
              <div style={{ width: 36, height: 3, background: "#036D9A", marginRight: 14 }} />
              THATMARKETINGGUYY.COM
            </div>
            <div style={{ fontSize: 68, fontWeight: 700, color: "#0F172A", lineHeight: 1.08, marginTop: 26 }}>
              {opts.headline}
            </div>
            <div style={{ fontSize: 28, fontWeight: 600, color: "#475569", marginTop: 22, lineHeight: 1.35 }}>
              {opts.sub}
            </div>
            <div style={{ display: "flex", marginTop: 34 }}>
              {opts.stats.map((s) => (
                <div
                  key={s}
                  style={{
                    display: "flex",
                    background: "#FDEA6F",
                    color: "#0F172A",
                    fontSize: 24,
                    fontWeight: 700,
                    padding: "12px 20px",
                    borderRadius: 10,
                    marginRight: 14,
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 300,
              height: 300,
              borderRadius: 32,
              background: "#F8FAFC",
              border: "2px solid #E5E7EB",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {opts.platform === "meta" ? metaLogo : googleAdsLogo}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#036D9A",
            color: "#FFFFFF",
            padding: "22px 72px",
            marginTop: 48,
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>Aditya Khandelwal · Meta &amp; Google Ads consultant</div>
          <div style={{ display: "flex" }}>Remote · US · UK · UAE · AU · SG</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: fonts.length ? fonts : undefined }
  );
}
