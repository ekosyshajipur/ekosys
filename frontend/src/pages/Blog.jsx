import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    slug: "free-solar-panel-scheme",
    title: "बिजली विभाग : घर की छत पर फ्री में लगाएंगे सोलर पैनल: पूरी जानकारी",
    excerpt: "बिजली विभाग और सरकार की इस नई योजना के तहत घर की छतों पर फ्री में सोलर पैनल लगाए जा रहे हैं। जानें कैसे आप भी इसका लाभ उठा सकते हैं।",
    date: "May 31, 2026",
    readTime: "5 min read",
    category: "सरकारी योजना",
    image: "/images/blog/free-solar-scheme.png",
    keywords: ["free solar panel", "बिजली विभाग", "bihar solar panel"]
  },
  {
    slug: "bihar-solar-revolution",
    title: "बिहार में सोलर क्रांति की तैयारी — जीविका दीदियों को मिलेगी बड़ी जिम्मेदारी",
    excerpt: "बिहार सरकार कुटीर ज्योति योजना के तहत 10 लाख घरों में सौर संयंत्र लगाने की तैयारी में है। गांवों में जीविका दीदियों को इस अभियान को आगे बढ़ाने का जिम्मा मिलेगा।",
    date: "June 1, 2026",
    readTime: "6 min read",
    category: "सरकारी योजना",
    image: "/images/blog/jeevika-solar-bihar.png",
    keywords: ["बिहार सोलर क्रांति", "कुटीर ज्योति योजना", "जीवика दीदियाँ"]
  },
  {
    slug: "benefits-of-solar-energy",
    title: "Top 10 Benefits of Solar Energy in 2025 — Why Every Home & Business Should Go Solar",
    excerpt: "Discover how solar energy can save money, reduce carbon footprint, and increase property value. A complete guide to solar energy benefits in Bihar and India.",
    date: "May 18, 2025",
    readTime: "8 min read",
    category: "Solar Education",
    image: "/images/blog/solar-panel-farm.webp",
    keywords: ["benefits of solar energy", "advantages of solar panels", "solar energy benefits in Bihar"]
  },
  {
    slug: "solar-subsidy-in-bihar",
    title: "Complete Guide to Solar Subsidy in Bihar 2025 — PM Surya Ghar Yojana Explained",
    excerpt: "Everything you need to know about government solar subsidies in Bihar. Learn how to claim up to ₹78,000 under PM Surya Ghar Muft Bijli Yojana.",
    date: "May 16, 2025",
    readTime: "10 min read",
    category: "Subsidy Guide",
    image: "/images/blog/bihar-village-solar.webp",
    keywords: ["solar subsidy Bihar", "PM Surya Ghar Yojana", "government solar subsidy"]
  },
  {
    slug: "how-solar-reduces-electricity-bill",
    title: "How Solar Energy Reduces Your Electricity Bill by 90% — Complete Savings Guide",
    excerpt: "Real numbers, real savings. Learn exactly how rooftop solar panels slash your monthly electricity bill and the ROI you can expect in Bihar.",
    date: "May 14, 2025",
    readTime: "7 min read",
    category: "Savings Guide",
    image: "/images/blog/solar-savings-family.webp",
    keywords: ["reduce electricity bill with solar", "solar savings", "rooftop solar benefits"]
  },
  {
    slug: "best-solar-company-in-bihar",
    title: "Best Solar Company in Bihar 2025 — Why EKOSYS Leads Solar Installation in Vaishali & Hajipur",
    excerpt: "Looking for the best solar company in Bihar? Compare features, services, and reviews. See why EKOSYS is the #1 rated solar installer in Vaishali.",
    date: "May 12, 2025",
    readTime: "9 min read",
    category: "Company Guide",
    image: "/images/blog/solar-installation-workers.webp",
    keywords: ["best solar company Bihar", "solar company Vaishali", "solar installation Hajipur"]
  },
  {
    slug: "rooftop-solar-guide",
    title: "Complete Rooftop Solar Guide 2025 — Installation, Cost, Subsidy & Everything You Need to Know",
    excerpt: "The ultimate guide to installing rooftop solar panels on your home or business. Step-by-step process, costs, subsidies, and tips for Bihar residents.",
    date: "May 10, 2025",
    readTime: "12 min read",
    category: "Installation Guide",
    image: "/images/blog/solar-rooftop-home.webp",
    keywords: ["rooftop solar guide", "solar installation process", "solar panels for home"]
  },
  {
    slug: "solar-panel-maintenance-tips",
    title: "Solar Panel Maintenance Guide — 10 Expert Tips for Maximum Performance",
    excerpt: "Keep your solar panels running at peak efficiency with these 10 expert maintenance tips. Cleaning schedules, inverter care, and monsoon preparation.",
    date: "May 8, 2025",
    readTime: "8 min read",
    category: "Maintenance Guide",
    image: "/images/blog/solar-maintenance-cleaning.webp",
    keywords: ["solar panel maintenance", "solar panel cleaning", "solar system maintenance tips"]
  },
  {
    slug: "solar-for-farmers-bihar",
    title: "Solar for Farmers in Bihar — PM KUSUM Scheme, Solar Pumps & 90% Subsidy Guide",
    excerpt: "Bihar farmers can get 90% subsidy on solar pumps under PM KUSUM. Complete guide to solar water pumps, application process, and earning income from solar.",
    date: "May 6, 2025",
    readTime: "10 min read",
    category: "Agriculture",
    image: "/images/blog/solar-water-pump.webp",
    keywords: ["solar for farmers Bihar", "PM KUSUM scheme", "solar water pump subsidy"]
  },
  {
    slug: "commercial-solar-bihar",
    title: "Commercial Solar for Business in Bihar — Cut Electricity Costs by 80%",
    excerpt: "Complete guide to commercial solar for Bihar businesses. ROI analysis, accelerated depreciation benefits, and case studies from factories and offices.",
    date: "May 4, 2025",
    readTime: "9 min read",
    category: "Business Guide",
    image: "/images/blog/solar-commercial-building.webp",
    keywords: ["commercial solar Bihar", "solar for business", "industrial solar installation"]
  },
  {
    slug: "net-metering-guide-bihar",
    title: "Net Metering Guide Bihar 2025 — How It Works, Application & Benefits",
    excerpt: "Everything about net metering in Bihar. How bi-directional metering works, BSPHCL application process, billing calculation, and earning from excess solar.",
    date: "May 2, 2025",
    readTime: "8 min read",
    category: "Technical Guide",
    image: "/images/blog/solar-net-meter.webp",
    keywords: ["net metering Bihar", "how net metering works", "BSPHCL net metering"]
  },
  {
    slug: "on-grid-vs-off-grid-solar",
    title: "On-Grid vs Off-Grid vs Hybrid Solar — Which is Best for You?",
    excerpt: "Detailed comparison of all three solar system types. Understand costs, features, subsidies, and find which system is perfect for your home or business.",
    date: "April 28, 2025",
    readTime: "10 min read",
    category: "Solar Education",
    image: "/images/blog/solar-rooftop-home.webp",
    keywords: ["on grid vs off grid solar", "hybrid solar system", "solar system types"]
  }
];

const sortedBlogPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

export { blogPosts };

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Solar Energy Blog — Tips, Guides & Subsidy Updates | EKOSYS</title>
        <meta name="description" content="Read expert solar energy blogs by EKOSYS. Learn about solar benefits, government subsidies in Bihar, rooftop solar guides, electricity bill savings, and more." />
        <meta name="keywords" content="solar energy blog, solar tips Bihar, solar subsidy guide, rooftop solar blog, EKOSYS blog" />
        <link rel="canonical" href="https://ekosys.in/blog" />
        <meta property="og:title" content="Solar Energy Blog — Tips, Guides & Updates | EKOSYS" />
        <meta property="og:description" content="Expert solar energy blogs covering benefits, subsidies, installation guides and savings tips for Bihar." />
        <meta property="og:url" content="https://ekosys.in/blog" />
        <meta property="og:type" content="blog" />
      </Helmet>

      <section className="page-header blog-header">
        <div className="container">
          <h1>Solar Energy <span className="highlight">Blog</span></h1>
          <p>Expert insights, guides, and tips to help you make the best solar decisions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* All Posts Grid */}
          <div className="blog-grid" style={{ marginTop: 40 }}>
            {sortedBlogPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card-link">
                <article className="blog-card">
                  <div className="blog-card-img-wrapper">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="blog-category-badge">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span>📅 {post.date}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-read-more">Read More →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* SEO Content Block */}
          <div className="blog-seo-block">
            <h2>Why Read the EKOSYS Solar Blog?</h2>
            <p>
              At EKOSYS, we believe that informed decisions lead to the best solar installations. Our blog covers everything 
              from <strong>solar energy benefits</strong> and <strong>government subsidy updates</strong> to detailed 
              <strong> rooftop solar guides</strong> and <strong>electricity bill savings tips</strong>. Whether you're a 
              homeowner in Hajipur, a business owner in Vaishali, or anyone in Bihar looking to go solar — our expert articles 
              provide the knowledge you need to make the switch confidently.
            </p>
            <div className="blog-cta-banner">
              <h3>Ready to Go Solar?</h3>
              <p>Get a free consultation and site survey from EKOSYS — Bihar's most trusted solar company.</p>
              <Link to="/contact" className="btn btn-primary">Get Free Quote →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
