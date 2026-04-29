import { SiteShell } from "../components/site-shell";

const feedingGoals = [
  { value: "34", label: "Number of Beneficiaries" },
  { value: "18", label: "Female Beneficiaries" },
  { value: "16", label: "Male Beneficiaries" },
];

const supportAreas = [
  {
    title: "Nutrition Support",
    description:
      "Balanced meals and snacks are prepared to support learner wellness, energy, and classroom readiness.",
  },
  {
    title: "Health Tracking",
    description:
      "Height, weight, and attendance trends are monitored with the school clinic and advisers for better intervention planning.",
  },
  {
    title: "Family Engagement",
    description:
      "Parents receive simple nutrition guidance and progress updates to sustain healthy routines at home.",
  },
];

export default function FeedingPage() {
  return (
    <SiteShell
      eyebrow="Student Welfare"
      title="School Feeding Program"
      description=""
    >
      <section className="stats stats-three">
        {feedingGoals.map((item) => (
          <article key={item.label} className="stat-card">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="programs">
        <div className="section-heading">
          <p className="eyebrow">How It Works</p>
          <h2>Nutrition support that helps students stay ready to learn.</h2>
        </div>

        <div className="program-grid">
          {supportAreas.map((area) => (
            <article key={area.title} className="program-card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
