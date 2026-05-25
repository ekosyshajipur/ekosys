import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiCheckCircle, FiArrowRight, FiPhone, FiStar } from "react-icons/fi";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "../components/SchemaMarkup";
import { businessInfo } from "../data/seoData";
import { findProduct, getRelatedProducts } from "../data/productData";

// ---------------------------------------------------------------------------
// Generate product-specific FAQs from product data
// ---------------------------------------------------------------------------
function generateProductFAQs(product, categoryName) {
  return [
    {
      q: `What is the price of ${product.name} in Bihar?`,
      a: `The ${product.name} (${product.capacity}) is priced at ₹${product.price.toLocaleString("en-IN")} ${product.priceUnit}. This is the best market price available in Bihar with installation and warranty included. Contact EKOSYS for bulk pricing and additional discounts.`,
    },
    {
      q: `What warranty does the ${product.name} come with?`,
      a: `The ${product.name} comes with ${product.specs.warranty || "manufacturer warranty"}. EKOSYS also provides dedicated after-sales support and maintenance services throughout the warranty period.`,
    },
    {
      q: `Is the ${product.name} suitable for my home in Bihar?`,
      a: `Yes, the ${product.name} is designed and tested for Indian climatic conditions including Bihar's hot summers, monsoon rains, and dusty environment. Our engineers will assess your specific requirements during the free site survey to ensure this product is the right fit.`,
    },
    {
      q: `Does EKOSYS provide installation for the ${product.name}?`,
      a: `Yes, EKOSYS provides complete turnkey installation for the ${product.name} across Bihar including Hajipur, Patna, Muzaffarpur, and all districts. Our certified technicians handle everything from site assessment to commissioning.`,
    },
    {
      q: `Can I get government subsidy on the ${product.name}?`,
      a: `Subsidy eligibility depends on the system type and configuration. On-grid and hybrid systems using ${categoryName} are eligible for subsidy up to ₹78,000 under PM Surya Ghar Yojana. Contact EKOSYS for detailed subsidy guidance for your specific setup.`,
    },
  ];
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const styles = `
  .product-page { color: #0f172a; }

  .product-hero {
    background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    padding: 140px 0 60px;
  }
  .product-hero-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 50px;
    align-items: center;
  }
  .product-hero-image {
    background: #fff; border-radius: 20px; padding: 30px;
    box-shadow: 0 8px 40px rgba(0,0,0,.08);
  }
  .product-hero-image img {
    width: 100%; height: auto; border-radius: 12px;
    object-fit: contain; max-height: 400px;
  }
  .product-hero-info h1 {
    font-size: 2.2rem; font-weight: 900; margin-bottom: 8px; line-height: 1.3;
  }
  .product-brand {
    color: #f59e0b; font-weight: 600; font-size: 1rem; margin-bottom: 12px;
  }
  .product-capacity-badge {
    display: inline-block; background: linear-gradient(135deg, #f59e0b, #f97316);
    color: #fff; padding: 6px 18px; border-radius: 50px;
    font-weight: 700; font-size: .9rem; margin-bottom: 16px;
  }
  .product-rating {
    display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
  }
  .product-rating .stars { color: #f59e0b; display: flex; gap: 2px; }
  .product-rating .count { color: #94a3b8; font-size: .88rem; }
  .product-price {
    font-size: 1.8rem; font-weight: 900; margin-bottom: 4px;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .product-price-unit { color: #94a3b8; font-size: .85rem; margin-bottom: 20px; }
  .product-hero-desc {
    color: #64748b; line-height: 1.8; font-size: .95rem; margin-bottom: 24px;
  }
  .product-hero-btns {
    display: flex; gap: 12px; flex-wrap: wrap;
  }

  .specs-section {
    padding: 80px 0; background: #fff;
  }
  .specs-table-wrapper {
    overflow-x: auto; border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0,0,0,.06);
  }
  .specs-table {
    width: 100%; border-collapse: collapse; min-width: 500px;
  }
  .specs-table tr:nth-child(even) { background: #f8fafc; }
  .specs-table th {
    text-align: left; padding: 14px 24px; font-weight: 700;
    color: #334155; background: #f1f5f9; width: 40%; font-size: .92rem;
    border-bottom: 1px solid #e2e8f0;
  }
  .specs-table td {
    padding: 14px 24px; color: #475569; font-size: .92rem;
    border-bottom: 1px solid #f1f5f9;
  }

  .features-section {
    padding: 80px 0; background: #f8fafc;
  }
  .features-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  }
  .feature-item {
    display: flex; align-items: flex-start; gap: 12px;
    background: #fff; border-radius: 12px; padding: 18px 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,.04);
    border: 1px solid rgba(0,0,0,.04);
    transition: all .3s;
  }
  .feature-item:hover {
    box-shadow: 0 6px 20px rgba(245,158,11,.1);
    transform: translateY(-2px);
  }
  .feature-item svg { color: #22c55e; flex-shrink: 0; margin-top: 2px; }
  .feature-item span { font-size: .92rem; color: #334155; line-height: 1.5; }

  .why-choose-product {
    padding: 80px 0;
  }
  .why-grid-product {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .why-item {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 16px; padding: 32px; text-align: center;
    transition: transform .3s;
  }
  .why-item:hover { transform: translateY(-6px); }
  .why-item .emoji { font-size: 2.2rem; margin-bottom: 14px; display: block; }
  .why-item h4 { color: #f59e0b; font-size: 1.05rem; margin-bottom: 8px; }
  .why-item p { color: #94a3b8; font-size: .88rem; line-height: 1.6; }

  .related-section {
    padding: 80px 0; background: #f8fafc;
  }
  .related-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  }
  .related-card {
    background: #fff; border-radius: 16px; overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,.06);
    transition: all .3s;
    border: 1px solid rgba(0,0,0,.04);
  }
  .related-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 36px rgba(0,0,0,.1);
  }
  .related-card-img {
    height: 180px; overflow: hidden; background: #f8fafc; padding: 12px;
  }
  .related-card-img img {
    width: 100%; height: 100%; object-fit: contain;
  }
  .related-card-info { padding: 20px; }
  .related-card-info h4 { font-size: 1.05rem; margin-bottom: 6px; }
  .related-card-info .r-price {
    color: #f59e0b; font-weight: 700; font-size: .95rem; margin-bottom: 4px;
  }
  .related-card-info .r-capacity { color: #94a3b8; font-size: .82rem; }

  .product-faq-section {
    padding: 80px 0;
  }
  .product-faq-list {
    max-width: 800px; margin: 0 auto;
  }
  .product-faq-item {
    background: #fff; border-radius: 14px; padding: 24px;
    margin-bottom: 16px;
    box-shadow: 0 2px 10px rgba(0,0,0,.04);
    border: 1px solid rgba(0,0,0,.04);
  }
  .product-faq-item h4 { font-size: 1rem; margin-bottom: 8px; color: #0f172a; }
  .product-faq-item p { color: #64748b; font-size: .9rem; line-height: 1.7; }

  .product-cta-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    text-align: center; color: #fff;
  }
  .product-cta-section h2 { font-size: 2rem; font-weight: 800; margin-bottom: 16px; }
  .product-cta-section p {
    color: rgba(255,255,255,.7); font-size: 1.05rem; margin-bottom: 32px;
    max-width: 600px; margin-left: auto; margin-right: auto;
  }
  .cta-row {
    display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .product-hero { padding: 120px 0 50px; }
    .product-hero-grid { grid-template-columns: 1fr; }
    .product-hero-info h1 { font-size: 1.6rem; }
    .product-price { font-size: 1.4rem; }
    .features-grid { grid-template-columns: 1fr; }
    .why-grid-product { grid-template-columns: 1fr; }
    .related-grid { grid-template-columns: 1fr; }
    .product-cta-section h2 { font-size: 1.5rem; }
  }
`;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function ProductPage() {
  const { category, productSlug } = useParams();
  const { category: catData, product } = findProduct(category, productSlug);

  // Redirect if product not found
  if (!catData || !product) {
    return <Navigate to="/products" replace />;
  }

  const canonicalUrl = `${businessInfo.url}/products/${category}/${product.slug}`;
  const productFAQs = generateProductFAQs(product, catData.name);
  const relatedProducts = getRelatedProducts(category, product.slug);

  const openPopup = () => window.dispatchEvent(new Event("openPopup"));

  // Build star icons
  const starCount = Math.round(product.ratingValue || 4.8);
  const starsArr = Array.from({ length: 5 }, (_, i) => i < starCount);

  return (
    <div className="product-page">
      <Helmet>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
        <meta
          name="keywords"
          content={`${product.name}, ${product.capacity}, ${product.brand}, solar ${catData.name} Bihar, ${product.name} price, EKOSYS`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={product.metaTitle} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${businessInfo.url}${product.image}`} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <style>{styles}</style>
      </Helmet>

      <ProductSchema
        product={{
          name: product.name,
          description: product.description,
          image: `${businessInfo.url}${product.image}`,
          sku: product.sku,
          brand: product.brand,
          price: product.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          ratingValue: product.ratingValue,
          reviewCount: product.reviewCount,
          url: canonicalUrl,
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: businessInfo.url },
          { name: "Products", url: `${businessInfo.url}/products` },
          { name: catData.name, url: `${businessInfo.url}/products#${category}` },
          { name: product.name, url: canonicalUrl },
        ]}
      />
      <FAQSchema faqs={productFAQs} />

      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-grid">
            <div className="product-hero-image">
              <img
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="product-hero-info">
              <span className="product-brand">{product.brand}</span>
              <h1>{product.name}</h1>
              <span className="product-capacity-badge">{product.capacity}</span>

              {product.ratingValue && (
                <div className="product-rating">
                  <div className="stars">
                    {starsArr.map((filled, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        fill={filled ? "#f59e0b" : "none"}
                        stroke={filled ? "#f59e0b" : "#d1d5db"}
                      />
                    ))}
                  </div>
                  <span className="count">
                    {product.ratingValue} ({product.reviewCount} reviews)
                  </span>
                </div>
              )}

              <div className="product-price">
                ₹{product.price.toLocaleString("en-IN")}
              </div>
              <div className="product-price-unit">{product.priceUnit}</div>

              <p className="product-hero-desc">{product.description}</p>

              <div className="product-hero-btns">
                <button className="btn btn-primary" onClick={openPopup}>
                  Get Best Quote <FiArrowRight />
                </button>
                <a
                  href={`https://wa.me/918757686826?text=Hi%20EKOSYS%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.capacity)}).%20Please%20share%20the%20best%20price.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  WhatsApp Inquiry
                </a>
                <a href={`tel:${businessInfo.phone}`} className="btn btn-outline">
                  <FiPhone /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="specs-section">
        <div className="container">
          <h2 className="section-title">
            Technical <span className="highlight">Specifications</span>
          </h2>
          <p className="section-subtitle">
            Detailed specs for {product.name}
          </p>

          <div className="specs-table-wrapper">
            <table className="specs-table">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            Key <span className="highlight">Features</span>
          </h2>
          <p className="section-subtitle">
            Why the {product.name} stands out
          </p>

          <div className="features-grid">
            {product.features.map((feature, i) => (
              <div className="feature-item" key={i}>
                <FiCheckCircle size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Product */}
      <section className="why-choose-product">
        <div className="container">
          <h2 className="section-title">
            Why Choose <span className="highlight">This Product</span>
          </h2>
          <p className="section-subtitle">
            Backed by EKOSYS quality assurance and after-sales support
          </p>

          <div className="why-grid-product">
            <div className="why-item">
              <span className="emoji">🏆</span>
              <h4>Premium Quality</h4>
              <p>
                Only Tier-1, BIS/ALMM certified products. Tested for Indian climate
                and backed by manufacturer warranty.
              </p>
            </div>
            <div className="why-item">
              <span className="emoji">🔧</span>
              <h4>Professional Installation</h4>
              <p>
                Our certified technicians handle complete installation, commissioning,
                and net metering setup across Bihar.
              </p>
            </div>
            <div className="why-item">
              <span className="emoji">📋</span>
              <h4>Subsidy Assistance</h4>
              <p>
                We handle all government subsidy paperwork, approvals, and
                net metering applications on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-section">
          <div className="container">
            <h2 className="section-title">
              Related <span className="highlight">Products</span>
            </h2>
            <p className="section-subtitle">
              Other {catData.name.toLowerCase()} you might be interested in
            </p>

            <div className="related-grid">
              {relatedProducts.map((rp) => (
                <Link
                  to={`/products/${category}/${rp.slug}`}
                  className="related-card"
                  key={rp.slug}
                >
                  <div className="related-card-img">
                    <img src={rp.image} alt={rp.name} loading="lazy" decoding="async" />
                  </div>
                  <div className="related-card-info">
                    <h4>{rp.name}</h4>
                    <div className="r-price">₹{rp.price.toLocaleString("en-IN")} {rp.priceUnit}</div>
                    <div className="r-capacity">{rp.capacity}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product FAQs */}
      <section className="product-faq-section">
        <div className="container">
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <div className="product-faq-list">
            {productFAQs.map((faq, i) => (
              <div className="product-faq-item" key={i}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section">
        <div className="container">
          <h2>
            Interested in the <span className="highlight">{product.name}</span>?
          </h2>
          <p>
            Get the best price, free installation, and government subsidy assistance
            from Bihar's trusted solar company.
          </p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={openPopup}>
              Get Free Quote <FiArrowRight />
            </button>
            <a
              href={`https://wa.me/918757686826?text=Hi%20EKOSYS%2C%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ borderColor: "#22c55e", color: "#22c55e" }}
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${businessInfo.phone}`}
              className="btn btn-outline"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              <FiPhone /> Call +91-8757686826
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
