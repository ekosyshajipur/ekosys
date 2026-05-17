import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NetMeteringGuide() {
  return (
    <>
      <Helmet>
        <title>Net Metering Guide Bihar 2025 — How It Works, Application & Benefits | EKOSYS</title>
        <meta name="description" content="Complete guide to net metering in Bihar. Learn how bi-directional metering works, application process with BSPHCL, billing calculation, and how to earn from excess solar power." />
        <meta name="keywords" content="net metering Bihar, net metering guide, how net metering works, BSPHCL net metering, bi-directional meter, solar net metering India, net metering application" />
        <link rel="canonical" href="https://ekosys.in/blog/net-metering-guide-bihar" />
        <meta property="og:title" content="Net Metering Guide Bihar 2025 | EKOSYS" />
        <meta property="og:description" content="Everything about net metering in Bihar — how it works, application, billing, and earning from solar." />
        <meta property="og:url" content="https://ekosys.in/blog/net-metering-guide-bihar" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://ekosys.in/images/blog/solar-net-meter.webp" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Article","headline":"Net Metering Guide Bihar 2025 — How It Works, Application & Benefits","author":{"@type":"Organization","name":"EKOSYS Solar"},"publisher":{"@type":"Organization","name":"EKOSYS Solar","logo":{"@type":"ImageObject","url":"https://ekosys.in/images/logo.webp"}},"datePublished":"2025-05-02","dateModified":"2025-05-18","image":"https://ekosys.in/images/blog/solar-net-meter.webp"}`}</script>
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is net metering?","acceptedAnswer":{"@type":"Answer","text":"Net metering is a billing system where your solar panels export excess electricity to the grid and you receive credits. Your meter tracks both import and export, and you only pay for the net consumption."}},{"@type":"Question","name":"How is the net metering bill calculated?","acceptedAnswer":{"@type":"Answer","text":"Your bill = (Units imported from grid) - (Units exported to grid). If you export more than you import, the surplus carries forward as credits. Minimum charges still apply."}},{"@type":"Question","name":"How long does net metering take to set up?","acceptedAnswer":{"@type":"Answer","text":"After solar installation, net meter setup takes 15-30 days including DISCOM application, inspection, meter installation, and commissioning."}}]}`}</script>
      </Helmet>

      <section className="page-header blog-header">
        <div className="container">
          <div className="blog-breadcrumb"><Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / <span>Net Metering Guide</span></div>
          <h1>Net Metering Guide <span className="highlight">Bihar</span> 2025</h1>
          <div className="blog-meta-header"><span>📅 May 2, 2025</span><span>⏱️ 8 min read</span><span>🏷️ Technical Guide</span></div>
        </div>
      </section>

      <article className="blog-article section">
        <div className="container blog-container">
          <div className="blog-content">
            <img src="/images/blog/solar-net-meter.webp" alt="Bi-directional net meter installed for solar system" className="blog-hero-img" loading="lazy" />
            <p className="blog-intro">Net metering is the <strong>financial engine</strong> that makes on-grid solar incredibly profitable. It's the reason your electricity bill drops by 80-90% after installing solar. But how exactly does it work? What are the rules in Bihar? How is your bill calculated? This comprehensive guide answers every question about net metering in Bihar.</p>

            <div className="blog-toc"><h3>📋 Table of Contents</h3><ul>
              <li><a href="#what">What is Net Metering?</a></li>
              <li><a href="#how">How Net Metering Works</a></li>
              <li><a href="#billing">Billing Calculation Explained</a></li>
              <li><a href="#rules">Bihar Net Metering Rules</a></li>
              <li><a href="#apply">Application Process</a></li>
              <li><a href="#benefits">Key Benefits</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul></div>

            <h2 id="what">What is Net Metering? 🔄</h2>
            <p>Net metering is a <strong>government-mandated billing system</strong> that allows solar panel owners to export excess electricity to the grid and receive credits against their consumption. Instead of wasting the solar power you don't use, it flows into the grid — and your meter literally <strong>runs backward</strong>.</p>
            <p>In Bihar, net metering is managed by <strong>BSPHCL (Bihar State Power Holding Company Limited)</strong> and is mandatory for all on-grid rooftop solar installations.</p>

            <h2 id="how">How Net Metering Works — Step by Step ⚡</h2>
            <div className="blog-steps">
              <div className="blog-step"><div className="blog-step-num">☀️</div><div><h3>Morning (6-9 AM)</h3><p>Solar panels start generating electricity as the sun rises. Your home uses this solar power directly. If generation exceeds consumption, excess flows to the grid (meter runs backward).</p></div></div>
              <div className="blog-step"><div className="blog-step-num">🌤️</div><div><h3>Peak Hours (9 AM - 4 PM)</h3><p>Maximum solar production. If you're at work and appliances are minimal, most electricity is <strong>exported to grid</strong>. Your meter accumulates export credits rapidly.</p></div></div>
              <div className="blog-step"><div className="blog-step-num">🌅</div><div><h3>Evening (4-6 PM)</h3><p>Solar production decreases. Home consumption increases (lights, TV, cooking). You begin drawing from the grid again. Meter runs forward.</p></div></div>
              <div className="blog-step"><div className="blog-step-num">🌙</div><div><h3>Night (6 PM - 6 AM)</h3><p>No solar generation. All electricity comes from the grid. Meter runs forward normally. But your daytime export credits offset this consumption!</p></div></div>
            </div>

            <img src="/images/blog/solar-inverter-setup.webp" alt="Solar inverter connected to net meter system" className="blog-hero-img" loading="lazy" style={{maxHeight: 300, marginBottom: 20}} />

            <h2 id="billing">How Your Bill is Calculated 📊</h2>
            <p>At the end of each billing cycle:</p>
            <div className="blog-highlight-box">
              <strong>Net Consumption = Units Imported (from grid) - Units Exported (to grid)</strong><br/><br/>
              If you imported 400 units and exported 350 units → You pay for only <strong>50 units</strong>!
            </div>

            <h3>Example Monthly Bill Calculation:</h3>
            <div className="blog-table-wrapper"><table className="blog-table"><thead><tr><th>Component</th><th>Without Solar</th><th>With Net Metering</th></tr></thead><tbody>
              <tr><td>Total Consumption</td><td>400 units</td><td>400 units</td></tr>
              <tr><td>Solar Generation</td><td>0 units</td><td>350 units</td></tr>
              <tr><td>Self-Consumed (daytime)</td><td>-</td><td>150 units</td></tr>
              <tr><td>Exported to Grid</td><td>-</td><td>200 units</td></tr>
              <tr><td>Imported from Grid</td><td>400 units</td><td>250 units</td></tr>
              <tr><td><strong>Net Billable Units</strong></td><td><strong>400 units</strong></td><td><strong>50 units</strong></td></tr>
              <tr><td><strong>Monthly Bill (@ ₹6/unit)</strong></td><td><strong>₹2,400</strong></td><td><strong>₹300 (min charge)</strong></td></tr>
            </tbody></table></div>

            <h2 id="rules">Bihar Net Metering Rules 📋</h2>
            <ul className="blog-list">
              <li><strong>Maximum Capacity:</strong> Rooftop solar up to <strong>sanctioned load</strong> of the connection (typically 1-10 kW for residential)</li>
              <li><strong>Credit Settlement:</strong> Export credits are carried forward monthly and settled annually</li>
              <li><strong>Minimum Charges:</strong> Even with full offset, minimum monthly charges (₹200-400) apply</li>
              <li><strong>Meter Type:</strong> DISCOM installs a <strong>bi-directional (import/export) meter</strong> at no additional cost</li>
              <li><strong>Agreement Period:</strong> Net metering agreement valid for <strong>25 years</strong></li>
              <li><strong>Excess Credits:</strong> Surplus credits at year-end may be compensated at APPC (Average Power Purchase Cost) rate</li>
            </ul>

            <h2 id="apply">Net Metering Application Process 📝</h2>
            <div className="blog-steps">
              <div className="blog-step"><div className="blog-step-num">1</div><div><h3>Solar Installation</h3><p>First, install your solar system through a registered vendor like <Link to="/about">EKOSYS</Link>.</p></div></div>
              <div className="blog-step"><div className="blog-step-num">2</div><div><h3>Application to DISCOM</h3><p>EKOSYS submits the net metering application to BSPHCL with installation details, system specifications, and photographs.</p></div></div>
              <div className="blog-step"><div className="blog-step-num">3</div><div><h3>DISCOM Inspection</h3><p>BSPHCL engineers inspect the installation for safety compliance and grid connectivity standards.</p></div></div>
              <div className="blog-step"><div className="blog-step-num">4</div><div><h3>Meter Installation</h3><p>DISCOM replaces your existing meter with a bi-directional net meter. This takes 7-15 days after approval.</p></div></div>
              <div className="blog-step"><div className="blog-step-num">5</div><div><h3>Commissioning</h3><p>System is officially commissioned, net metering agreement signed, and your savings begin immediately!</p></div></div>
            </div>
            <p><strong>Total timeline:</strong> 15-30 days after solar installation. EKOSYS handles all paperwork and coordination.</p>

            <h2 id="benefits">Key Benefits of Net Metering ✅</h2>
            <ul className="blog-list">
              <li><strong>Maximum savings:</strong> Reduce bills by 80-90% without expensive battery storage</li>
              <li><strong>Grid as battery:</strong> The grid stores your excess power for free — no battery degradation or replacement costs</li>
              <li><strong>Lower system cost:</strong> On-grid systems (no batteries) cost 30-40% less than off-grid</li>
              <li><strong>Subsidy eligible:</strong> Only net-metered on-grid systems qualify for PM Surya Ghar subsidy</li>
              <li><strong>25-year agreement:</strong> Long-term protection of your solar investment</li>
            </ul>

            <div className="blog-cta-inline">
              <h3>Get Net Metering Setup with EKOSYS</h3>
              <p>We handle the complete process — from solar installation to net meter commissioning. Zero hassle for you.</p>
              <Link to="/contact" className="btn btn-primary">Start Solar Journey →</Link>
            </div>

            <h2 id="faq">Frequently Asked Questions</h2>
            <div className="blog-faq">
              <div className="blog-faq-item"><h3>What is net metering?</h3><p>Net metering is a billing system where excess solar electricity is exported to the grid, earning you credits. You only pay for the net difference between import and export.</p></div>
              <div className="blog-faq-item"><h3>How is the bill calculated?</h3><p>Bill = (Units imported - Units exported) × Rate. If export exceeds import, surplus carries forward as credits. Minimum monthly charges still apply.</p></div>
              <div className="blog-faq-item"><h3>How long does net metering setup take?</h3><p>15-30 days after solar installation, including DISCOM application, inspection, meter installation, and commissioning.</p></div>
              <div className="blog-faq-item"><h3>What happens to excess credits at year-end?</h3><p>Surplus credits may be compensated at APPC rate by DISCOM. However, it's best to size your system to match consumption for maximum financial benefit.</p></div>
            </div>

            <div className="blog-author-box"><h3>About EKOSYS Solar</h3><p>EKOSYS handles complete net metering setup as part of every on-grid solar installation in Bihar. Our team coordinates with BSPHCL for seamless commissioning. <Link to="/about">Learn more →</Link></p></div>
            <div className="blog-related"><h3>Related Articles</h3><div className="blog-related-grid">
              <Link to="/blog/how-solar-reduces-electricity-bill" className="blog-related-card"><span className="blog-related-tag">Savings Guide</span><h4>How Solar Reduces Electricity Bill</h4></Link>
              <Link to="/blog/solar-subsidy-in-bihar" className="blog-related-card"><span className="blog-related-tag">Subsidy Guide</span><h4>Solar Subsidy in Bihar 2025</h4></Link>
              <Link to="/blog/rooftop-solar-guide" className="blog-related-card"><span className="blog-related-tag">Installation Guide</span><h4>Rooftop Solar Guide 2025</h4></Link>
            </div></div>
          </div>
        </div>
      </article>
    </>
  );
}
