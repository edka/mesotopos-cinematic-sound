import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/PageHeading";
import { Reveal } from "@/components/Reveal";
import mellow from "@/assets/mellow-november.png.asset.json";

type Scene = {
  number: string;
  title: string;
  date: string;
  status: "Out now" | "Upcoming" | "In the cycle";
  caption: string;
  cover?: string;
  links?: { label: string; href: string }[];
};

const SCENES: Scene[] = [
  {
    number: "01",
    title: "Mellow November",
    date: "June 26",
    status: "Out now",
    caption:
      "A slow opening sequence: quiet tension, threshold light, the sense that something larger is about to move.",
    cover: mellow.url,
    links: [
      { label: "Spotify", href: "https://open.spotify.com/artist/1hA5eFgIgAyLtec5l1RQox" },
      { label: "Apple Music", href: "https://music.apple.com/us/artist/neomatik/1543651491" },
      { label: "YouTube", href: "https://www.youtube.com/watch?v=B7a7ovayb0s" },
      { label: "Bandcamp", href: "https://neomatik.bandcamp.com/track/mellow-november-feat-mesotopos" },
    ],
  },
  {
    number: "02",
    title: "P38",
    date: "July 17",
    status: "Upcoming",
    caption:
      "A turn into harder ground. Mechanical pulse against weathered stone, heritage running into the present.",
  },
  {
    number: "03",
    title: "Poor & Rich",
    date: "TBA",
    status: "In the cycle",
    caption:
      "A study in two voices held in the same room, opposites refusing to resolve.",
  },
];

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music | Mesotopos" },
      {
        name: "description",
        content:
          "Scenes from Mesotopos: Mellow November, P38, Poor & Rich. A 10-track cycle released one scene at a time.",
      },
      { property: "og:title", content: "Music | Mesotopos" },
      { property: "og:description", content: "Ten scenes. One soundtrack. Released gradually." },
      { property: "og:image", content: mellow.url },
    ],
  }),
  component: MusicPage,
});

function MusicPage() {
  return (
    <>
      <PageHeading
        eyebrow="The cycle"
        title="Scenes."
        lede="Ten tracks, released one every three to four weeks until the end of the year. Each one opens another fragment of the world."
      />

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-6xl space-y-24">
          {SCENES.map((scene, i) => (
            <Reveal key={scene.title}>
              <article
                className={`grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center ${
                  i % 2 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-square border border-border/60 overflow-hidden bg-card">
                  {scene.cover ? (
                    <img
                      src={scene.cover}
                      alt={scene.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <PlaceholderCover number={scene.number} title={scene.title} />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-bronze">
                    <span>Scene {scene.number}</span>
                    <span className="h-px w-10 bg-bronze/50" />
                    <span>{scene.status}</span>
                  </div>
                  <h2 className="mt-5 text-5xl md:text-6xl text-foreground">{scene.title}</h2>
                  <p className="mt-4 font-display italic text-xl text-sand">{scene.date}</p>
                  <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
                    {scene.caption}
                  </p>

                  {scene.links ? (
                    <div className="mt-10 flex flex-wrap gap-3">
                      {scene.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          className="border border-border px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] hover:border-sand hover:text-sand transition-colors"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Streaming links · soon
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-32 mx-auto max-w-3xl text-center">
            <p className="eyebrow">07 more scenes</p>
            <p className="mt-6 font-display text-2xl md:text-3xl text-foreground">
              The cycle continues until the end of the year.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function PlaceholderCover({ number, title }: { number: string; title: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-indigo-deep via-background to-card">
      <p className="eyebrow text-bronze/80">Scene {number}</p>
      <p className="mt-4 font-display text-3xl text-sand/80">{title}</p>
      <div className="mt-8 h-px w-20 bg-border" />
      <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        Cover · forthcoming
      </p>
    </div>
  );
}
