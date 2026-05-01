import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-the-school", label: "About" },
  { href: "/learners", label: "Learners" },
  { href: "/feeding", label: "Feeding" },
  { href: "https://iboinventory.vercel.app/", target: "_blank", rel: "noopener noreferrer", label: "Inventory" },
  { href: "https://iboeselibrary.my.canva.site/", target: "_blank", rel: "noopener noreferrer", label: "eLibrary" },
  { href: "/drrm", label: "DRRM" },
];

const footerLinks = {
  "About Us": ["Our Mission", "Our Course", "Careers", "Blog & News", "Event & News"],
  "Our Course": ["Courses", "Blog", "Program", "Contact Us"],
};

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
  qrCSM:
    "/assets/images/qr-csm.png",
};


const recentPosts = [
  {
    title: "Building Reading Habits At Home",
    image:
      "/assets/images/hero-image.jpg",
  },
  {
    title: "How Feeding Support Improves Learning",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=180&q=80",
  },
];

type SiteShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SiteShell({
  eyebrow,
  title,
  description,
  children,
}: SiteShellProps) {
  const newsletterId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-email`;

  return (
    <main className="subpage-site">
      <div className="subpage-topbar">
        <div className="subpage-container topbar-inner">
          <div className="topbar-contact">
            <span><a href="mailto:120745@deped.gov.ph">120745@deped.gov.ph</a></span>
            {/* <span><a href="tel:+630322310055">+63 0322310055</a></span> */}
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

      <section className="subpage-hero">
        <img
          src="/assets/images/hero-image.jpg"
          alt=""
        />
        <div className="subpage-container hero-content">
          <p>
            <Link href="/">Home</Link>
            <span>{title}</span>
          </p>
          <h1>{title}</h1>
          <span className="subpage-hero-note">{eyebrow}</span>
        </div>
      </section>

      <section className="subpage-intro">
        <div className="subpage-container">
          <p>{description}</p>
        </div>
      </section>

      <div className="subpage-container subpage-content">{children}</div>

      {/* <section className="newsletter-band">
        <div className="subpage-container">
          <h2>Don&apos;t Miss Updates From Our School Community</h2>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor={newsletterId}>
              Email address
            </label>
            <input id={newsletterId} type="email" placeholder="Enter Your mail" />
            <button type="button">Subscribe Now</button>
          </form>
        </div>
      </section> */}

      <footer className="subpage-footer">
        {/* <div className="subpage-container footer-grid">
          <div>
            <Link href="/" className="subpage-brand footer-brand">
              <span className="subpage-brand-icon">LES</span>
              <span>
                <strong>Ibo</strong>
                <small>Elementary School</small>
              </span>
            </Link>
            <p>
              We are passionate about providing high-quality resources and safe,
              caring learning spaces for every learner.
            </p>
            <address>
              <span>Ibo, Toledo City, Cebu</span>
              <span>+63 912 345 6789</span>
            </address>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3>{heading}</h3>
              {links.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div>
            <h3>Recent Post</h3>
            <div className="recent-posts">
              {recentPosts.map((post) => (
                <article key={post.title}>
                  <img src={post.image} alt="" />
                  <div>
                    <time>October 29, 2026</time>
                    <h4>{post.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div> */}
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
