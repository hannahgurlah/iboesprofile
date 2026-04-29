import { SiteShell } from "../components/site-shell";

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
