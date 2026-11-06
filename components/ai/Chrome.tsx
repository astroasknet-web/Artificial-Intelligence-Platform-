import Link from "next/link";
import StandardFooter from "@/components/standard-footer/StandardFooter";
import { FOOTER } from "@/lib/footer.config";
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

/** The standard Yugty footer. Edit lib/footer.config.ts to change its content for this app. */
export function Footer() {
  return (
    <div id="yugty-footer">
      <StandardFooter config={FOOTER} />
    </div>
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
