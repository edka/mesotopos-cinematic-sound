import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import pharaoh from "@/assets/pharaoh.png.asset.json";
import wordmark from "@/assets/mesotopos-purple-transparent.png.asset.json";
import mellow from "@/assets/mellow-november.png.asset.json";
import nightSky from "@/assets/night-sky.jpg";
import { Reveal } from "@/components/Reveal";
import { Orion } from "@/components/Orion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mesotopos — A soundtrack for a movie that doesn't exist yet" },
      {
        name: "description",
        content:
          "A new 10-track musical project by Ed Kabatsky (neomatik), Rashid Akmanov, and Oleg Ignatenko. A world built in sound, awaiting its film.",
      },
      { property: "og:title", content: "Mesotopos" },
      {
        property: "og:description",
        content: "A soundtrack for a movie that doesn't exist yet.",
      },
      { property: "og:image", content: mellow.url },
      { name: "twitter:image", content: mellow.url },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nightSky})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />

        <Orion className="absolute top-20 left-8 w-96 text-sand/20 hidden md:block" />

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 pt-28 lg:pt-32 pb-20 px-6 lg:px-10 flex flex-col items-center text-center"
        >
          <Reveal>
            <img
              src={wordmark.url}
              alt="Mesotopos"
              className="h-10 md:h-14 w-auto mx-auto mb-10"
            />
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[520px]"
          >
            <img
              src={pharaoh.url}
              alt="Mesotopos figure"
              className="w-full h-auto select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              width={1500}
              height={1500}
            />
          </motion.div>

          <Reveal delay={0.4}>
            <p className="mt-10 font-display italic text-2xl md:text-3xl text-sand max-w-2xl leading-snug">
              A soundtrack for a movie<br className="hidden sm:block" /> that doesn't exist yet.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/music"
                className="group inline-flex items-center gap-3 bg-sand text-background px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-bronze transition-colors"
              >
                Listen
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border border-border/80 px-8 py-4 text-xs uppercase tracking-[0.3em] text-foreground hover:border-sand hover:text-sand transition-colors"
              >
                Explore the project
              </Link>
            </div>
          </Reveal>
        </motion.div>
      </section>

      {/* LANDING COPY */}
      <section className="relative py-28 lg:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">A 10-track cycle</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 font-display text-3xl md:text-4xl leading-[1.35] text-foreground">
              It begins at a threshold — the moment when one life is ending,
              another is forming, and the way forward is not yet fully visible.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed">
              Mesotopos unfolds like a soundtrack for a film that has not been
              made yet. Each release opens another scene — another fragment of a
              world shaped first through sound, then offered outward in search
              of the right independent director to bring its visual language to
              life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* NEXT SCENE TEASER */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden border border-border/60">
              <img
                src={mellow.url}
                alt="Mellow November"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <p className="eyebrow">Scene 01 — Out now</p>
              <h2 className="mt-6 text-5xl md:text-6xl text-foreground">Mellow November</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
                The first scene of Mesotopos. A slow opening sequence — quiet
                tension, threshold light, the sense that something larger is
                about to move.
              </p>
              <div className="mt-8 flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-bronze">
                <span>June 26</span>
                <span className="h-px w-12 bg-bronze/50" />
                <span>Mesotopos · 01 / 10</span>
              </div>
              <div className="mt-10">
                <Link
                  to="/music"
                  className="inline-flex items-center gap-3 text-sm text-foreground hover:text-sand transition-colors"
                >
                  All scenes
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION PREVIEWS */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-10 border-t border-border/40">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-12">
          {[
            {
              to: "/about" as const,
              eyebrow: "About",
              title: "A middle place",
              copy: "Where ancient memory meets contemporary perspective.",
            },
            {
              to: "/concerts" as const,
              eyebrow: "Concerts",
              title: "Live rites",
              copy: "Where the soundtrack steps out of the studio.",
            },
            {
              to: "/press" as const,
              eyebrow: "Press Kit",
              title: "Words & images",
              copy: "Bio, photography, downloadable assets for press.",
            },
          ].map((item, i) => (
            <Reveal key={item.to} delay={i * 0.08}>
              <Link to={item.to} className="group block">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3 className="mt-4 text-3xl text-foreground group-hover:text-sand transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.copy}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-bronze group-hover:text-sand transition-colors">
                  Enter
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
