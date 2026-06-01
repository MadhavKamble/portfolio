"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import AboutColumn from "./AboutColumn";
import SkillsColumn from "./SkillsColumn";
import ProjectsColumn from "./ProjectsColumn";
import EducationColumn from "./EducationColumn";
import LearningColumn from "./LearningColumn";
import ContactColumn from "./ContactColumn";

const COLUMNS = [
  { id: "about",     label: "About",                  Comp: AboutColumn },
  { id: "skills",    label: "Skills & Stack",          Comp: SkillsColumn },
  { id: "projects",  label: "Projects",               Comp: ProjectsColumn, wide: true },
  { id: "education", label: "Education & Achievements", Comp: EducationColumn },
  { id: "learning",  label: "Now & Learning",          Comp: LearningColumn },
  { id: "contact",   label: "Contact",                Comp: ContactColumn,  wide: true },
];

function useColumnNav(count: number) {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const railRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLElement>(null);
  const lastNavTime = useRef(0);
  const touchStartX = useRef(0);

  const scrollTo = useCallback(
    (idx: number) => {
      const rail = railRef.current;
      if (!rail) return;
      const clamped = Math.max(0, Math.min(count - 1, idx));
      const col = rail.children[clamped] as HTMLElement | undefined;
      if (!col) return;
      rail.style.transform = `translateX(${-col.offsetLeft}px)`;
      setActive(clamped);
      activeRef.current = clamped;
    },
    [count]
  );

  const next = useCallback(() => scrollTo(activeRef.current + 1), [scrollTo]);
  const prev = useCallback(() => scrollTo(activeRef.current - 1), [scrollTo]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Wheel / trackpad horizontal scroll
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      if (absX < 5 && absY < 5) return;
      if (absX <= absY) return; // vertical — let col scroll

      // Always consume horizontal scroll so nothing slips past
      e.preventDefault();

      const goingRight = e.deltaX > 0;
      const atEnd   = activeRef.current >= count - 1 && goingRight;
      const atStart = activeRef.current <= 0 && !goingRight;
      if (atEnd || atStart) return;

      const now = Date.now();
      if (now - lastNavTime.current < 500) return;
      lastNavTime.current = now;
      if (goingRight) next(); else prev();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [count, next, prev]);

  // Touch swipe
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(dx) < 50) return;
      const now = Date.now();
      if (now - lastNavTime.current < 400) return;
      lastNavTime.current = now;
      if (dx > 0) next(); else prev();
    };

    viewport.addEventListener("touchstart", onTouchStart, { passive: true });
    viewport.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      viewport.removeEventListener("touchstart", onTouchStart);
      viewport.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  return { active, railRef, viewportRef, next, prev, scrollTo };
}

export default function Shell() {
  const { active, railRef, viewportRef, next, prev, scrollTo } = useColumnNav(COLUMNS.length);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatTime = (d: Date) => {
    const h = d.getHours().toString().padStart(2, "0");
    const m = d.getMinutes().toString().padStart(2, "0");
    return `${h}:${m} IST`;
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-name">
            Madhav <em>Kamble</em>
          </span>
          <span className="brand-status mono muted">
            <span
              className="live-dot"
              style={{ display: "inline-block", marginRight: 8, verticalAlign: "middle" }}
            />
            Open to work
          </span>
        </div>

        <div className="topbar-meta">
          <span className="mono">{formatTime(time)}</span>
        </div>

        <div className="topbar-nav">
          <a href="/resume.pdf" download="Madhav_Kamble_Resume.pdf" className="resume-btn">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <path d="M6 1v7M3.5 5.5 6 8l2.5-2.5" />
              <path d="M2 10h8" />
            </svg>
            Resume
          </a>
          <button
            className="arrow-btn"
            onClick={prev}
            disabled={active === 0}
            aria-label="Previous column"
          >
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path d="M9 2 L4 7 L9 12" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </button>
          <button
            className="arrow-btn"
            onClick={next}
            disabled={active === COLUMNS.length - 1}
            aria-label="Next column"
          >
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path d="M5 2 L10 7 L5 12" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </button>
        </div>
      </header>

      <main className="viewport" ref={viewportRef}>
        <div className="rail" ref={railRef}>
          {COLUMNS.map((c, i) => {
            const Comp = c.Comp;
            return (
              <section
                key={c.id}
                className={`col ${c.wide ? "col-wide" : ""}`}
                data-screen-label={`${(i + 1).toString().padStart(2, "0")} ${c.label}`}
              >
                <div className="col-head">
                  <span className="mono">{c.label}</span>
                </div>
<div className="col-body">
                  <Comp />
                </div>
              </section>
            );
          })}
        </div>

        <nav className="dots" aria-label="Column navigation">
          {COLUMNS.map((c, i) => (
            <button
              key={c.id}
              className={i === active ? "active" : ""}
              onClick={() => scrollTo(i)}
              aria-label={c.label}
              title={c.label}
            />
          ))}
        </nav>
      </main>
    </div>
  );
}
