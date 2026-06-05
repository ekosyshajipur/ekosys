const NodeCache = require('node-cache');

// Cache to store recent submissions. TTL is 5 minutes (300 seconds).
const submissionCache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

/**
 * Middleware to prevent exact duplicate submissions within a short timeframe.
 */
const preventDuplicates = (req, res, next) => {
  const { email, phone, enquiryType } = req.body;
  
  // We need at least an email or phone to track duplicates
  if (!email && !phone) {
    return next();
  }

  // Create a unique key based on the submitted data
  const keyStr = `${email || ''}-${phone || ''}-${enquiryType || ''}`.toLowerCase();
  
  if (submissionCache.has(keyStr)) {
    return res.status(429).json({ 
      success: false, 
      message: 'You have already submitted this inquiry. Please wait a few minutes before trying again.' 
    });
  }

  // Store the key in cache
  submissionCache.set(keyStr, true);
  next();
};

module.exports = { preventDuplicates };
