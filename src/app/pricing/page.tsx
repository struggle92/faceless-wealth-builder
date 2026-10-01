const pricing = [
  { name: "Starter", price: "$29", description: "Perfect for validating your first offer.", features: ["3 core lessons", "Newsletter access", "Referral link"] },
  { name: "Growth", price: "$79", description: "Built for consistent digital revenue.", features: ["Full course library", "Dashboard analytics", "Monthly plan review"], featured: true },
  { name: "Scale", price: "$199", description: "For operators who want systems, automation, and leverage.", features: ["Everything in Growth", "Private community", "Custom affiliate program"] },
];

export default function PricingPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-top">
          <span className="kicker">Pricing</span>
          <h1>Choose the plan that fits your revenue stage.</h1>
          <p>Simple offers, clear paths to value, and low friction for conversion.</p>
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
                <a href="/login" className={tier.featured ? "button" : "button-secondary"}>Get started</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
