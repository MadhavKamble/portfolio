"use client";

import { useState, useEffect } from "react";

function LiveAge() {
  const [age, setAge] = useState(0);
  useEffect(() => {
    const birth = new Date("2003-08-14T00:00:00Z").getTime();
    const update = () => {
      const ms = Date.now() - birth;
      setAge(ms / (365.25 * 24 * 60 * 60 * 1000));
    };
    update();
    const id = setInterval(update, 60);
    return () => clearInterval(id);
  }, []);
  return <span>{age.toFixed(9)} years old</span>;
}

export default function AboutColumn() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard?.writeText("madhavukamble@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <>
      <div className="portrait">
        <img src="/portrait.jpg" alt="Madhav Kamble" className="portrait-img" />
      </div>

      <p className="intro">
        Hey, I&apos;m Madhav. I <em>build</em> full-stack apps and explore{" "}
        <em>data systems</em>.
      </p>

      <p className="sub">
        B.Tech CS grad from SKNSCOE Pandharpur, now pursuing M.Tech IT (Data
        Engineering) at IIIT Allahabad. GATE 2025 qualified, three-time
        hackathon runner-up, and full-stack developer who likes shipping things
        that actually work.
      </p>

      <div className="btn-row" style={{ flexWrap: "wrap" }}>
        <a
          href="https://github.com/MadhavKamble"
          className="pill"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/madhav-kamble-64710a221/"
          className="pill"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span>LinkedIn</span>
        </a>
        <button className="pill" onClick={copyEmail}>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" fill="none" strokeWidth="1" />
            <rect x="1.5" y="1.5" width="7" height="7" rx="1" stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
          <span>{copied ? "Copied!" : "Copy email"}</span>
        </button>
      </div>

      <div className="meta-block">
        <div className="meta-row">
          <span className="mono">Role</span>
          <span className="val">
            Full Stack Developer with a data engineering background. From
            ideation to deployment.
          </span>
        </div>
        <div className="meta-row">
          <span className="mono">Focus</span>
          <span className="val">
            Full-stack development with React &amp; Node.js, and applying my
            M.Tech data engineering foundation to build data-aware products.
          </span>
        </div>
        <div className="meta-row">
          <span className="mono">Stack</span>
          <span className="val">
            JavaScript, TypeScript, Python, React, Next.js, Node.js, Express,
            PostgreSQL, Tailwind, Docker.
          </span>
        </div>
        <div className="meta-row">
          <span className="mono">Status</span>
          <span className="val">
            Open to work — internships, full-time roles, and interesting side
            projects.
          </span>
        </div>
        <div className="meta-row">
          <span className="mono">Superpower</span>
          <span className="val">
            I stay calm under pressure. Three hackathon runner-up finishes and
            a GATE crack in the same year say so.
          </span>
        </div>
        <div className="meta-row">
          <span className="mono">Location</span>
          <span className="val">Prayagraj, India · IST (GMT+5:30)</span>
        </div>
        <div className="meta-row">
          <span className="mono">Age</span>
          <span className="val" style={{ fontFamily: "var(--mono)", fontSize: 13 }}>
            <LiveAge />
          </span>
        </div>
      </div>
    </>
  );
}
