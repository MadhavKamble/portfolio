"use client";

import { useState } from "react";

const PURPOSES = ["Job opportunity", "Freelance project", "Collaboration", "Just saying hi"];

interface FormState {
  name: string;
  email: string;
  purpose: string;
  message: string;
}

interface ErrState {
  name?: string;
  email?: string;
  purpose?: string;
  message?: string;
}

export default function ContactColumn() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });
  const [err, setErr] = useState<ErrState>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof FormState) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErr((e) => ({ ...e, [k]: undefined }));
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const ne: ErrState = {};
    if (!form.name.trim()) ne.name = "Required";
    if (!form.email.trim()) ne.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) ne.email = "Doesn't look right";
    if (!form.purpose) ne.purpose = "Pick one";
    if (!form.message.trim() || form.message.trim().length < 12) ne.message = "A little more, please";
    setErr(ne);
    if (Object.keys(ne).length) return;
    setState("sending");
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => (res.ok ? setState("sent") : setState("error")))
      .catch(() => setState("error"));
  }

  if (state === "error") {
    return (
      <div className="success">
        <div className="ring" style={{ borderColor: "var(--muted-2)", color: "var(--muted)" }}>
          <svg width="28" height="28" viewBox="0 0 28 28">
            <path d="M9 9 L19 19 M19 9 L9 19" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <h3>Something went wrong.</h3>
        <p>The message didn&apos;t go through. Try again or email me directly.</p>
        <button className="pill" onClick={() => setState("idle")}>Try again</button>
        <div className="contact-foot" style={{ width: "100%", marginTop: 32 }}>
          <a href="mailto:madhavukamble@gmail.com">madhavukamble@gmail.com</a>
        </div>
      </div>
    );
  }

  if (state === "sent") {
    return (
      <div className="success">
        <div className="ring">
          <svg width="28" height="28" viewBox="0 0 28 28">
            <path
              d="M7 15 L12 20 L21 9"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3>Message sent.</h3>
        <p>
          Thanks {form.name.split(" ")[0]} — I&apos;ll get back to you as soon as
          I can.
        </p>
        <button
          className="pill"
          onClick={() => {
            setForm({ name: "", email: "", purpose: "", message: "" });
            setState("idle");
          }}
        >
          Send another
        </button>
        <div className="contact-foot" style={{ width: "100%", marginTop: 32 }}>
          <a href="mailto:madhavukamble@gmail.com">madhavukamble@gmail.com</a>
          <a href="https://github.com/MadhavKamble" target="_blank" rel="noopener noreferrer">github.com/MadhavKamble</a>
          <a href="https://www.linkedin.com/in/madhav-kamble-64710a221/" target="_blank" rel="noopener noreferrer">linkedin.com/in/madhav-kamble</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <p className="contact-lede">
        Looking for a developer who can hit the ground <em>running</em>? Let&apos;s
        talk.
      </p>

      <ul className="contact-bullets">
        <li>I&apos;m open to full-time roles, internships, and contract projects.</li>
        <li>Happy to do a quick call first — no pressure, no sales pitch.</li>
        <li>I reply to every message, usually within a day.</li>
      </ul>

      <form className="cform" onSubmit={submit} noValidate>
        <div className={`field ${err.name ? "err" : ""}`}>
          <span className="mono">Your name *</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Jane Doe"
            autoComplete="name"
          />
          {err.name && <span className="mono field-msg">{err.name}</span>}
        </div>

        <div className={`field ${err.email ? "err" : ""}`}>
          <span className="mono">Email *</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="jane@company.com"
            autoComplete="email"
          />
          {err.email && <span className="mono field-msg">{err.email}</span>}
        </div>

        <div className="field">
          <span className="mono">Purpose *</span>
          <div className="chip-row">
            {PURPOSES.map((p) => (
              <button
                key={p}
                type="button"
                className={`chip ${form.purpose === p ? "active" : ""}`}
                onClick={() => set("purpose")(p)}
              >
                {p}
              </button>
            ))}
          </div>
          {err.purpose && (
            <span className="mono field-msg" style={{ marginTop: 6 }}>
              {err.purpose}
            </span>
          )}
        </div>

        <div className={`field ${err.message ? "err" : ""}`}>
          <span className="mono">Message *</span>
          <textarea
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Tell me a bit about what you're working on or what you're looking for."
          />
          {err.message && <span className="mono field-msg">{err.message}</span>}
        </div>

        <button type="submit" className="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send message"}
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M3 11 L11 3 M5 3 H11 V9" stroke="currentColor" strokeWidth="1.6" fill="none" />
          </svg>
        </button>
      </form>

      <div className="contact-foot">
        <span className="mono muted">Or reach me directly</span>
        <a href="mailto:madhavukamble@gmail.com">madhavukamble@gmail.com</a>
        <a href="https://github.com/MadhavKamble" target="_blank" rel="noopener noreferrer">github.com/MadhavKamble</a>
        <a href="https://www.linkedin.com/in/madhav-kamble-64710a221/" target="_blank" rel="noopener noreferrer">linkedin.com/in/madhav-kamble</a>
      </div>
    </>
  );
}
