# Yugty.AI

Home page and demo-request flow for Yugty.AI: specialised AI agents for business (voice, outbound dialer, WhatsApp, CRM sync, payment collector) and for individuals (seven career agents). Own design, with the layout idea taken from the supplied reference.

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Pages

- `/` home: hero, sample call, business agents, how it works, career agents, principles, FAQ
- `/book` demo request form (`POST /api/demo`, emailed with Resend)
- `/privacy` short privacy note

## Notes

- All copy lives in `lib/ai/content.ts`.
- No customer counts, latency, uptime or certification claims are published, because none were supplied. The sample call on the home page is labelled illustrative.
- Without `RESEND_API_KEY` and `DEMO_TO`, a dev server logs the request; production returns 503.
