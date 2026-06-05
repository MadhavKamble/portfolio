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
    title: "Real-Time Ride-Sharing Analytics Platform",
    period: "Jan 2026 — May 2026",
    tag: "Kafka · PySpark · Delta Lake · Airflow · XGBoost · MLflow · Redis · Docker",
    color: "#8fb574",
    letter: "R",
    desc: "End-to-end streaming platform simulating Uber/Ola internals — Bronze-Silver-Gold medallion pipeline at 8 events/sec, ML-powered surge pricing served via MLflow, Redis cache cutting dashboard latency from 10s to under 1ms, orchestrated across 10 Docker services with 4 Airflow DAGs.",
    github: "https://github.com/MadhavKamble",
    live: null,
  },
  {
    title: "Traffic Demand Prediction",
    period: "Apr 2026 — May 2026",
    tag: "Python · LightGBM · XGBoost · CatBoost · Pandas · NumPy",
    color: "#a78cd1",
    letter: "T",
    desc: "ML pipeline predicting normalised traffic demand across 1,200+ geographic zones — R² of 91.8%, Top 1.5% in a competitive hackathon. 3-model GBT ensemble with pseudo-labelling, residual modelling, and geohash spatial features.",
    github: "https://github.com/MadhavKamble/gridlock-hackathon ",
    live: null,
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
    title: "MIGA — Missing Data Imputation via Genetic Algorithm",
    period: "Jan 2026 — Present",
    tag: "Python · NumPy · SciPy · Scikit-learn · Pandas · Matplotlib",
    color: "#d6c074",
    letter: "M",
    desc: "First open-source Python reimplementation of MIGA (Figueroa-García et al. 2023). Benchmarked against MICE, KNN, and mean imputation across 7 UCI datasets. Extended with Ledoit-Wolf shrinkage, adaptive mutation scheduling, MNAR evaluation, and a kurtosis-augmented fitness function (Fr+).",
    github: "https://github.com/MadhavKamble/MIGA",
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
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="mono tag proj-link">GH ↗</a>
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
