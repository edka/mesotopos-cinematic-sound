## Mesotopos — multi-page cinematic site

A dark-only TanStack Start site with a persistent top nav linking six routes. Editorial, nocturnal, restrained. The pharaoh figure and Mesotopos wordmark anchor the visuals; subtle Orion constellation linework and grain run throughout.

### Routes

| File | URL | Purpose |
| --- | --- | --- |
| `src/routes/index.tsx` | `/` | Home — hero + brief teasers into other pages |
| `src/routes/about.tsx` | `/about` | About the Project |
| `src/routes/music.tsx` | `/music` | Tracks as cinematic scenes |
| `src/routes/concerts.tsx` | `/concerts` | Event list |
| `src/routes/press.tsx` | `/press` | Press kit |
| `src/routes/book.tsx` | `/book` | Booking pitch + contact form |

Persistent shell (header nav + footer) lives in `src/routes/__root.tsx` so every page shares it; `<Outlet />` renders the active page.

### Pages

1. **Home (`/`)** — full-viewport hero: composited deep-indigo night sky with a generated starfield + faint Orion belt, pharaoh PNG center-stage with slow parallax, Mesotopos wordmark above, tagline "A soundtrack for a movie that doesn't exist yet." below. CTAs: "Listen" → `/music`, "Explore the Project" → `/about`. Beneath the hero: short intro paragraph, a "Next scene" teaser card (Mellow November · June 26), and three quiet section previews linking to About / Concerts / Press.
2. **About (`/about`)** — editorial two-column on desktop, stacked on mobile. Uses your full bio copy verbatim. Pull-quote: "A middle place, where two worlds overlap." Closing block invites independent directors/producers to reach out, links to booking email.
3. **Music (`/music`)** — three cinematic scenes: Mellow November (June 26), P38 (July 17), Poor & Rich. Each: scene number, title, release date, short caption, slot for streaming links/embeds. Mellow November uses the provided poster; the others use stylized placeholder treatments.
4. **Concerts (`/concerts`)** — refined event list (date · city · venue · time · ticket link). Driven by a single `events` array at the top of the file. Empty state: "Dates announcing soon."
5. **Press Kit (`/press`)** — short bio, long description, two press-quote slots, photo grid (3 placeholders), download list (EPK PDF, hi-res photos, logo pack), press contact.
6. **Book Us (`/book`)** — booking pitch + contact form (Name, Email, Organization, Event details, Message). Submits via `mailto:mesotopos@neomatik.com` with a pre-filled subject/body. Email also shown as plain text.

### Art direction

- Palette: deep indigo `#0b0f24` base, charcoal `#0a0a0d`, sand `#d9c9a3`, muted gold/bronze `#b8894a`, weathered stone `#7a7468`; chartreuse and violet (from the artwork) used sparingly as accents.
- Typography: DM Serif Display headings, Fira Sans body, small-caps tracked labels.
- Texture: faint grain overlay; Orion constellation SVG drifts in hero and as section dividers.
- Motion: gentle fade/translate on scroll via framer-motion; slow parallax on the hero figure; subtle page-transition fade between routes.

### SEO

Each route defines its own `head()` — distinct title, description, og:title/description. Home's `og:image` is the Mellow November poster; other routes use route-specific imagery or omit when none fits. Single H1 per page.

### Assets

- Uploaded files imported via Lovable Assets: pharaoh figure, Mellow November poster, wordmarks (black/white/purple), vertical glyph asset.
- One generated image: starfield night-sky background for the home hero.
- Inline SVG: Orion constellation lines used in hero and as section dividers.

### Technical

- Dark-only theme tokens added to `src/styles.css` under `:root` (no toggle).
- Google Fonts (`DM Serif Display`, `Fira Sans`) loaded via `<link>` in `__root.tsx`.
- Shared `Header` (sticky, with active-route highlighting via TanStack `Link` `activeProps`) and `Footer` components rendered in `__root.tsx`.
- Mobile nav: compact top bar with a sheet/drawer for the route list.
- Fully responsive and accessible.

### Placeholders you can swap later

- Concert events array, streaming links per track, EPK download URLs, press photos, press quotes.

No backend, no Lovable Cloud needed.
