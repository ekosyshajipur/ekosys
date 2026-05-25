const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

// ═══════ SECURITY MIDDLEWARE ═══════

// Helmet — sets secure HTTP headers (CSP, X-Frame, HSTS, etc.)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://biziverse.com"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// Rate limiting — prevents brute force / DDoS
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
  message: { success: false, message: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to all API routes
app.use('/api/', apiLimiter);

// Stricter rate limit for form submissions (prevent spam)
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // Only 10 form submissions per 15 min per IP
  message: { success: false, message: 'Too many submissions. Please wait before trying again.' },
});

// CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || /localhost/.test(origin) || /devtunnels\.ms/.test(origin) || /vercel\.app/.test(origin) || /northflank\.app/.test(origin) || /ekosys\.in/.test(origin) || /onrender\.com/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: '10kb' })); // Limit body size to prevent large payload attacks

// ═══════ ROUTES ═══════
const contactRoutes = require('./src/routes/contact.routes');
const enquiryRoutes = require('./src/routes/enquiry.routes');
const newsletterRoutes = require('./src/routes/newsletter.routes');
const popupRoutes = require('./src/routes/popup.routes');

// Apply form rate limiter to POST routes
app.use('/api/contact', formLimiter, contactRoutes);
app.use('/api/enquiry', formLimiter, enquiryRoutes);
app.use('/api/newsletter', formLimiter, newsletterRoutes);
app.use('/api/popup', formLimiter, popupRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'EKOSYS Solar API is running' });
});

app.get('/', (req, res) => {
  res.json({ message: "EKOSYS Solar API is running 🚀", status: "success" });
});

// Error handler — never expose stack traces in production
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔒 Rate limiting: ${process.env.RATE_LIMIT_MAX || 100} req/15min`);
  console.log(`🔗 CRM: ${process.env.CRM_API_URL ? 'Configured' : 'Not configured'}`);
});
