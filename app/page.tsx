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

const events = [
  ["School Reading Month", "October 29, 2026", photos.eventOne, "purple"],
  ["Nutrition and Wellness Day", "November 7, 2026", photos.eventTwo, "orange"],
  ["Family and Community Day", "December 12, 2026", photos.social, "pink"],
  ["Learners Showcase", "November 25, 2026", photos.galleryTwo, "green"],
];

const testimonials = [
  [
    "Ibo Elementary School helps my child enjoy learning and become more confident every day.",
    "Maria Santos",
    "Parent",
  ],
  [
    "The teachers are patient, prepared, and committed to helping pupils understand their lessons.",
    "Joel Reyes",
    "Parent",
  ],
  [
    "The school community works together, from classroom learning to feeding and safety programs.",
    "Ana Villanueva",
    "Guardian",
  ],
];

const blogPosts = [
  ["Building reading habits at home", photos.blogOne],
  ["How feeding support improves learning", photos.health],
  ["Preparing pupils for safer school days", photos.social],
];

export default function Home() {
  return (
    <main className="school-home">
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
          {/* <div className="mission-list">
            <article>
              <span>01</span>
              <div>
                <h3>Our Mission</h3>
                <p>Provide inclusive education that develops capable learners.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Our Commitment</h3>
                <p>Serve children with care, consistency, and accountability.</p>
              </div>
            </article>
          </div>
          <Link href="/about-the-school" className="pill-button compact">
            About Us
          </Link> */}
        </div>
      </section>

      {/* <section id="programs" className="program-band">
        <div className="section-wrap">
          <div className="split-heading">
            <div>
              <p className="kicker">What We Do</p>
              <h2>Our Programs</h2>
            </div>
            <p>
              Programs and services are focused on the primary areas of impact
              that help pupils achieve their goals and strengthen communities.
            </p>
          </div>

          <div className="program-card-grid">
            {programs.map((program) => (
              <article key={program.title} className="image-card">
                <div className="image-frame">
                  <img src={program.image} alt="" />
                  <span>{program.icon}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-block section-wrap">
        <p className="kicker center">Our Services</p>
        <h2>We Give The Best For Your Child</h2>
        <div className="service-layout">
          <div className="service-list">
            {services.slice(0, 3).map(([title, text], index) => (
              <article key={title} className="service-item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <img src={photos.services} alt="Happy pupils running at school" />
          <div className="service-list">
            {services.slice(3).map(([title, text], index) => (
              <article key={title} className="service-item">
                <span>{String(index + 4).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="video-strip" aria-label="School activity preview">
        <img src={photos.video} alt="Children working together in classroom" />
        <button aria-label="Play school video preview">Play</button>
      </section>

      <section className="events-block section-wrap">
        <p className="kicker center">Event</p>
        <h2>Upcoming Events</h2>
        <p className="section-note">
          We are thrilled to announce upcoming events. Explore key celebrations
          and school activities.
        </p>
        <div className="event-grid">
          {events.map(([title, date, image, color]) => (
            <article key={title} className={`event-card ${color}`}>
              <img src={image} alt="" />
              <div>
                <h3>{title}</h3>
                <p>Ibo Elementary School campus</p>
                <time>{date}</time>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-band">
        <div className="section-wrap">
          <p className="kicker center">Testimonials</p>
          <h2>What Parents Say About Us</h2>
          <p className="section-note">
            The success and happiness of our students are at the heart of
            everything we do.
          </p>
          <div className="testimonial-grid">
            {testimonials.map(([quote, name, role]) => (
              <article key={name} className="testimonial-card">
                <div className="stars">*****</div>
                <p>{quote}</p>
                <strong>{name}</strong>
                <span>{role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-block section-wrap">
        <p className="kicker center">Gallery</p>
        <h2>Tiny Scholars Showcase</h2>
        <p className="section-note">
          Marked by significant growth and inspiration as toddlers transition
          from infancy.
        </p>
        <div className="gallery-grid">
          <img className="gallery-large" src={photos.galleryOne} alt="" />
          <img src={photos.galleryTwo} alt="" />
          <img src={photos.social} alt="" />
          <img src={photos.youth} alt="" />
        </div>
      </section>

      <section className="blog-block section-wrap">
        <p className="kicker center">Blog and News</p>
        <h2>Welcome to Ibo ES blog</h2>
        <p className="section-note">
          A quick directory of helpful school updates, reminders, and learning
          resources.
        </p>
        <div className="blog-grid">
          {blogPosts.map(([title, image]) => (
            <article key={title} className="blog-card">
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>24 December · 245 views</p>
            </article>
          ))}
        </div>
      </section> */}

      {/* <section className="newsletter-band">
        <div className="subpage-container">
          <h2>Don&apos;t Miss Updates From Our School Community</h2>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="home-email">
              Email address
            </label>
            <input id="home-email" type="email" placeholder="Enter Your mail" />
            <button type="button">Subscribe Now</button>
          </form>
        </div>
      </section> */}

      <section className="section-wrap" style={{ padding: "60px 0", marginBottom: "2rem" }}>
        <p style={{ border: "2px solid #CE6600", backgroundColor: "#FDF6E3", color: "#342C21", fontSize: "18px", textAlign: "center", lineHeight: "1.8rem", maxWidth: "800px", margin: "0 auto", padding: "1rem", borderRadius: "10px" }}>This school online portfolio is established to showcase the school’s programs, achievements, and resources while promoting transparency and accessibility to stakeholders. In line with the <strong style={{ fontSize: "18px" }}>e-Government Act</strong>, it supports a paperless system by digitizing records, communications, and reports, enabling more efficient, sustainable, and accessible school operations.</p>
      </section>

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

          <div>
            <h3>About Us</h3>
            <a href="#">Our Mission</a>
            <a href="#">Our Course</a>
            <a href="#">Careers</a>
            <a href="#">Blog & News</a>
            <a href="#">Event & News</a>
          </div>

          <div>
            <h3>Our Course</h3>
            <a href="#">Courses</a>
            <a href="#">Blog</a>
            <a href="#">Program</a>
            <a href="#">Contact Us</a>
          </div>

          <div>
            <h3>Recent Post</h3>
            <div className="recent-posts">
              <article>
                <img src={photos.blogOne} alt="" />
                <div>
                  <time>October 29, 2026</time>
                  <h4>Building Reading Habits At Home</h4>
                </div>
              </article>
              <article>
                <img src={photos.health} alt="" />
                <div>
                  <time>October 29, 2026</time>
                  <h4>How Feeding Support Improves Learning</h4>
                </div>
              </article>
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
