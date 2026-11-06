import Link from "next/link";
import { BUSINESS_AGENTS, FAQS, PEOPLE_AGENTS, PRINCIPLES, STEPS, peopleUrl } from "@/lib/ai/content";
import { Footer, Head, Nav } from "./Chrome";
import Icon from "./Icon";
import VoiceDemo from "./VoiceDemo";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="hero">
          <p className="pill"><i aria-hidden="true" /> Specialised AI agents · people stay in the loop</p>
          <h1>
            AI agents that <span className="grad">answer, follow up</span> and get the next step booked.
          </h1>
          <p className="lead">
            Voice, WhatsApp, outbound calls, CRM updates and payment reminders for your business, plus career agents for individuals. Start with one agent and add more as it earns its place.
          </p>
          <div className="cta">
            <Link className="btn btn-solid" href="/#business">Explore the agents <span aria-hidden="true">→</span></Link>
            <Link className="btn btn-ghost" href="/book">Book a live demo</Link>
          </div>
          <ul className="chips" aria-label="Highlights">
            <li>Voice, WhatsApp and CRM</li>
            <li>Hands over to a person on request</li>
            <li>Start with one agent</li>
          </ul>
        </section>

        <section className="stage" aria-label="Agents at work">
          <div className="stage-bar">
            <span className="live"><i aria-hidden="true" /> Agents at work</span>
            <span className="stage-note">Sample screens. Illustrative.</span>
          </div>
          <div className="stage-grid">
            <div className="stage-main">
              <p className="kicker">VOICE AGENT</p>
              <h2>Hear a call as it happens</h2>
              <VoiceDemo />
            </div>
            <div className="stage-tiles">
              {BUSINESS_AGENTS.slice(1, 5).map((a) => (
                <a key={a.id} href={`#${a.id}`} className="tile">
                  <span className="ic"><Icon name={a.icon} /></span>
                  <b>{a.name}</b>
                  <small>{a.text}</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="business">
          <Head kicker="FOR BUSINESS" title={<>Your first response, <span className="grad">always on.</span></>} text="Five agents that take the repetitive first contact and the follow-up, and pass the conversation to a person when it matters." />
          <div className="cards">
            {BUSINESS_AGENTS.map((a, i) => (
              <article key={a.id} id={a.id} className="card">
                <span className="ic"><Icon name={a.icon} /></span>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{a.name}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
          <div className="cta cta-left">
            <Link className="btn btn-solid" href="/book">Book a demo</Link>
          </div>
        </section>

        <section className="sec" id="how">
          <Head kicker="HOW IT WORKS" title={<>From first call to <span className="grad">live agent.</span></>} text="Five steps, and you approve the wording before a customer hears it." />
          <ol className="steps">
            {STEPS.map(([t, d], i) => (
              <li key={t}>
                <span className="n">{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="sec" id="people">
          <Head kicker="FOR PEOPLE" title={<>Seven agents for <span className="grad">your career.</span></>} text="Resume feedback, mock interviews, practice and a learning path, from the same engineering." />
          <div className="mini">
            {PEOPLE_AGENTS.map((a) => {
              const href = peopleUrl(a.route);
              const body = (
                <>
                  <span className="ic"><Icon name={a.icon} /></span>
                  <b>{a.name}</b>
                  <small>{a.text}</small>
                </>
              );
              return href ? (
                <a key={a.id} href={href} target="_blank" rel="noopener" className="mini-card">{body}</a>
              ) : (
                <div key={a.id} className="mini-card">{body}</div>
              );
            })}
          </div>
        </section>

        <section className="sec" id="trust">
          <Head kicker="HOW WE BUILD" title={<>Useful, and <span className="grad">accountable.</span></>} />
          <div className="princ">
            {PRINCIPLES.map(([t, d]) => (
              <div key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec" id="faq">
          <Head kicker="QUESTIONS" title="Good questions." />
          <div className="faq">
            {FAQS.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final" aria-label="Get started">
          <h2>Put an agent on your first conversation.</h2>
          <p>Tell us the job. We will show you a working sample in a short call.</p>
          <div className="cta">
            <Link className="btn btn-solid" href="/book">Book a live demo</Link>
            <Link className="btn btn-ghost" href="/#people">Try the career agents</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
