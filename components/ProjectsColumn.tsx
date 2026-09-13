const EXPERIENCE = [
  {
    role: "Full Stack Web Development Intern",
    company: "Leadsoft IT Solutions",
    period: "Aug 2023 — Oct 2023",
    location: "Remote",
    bullets: [
      "Built a Gate Pass Management mobile app (React Native + MERN) with digital pass requests, multi-level approvals, and real-time tracking.",
      "Developed RESTful APIs in Node.js/Express with MongoDB for pass lifecycle management and real-time status updates.",
    ],
  },
];

const PROJECTS = [
  {
    title: "ChurnLens — Explainable Churn Prediction with GenAI Retention Reports",
    period: "Jun 2026 — Aug 2026",
    tag: "Python · scikit-learn · XGBoost · SHAP · OpenAI API · Pydantic · Streamlit · Docker",
    color: "#5b9bd5",
    letter: "L",
    desc: "End-to-end churn prediction pipeline on 5,630 real e-commerce customers comparing 3 models with SHAP explainability — tuned XGBoost to 0.997 AUC-ROC / 0.940 F1. A GPT-4o-mini layer translates SHAP feature attributions into plain-English retention recommendations for non-technical account managers. A deep adversarial code review post-build caught a data-leakage pattern, a dataset-overwrite bug, and a missing model-persistence layer.",
    github: "https://github.com/MadhavKamble/ChurnLens",
    live: "https://churnlens-project.streamlit.app/",
  },
  {
    title: "Autonomous Data-Analyst Agent",
    period: "Feb 2026 — Jul 2026",
    tag: "FastAPI · React · PostgreSQL · Groq (Llama 3.3 70B) · RAG · pgvector",
    color: "#6fb8a8",
    letter: "A",
    desc: "Multi-agent system (Planner → RAG retrieval → SQL Generator → Executor → Critic → Summarizer) that converts natural-language questions into verified SQL, with a bounded self-correction loop capping worst-case cost at 8 LLM calls per query. SQL safety is enforced via a database-level read-only role as the real security boundary, backed by a syntax pre-check and query timeout/row-cap guards. 67 passing pytest tests run in CI on every push; deployed end-to-end on a zero-cost stack (Render, Vercel, Neon Postgres).",
    github: "https://github.com/MadhavKamble/autonomous-data-analyst-agent",
    live: "https://autonomous-data-analyst-agent-adaa.vercel.app/",
  },
  {
    title: "ClaimSense — AI Claims Triage & Policy Q&A Assistant",
    period: "Apr 2026 — Jun 2026",
    tag: "Python · OpenAI API (GPT-4o-mini) · Pydantic · SQLite · ChromaDB · Streamlit · Docker",
    color: "#e0a458",
    letter: "S",
    desc: "AI-assisted insurance claims triage system combining LLM classification/summarization, a RAG pipeline (ChromaDB) grounding policy Q&A in real documents, and a deterministic rules-plus-AI-confidence routing engine for fully auditable decisioning. Includes a governed PII-redaction layer and a confidence-calibration module verifying LLM self-reported confidence scores are statistically trustworthy. An adversarial self-audit beyond the existing 21-test suite uncovered and fixed 6 real bugs, including a silent data-loss bug in the persistence layer.",
    github: "https://github.com/MadhavKamble/ClaimSense",
    live: "https://claim-sense.streamlit.app/",
  },
  {
    title: "Intelligent Candidate Discovery & Ranking System",
    period: "Jun 2026",
    tag: "Python · BM25 · NumPy · rank-bm25 · python-dateutil",
    color: "#e07a5f",
    letter: "C",
    desc: "Four-stage ML pipeline screening 100,000 candidates to a top-100 shortlist for an IR engineer role in ~16s on CPU — well under the 5-minute budget. BM25Okapi retrieval over concatenated career text with 30+ IR-domain keywords, 40-feature weighted scoring across 7 groups, and multiplicative behavioral penalties for recruiter response rate, notice period, and recency decay.",
    github: "https://github.com/MadhavKamble/redrob-hackathon",
    live: null,
  },
  {
    title: "Traffic Demand Prediction",
    period: "Apr 2026 — May 2026",
    tag: "Python · LightGBM · XGBoost · CatBoost · Pandas · NumPy",
    color: "#a78cd1",
    letter: "T",
    desc: "ML pipeline predicting normalised traffic demand across 1,200+ geographic zones — R² of 91.8%, Top 1.5% in a competitive hackathon. 3-model GBT ensemble with pseudo-labelling, residual modelling, and geohash spatial features.",
    github: "https://github.com/MadhavKamble/gridlock-hackathon",
    live: null,
  },
];

export default function ProjectsColumn() {
  return (
    <>
      {/* Experience */}
      <div style={{ marginBottom: 28 }}>
        <p className="edu-section-label">Experience</p>
        {EXPERIENCE.map((e) => (
          <div key={e.company} className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">{e.company}</div>
              </div>
              <div className="exp-right">
                <span className="mono exp-period">{e.period}</span>
                <span className="mono exp-location">{e.location}</span>
              </div>
            </div>
            <ul className="exp-bullets">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects */}
      <p className="edu-section-label">Projects</p>
      {PROJECTS.map((p) => (
        <article className="proj-card" key={p.title}>
          <div className="proj-card-head">
            <div className="proj-glyph" style={{ background: p.color + "22", color: p.color }}>
              {p.letter}
            </div>
            <div className="proj-title-block">
              <span className="proj-title">{p.title}</span>
              <span className="mono proj-period">{p.period}</span>
            </div>
            <div className="proj-link-row">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="mono tag proj-link">Live ↗</a>
              )}
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="mono tag proj-link">GH ↗</a>
            </div>
          </div>
          <p className="proj-desc">{p.desc}</p>
          <div className="proj-tag-row">
            {p.tag.split(" · ").map((t) => (
              <span key={t} className="proj-tech">{t}</span>
            ))}
          </div>
        </article>
      ))}
    </>
  );
}
