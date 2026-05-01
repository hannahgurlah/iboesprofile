import { SiteShell } from "../components/site-shell";
import { ContingencyPlanTabs } from "./contingency-plan-tabs";

const siteContext = [
  "The school is located in a coastal area of Toledo City.",
  "The school may be affected by strong winds, heavy rain, high tide, coastal flooding, and storm surge warnings.",
  "Evacuation decisions must prioritize movement to higher and safer ground before water levels rise.",
  "The school coordinates with barangay officials, parents, health workers, and rescue units during coastal emergencies.",
];

const planningPriorities = [
  "Protect learners, teachers, and visitors before property.",
  "Monitor weather, tide, storm surge, and tsunami advisories before making school decisions.",
  "Keep evacuation routes to higher ground clear, visible, and known to learners and staff.",
  "Coordinate immediately with parents, barangay officials, health workers, and rescue units during major incidents.",
];

const depedOrderActions = [
  "Organize a student-led school watching activity during the opening month of the school year.",
  "Include learner representatives from different grade levels, sections, and school groups.",
  "Use the school watching checklist to identify hazards, unsafe areas, and needed safety improvements.",
  "Update and post hazard maps in visible school areas so learners, staff, and visitors can use them during preparedness activities.",
];

const contingencyPlans = [
  {
    title: "Fire",
    risk:
      "Classrooms, storage rooms, electrical lines, and kitchen or canteen areas may trigger fire, while strong coastal winds can help flames and smoke spread quickly.",
    preparedness: [
      "Install and inspect fire extinguishers, alarms, and electrical connections regularly.",
      "Assign fire marshals and conduct exit drills every quarter.",
      "Keep paper waste, cleaning materials, fuel, and other flammable items away from classrooms and cooking areas.",
    ],
    response: [
      "Sound the alarm and evacuate learners to the designated open assembly area away from smoke, electrical lines, and cooking areas.",
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
      "Strong winds, heavy rain, rough seas, high tide, and storm surge can damage buildings, flood access routes, cut electricity, and endanger learners traveling near the shoreline.",
    preparedness: [
      "Monitor PAGASA advisories and decide early on class suspension or early dismissal.",
      "Secure roofs, windows, learning materials, records, and loose outdoor items before severe weather arrives.",
      "Store learning materials, records, and devices in elevated and protected locations.",
    ],
    response: [
      "Suspend outdoor movement and transfer learners away from windows and light structures.",
      "Move learners to higher and safer areas when coastal flooding or storm surge warnings are issued.",
      "Release learners only through safe, documented parent or guardian pick-up procedures when travel routes are passable.",
    ],
    recovery: [
      "Check for roof damage, floodwater contamination, damaged wiring, debris, and unsafe paths before reopening.",
      "Resume classes only after campus hazards are cleared and coastal warnings are lifted.",
    ],
  },
  {
    title: "Earthquake",
    risk:
      "Ground shaking can damage buildings and utilities, while strong offshore earthquakes may require immediate tsunami awareness and evacuation to higher ground.",
    preparedness: [
      "Teach all learners to duck, cover, and hold.",
      "Secure cabinets, shelves, fans, and heavy objects inside classrooms.",
      "Mark open evacuation areas and identify higher-ground evacuation routes for possible tsunami warnings.",
    ],
    response: [
      "During shaking, instruct everyone to duck, cover, and hold until the movement stops.",
      "Evacuate calmly to open safe areas and avoid buildings, walls, posts, and electrical lines.",
      "Check injuries, account for learners, prepare for aftershocks, and monitor official tsunami advisories.",
    ],
    recovery: [
      "Inspect buildings, electrical systems, water sources, and evacuation routes before allowing re-entry.",
      "Refer injured persons to responders or nearby health units immediately.",
    ],
  },
  {
    title: "Tsunami",
    risk:
      "A strong offshore earthquake or official tsunami warning can place coastal schools at risk from sudden sea level changes and fast-moving water.",
    preparedness: [
      "Teach tsunami warning signs, including strong ground shaking, unusual sea behavior, or official alerts.",
      "Post clear evacuation maps showing the fastest routes to higher ground.",
      "Conduct evacuation drills that move learners away from the shoreline without delay.",
    ],
    response: [
      "Evacuate immediately to higher ground when a tsunami warning is issued or natural warning signs are observed.",
      "Do not allow learners or staff to go near the shore to watch the sea.",
      "Remain in the safe area until authorities declare that the threat has ended.",
    ],
    recovery: [
      "Return to campus only after official clearance from local authorities.",
      "Check classrooms, water sources, sanitation facilities, and electrical systems before reuse.",
    ],
  },
  {
    title: "Coastal Flooding",
    risk:
      "Heavy rain, high tide, clogged drainage, and seawater overflow can flood classrooms, pathways, comfort rooms, and nearby access roads.",
    preparedness: [
      "Keep canals, drainage lines, and water pathways clear of trash, sand, and debris.",
      "Identify low-lying areas and shoreline routes that should be avoided during high tide or heavy rain.",
      "Raise records, books, food supplies, and electrical equipment above expected flood level.",
    ],
    response: [
      "Stop movement through flooded or fast-moving water immediately.",
      "Transfer learners to higher and safer parts of the campus or to the identified evacuation site if advised.",
      "Cut power in affected areas when flooding threatens electrical safety.",
    ],
    recovery: [
      "Clean and disinfect flooded rooms, comfort rooms, and water containers before use.",
      "Check saltwater damage, water contamination, and electrical safety before classes resume.",
    ],
  },
  {
    title: "Vehicular Accidents",
    risk:
      "Wet roads, busy pick-up areas, poor visibility, and emergency evacuations can increase the risk of transport incidents involving learners, staff, and guardians.",
    preparedness: [
      "Maintain a school transport contact list, emergency hotline numbers, and parent communication records.",
      "Brief drivers, staff, and guardians on safe pick-up points, speed limits, and weather-related travel rules.",
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
      "Storm surge can push seawater inland during severe weather, rapidly flooding coastal areas and making roads, homes, and school facilities unsafe.",
    preparedness: [
      "Monitor PAGASA, city, and barangay storm surge advisories closely.",
      "Identify learners, staff, homes, and travel routes vulnerable to coastal flooding.",
      "Prepare early class suspension notices and evacuation coordination with parents and barangay officials.",
    ],
    response: [
      "Suspend school operations and move learners to higher ground when storm surge warnings threaten the area.",
      "Keep learners away from shorelines, seawalls, flooded roads, and drainage outlets.",
      "Coordinate with barangay and city authorities before allowing travel or releasing learners.",
    ],
    recovery: [
      "Confirm that staff, learners, homes, and routes are safe before resuming classes.",
      "Clean, disinfect, and inspect affected rooms and support families impacted by coastal flooding.",
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
      "Extended heat, water shortage, and saltwater intrusion can affect hydration, classroom comfort, sanitation, and safe water supply.",
    preparedness: [
      "Store safe water and review conservation measures for toilets, handwashing, and cleaning.",
      "Adjust outdoor schedules to avoid extreme midday heat.",
      "Coordinate with local officials for safe water support if wells or supply lines become affected.",
    ],
    response: [
      "Reduce strenuous outdoor activity and monitor learners for dehydration or heat stress.",
      "Use shaded and well-ventilated rooms whenever possible.",
      "Coordinate with the barangay or city offices if water supply becomes critical.",
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
      description="This DRRM page outlines hazard-specific contingency plan articles for Ibo Elementary School, a coastal school in Toledo City."
    >

      <section className="content-grid section-space">
        <article className="panel panel-story">
          <p className="eyebrow">Policy Basis</p>
          <h2>DepEd Order No. 23, s. 2015</h2>
          <p>
            DepEd Order No. 23, s. 2015, titled Student-Led School Watching and
            Hazard Mapping, guides public schools in involving learners in
            identifying hazards, understanding risks, and helping build a
            stronger culture of safety in school.
          </p>
          <p>
            For a coastal school, this means learners should help observe and
            map risks such as high tide areas, coastal flooding paths, unsafe
            walkways, drainage concerns, electrical hazards, evacuation routes,
            and other conditions that may affect school safety.
          </p>
        </article>

        <aside className="panel panel-points">
          <p className="eyebrow">School Application</p>
          <ul>
            {depedOrderActions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section style={{ alignItems: "center", marginBottom: 40, marginTop: 10 }}>
        <h3 style={{ marginTop: 40, fontSize: '24px' }}>DRRM Hazard Map</h3>
        <img style={{ border: "5px solid #d0d0d0" }} src="/assets/images/drrm-school-map-ibohazard.jpg" alt="DRRM Hazard Map" />
        <h3 style={{ marginTop: 40, fontSize: '24px' }}>DRRM Evacuation Map</h3>
        <img style={{ border: "5px solid #d0d0d0" }} src="/assets/images/drrm-school-map-iboevacuation.jpg" alt="DRRM Evacuation Map" />
      </section>

      <section className="content-grid section-space">
        <article className="panel panel-story">
          <p className="eyebrow">School Risk Context</p>
          <h2>Planning for a coastal school environment.</h2>
          <p>
            The school&apos;s location requires contingency planning that considers
            severe weather exposure, high tide, coastal flooding, storm surge,
            tsunami warnings, and close coordination with barangay officials.
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
          <h4 className="eyebrow" style={{ marginTop: 40, fontSize: '24px' }}>Core Planning Principles</h4>
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
          <p className="eyebrow" style={{ marginTop: 40, fontSize: '24px' }}>Contingency Plan</p>
          <h2>Hazard-specific response plans for the school community.</h2>
        </div>

        <ContingencyPlanTabs plans={contingencyPlans} />
      </section>

      <section style={{ alignItems: "center" }}>
        <h3 style={{ marginTop: 40, fontSize: '24px' }}>Emergency Contact Numbers</h3>
        <img style={{ border: "5px solid #d0d0d0" }} src="/assets/images/emergency-contact-numbers.jpg" alt="Safety Guidelines" />
      </section>
    </SiteShell >
  );
}
