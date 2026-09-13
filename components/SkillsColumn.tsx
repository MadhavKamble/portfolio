const SKILL_GROUPS = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    skills: ["React.js (React 19)", "Next.js", "Node.js", "Express", "FastAPI", "Streamlit", "Tailwind CSS", "Vite"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "pgvector", "SQLite", "ChromaDB", "SQL"],
  },
  {
    label: "Data & ML",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "SHAP", "SciPy", "Pydantic", "Faker", "Hadoop"],
  },
  {
    label: "LLM & GenAI",
    skills: ["OpenAI API", "Groq API (Llama 3.3 70B)", "Ollama", "RAG", "Multi-Agent Orchestration", "Vector Embeddings", "Structured Outputs"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Claude Code", "Databricks", "pytest", "PyYAML"],
  },
  {
    label: "CS Fundamentals",
    skills: ["DSA", "OS", "CN", "DBMS", "Machine Learning", "Big Data Analytics", "Data Visualisation"],
  },
  {
    label: "Currently Learning",
    skills: ["System Design (LLD & HLD)", "Agentic AI & GenAI", "Big Data Engineering", "Full-Stack Depth"],
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
