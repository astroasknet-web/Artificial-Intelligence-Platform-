import Link from "next/link";
import { BRAND, SIBLINGS } from "@/lib/ai/content";

const LINKS: [string, string][] = [["/#business", "For business"], ["/#people", "For people"], ["/#how", "How it works"], ["/#faq", "FAQ"]];

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Yugty.AI home">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="ya-g" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5eead4" />
            <stop offset=".5" stopColor="#7c8bff" />
            <stop offset="1" stopColor="#c084fc" />
          </linearGradient>
        </defs>
        <path d="M5 5l11 13L27 5M16 18v9" fill="none" stroke="url(#ya-g)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="26" r="2.6" fill="#5eead4" />
      </svg>
      <span>Yugty<em>.AI</em></span>
    </Link>
  );
}

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-in">
        <Logo />
        <nav aria-label="Sections" className="nav-links">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link className="btn btn-solid btn-sm" href="/book">Book a demo</Link>
        <details className="nav-menu">
          <summary aria-label="Menu"><span /><span /></summary>
          <div className="nav-panel">
            {LINKS.map(([href, label]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            <Link href="/book">Book a demo</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  const sibs = SIBLINGS.filter((s): s is { label: string; url: string; nav?: boolean } => Boolean(s.url));
  return (
    <footer className="foot">
      <div className="foot-in">
        <div>
          <Logo />
          <p>{BRAND.tagline}</p>
        </div>
        <ul aria-label="Explore">
          <li><Link href="/#business">For business</Link></li>
          <li><Link href="/#people">For people</Link></li>
          <li><Link href="/book">Book a demo</Link></li>
          <li><Link href="/privacy">Privacy</Link></li>
        </ul>
        {sibs.length ? (
          <ul aria-label="Yugty portals">
            {sibs.map((s) => (
              <li key={s.label}><a href={s.url} rel="noopener">{s.label}</a></li>
            ))}
          </ul>
        ) : null}
      </div>
      <p className="foot-legal">© {new Date().getFullYear()} Yugty.AI. All rights reserved.</p>
    </footer>
  );
}

export function Head({ kicker, title, text }: { kicker: string; title: React.ReactNode; text?: string }) {
  return (
    <div className="head">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {text ? <p className="sub">{text}</p> : null}
    </div>
  );
}
