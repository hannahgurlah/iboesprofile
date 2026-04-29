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
          <p className="eyebrow">Our History</p>
          <h3>A school community shaped by purpose and care.</h3>
          <p>
            According to the compilation of Nunez (1996), many years ago, in the early part of the twentieth century, an old couple named Oyong and Onyang Samper lived in the locality. They owned a vast tract of land planted with numerous coconut trees. During that time, coconut meat was sold to traders in the form of copra. Instead of using a “pugon” or drying kiln, they built several bed-like structures made of bamboo.
          </p>
          <p>These bamboo rafts were arranged end to end, occupying almost the entire area, including one side of what is now the school site. The coconut meat was spread on top of these bamboo structures and dried under the sun. Removable protective coverings were also provided to shield the drying copra from the rain. Because these makeshift bamboo rafts were so numerous, the place eventually came to be called “Landahan,” derived from the presence of large bamboo platforms locally known as “lantay,” which were specifically built for drying coconut meat.
          </p>
          <p>In the same way that copra was traditionally prepared in the area, the school also came into existence as early as 1938, when the land for the school site was donated by the old couple. According to Mrs. Enriquetta Samper Vda. de Cristuta, who was already 87 years old at the time of the account, the school was already functioning even before the Second World War. At that time, the school building was made only of saksak and sawali.
            Mrs. Cristuta recalled that the school already existed before the war because she was the youngest among seven siblings, and her older brothers and sisters had already proceeded to their intermediate grades at South City Central School in Poblacion, Toledo City, since the local school then offered only primary grades.
          </p>
          <p>By the 1950s, the school had already begun offering complete elementary grades and was known as Upper Tubod Elementary School, because the vast coconut and corn lands in the area were once part of Sitio Tubod of Barangay Tubod.
          </p>
          <p>  When the locality eventually attained barangay status, the inhabitants voted to name the place “Landahan.” They also chose Birhen Dela Paz as the patroness of the community, believing she would serve as a source of guidance, protection, peace, and prosperity for the people.
          </p>
          <p>In the early part of 1995, the school officially adopted the name Landahan Elementary School.
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
