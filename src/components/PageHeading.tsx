import { Reveal } from "./Reveal";
import { Orion } from "./Orion";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
};

export function PageHeading({ eyebrow, title, lede }: Props) {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      <Orion className="absolute -top-10 right-0 w-[520px] text-bronze/30 hidden md:block" />
      <div className="mx-auto max-w-5xl px-6 lg:px-10 relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 text-5xl md:text-7xl leading-[1.02] text-foreground">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {lede}
            </p>
          </Reveal>
        )}
        <div className="hairline mt-12" />
      </div>
    </section>
  );
}
