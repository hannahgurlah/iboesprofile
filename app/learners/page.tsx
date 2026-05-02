import { SiteShell } from "../components/site-shell";

const learnerData = [
  { value: "564", label: "Total Learners" },
  { value: "257", label: "Female Learners" },
  { value: "307", label: "Male Learners" },
  { value: "86", label: "Grade 1 Learners" },
  { value: "81", label: "Grade 2 Learners" },
  { value: "91", label: "Grade 3 Learners" },
  { value: "90", label: "Grade 4 Learners" },
  { value: "86", label: "Grade 5 Learners" },
  { value: "72", label: "Grade 6 Learners" },
  { value: "74", label: "Kindergarten Learners" },
  { value: "145", label: "ARAL Learners" },
  { value: "163", label: "SBFP Learners" },
];

const learnerSupport = [
  {
    title: "Academic Growth",
    description:
      "Learners are supported through strong instruction, remediation pathways, and enrichment opportunities across grade levels.",
  },
  {
    title: "Wellbeing Services",
    description:
      "Guidance, health, nutrition, and safe learning practices help students thrive both inside and outside the classroom.",
  },
  {
    title: "Student Voice",
    description:
      "Clubs, leadership bodies, and project-based learning give students meaningful ways to contribute and lead.",
  },
];

export default function LearnersPage() {
  return (
    <SiteShell
      eyebrow="Student Community"
      title="Learners"
      description="Learners are at the center of school life, with support systems and opportunities designed to help each student grow with confidence."
    >
      <section>
        <h3 style={{ textAlign: "center" }}>Learner Statistics <br /><small style={{ fontSize: "1rem" }}>As of SY 2025-2026</small></h3>
      </section>

      <section className="stats stats-three">

        {learnerData.map((item) => (
          <article key={item.label} className="stat-card">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="programs section-space">
        <div className="section-heading">
          <p className="eyebrow">Learner Experience</p>
          <h2>A profile of support, participation, and student growth.</h2>
        </div>

        <div className="program-grid">
          {learnerSupport.map((item) => (
            <article key={item.title} className="program-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
