const BUILDING = [
  {
    name: "Last-Mile Routing Thesis",
    desc: "Enhancing a genetic algorithm with explainable AI for last-mile delivery routing — bridging evolutionary optimisation with XAI for better convergence and transparency.",
  },
  {
    name: "ChurnLens",
    desc: "Explainable churn prediction pipeline with SHAP attribution and a GenAI layer that turns model output into plain-English retention recommendations.",
  },
  {
    name: "This Portfolio",
    desc: "Horizontal column viewer built with Next.js 16 and pure CSS — no UI library. Designed to feel like a document, not a landing page.",
  },
];

const LEARNING = [
  {
    topic: "System Design",
    note: "LLD and HLD — class diagrams, design patterns, scalability trade-offs, and end-to-end system walkthroughs.",
  },
  {
    topic: "Data Science",
    note: "ML and DL fundamentals, then up the stack — Generative AI, LLMs, and Agentic AI workflows.",
  },
  {
    topic: "Big Data Engineering",
    note: "Spark, Kafka, distributed storage, and pipeline orchestration. Core focus of my M.Tech curriculum.",
  },
  {
    topic: "Full-Stack Depth",
    note: "Going beyond the basics — backend architecture, DevOps practices, CI/CD pipelines, and cloud deployment.",
  },
];

export default function LearningColumn() {
  return (
    <>
      <section className="now-block">
        <div className="now-h">
          <h3>What I&apos;m up <em>to</em></h3>
        </div>
        <p className="now-text">
          Working on my second M.Tech thesis — XAI-enhanced genetic algorithms
          for last-mile routing — while shipping small AI-assisted product
          builds (ChurnLens, ClaimSense) and grinding DSA every morning.
        </p>
        <p className="now-text muted">Last updated · Sep 2026</p>
      </section>

      <div className="divider" />

      <section className="now-block">
        <div className="now-h">
          <h3>Currently <em>building</em></h3>
        </div>
        <ul className="building-list">
          {BUILDING.map((b) => (
            <li key={b.name} className="building-item">
              <span className="building-name">{b.name}</span>
              <p className="building-desc">{b.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="divider" />

      <section className="now-block">
        <div className="now-h">
          <h3>What I&apos;m <em>learning</em></h3>
        </div>
        <ul className="learning-list">
          {LEARNING.map((l) => (
            <li key={l.topic} className="learning-item">
              <span className="learning-topic">{l.topic}</span>
              <p className="learning-note">{l.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
