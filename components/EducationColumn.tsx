const EDUCATION = [
  {
    degree: "M.Tech — IT (Data Engineering)",
    school: "IIIT Allahabad",
    dates: "Aug 2025 — Jul 2027",
    grade: 7.89,
    current: true,
    detail: "Specialisation in Data Engineering. Relevant areas: distributed systems, data pipelines, machine learning, backend systems.",
  },
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "SKNSCOE Pandharpur",
    dates: "Aug 2021 — May 2025",
    grade: 9.31,
    current: false,
    detail: "Relevant coursework: Data Structures, DBMS, Operating Systems, Computer Networks, Software Engineering.",
  },
  {
    degree: "Higher Secondary (XII)",
    school: "KBP Mahavidyalaya",
    dates: "2019 — 2021",
    grade: 93.83,
    current: false,
    detail: null,
  },
  {
    degree: "Secondary (X)",
    school: "Sinhgad Public School",
    dates: "2019",
    grade: 88.83,
    current: false,
    detail: null,
  },
];

const RESEARCH = [
  {
    title: "Missing Data Imputation via Genetic Algorithms",
    subtitle: "Reimplementation, Extension, and Distributional Analysis of MIGA",
    institution: "IIIT Allahabad · Dept. of Information Technology",
    status: "Ongoing",
    year: "2025 — 2026",
    summary: "Closes three open gaps in Figueroa-García et al. (2023): first open-source MIGA implementation, head-to-head MICE comparison, and the first MNAR evaluation. Includes a formal Fr–RMSE orthogonality theorem and an IPW correction that reduces distributional error by 18–38% under MNAR.",
    tags: ["Genetic Algorithms", "Missing Data", "MNAR", "MICE", "Python"],
  },
  {
    title: "Enhancing Genetic Algorithm with Explainable AI for Last-Mile Routing",
    subtitle: "XAI-guided GA optimisation for routing problems",
    institution: "IIIT Allahabad · Dept. of Information Technology",
    status: "Ongoing",
    year: "2025 — 2027",
    summary: "Applying explainability techniques to interpret and guide genetic algorithm decisions in last-mile delivery routing — bridging evolutionary optimisation with XAI to improve convergence and solution transparency.",
    tags: ["Genetic Algorithms", "XAI", "Last-Mile Routing", "Optimisation", "Python"],
  },
];

const CERTIFICATIONS = [
  {
    name: "0 to 100 Full-Stack Cohort",
    issuer: "100xDevs",
    year: "2024",
    url: "https://generateinvoice.teachx.in/generatecertificate/certificate/harkirat_db/3147/1755",
  },
  {
    name: "Cyber Threat Intelligence 101",
    issuer: "arcX",
    year: "2024",
    url: "https://arcx.io/verify-certificate?id=d325132cd40f0aae08abdbde833146b038d99fa8&k=f173f0b037ce40f399d4b276e9024316",
  },
  {
    name: "Getting Started with Enterprise Data Science",
    issuer: "IBM",
    year: "2024",
    url: "https://www.credly.com/badges/bc9c1318-b2fb-46e8-ba7b-ec6b5b85d7e9/public_url",
  },
];

const ACHIEVEMENTS = [
  {
    name: "LeetCode Rating 1669",
    issuer: "Data Structures & Algorithms",
    year: "Ongoing",
    url: "https://leetcode.com/u/Madhav_Kamble/",
  },
  {
    name: "CodeChef Rating 1441",
    issuer: "Competitive Programming",
    year: "Ongoing",
    url: "https://www.codechef.com/users/madhav_kamble",
  },
  {
    name: "GATE 2025 Qualified",
    issuer: "Computer Science & Information Technology",
    year: "2025",
    url: null,
  },
  {
    name: "Runner-up — Sinhgad Hackathon",
    issuer: "Sinhgad Institutes",
    year: "2023",
    url: null,
  },
  {
    name: "Runner-up — Sinhgad Hackathon",
    issuer: "Sinhgad Institutes",
    year: "2022",
    url: null,
  },
  {
    name: "Runner-up — Front-End Dev Competition",
    issuer: "Sinhgad Institutes",
    year: "2023",
    url: null,
  },
];

function CertItem({ name, issuer, year, url }: { name: string; issuer: string; year: string; url: string | null }) {
  const inner = (
    <>
      <div>
        <div className="cert-name">{name}</div>
        <div className="cert-issuer">{issuer}</div>
      </div>
      <span className="cert-year">{year}</span>
    </>
  );
  return (
    <li className={`cert-item${url ? " cert-item-link" : ""}`}>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="cert-item-anchor">
          {inner}
        </a>
      ) : inner}
    </li>
  );
}

export default function EducationColumn() {
  return (
    <>
      {/* Education */}
      <div className="edu-section">
        <p className="edu-section-label">Education</p>
        {EDUCATION.map((e) => (
          <div key={e.degree} className={`edu-card ${e.current ? "current" : ""}`}>
            <div className="edu-card-title">{e.degree}</div>
            <div className="edu-card-sub">{e.school}</div>
            <div className="edu-card-dates">{e.dates}</div>
            {e.grade && (
              <div className="edu-card-grade">
                <span>◆</span>
                <span>{e.grade}</span>
              </div>
            )}
            {e.detail && (
              <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 10, marginBottom: 0, lineHeight: 1.55 }}>
                {e.detail}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* Research */}
      <div className="edu-section">
        <p className="edu-section-label">Research</p>
        {RESEARCH.map((r) => (
          <div key={r.title} className="research-card">
            <div className="research-status">{r.status}</div>
            <div className="research-title">{r.title}</div>
            <div className="research-subtitle">{r.subtitle}</div>
            <div className="research-meta">{r.institution} · {r.year}</div>
            <p className="research-summary">{r.summary}</p>
            <div className="research-tags">
              {r.tags.map((t) => <span key={t} className="research-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* Certifications */}
      <div className="edu-section">
        <p className="edu-section-label">Certifications</p>
        <ul className="cert-list">
          {CERTIFICATIONS.map((c) => (
            <CertItem key={c.name} {...c} />
          ))}
        </ul>
      </div>

      <div className="divider" />

      {/* Achievements */}
      <div className="edu-section">
        <p className="edu-section-label">Achievements</p>
        <ul className="cert-list">
          {ACHIEVEMENTS.map((a) => (
            <CertItem key={a.name + a.year} {...a} />
          ))}
        </ul>
      </div>
    </>
  );
}
