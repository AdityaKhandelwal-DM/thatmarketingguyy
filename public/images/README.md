# Site imagery

## What's here

| File pattern | Size | Used for |
|---|---|---|
| `*.webp` | 1200×800 (3:2) | Card headers, case-study thumbnails, section bands |
| `sq/*.webp` | 700×700 (1:1) | Instagram grid on /about |
| `hero-desk.webp` | 900×1125 (4:5) | Home hero visual |
| `band-workshop.webp` | 1800×760 | Background of the dark CTA band on the home page |

All files are WebP, quality 80. Total weight ≈ 3.5 MB. They're served through
`next/image`, which generates responsive srcsets automatically — don't add
pre-scaled copies.

## Source and licence

Every photo is from **Unsplash**, used under the
[Unsplash Licence](https://unsplash.com/license): free for commercial use, no
permission or attribution required. Nothing here is a paid-stock file and
nothing is scraped from another site.

## Important: these are stand-ins, not the real thing

The brand guide asks for *"authentic working photos — meetings, speaking,
dashboards, office"*. These are the closest honest approximation, but they are
**not photos of Aditya, his team, or his actual clients**.

Two deliberate choices worth knowing about:

1. **No stock photo is presented as Aditya.** The home hero and the /about
   panel use a desk shot and a session shot rather than a stranger's face,
   because captioning someone else's portrait as Aditya would be a lie to
   visitors. The layout is already built to hold a real portrait.

2. **No stock photo is presented as a named client.** Case-study thumbnails
   are category-illustrative only, matching the anonymised client naming
   already used on /results.

## Swapping in real photos

The layouts expect these exact ratios. Drop a replacement in with the same
filename and nothing else needs to change:

- **Home hero portrait** → replace `hero-desk.webp` with a 900×1125 (4:5) shot
  of Aditya. In `app/page.tsx`, update the `alt` text.
- **About panel portrait** → add `about-portrait.webp` (900×1125) and change
  `src="speak_class"` to `src="about-portrait"` in `app/about/page.tsx`.
- **Instagram grid** → export six real post images at 700×700 into `sq/`.
- **Reel thumbnails** → replace the three images referenced in the `reels`
  array in `app/about/page.tsx` with real frame grabs.
- **Client work** → once a client agrees to be named, swap their category
  thumbnail on `/results` for a real photo of their business.

To regenerate at the right size and format:

```
sips -Z 1200 source.jpg --out tmp.jpg          # or any editor
python3 -c "from PIL import Image; im=Image.open('tmp.jpg'); im.save('out.webp','WEBP',quality=80,method=6)"
```

## fb_*.webp — real client campaign imagery

Cropped from ad creatives pulled out of the connected Meta ad accounts
(the actual businesses behind the /results case studies). Text overlays,
prices, phone numbers and faces were cropped out; the Funzo entrance shot
was rejected because the brand name was legible, which would break the
"client names stay private" promise on /results. Source files retrievable
again via ads_get_ad_images with the account's hashes.
