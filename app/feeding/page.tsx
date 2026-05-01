import { SiteShell } from "../components/site-shell";

const feedingGoals = [
  { value: "163", label: "Number of Beneficiaries" },
  { value: "76", label: "Female Beneficiaries" },
  { value: "87", label: "Male Beneficiaries" },
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

const feedingReports = [
  { title: "Baseline Report", href: "/assets/report/baseline.pdf" },
  { title: "Midline Report", href: "/assets/report/midline.pdf" },
  { title: "Endline Report", href: "/assets/report/endline.pdf" },
];

export default function FeedingPage() {
  return (
    <SiteShell
      eyebrow="Student Welfare"
      title="School Feeding Program"
      description=""
    >
      <h3>School Based Feeding Program SY 2025-2026</h3>
      <section className="stats stats-three">

        {feedingGoals.map((item) => (
          <article key={item.label} className="stat-card">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="section-wrap" style={{ padding: "60px 0", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gap: "24px", maxWidth: "960px", margin: "0 auto" }}>
          {feedingReports.map((report) => (
            <article
              key={report.href}
              style={{ border: "2px solid #CE6600", backgroundColor: "#FDF6E3", color: "#342C21", fontSize: "18px", lineHeight: "1.8rem", padding: "1rem", borderRadius: "10px" }}
            >
              <h4 style={{ marginTop: 0 }}>{report.title}</h4>
              <iframe
                src={report.href}
                title={report.title}
                style={{ width: "100%", minHeight: "620px", border: "1px solid #d8c7ac", borderRadius: "6px", backgroundColor: "#fff" }}
              />
              <p style={{ marginBottom: 0 }}>
                <a href={report.href} target="_blank" rel="noopener noreferrer">
                  Open {report.title}
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* <section className="programs">
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
      </section> */}
    </SiteShell>
  );
}
