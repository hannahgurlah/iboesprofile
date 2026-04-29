import { SiteShell } from "../components/site-shell";

const siteContext = [
  "The school is located in a remote mountain area of Toledo City.",
  "The campus is near the barangay hall, which can support coordination and temporary response activities.",
  "The area has many trees, which provide shade but also increase falling-branch and blocked-path risks during severe weather.",
  "Access roads may become difficult during heavy rain, landslides, and emergencies that affect transport.",
];

const planningPriorities = [
  "Protect learners, teachers, and visitors before property.",
  "Use the barangay hall as a nearby coordination and communication point when needed.",
  "Keep evacuation routes clear from trees, loose materials, and obstructions.",
  "Coordinate immediately with parents, barangay officials, and health or rescue units during major incidents.",
];

const contingencyPlans = [
  {
    title: "Fire",
    risk:
      "Classrooms, storage rooms, electrical lines, and kitchen or canteen areas may trigger fire, while nearby trees and remote access can slow response time.",
    preparedness: [
      "Install and inspect fire extinguishers, alarms, and electrical connections regularly.",
      "Assign fire marshals and conduct exit drills every quarter.",
      "Keep dry leaves, paper waste, and flammable items away from buildings.",
    ],
    response: [
      "Sound the alarm and evacuate learners to the designated open assembly area away from trees and smoke.",
      "Switch off electricity when safe to do so and use extinguishers only for controllable fires.",
      "Inform the barangay hall and fire responders immediately while accounting for all learners.",
    ],
    recovery: [
      "Inspect affected rooms before reuse.",
      "Document losses and update fire prevention measures.",
    ],
  },
  {
    title: "Typhoon",
    risk:
      "Strong winds and heavy rain can damage roofs, topple branches, cut electricity, and isolate the school because of its mountain location.",
    preparedness: [
      "Monitor PAGASA advisories and decide early on class suspension or early dismissal.",
      "Trim tree branches near classrooms, walkways, and power lines.",
      "Store learning materials, records, and devices in elevated and protected locations.",
    ],
    response: [
      "Suspend outdoor movement and transfer learners away from windows and light structures.",
      "Coordinate with the barangay hall for weather updates, shelter support, and transport concerns.",
      "Release learners only through safe, documented parent or guardian pick-up procedures when travel is possible.",
    ],
    recovery: [
      "Check for roof damage, fallen trees, and unsafe paths before reopening.",
      "Resume classes only after campus hazards are cleared.",
    ],
  },
  {
    title: "Earthquake",
    risk:
      "Mountain terrain, falling debris, and unstable slopes can make evacuation more difficult after ground shaking.",
    preparedness: [
      "Teach all learners to duck, cover, and hold.",
      "Secure cabinets, shelves, fans, and heavy objects inside classrooms.",
      "Mark open evacuation areas away from buildings, trees, poles, and possible slope failure zones.",
    ],
    response: [
      "During shaking, instruct everyone to duck, cover, and hold until the movement stops.",
      "Evacuate calmly to open safe areas and avoid standing near trees, walls, or power lines.",
      "Check injuries, account for learners, and prepare for aftershocks.",
    ],
    recovery: [
      "Inspect buildings and hillside conditions before allowing re-entry.",
      "Refer injured persons to responders or nearby health units immediately.",
    ],
  },
  {
    title: "Landslide",
    risk:
      "Because the school is in a remote mountain area, prolonged rain can weaken slopes, block access roads, and threaten structures near elevated ground.",
    preparedness: [
      "Identify slopes, cracks, leaning trees, and drainage issues near the campus.",
      "Restrict activity in areas close to steep embankments during and after heavy rain.",
      "Coordinate with barangay officials for early warnings and route monitoring.",
    ],
    response: [
      "Evacuate immediately once ground movement, unusual sounds, or sudden soil cracking is observed.",
      "Move learners to the safest identified area or to the barangay hall if campus access remains safe.",
      "Stop all travel on roads or paths suspected to be unstable.",
    ],
    recovery: [
      "Wait for local authorities to assess slope safety.",
      "Reopen only after access routes and school grounds are cleared for use.",
    ],
  },
  {
    title: "Flood",
    risk:
      "Even in elevated areas, intense rain can cause runoff, drainage overflow, slippery walkways, and sudden water accumulation in low points or access roads.",
    preparedness: [
      "Keep canals, drainage lines, and water pathways free from leaves and debris from surrounding trees.",
      "Identify low-lying areas that should be avoided during downpours.",
      "Raise records, books, and electrical equipment above floor level.",
    ],
    response: [
      "Stop movement through flooded or fast-moving water immediately.",
      "Transfer learners to higher and safer parts of the campus or to the barangay hall if advised.",
      "Cut power in affected areas when flooding threatens electrical safety.",
    ],
    recovery: [
      "Clean and disinfect flooded rooms before use.",
      "Check water damage and restore classes only after sanitation and safety checks.",
    ],
  },
  {
    title: "Vehicular Accidents",
    risk:
      "Remote roads, steep terrain, and limited transport access increase the risk of school-related vehicular incidents during travel, field activities, or student pick-up.",
    preparedness: [
      "Maintain a school transport contact list, emergency hotline numbers, and parent communication records.",
      "Brief drivers and staff on mountain road precautions and weather-related travel rules.",
      "Ensure first aid kits and emergency contact sheets are available during trips.",
    ],
    response: [
      "Give first aid, secure the scene, and call health responders or barangay authorities immediately.",
      "Inform school leadership and parents as soon as verified information is available.",
      "Avoid moving injured persons unless there is immediate danger.",
    ],
    recovery: [
      "Document the incident and review transport procedures.",
      "Provide psychosocial support when learners or staff are affected.",
    ],
  },
  {
    title: "Storm Surge",
    risk:
      "Although the campus is in a mountain area, storm surge may still disrupt school operations by affecting families, transport routes, supply delivery, and wider Toledo City emergency conditions.",
    preparedness: [
      "Monitor city-wide advisories, not only school-site conditions.",
      "Identify learners and staff whose homes or travel routes are vulnerable to coastal flooding.",
      "Prepare remote communication and class suspension notices early.",
    ],
    response: [
      "Suspend school operations when coastal emergency warnings affect community mobility or safety.",
      "Coordinate with barangay and city authorities for verified information before allowing travel.",
      "Keep communication lines open for affected families needing assistance or updates.",
    ],
    recovery: [
      "Confirm that staff, learners, and routes are safe before resuming classes.",
      "Adjust schedules and support affected families after the event.",
    ],
  },
  {
    title: "COVID-19",
    risk:
      "Respiratory illness can spread quickly in classrooms and gatherings if screening, ventilation, and isolation practices are weak.",
    preparedness: [
      "Maintain handwashing stations, classroom cleaning routines, and symptom awareness campaigns.",
      "Encourage proper ventilation and keep updated contact details for all families.",
      "Prepare temporary isolation procedures for symptomatic individuals.",
    ],
    response: [
      "Separate any learner or staff member with symptoms and notify guardians or health authorities as needed.",
      "Shift to alternative learning delivery if advised by health or education authorities.",
      "Clean exposed rooms and monitor close contacts based on current protocols.",
    ],
    recovery: [
      "Support safe return-to-school procedures after illness or exposure.",
      "Review health communication and classroom mitigation practices regularly.",
    ],
  },
  {
    title: "El Niño",
    risk:
      "Extended heat and water shortage can affect hydration, classroom comfort, sanitation, and vegetation around the school grounds.",
    preparedness: [
      "Store safe water and review conservation measures for toilets, handwashing, and cleaning.",
      "Adjust outdoor schedules to avoid extreme midday heat.",
      "Inspect dry grass, leaf buildup, and tree conditions that may raise fire risk.",
    ],
    response: [
      "Reduce strenuous outdoor activity and monitor learners for dehydration or heat stress.",
      "Use shaded and well-ventilated rooms whenever possible.",
      "Coordinate with the barangay hall if water supply or local fire risk becomes critical.",
    ],
    recovery: [
      "Restore normal schedules only when heat conditions are manageable.",
      "Update water and fire mitigation plans based on observed shortages or risks.",
    ],
  },
];

export default function DrrmPage() {
  return (
    <SiteShell
      eyebrow="Student Safety"
      title="School DRRM"
      description="This DRRM page outlines hazard-specific contingency plan articles for Ibo Elementary School, a school in a remote mountain area of Toledo City."
    >
      <section className="content-grid section-space">
        <article className="panel panel-story">
          <p className="eyebrow">Campus Risk Context</p>
          <h2>Planning for a mountain-area school environment.</h2>
          <p>
            The school&apos;s location requires contingency planning that considers
            difficult access roads, severe weather exposure, nearby trees, and
            close coordination with barangay officials.
          </p>
          <p>
            Each response article below is designed to protect learners and
            staff while keeping communication and evacuation decisions practical
            for the local setting.
          </p>
        </article>

        <aside className="panel panel-points">
          <p className="eyebrow">Site Considerations</p>
          <ul>
            {siteContext.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="programs">
        <div className="section-heading">
          <p className="eyebrow">Core Planning Principles</p>
          <h2>Shared actions that guide every emergency response.</h2>
        </div>

        <div className="program-grid">
          {planningPriorities.map((item) => (
            <article key={item} className="program-card">
              <h3>{item}</h3>
              <p>
                This principle should guide school decisions before, during,
                and after any emergency affecting learners and staff.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="plan-articles">
        <div className="section-heading">
          <p className="eyebrow">Contingency Plan Articles</p>
          <h2>Hazard-specific response plans for the school community.</h2>
        </div>

        <div className="article-grid">
          {contingencyPlans.map((plan) => (
            <article key={plan.title} className="plan-article">
              <p className="eyebrow">Article</p>
              <h3>{plan.title}</h3>
              <p className="plan-risk">
                <strong>Risk Context:</strong> {plan.risk}
              </p>

              <div className="plan-section">
                <h4>Preparedness</h4>
                <ul>
                  {plan.preparedness.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="plan-section">
                <h4>Immediate Response</h4>
                <ul>
                  {plan.response.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="plan-section">
                <h4>Recovery</h4>
                <ul>
                  {plan.recovery.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
