import { Link } from "@tanstack/react-router";
import wordmark from "@/assets/mesotopos-wh-trnsp.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <img src={wordmark.url} alt="Mesotopos" className="h-6 w-auto opacity-80 mb-5" />
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            A middle place, where two worlds overlap. A soundtrack for a movie that doesn't exist yet.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/music", "Music"],
              ["/concerts", "Concerts"],
              ["/press", "Press Kit"],
              ["/book", "Book Us"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <a
            href="mailto:mesotopos@neomatik.com"
            className="text-sm text-foreground hover:text-bronze transition-colors"
          >
            mesotopos@neomatik.com
          </a>
          <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
            Ed Kabatsky · neomatik<br />
            Rashid Akmanov<br />
            Oleg Ignatenko
          </p>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Mesotopos. All rights reserved.</span>
          <span className="tracking-[0.3em] uppercase">Middle Place</span>
        </div>
      </div>
    </footer>
  );
}
