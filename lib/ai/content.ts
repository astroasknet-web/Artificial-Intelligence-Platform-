/** Content for the Yugty.AI portal. No customer counts, uptime, latency or certification claims are published: none have been supplied. */

export const BRAND = { name: "Yugty.AI", tagline: "Specialised AI agents, with people in the loop." };

/** Other Yugty portals. A link shows only when its URL is configured. */
export const SIBLINGS: { label: string; url: string | undefined; nav?: boolean }[] = [
  { label: "Yugti", url: process.env.NEXT_PUBLIC_YUGTI_URL || "https://yugti.com" },
  { label: "Yugti Overseas Education", url: process.env.NEXT_PUBLIC_YUGTYOVERSEAS_URL || "https://yugtioverseaseducation.com" },
  { label: "Yugti Learning", url: process.env.NEXT_PUBLIC_YUGTYLEARNING_URL || "https://yugtilearning.com", nav: true },
  { label: "Yugti Jobs", url: process.env.NEXT_PUBLIC_YUGTYJOBS_URL || "https://yugtijobs.com", nav: true },
  { label: "Yugti Technology", url: process.env.NEXT_PUBLIC_YUGTYTECHNOLOGY_URL || "https://yugtitechnology.com", nav: true },
];

/** Where an individual's agent opens. Empty means the cards are not links yet. */
const PEOPLE_BASE = (process.env.NEXT_PUBLIC_AGENTS_URL ?? "").replace(/\/$/, "");
export const peopleUrl = (route: string) => (PEOPLE_BASE ? `${PEOPLE_BASE}${route}` : null);

export type Agent = { id: string; name: string; text: string; icon: string };

export const BUSINESS_AGENTS: Agent[] = [
  { id: "voice", name: "Voice Agent", text: "Answers inbound calls, qualifies the caller and books the next step, then hands over to a person when it should.", icon: "wave" },
  { id: "dialer", name: "Outbound Dialer", text: "Calls new leads soon after they fill in a form, while their interest is fresh.", icon: "phone" },
  { id: "whatsapp", name: "WhatsApp Agent", text: "Replies and follows up on WhatsApp with clear next steps, day and night.", icon: "chat" },
  { id: "crm", name: "CRM Sync", text: "Writes every call and conversation back to your CRM so nobody retypes notes.", icon: "sync" },
  { id: "pay", name: "Payment Collector", text: "Sends polite reminders and payment links, and flags accounts that need a person.", icon: "card" },
];

export const PEOPLE_AGENTS: (Agent & { route: string })[] = [
  { id: "resume", name: "AI Resume Expert", text: "Line-by-line feedback on your resume.", icon: "doc", route: "/ai-resume-expert" },
  { id: "interview", name: "AI Interviewer", text: "Mock interviews with instant feedback.", icon: "mic", route: "/ai-interviewer" },
  { id: "roleplay", name: "AI Roleplay Coach", text: "Rehearse hard conversations before they happen.", icon: "chat", route: "/ai-roleplay-coach" },
  { id: "skill", name: "AI Skill Trainer", text: "Targeted practice for the skills you are missing.", icon: "target", route: "/ai-skill-trainer" },
  { id: "opp", name: "AI Opportunity Finder", text: "Openings matched to your profile.", icon: "search", route: "/ai-opportunity-finder" },
  { id: "brand", name: "AI Brand Builder", text: "Shape a professional presence people notice.", icon: "spark", route: "/ai-brand-builder" },
  { id: "learn", name: "AI Learning Curator", text: "A learning path built around you.", icon: "path", route: "/ai-learning-curator" },
];

export const STEPS: [string, string][] = [
  ["Tell us the job", "Pick the conversation to automate: a first call, a follow-up, a reminder. We write down what a good outcome is."],
  ["Teach it your way", "Share your scripts, answers and rules. The agent speaks from them and says so when it does not know."],
  ["Test with your team", "Listen to sample calls and read sample chats. You approve the wording before a customer ever hears it."],
  ["Go live, one channel first", "Start with a single channel and a small share of conversations, then widen."],
  ["Review and improve", "Every conversation is logged. A person takes over when asked, and you tune the agent from real calls."],
];

export const PRINCIPLES: [string, string][] = [
  ["People stay in charge", "Agents hand over to a person on request and on anything they are unsure about."],
  ["You see everything", "Transcripts and outcomes are logged so you can check what was said and why."],
  ["Your data stays yours", "Personal data is never used to train AI models."],
  ["Honest by default", "Agents say they are AI when asked. We do not publish numbers we cannot show."],
];

export const FAQS: [string, string][] = [
  ["What is Yugty.AI?", "A set of specialised AI agents. Some work for businesses, such as voice, WhatsApp, outbound calling, CRM updates and payment reminders. Others help individuals with their careers, such as resume feedback and mock interviews."],
  ["Do the agents replace my team?", "No. They take the repetitive first contact and follow-up, and pass the conversation to a person when it matters."],
  ["Can I start with just one agent?", "Yes. Most teams start with one channel, check the results, and then add more."],
  ["Which systems can the agents connect to?", "Tell us what you use when you book a demo. We will say plainly what connects today and what does not."],
  ["How much does it cost?", "It depends on the agents and the volume, so no prices are published here. Book a demo and we will send a quote."],
  ["Is my data used to train AI models?", "No. Personal data is never used to train AI models."],
  ["Can I try the career agents myself?", "Yes. The individual agents are for anyone. They open from the agents section once the agent site is connected."],
];

export const INTERESTS = ["Voice Agent", "Outbound Dialer", "WhatsApp Agent", "CRM Sync", "Payment Collector", "Career agents for my team", "Not sure yet"];

/** A SAMPLE call, labelled as such on the page. */
export const SAMPLE_CALL: [("agent" | "caller"), string][] = [
  ["agent", "Hi Marcus, I saw you looked at our pricing page. Are you hoping to answer more of your calls, or follow up faster on WhatsApp?"],
  ["caller", "Both, actually. We miss a lot of calls after 6 PM."],
  ["agent", "Understood. I can book a short call with Sarah on our team tomorrow at 10 AM. Would that work?"],
  ["caller", "Yes, that works."],
  ["agent", "Booked. You will get a confirmation on WhatsApp now, and a reminder an hour before."],
];
