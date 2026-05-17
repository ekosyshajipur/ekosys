const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow any origin that is related to the project (localhost, devtunnels, vercel, ekosys)
    if (!origin || /localhost/.test(origin) || /devtunnels\.ms/.test(origin) || /vercel\.app/.test(origin) || /northflank\.app/.test(origin) || /ekosys\.in/.test(origin) || /onrender\.com/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());


const helmet = require('helmet');
app.use(helmet());

// MongoDB Connection
mongoose.set('bufferCommands', false);
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/solarDB';
mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.log('❌ MongoDB Connection Error:', err.message));

// Routes
const contactRoutes = require('./src/routes/contact.routes');
const enquiryRoutes = require('./src/routes/enquiry.routes');
const newsletterRoutes = require('./src/routes/newsletter.routes');
const popupRoutes = require('./src/routes/popup.routes');

app.use('/api/contact', contactRoutes);
app.use('/api/enquiry', enquiryRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/popup', popupRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'EKOSYS Solar API is running' });
});

app.get('/', (req, res) => {
  res.json({
    message: "EKOSYS Solar API is running 🚀",
    status: "success"
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
