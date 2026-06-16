import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading } from "@/components/PageHeading";
import { Reveal } from "@/components/Reveal";

type Event = {
  date: string; // e.g. "Sep 14, 2026"
  time?: string;
  city: string;
  country?: string;
  venue: string;
  ticketUrl?: string;
  note?: string;
};

// Edit this array to update upcoming dates.
const EVENTS: Event[] = [];

export const Route = createFileRoute("/concerts")({
  head: () => ({
    meta: [
      { title: "Concerts — Mesotopos" },
      {
        name: "description",
        content: "Upcoming Mesotopos live dates and rites.",
      },
      { property: "og:title", content: "Concerts — Mesotopos" },
      { property: "og:description", content: "Where the soundtrack steps out of the studio." },
    ],
  }),
  component: ConcertsPage,
});

function ConcertsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Live"
        title="Concerts & rites."
        lede="Where the soundtrack steps out of the studio. Dates announce alongside the cycle."
      />

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-5xl">
          {EVENTS.length === 0 ? (
            <Reveal>
              <div className="border border-border/60 px-8 py-20 text-center">
                <p className="eyebrow">No dates announced</p>
                <p className="mt-6 font-display text-3xl md:text-4xl text-foreground">
                  Dates announcing soon.
                </p>
                <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
                  Curators, festivals and venues — Mesotopos is open to live
                  invitations for the coming season.
                </p>
                <Link
                  to="/book"
                  className="mt-10 inline-flex items-center border border-border px-7 py-3 text-xs uppercase tracking-[0.3em] hover:border-sand hover:text-sand transition-colors"
                >
                  Book us
                </Link>
              </div>
            </Reveal>
          ) : (
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {EVENTS.map((e, i) => (
                <Reveal key={i}>
                  <li className="grid grid-cols-[1fr] md:grid-cols-[160px_1fr_auto] gap-6 items-baseline py-8 hover:bg-card/40 transition-colors px-2">
                    <div>
                      <p className="font-display text-2xl text-sand">{e.date}</p>
                      {e.time && (
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">
                          {e.time}
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="text-xl text-foreground">
                        {e.city}
                        {e.country && (
                          <span className="text-muted-foreground"> · {e.country}</span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{e.venue}</p>
                      {e.note && (
                        <p className="text-xs text-bronze mt-2 uppercase tracking-[0.25em]">
                          {e.note}
                        </p>
                      )}
                    </div>
                    <div>
                      {e.ticketUrl ? (
                        <a
                          href={e.ticketUrl}
                          className="inline-flex items-center border border-border px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] hover:border-sand hover:text-sand transition-colors"
                        >
                          Tickets
                        </a>
                      ) : (
                        <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                          On sale soon
                        </span>
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
