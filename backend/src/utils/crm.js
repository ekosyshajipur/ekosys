const axios = require('axios');

/**
 * Sends lead data to the configured CRM.
 * It uses the CRM_API_URL and CRM_API_KEY from environment variables.
 * @param {Object} data - The lead data (name, email, phone, subject, message, etc)
 * @param {String} source - Where the lead came from (e.g. 'Contact Form', 'Popup Form')
 */
const sendToCRM = async (data, source) => {
  const crmUrl = process.env.CRM_API_URL;
  const crmKey = process.env.CRM_API_KEY;

  // If CRM API key or URL is not configured yet, silently skip
  if (!crmKey || !crmUrl) {
    return;
  }

  try {
    const payload = {
      ...data,
      lead_source: source,
      created_at: new Date().toISOString()
    };

    // Generic POST request to the CRM webhook or API endpoint
    await axios.post(crmUrl, payload, {
      headers: {
        'Authorization': `Bearer ${crmKey}`,
        'Content-Type': 'application/json'
      },
      timeout: 5000 // 5 seconds timeout so it doesn't block the main thread for too long
    });
    
    console.log(`✅ Lead successfully sent to CRM (${source})`);
  } catch (error) {
    console.error('⚠️ Failed to send lead to CRM:', error.message);
    // We don't throw the error so that it doesn't break the main flow (saving to MongoDB/sending emails)
  }
};

module.exports = { sendToCRM };
