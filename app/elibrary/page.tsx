import { SiteShell } from "../components/site-shell";

const resources = [
  {
    title: "Digital References",
    description:
      "Curated encyclopedias, journals, and academic links for subject-based research and classroom enrichment.",
  },
  {
    title: "Reading Hub",
    description:
      "Age-appropriate fiction, nonfiction, and literacy support materials accessible for independent reading practice.",
  },
  {
    title: "Teacher Collections",
    description:
      "Instructional materials and themed content sets that support lesson planning and blended learning activities.",
  },
];

export default function ELibraryPage() {
  return (
    <SiteShell
      eyebrow="Learning Resources"
      title="eLibrary"
      description="The eLibrary extends the school library into a digital space where learners and teachers can access curated resources anytime."
    >
      <section className="programs section-space">
        <div className="section-heading">
          <p className="eyebrow">Available Resources</p>
          <h2>A digital library that supports reading, research, and discovery.</h2>
        </div>

        <div className="program-grid">
          {resources.map((resource) => (
            <article key={resource.title} className="program-card">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
