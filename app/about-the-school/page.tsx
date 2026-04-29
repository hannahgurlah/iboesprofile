import { SiteShell } from "../components/site-shell";

const values = [
  "Academic rigor with compassion",
  "Faith in service, leadership, and integrity",
  "Inclusive learning spaces for diverse learners",
  "Partnership with families and the community",
];

export default function AboutSchoolPage() {
  return (
    <SiteShell
      eyebrow="School Profile"
      title="About the School"
      description=""
    >

      <section className="section-space">
        <article className="panel panel-story">
          <p className="eyebrow">About IBO ES</p>
          <h3>A school community driven by excellence, strengthened by resilience, and rooted in local identity.</h3>
          <p>
            Ibo Elementary School is one of the nine [9] schools in South Toledo District, Toledo City Division. It is 2 kilometers away from the city proper. It is along the national highway going to Pinamungajan, the adjacent town. The school has a total land area of 5,974 square meters in which 4,488 square meters was donated and the additional 1,486 square meters was purchased by the City Government of Toledo. It is situated in Brgy. Ibo, Toledo City. It is trapezoidal in shape. It has a sandy soil since it is along the seacoast.
            The school has hazardous location for it is in between the national highway and the sea. It serves as the catch basin of water during heavy rains and strong waves. The school buildings are approximately eight (8) meters away from the seashores, wherein the pupils and the school staff feel the sea breeze and violent waves during stormy weather which plagued on the dilapidated seawall. School grounds become flooded during heavy rains due to lack of drainage.
          </p>
        </article>

        {/* <aside className="panel panel-points">
          <p className="eyebrow">What We Value</p>
          <ul>
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </aside> */}
      </section>
      <section className="section-space mt-25">
        <h2>Organizational Chart</h2>
        <div className="mt-25">
          <img src="/assets/images/org-chart.png" alt="Organizational Chart" />
        </div>
      </section>

      <section>
        <h2>Teachers Trainings Attended</h2>
      </section>
    </SiteShell >
  );
}
