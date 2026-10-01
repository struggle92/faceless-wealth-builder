const courses = [
  { title: "Digital Asset Blueprint", level: "Beginner", length: "4 weeks", price: "$79" },
  { title: "Affiliate Funnel Playbook", level: "Intermediate", length: "3 weeks", price: "$129" },
  { title: "Automated Revenue OS", level: "Advanced", length: "6 weeks", price: "$199" },
];

const stats = [
  { value: "12.4k", label: "members reached" },
  { value: "$42.7k", label: "monthly revenue" },
  { value: "8.3x", label: "affiliate ROI" },
];

const features = [
  { title: "Launch without a personal brand", copy: "Package your expertise into UVP-driven content that can be sold passively and scaled through evergreen funnels." },
  { title: "Automate buyer acquisition", copy: "Use email sequences, affiliate partnerships, and lead magnets to build repeatable acquisition loops." },
  { title: "Sell assets, not attention", copy: "Turn your knowledge into digital products, entry-level courses, and upsells that keep generating revenue." },
  { title: "Monitor what grows", copy: "Understand conversion, retention, and revenue signals from a simple dashboard built for lean operators." },
];

const pricing = [
  { name: "Starter", price: "$29", description: "Ideal for validating the offer.", features: ["Access to 3 starter lessons", "Email nurture sequence", "Affiliate tracking link"] },
  { name: "Growth", price: "$79", description: "Best for creators scaling revenue.", features: ["Everything in Starter", "Full course library", "Member dashboard access", "Monthly growth review"], featured: true },
  { name: "Scale", price: "$199", description: "For operators building a digital asset business.", features: ["Everything in Growth", "Private community", "Advanced sales automations", "Custom affiliate program"] },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <a href="/" className="brand" aria-label="Faceless Wealth Builder home">
            <span className="brand-mark">F</span>
            Faceless Wealth Builder
          </a>
          <nav className="nav" aria-label="Main navigation">
            <a href="/courses">Courses</a>
            <a href="/pricing">Pricing</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/login">Login</a>
          </nav>
          <div className="header-actions">
            <a href="/login" className="button-ghost">Sign in</a>
            <a href="/pricing" className="button">Start free</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="kicker">Build asset-based income</span>
              <h1>Turn expertise into a faceless income machine.</h1>
              <p className="lead">
                A simple digital product business that combines educational content, curated offers, and automated distribution so your revenue grows without requiring a personal brand.
              </p>
              <div className="hero-actions">
                <a href="/pricing" className="button">Launch your funnel</a>
                <a href="/courses" className="button-secondary">Explore courses</a>
              </div>
              <div className="social-proof">
                {stats.map((item) => (
                  <div className="metric" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-panel">
              <div className="dashboard-window">
                <div className="window-bar">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="window-body">
                  <div className="chart">
                    <div className="chart-bars" aria-label="Revenue chart">
                      <span className="bar" style={{ height: "40%" }} />
                      <span className="bar" style={{ height: "52%" }} />
                      <span className="bar" style={{ height: "64%" }} />
                      <span className="bar" style={{ height: "58%" }} />
                      <span className="bar" style={{ height: "80%" }} />
                      <span className="bar" style={{ height: "92%" }} />
                      <span className="bar" style={{ height: "100%" }} />
                    </div>
                    <div className="mini-row">
                      <div className="stat-box">
                        <strong>$8.4k</strong>
                        <p>Net revenue</p>
                      </div>
                      <div className="stat-box">
                        <strong>4.8%</strong>
                        <p>Conversion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Built to generate recurring, asset-based income.</h2>
              <p>Every part of the platform is designed to reduce dependency on personal branding while increasing automation and repeatability.</p>
            </div>

            <div className="grid-4">
              {features.map((feature) => (
                <article key={feature.title} className="feature">
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Offer stack for quick monetization.</h2>
            </div>
            <div className="grid-3">
              <div className="card">
                <strong>01</strong>
                <h3>Lead magnet</h3>
                <p>Free digital resource that builds trust and captures interest automatically.</p>
              </div>
              <div className="card">
                <strong>02</strong>
                <h3>Course library</h3>
                <p>Turn one core skill into structured learning that compounds across buyers.</p>
              </div>
              <div className="card">
                <strong>03</strong>
                <h3>Affiliate engine</h3>
                <p>Encourage partners and creators to distribute your offers with referral tracking.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Simple pricing for lean operators.</h2>
            </div>

            <div className="pricing-wrap">
              {pricing.map((tier) => (
                <article key={tier.name} className={`pricing-card ${tier.featured ? "featured" : ""}`}>
                  {tier.featured && <span className="badge">Most popular</span>}
                  <h3>{tier.name}</h3>
                  <p>{tier.description}</p>
                  <div className="price">{tier.price}<small>/ mo</small></div>
                  <ul className="check-list">
                    {tier.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "20px" }}>
                    <a href="/pricing" className={tier.featured ? "button" : "button-secondary"}>Choose {tier.name}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container funnel-grid">
            <div className="analytics-panel">
              <h3>Revenue funnel overview</h3>
              <div className="analytics-row"><span>Traffic</span><strong>9,800</strong></div>
              <div className="analytics-row"><span>Lead capture</span><strong>2,740</strong></div>
              <div className="analytics-row"><span>Paid members</span><strong>480</strong></div>
            </div>

            <div className="analytics-panel">
              <h3>Offer health</h3>
              <div className="ring"><span>68%</span></div>
              <p>Affiliate conversion and retention growth remain above target across your flagship offer.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Course lineup.</h2>
            </div>

            <div className="course-list">
              {courses.map((course) => (
                <article key={course.title} className="course-card">
                  <div className="course-image" aria-label={course.title} />
                  <div className="course-body">
                    <div className="course-meta">
                      <span>{course.level}</span>
                      <span>{course.length}</span>
                    </div>
                    <h3>{course.title}</h3>
                    <p>High-conviction digital training designed for an audience seeking practical results and fast wins.</p>
                    <div style={{ marginTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <strong>{course.price}</strong>
                      <a href="/courses" className="button-secondary">View</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer-inner">
          <div className="brand"><span className="brand-mark">F</span>Faceless Wealth Builder</div>
          <p>Build a digital asset business, not a personal brand dependency.</p>
        </div>
      </footer>
    </>
  );
}
