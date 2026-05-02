import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-the-school", label: "About" },
  { href: "/learners", label: "Learners" },
  { href: "/feeding", label: "Feeding" },
  { href: "https://iboinventory.vercel.app/", target: "_blank", rel: "noopener noreferrer", label: "Inventory" },
  { href: "https://iboeselibrary.my.canva.site/", target: "_blank", rel: "noopener noreferrer", label: "eLibrary" },
  { href: "/drrm", label: "DRRM" },
];

const photos = {
  hero:
    "/assets/images/hero-image.jpg",
  principal:
    "/assets/images/1.png",
  about:
    "/assets/images/hero-image.jpg",
  youth:
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=700&q=85",
  health:
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=700&q=85",
  social:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=85",
  services:
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85",
  video:
    "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?auto=format&fit=crop&w=1600&q=85",
  eventOne:
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=85",
  eventTwo:
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=500&q=85",
  galleryOne:
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=85",
  galleryTwo:
    "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=600&q=85",
  blogOne:
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=85",
  qrCSM:
    "/assets/images/qr-csm.png",
};

const programs = [
  {
    title: "Learner Development",
    text: "Daily classroom experiences that strengthen reading, numeracy, creativity, and confidence.",
    image: photos.youth,
    icon: "LD",
  },
  {
    title: "Health and Nutrition",
    text: "Feeding and wellness support that helps pupils arrive ready to learn and participate.",
    image: photos.health,
    icon: "HN",
  },
  {
    title: "Community Responsibility",
    text: "School activities that build service, kindness, safety awareness, and civic pride.",
    image: photos.social,
    icon: "CR",
  },
];

const services = [
  ["Instruction", "Focused lessons and guided practice for every grade level."],
  ["School Feeding", "Meal support and health monitoring for learner wellbeing."],
  ["eLibrary", "Reading materials and digital references for pupils and teachers."],
  ["DRRM", "Preparedness programs that keep the campus safer and ready."],
  ["Inventory", "Organized records for supplies, rooms, and school resources."],
  ["Learner Support", "Care, guidance, and inclusive support for every child."],
];

export default function Home() {
  return (
    <main className="school-home">
      <div className="subpage-topbar">
        <div className="subpage-container topbar-inner">
          <div className="topbar-contact">
            <span><a href="mailto:120745@deped.gov.ph">120745@deped.gov.ph</a></span>
          </div>
        </div>
      </div>

      <header className="subpage-header">
        <div className="subpage-container header-inner">
          <Link href="/" className="subpage-brand" aria-label="Ibo home">
            <img src="/assets/images/ibo-logo.png" alt="Ibo ES Logo" style={{ height: "50px" }} />
            <span>
              <strong>Ibo</strong>
              <small>Elementary School</small>
            </span>
          </Link>

          <nav className="subpage-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.target}
                rel={item.rel}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a className="subpage-cta" href="/assets/IboES-CITIZENS-CHARTER.pdf" target="_blank">
            Citizen&apos;s Charter
          </a>

          <a className="subpage-cta" href="https://www.facebook.com/ibotoledoelemschool" target="_blank">
            Facebook
          </a>
        </div>
      </header>

      <section className="home-hero">
        <img src={photos.hero} alt="Elementary pupils learning in class" />
        <div className="hero-orb" />
        <div className="home-hero-copy">
          <p className="mini-label"></p>
          <h1>Welcome to Ibo Elementary School</h1>
          <p style={{ fontSize: "20px" }}>
            Where every learner is our top priority.
          </p>
          <a href="/about-the-school" className="pill-button">
            Learn More
          </a>
        </div>
      </section>


      <section className="about-block section-wrap">
        <div className="photo-stack">
          <span className="shape shape-one" />
          <img src={photos.principal} alt="Principal" />
          <span className="shape shape-two" />
        </div>

        <div className="text-block">
          <p className="kicker">School Head Corner</p>
          <h2>Message from the Principal</h2>
          <p>
            Welcome to Ibo Elementary School, a coastal school in Toledo City. Despite the challenges of natural disasters, we remain resilient and steadfast in our mission. Our learners are our top priority, and we are committed to providing safe, inclusive, and quality education for every child.
          </p>
          <h3>MAIDA A. PANARES<br /><em>School Principal I</em></h3>
        </div>
      </section>



      <section className="section-wrap" style={{ padding: "60px 0", marginBottom: "2rem" }}>
        <p style={{ border: "2px solid #CE6600", backgroundColor: "#FDF6E3", color: "#342C21", fontSize: "18px", textAlign: "center", lineHeight: "1.8rem", maxWidth: "780px", margin: "0 auto", padding: "1rem", borderRadius: "10px" }}>This school online portfolio is established to showcase the school’s programs, achievements, and resources while promoting transparency and accessibility to stakeholders. In line with the <strong style={{ fontSize: "18px" }}>e-Government Act</strong>, it supports a paperless system by digitizing records, communications, and reports, enabling more efficient, sustainable, and accessible school operations.</p>
      </section>

      <footer className="subpage-footer">

        <div style={{ margin: "10px auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ marginTop: "20px" }}>
            Scan the QR Code on how satisfied are you as a stakeholder of Ibo Elementary School
          </p>
          <img src={photos.qrCSM} alt="" style={{ width: "10%", margin: "0 auto", padding: "0 1rem" }} />
        </div>
        <p className="subpage-copyright">
          Copyright © 2026 All Rights Reserved by Ibo Elementary School
        </p>
      </footer>
    </main>
  );
}
