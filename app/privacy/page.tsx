import type { Metadata } from "next";
import { Footer, Nav } from "@/components/ai/Chrome";

export const metadata: Metadata = { title: "Privacy", description: "How Yugty.AI handles the details you send us." };

export default function Privacy() {
  return (
    <>
      <Nav />
      <main id="main-content" className="page narrow prose">
        <p className="kicker">PRIVACY</p>
        <h1>What we do with your details</h1>
        <p>This site has one form: the demo request on the Book a demo page. This note says what happens to what you send.</p>
        <h2>What we collect</h2>
        <p>The name, work email, optional phone number and company, the agent you are interested in, and the message you type. We do not use advertising trackers on this site.</p>
        <h2>How we use it</h2>
        <p>Only to reply to your request. We do not sell your details, and personal data is never used to train AI models.</p>
        <h2>Who sees it</h2>
        <p>Your request is emailed to our team through an email delivery service. People outside the team do not receive it unless you ask us to share it.</p>
        <h2>Your choices</h2>
        <p>Ask us to correct or delete your request at any time by replying to our email.</p>
      </main>
      <Footer />
    </>
  );
}
