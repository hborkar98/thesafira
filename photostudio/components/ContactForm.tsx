"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

const inputClass =
  "w-full border-b border-ink/20 bg-transparent py-3 text-[15px] text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [whatsAppMessage, setWhatsAppMessage] = useState(
    "Hi! I'd love to talk about photographing our story."
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-paper px-6 py-28 md:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-4xl font-light leading-tight text-ink md:text-5xl">
            Have a story worth remembering?
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/65">
            Tell me a little about it. Let&rsquo;s create something
            you&rsquo;ll want to keep forever.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-14 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            <input name="name" required placeholder="Your name" className={inputClass} />
            <input name="email" type="email" required placeholder="Email" className={inputClass} />
            <input name="phone" placeholder="Phone" className={inputClass} />
            <select name="eventType" defaultValue="" className={inputClass}>
              <option value="" disabled>Event type</option>
              <option>Wedding</option>
              <option>Pre-wedding / Couple</option>
              <option>Portrait</option>
              <option>Travel</option>
              <option>Event</option>
              <option>Editorial</option>
              <option>Other</option>
            </select>
            <input name="eventDate" type="date" className={inputClass} />
            <input name="location" placeholder="Location" className={inputClass} />
            <input name="budget" placeholder="Estimated budget" className={inputClass} />
            <select name="foundVia" defaultValue="" className={inputClass}>
              <option value="" disabled>How did you find me?</option>
              <option>Instagram</option>
              <option>Google</option>
              <option>Referral</option>
              <option>Journal / Blog</option>
              <option>Other</option>
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your story"
              onChange={(e) =>
                setWhatsAppMessage(
                  e.target.value ? `Hi! ${e.target.value}` : "Hi! I'd love to talk about photographing our story."
                )
              }
              className={`${inputClass} sm:col-span-2 resize-none`}
            />

            <div className="mt-4 flex flex-wrap items-center gap-6 sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="border border-ink px-7 py-3 text-[13px] text-ink transition-colors hover:bg-ink hover:text-paper disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Start a Conversation"}
              </button>
              {status === "sent" && (
                <p className="text-[13px] text-ink/60">
                  Thank you — I&rsquo;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-[13px] text-ink/60">
                  Something went wrong. Please try WhatsApp or email instead.
                </p>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-8 text-[14px]">
            <a
              href={`https://wa.me/919999999999?text=${encodeURIComponent(whatsAppMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="text-ink/70 underline-offset-4 hover:text-ink hover:underline"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-ink/70 underline-offset-4 hover:text-ink hover:underline"
            >
              Instagram
            </a>
            <a
              href="mailto:hello@amberandash.studio"
              className="text-ink/70 underline-offset-4 hover:text-ink hover:underline"
            >
              hello@amberandash.studio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
