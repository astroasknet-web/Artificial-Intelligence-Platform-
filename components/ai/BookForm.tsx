"use client";

import { useState } from "react";
import { INTERESTS } from "@/lib/ai/content";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done" } | { kind: "error"; message: string };

export default function BookForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setState({ kind: "done" });
    } catch (err) {
      setState({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong. Please try again." });
    }
  }

  if (state.kind === "done") {
    return (
      <div className="done" role="status">
        <h2>Thank you. We have your request.</h2>
        <p>We will reply to set up a short demo.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="row">
        <label>Your name<input name="name" required minLength={2} maxLength={80} autoComplete="name" /></label>
        <label>Work email<input name="email" type="email" required maxLength={120} autoComplete="email" /></label>
      </div>
      <div className="row">
        <label>Phone (optional)<input name="phone" type="tel" maxLength={30} autoComplete="tel" /></label>
        <label>Company (optional)<input name="company" maxLength={100} autoComplete="organization" /></label>
      </div>
      <label>What would you like to see?
        <select name="interest" defaultValue="Not sure yet">
          {INTERESTS.map((k) => <option key={k}>{k}</option>)}
        </select>
      </label>
      <label>Tell us about your use case
        <textarea name="message" required minLength={20} maxLength={4000} rows={5} placeholder="Which conversations take up your team's time, and which tools do you use today?" />
      </label>
      <label className="hp" aria-hidden="true">Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <p className="note">We use your details only to reply to this request. See our <a href="/privacy">privacy note</a>.</p>
      {state.kind === "error" ? <p className="err" role="alert">{state.message}</p> : null}
      <button className="btn btn-solid" type="submit" disabled={state.kind === "sending"}>
        {state.kind === "sending" ? "Sending…" : "Request my demo"}
      </button>
    </form>
  );
}
