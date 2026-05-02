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
  qrCSM:
    "/assets/images/qr-csm.png",
};

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
