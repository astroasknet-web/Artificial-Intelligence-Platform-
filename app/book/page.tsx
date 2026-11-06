import type { Metadata } from "next";
import BookForm from "@/components/ai/BookForm";
import { Footer, Nav } from "@/components/ai/Chrome";

export const metadata: Metadata = { title: "Book a demo", description: "See a Yugty.AI agent working on your kind of conversation." };

export default function Book() {
  return (
    <>
      <Nav />
      <main id="main-content" className="page narrow">
        <p className="kicker">BOOK A DEMO</p>
        <h1>See an agent on <span className="grad">your</span> conversation.</h1>
        <p className="sub">Tell us the job you want automated. We reply to set up a short demo. No prices are quoted until we understand the use case.</p>
        <BookForm />
      </main>
      <Footer />
    </>
  );
}
