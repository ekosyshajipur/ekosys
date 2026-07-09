const fs = require('fs');
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

// Update all lastmod dates
sitemap = sitemap.replace(/2026-05-25/g, '2026-07-09');

// Add /home
const homeUrl = `
  <url>
    <loc>https://ekosys.in/home</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
    <image:image>
      <image:loc>https://ekosys.in/images/hero-banner.webp</image:loc>
      <image:title>EKOSYS Solar EPC Solutions Bihar</image:title>
    </image:image>
  </url>`;
sitemap = sitemap.replace('</url>', '</url>' + homeUrl);

// Add missing blog posts
const blogPosts = `
  <url>
    <loc>https://ekosys.in/blog/bihar-solar-revolution</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ekosys.in/blog/free-solar-panel-scheme</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
sitemap = sitemap.replace('<!-- ═══════ SEO Landing Pages ═══════ -->', blogPosts + '\n\n  <!-- ═══════ SEO Landing Pages ═══════ -->');

// Add Facade pages
const facadePages = `
  <!-- ═══════ Architectural Facade Pages ═══════ -->
  <url>
    <loc>https://ekosys.in/facade</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ekosys.in/facade/structural-glazing</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ekosys.in/facade/curtain-walls</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ekosys.in/facade/acp-cladding</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ekosys.in/facade/glass-facade</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ekosys.in/facade/aluminium-facade</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- ═══════ HTML Sitemap ═══════ -->
  <url>
    <loc>https://ekosys.in/sitemap</loc>
    <lastmod>2026-07-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
sitemap = sitemap.replace('</urlset>', facadePages + '\n</urlset>');

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap updated.');
