import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-the-school", label: "About" },
  { href: "/learners", label: "Learners" },
  { href: "/feeding", label: "Feeding" },
  { href: "https://landahaninventory.vercel.app/", target: "_blank", rel: "noopener noreferrer", label: "Inventory" },
  { href: "https://landahan-es-digital-library.my.canva.site/", target: "_blank", rel: "noopener noreferrer", label: "eLibrary" },
  { href: "/drrm", label: "DRRM" },
];

const footerLinks = {
  "About Us": ["Our Mission", "Our Course", "Careers", "Blog & News", "Event & News"],
  "Our Course": ["Courses", "Blog", "Program", "Contact Us"],
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
            <span><a href="mailto:120746@deped.gov.ph">120746@deped.gov.ph</a></span>
            <span><a href="tel:+630322310055">+63 0322310055</a></span>
          </div>
        </div>
      </div>

      <header className="subpage-header">
        <div className="subpage-container header-inner">
          <Link href="/" className="subpage-brand" aria-label="Landahan home">
            <img src="/assets/images/logo-landahan.png" alt="Landahan ES Logo" style={{ height: "50px" }} />
            <span>
              <strong>Landahan</strong>
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

          <a className="subpage-cta" href="https://www.facebook.com/weLoveLandahanES" target="_blank">
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
                <strong>Landahan</strong>
                <small>Elementary School</small>
              </span>
            </Link>
            <p>
              We are passionate about providing high-quality resources and safe,
              caring learning spaces for every learner.
            </p>
            <address>
              <span>Landahan, Toledo City, Cebu</span>
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
        <p className="subpage-copyright">
          Copyright © 2026 All Rights Reserved by Landahan Elementary School
        </p>
      </footer>
    </main>
  );
}
