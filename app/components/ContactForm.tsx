"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

type Props = { tone?: "light" | "dark" };

export default function ContactForm({ tone = "light" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const dark = tone === "dark";
  const fieldBase =
    "w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-orange";
  const fieldClass = dark
    ? `${fieldBase} border-white/15 bg-white/5 text-white placeholder-white/40`
    : `${fieldBase} border-line bg-paper text-ink placeholder-muted`;
  const labelClass = `data-label ${dark ? "text-white/60" : "text-muted"}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={`rounded-2xl border p-8 text-center ${
          dark ? "border-white/15 bg-white/5 text-white" : "border-line bg-paper text-ink"
        }`}
      >
        <p className="font-display text-xl font-semibold text-orange">Message received.</p>
        <p className={`mt-2 text-sm ${dark ? "text-white/70" : "text-muted"}`}>
          Thank you for reaching out. A member of our team will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-navy underline underline-offset-4 hover:text-orange"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={`mt-2 ${fieldClass}`} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" required rows={5} placeholder="How can we help?" className={`mt-2 resize-y ${fieldClass}`} />
      </div>

      {status === "error" && (
        <p className="text-sm text-orange-600" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
