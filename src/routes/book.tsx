import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeading } from "@/components/PageHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Us | Mesotopos" },
      {
        name: "description",
        content:
          "Booking inquiries for festivals, venues, curators, promoters and art spaces.",
      },
      { property: "og:title", content: "Book Us | Mesotopos" },
      { property: "og:description", content: "Invite Mesotopos into your space." },
    ],
  }),
  component: BookPage,
});

const EMAIL = "mesotopos@neomatik.com";

function BookPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const email = String(f.get("email") || "");
    const org = String(f.get("organization") || "");
    const details = String(f.get("event") || "");
    const message = String(f.get("message") || "");

    const subject = `Booking inquiry: ${org || name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${org}`,
      "",
      "Event details:",
      details,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHeading
        eyebrow="Book us"
        title="Invite Mesotopos."
        lede="Festivals, venues, promoters, curators, art spaces. Mesotopos is open to thoughtfully programmed live invitations and collaborations."
      />

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.4fr] gap-16">
          {/* PITCH */}
          <Reveal>
            <div className="lg:sticky lg:top-32 self-start space-y-8">
              <p className="text-lg leading-[1.85] text-foreground/85">
                Mesotopos can be presented as an immersive listening session, a
                full live set, or a hybrid program with visual collaborators.
                We're particularly interested in cinematic venues, ancient
                sites, art spaces and festivals open to long-form work.
              </p>

              <div className="hairline" />

              <div>
                <p className="eyebrow">Direct contact</p>
                <a
                  href={`mailto:${EMAIL}?subject=Mesotopos%20booking`}
                  className="mt-4 inline-block font-display text-2xl text-foreground hover:text-sand transition-colors"
                >
                  {EMAIL}
                </a>
              </div>

              <div>
                <p className="eyebrow">We're open to</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Festivals & curated programs</li>
                  <li>Site-specific performances</li>
                  <li>Listening events with film collaborators</li>
                  <li>Press, podcast and interview requests</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="border border-border/60 p-8 md:p-10 space-y-7 bg-card/30"
            >
              <div className="grid md:grid-cols-2 gap-7">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Organization" name="organization" />
              <Field
                label="Event details"
                name="event"
                placeholder="Date, city, venue, capacity, type of event…"
                textarea
                rows={3}
              />
              <Field
                label="Message"
                name="message"
                placeholder="Tell us about your space and what you're imagining."
                textarea
                rows={5}
                required
              />

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground max-w-xs">
                  Submitting opens your email client with the message ready to send.
                </p>
                <button
                  type="submit"
                  className="bg-sand text-background px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-bronze transition-colors"
                >
                  Send inquiry
                </button>
              </div>

              {sent && (
                <p className="text-xs text-bronze uppercase tracking-[0.25em]">
                  Email client opened. Thank you.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
  rows?: number;
};

function Field({ label, name, type = "text", required, placeholder, textarea, rows }: FieldProps) {
  const common =
    "mt-2 block w-full bg-transparent border-b border-border focus:border-sand outline-none py-2 text-foreground placeholder:text-muted-foreground/60 transition-colors";
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
        {required && <span className="text-bronze"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={common + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={common}
        />
      )}
    </label>
  );
}
