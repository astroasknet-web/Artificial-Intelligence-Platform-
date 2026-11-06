import type { FooterConfig } from "@/components/standard-footer/types";

/**
 * Footer settings for Yugty.AI. The layout is the standard footer used by every Yugty web application
 * (components/standard-footer); only the values below are specific to this app.
 * Override a family URL with NEXT_PUBLIC_APP_URL_HOME, _AI, _OVERSEAS, _LEARNING, _JOBS or _TECHNOLOGY.
 */
const env = (k: string) => (process.env[k] ?? "").trim();
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const FOOTER: FooterConfig = {
  brand: { name: "Yugty.AI", logoSrc: "/yugty-logo.svg", logoAlt: "Yugty.AI", tagline: "Specialised AI agents, with people in the loop." },
  siteUrl: SITE_URL,
  cta: { eyebrow: "AI agents. People in the loop.", title: "See an agent on your conversation.", text: "Voice, WhatsApp, outbound calling, CRM and payment-reminder agents for businesses, and career agents for individuals.", primary: {"label":"Book a demo","href":"/book"}, secondary: {"label":"For business","href":"/#business"}, tertiary: {"label":"For people","href":"/#people"} },
  appsTitle: "One family. One account.",
  apps: [
    { key: "home", name: "Yugti", href: env("NEXT_PUBLIC_APP_URL_HOME") || "https://yugti.com", icon: "Home", external: true },
    { key: "ai", name: "Yugti AI", href: "/", icon: "Sparkles" },
    { key: "overseas", name: "Overseas Education", href: env("NEXT_PUBLIC_APP_URL_OVERSEAS") || "https://yugtioverseaseducation.com", icon: "Globe", external: true },
    { key: "learning", name: "Learning", href: env("NEXT_PUBLIC_APP_URL_LEARNING") || "https://yugtilearning.com", icon: "GraduationCap", external: true },
    { key: "jobs", name: "Jobs", href: env("NEXT_PUBLIC_APP_URL_JOBS") || "https://yugtijobs.com", icon: "Briefcase", external: true },
    { key: "technology", name: "Technology", href: env("NEXT_PUBLIC_APP_URL_TECHNOLOGY") || "https://yugtitechnology.com", icon: "Code2", external: true },
  ],
  newsletter: { label: "Get news and updates", button: "Join", endpoint: "/api/newsletter", source: "footer" },
  columns: [
    {
      "title": "Agents",
      "links": [
        {
          "href": "/#business",
          "label": "For business"
        },
        {
          "href": "/#people",
          "label": "For people"
        }
      ]
    },
    {
      "title": "Learn more",
      "links": [
        {
          "href": "/#how",
          "label": "How it works"
        },
        {
          "href": "/#faq",
          "label": "FAQ"
        }
      ]
    },
    {
      "title": "Get started",
      "links": [
        {
          "href": "/book",
          "label": "Book a demo"
        }
      ]
    },
    {
      "title": "Company",
      "links": [
        {
          "href": "/privacy",
          "label": "Privacy"
        }
      ]
    }
  ],
  social: [
    { label: "LinkedIn", href: "", icon: "linkedin" },
    { label: "X", href: "", icon: "x" },
    { label: "Instagram", href: "", icon: "instagram" },
    { label: "YouTube", href: "", icon: "youtube" },
    { label: "Facebook", href: "", icon: "facebook" },
  ],
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "hello@yourdomain.com",
  share: { title: "Know someone who should see Yugty.AI?", text: "Yugty.AI: specialised AI agents for business and careers", subject: "Have a look at Yugty.AI" },
  legal: [{ href: "/privacy", label: "Privacy Policy" }],
};
