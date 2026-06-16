import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading } from "@/components/PageHeading";
import { Reveal } from "@/components/Reveal";
import glyphs from "@/assets/glyphs.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mesotopos" },
      {
        name: "description",
        content:
          "Mesotopos is a 10-track musical project by Ed Kabatsky (neomatik), Rashid Akmanov, and Oleg Ignatenko — a middle place where heritage and modernity meet.",
      },
      { property: "og:title", content: "About — Mesotopos" },
      {
        property: "og:description",
        content: "A middle place. A zone of overlap where histories, identities, and futures meet.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeading
        eyebrow="About the project"
        title="A middle place."
        lede="Mesotopos is a new musical project by Ed Kabatsky — also known as neomatik — together with Rashid Akmanov and Oleg Ignatenko."
      />

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_2fr] gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32 self-start">
              <img
                src={glyphs.url}
                alt="Mesotopos glyphs"
                className="w-32 lg:w-40 mx-auto lg:mx-0 opacity-90"
                loading="lazy"
              />
              <div className="hairline my-10" />
              <p className="eyebrow">In sound first</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                A 10-track cycle, released one scene every 3–4 weeks until the
                end of the year.
              </p>
            </div>
          </Reveal>

          <div className="space-y-10 text-lg leading-[1.8] text-foreground/85">
            <Reveal>
              <p>
                It begins at a threshold: the moment when one life is ending,
                another is forming, and the way forward is not yet fully visible.
                Built as a 10-track cycle, Mesotopos unfolds like a soundtrack
                for a film that has not been made yet.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Each release opens another scene, another fragment of a world
                shaped first through sound, then offered outward in search of
                the right independent director or producer to bring its visual
                language to life.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="my-16 border-l-2 border-bronze pl-8 font-display italic text-3xl md:text-4xl leading-tight text-sand">
                A middle place — a zone of overlap where histories, identities,
                and futures meet.
              </blockquote>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                The name Mesotopos evokes a middle place. Rooted in ancient
                memory yet composed from a contemporary perspective, the project
                moves through heritage and modernity, ritual and technology,
                distance and belonging.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                The first scene, <em className="text-sand not-italic font-medium">Mellow November</em>,
                arrives June 26, followed by{" "}
                <em className="text-sand not-italic font-medium">P38</em> on
                July 17. More than a release schedule, this is a slow unveiling
                of a larger world — one track at a time.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-20 border border-border/60 p-10">
                <p className="eyebrow">For directors & producers</p>
                <p className="mt-6 font-display text-2xl md:text-3xl leading-snug text-foreground">
                  If you hear a film in this music, let's talk.
                </p>
                <p className="mt-4 text-base text-muted-foreground">
                  We're looking for the right independent voice to translate
                  Mesotopos into image.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:mesotopos@neomatik.com?subject=Mesotopos%20%E2%80%94%20Film%20collaboration"
                    className="inline-flex items-center bg-sand text-background px-7 py-3 text-xs uppercase tracking-[0.3em] hover:bg-bronze transition-colors"
                  >
                    Reach out
                  </a>
                  <Link
                    to="/book"
                    className="inline-flex items-center border border-border px-7 py-3 text-xs uppercase tracking-[0.3em] hover:border-sand hover:text-sand transition-colors"
                  >
                    Use the form
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
