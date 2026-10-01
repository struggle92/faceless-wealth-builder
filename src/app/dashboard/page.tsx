const metrics = [
  { value: "$16.2k", label: "Monthly revenue" },
  { value: "1,248", label: "Newsletter subscribers" },
  { value: "68%", label: "Offer conversion" },
];

const sales = [
  { name: "Starter Pass", value: "$490", channel: "Organic" },
  { name: "Affiliate Funnel Playbook", value: "$1,280", channel: "Affiliate" },
  { name: "Automated Revenue OS", value: "$2,100", channel: "Email" },
];

export default function DashboardPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-top">
          <span className="kicker">Dashboard</span>
          <h1>Revenue overview.</h1>
          <p>Monitor what is converting, what is scaling, and what should be optimized next.</p>
        </div>

        <div className="dashboard-grid">
          <section className="analytics-panel">
            <h3>Current momentum</h3>
            <div className="metric-panel">
              {metrics.map((metric) => (
                <div key={metric.label} className="stat-box">
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
            <table className="sales-table">
              <thead>
                <tr>
                  <th>Offer</th>
                  <th>Revenue</th>
                  <th>Channel</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.value}</td>
                    <td>{row.channel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <aside className="analytics-panel">
            <h3>Growth system</h3>
            <ul className="stack-list">
              <li>Lead magnet funnel</li>
              <li>Email nurture automation</li>
              <li>Affiliate partnership funnel</li>
              <li>Recurring membership upsell</li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
