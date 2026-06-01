const SKILL_GROUPS = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "SQL", "HTML", "CSS"],
  },
  {
    label: "Web Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    label: "Data & ML",
    skills: ["NumPy", "Pandas", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Matplotlib", "Seaborn", "Hadoop"],
  },
  {
    label: "Data Engineering",
    skills: ["Apache Kafka", "PySpark", "Delta Lake", "Apache Airflow", "MLflow", "Redis"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
  },
  {
    label: "CS Fundamentals",
    skills: ["DSA", "OS", "CN", "OOP", "DBMS", "ML", "Big Data", "Data Visualisation"],
  },
  {
    label: "Currently Learning",
    skills: ["System Design (LLD & HLD)", "Data Science (ML / DL / GenAI)", "Big Data Engineering", "Full-Stack Depth"],
  },
];

export default function SkillsColumn() {
  return (
    <div>
      {SKILL_GROUPS.map((group) => (
        <div key={group.label} className="skill-group">
          <p className="skill-group-label">{group.label}</p>
          <div className="skill-tags">
            {group.skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
