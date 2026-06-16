import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageHeading } from "@/components/PageHeading";
import { Reveal } from "@/components/Reveal";
import mellow from "@/assets/mellow-november.png.asset.json";
import pharaoh from "@/assets/pharaoh.png.asset.json";
import wordmarkWhite from "@/assets/wordmark-white.png.asset.json";
import wordmarkBlack from "@/assets/wordmark-black.png.asset.json";
import wordmarkPurple from "@/assets/wordmark-purple.png.asset.json";

const QUOTES = [
  {
    text: "A patient, cinematic work — the kind of record that asks you to slow down and listen for the room around it.",
    source: "Press · forthcoming",
  },
  {
    text: "Mesotopos doesn't sound like a band. It sounds like a place.",
    source: "Press · forthcoming",
  },
];

const DOWNLOADS = [
  { label: "EPK (PDF)", note: "Bio, photos, contact — forthcoming" },
  { label: "Hi-res press photos", note: "ZIP archive — forthcoming" },
  { label: "Logo pack", note: "PNG · SVG variants — forthcoming" },
];

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press Kit — Mesotopos" },
      {
        name: "description",
        content: "Bio, photography, quotes and downloadable assets for press and curators.",
      },
      { property: "og:title", content: "Press Kit — Mesotopos" },
      { property: "og:description", content: "Words, images, downloadable assets." },
      { property: "og:image", content: mellow.url },
    ],
  }),
  component: PressPage,
});

function PressPage() {
  return (
    <>
      <PageHeading
        eyebrow="Press kit"
        title="Words & images."
        lede="Everything needed to write, program or feature Mesotopos."
      />

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-6xl space-y-24">
          {/* SHORT BIO */}
          <Reveal>
            <div className="grid lg:grid-cols-[200px_1fr] gap-10">
              <p className="eyebrow">Short bio</p>
              <p className="text-lg leading-[1.8] text-foreground/85 max-w-3xl">
                Mesotopos is a new musical project by Ed Kabatsky (neomatik),
                Rashid Akmanov, and Oleg Ignatenko — a 10-track cycle released
                gradually as the soundtrack for a film not yet made.
              </p>
            </div>
          </Reveal>

          <div className="hairline" />

          {/* LONG DESCRIPTION */}
          <Reveal>
            <div className="grid lg:grid-cols-[200px_1fr] gap-10">
              <p className="eyebrow">Long description</p>
              <div className="space-y-6 text-base leading-[1.85] text-foreground/80 max-w-3xl">
                <p>
                  Mesotopos begins at a threshold — the moment when one life is
                  ending, another is forming, and the way forward is not yet
                  fully visible. Built as a 10-track cycle, it unfolds like a
                  soundtrack for a film that has not been made yet.
                </p>
                <p>
                  The name evokes a middle place: a zone of overlap where
                  histories, identities and futures meet. Rooted in ancient
                  memory yet composed from a contemporary perspective, the
                  project moves through heritage and modernity, ritual and
                  technology, distance and belonging.
                </p>
                <p>
                  The first scene, "Mellow November," arrives June 26, followed
                  by "P38" on July 17. More than a release schedule, this is a
                  slow unveiling of a larger world — one track at a time.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="hairline" />

          {/* QUOTES */}
          <Reveal>
            <div>
              <p className="eyebrow">Press quotes</p>
              <div className="mt-10 grid md:grid-cols-2 gap-8">
                {QUOTES.map((q, i) => (
                  <blockquote
                    key={i}
                    className="border border-border/60 p-8 bg-card/40"
                  >
                    <p className="font-display italic text-xl leading-snug text-foreground">
                      "{q.text}"
                    </p>
                    <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-bronze">
                      — {q.source}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="hairline" />

          {/* PHOTOS */}
          <Reveal>
            <div>
              <p className="eyebrow">Photography</p>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: mellow.url, label: "Mellow November · cover" },
                  { src: pharaoh.url, label: "Mesotopos · figure" },
                  { src: mellow.url, label: "Scene still · placeholder" },
                ].map((p, i) => (
                  <figure
                    key={i}
                    className="relative aspect-[3/4] border border-border/60 overflow-hidden bg-card"
                  >
                    <img
                      src={p.src}
                      alt={p.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {p.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>

          {/* LOGOS */}
          <Reveal>
            <div>
              <p className="eyebrow">Logo variants</p>
              <div className="mt-10 grid md:grid-cols-3 gap-4">
                {[
                  { src: wordmarkWhite.url, bg: "bg-card" },
                  { src: wordmarkBlack.url, bg: "bg-sand" },
                  { src: wordmarkPurple.url, bg: "bg-indigo-deep" },
                ].map((l, i) => (
                  <div
                    key={i}
                    className={`${l.bg} border border-border/60 flex items-center justify-center p-10 aspect-[3/1]`}
                  >
                    <img src={l.src} alt="Mesotopos wordmark" className="max-h-full max-w-full" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="hairline" />

          {/* DOWNLOADS */}
          <Reveal>
            <div>
              <p className="eyebrow">Downloads</p>
              <ul className="mt-10 divide-y divide-border/60 border-y border-border/60">
                {DOWNLOADS.map((d) => (
                  <li
                    key={d.label}
                    className="flex flex-wrap items-center justify-between gap-4 py-6"
                  >
                    <div>
                      <p className="text-lg text-foreground">{d.label}</p>
                      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                        {d.note}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] hover:border-sand hover:text-sand transition-colors"
                    >
                      <Download size={12} /> Download
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* CONTACT */}
          <Reveal>
            <div className="border border-border/60 p-10 text-center">
              <p className="eyebrow">Press contact</p>
              <a
                href="mailto:mesotopos@neomatik.com?subject=Mesotopos%20%E2%80%94%20Press"
                className="mt-5 inline-block font-display text-3xl text-foreground hover:text-sand transition-colors"
              >
                mesotopos@neomatik.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
