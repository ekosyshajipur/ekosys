const axios = require('axios');
const qs = require('qs');

/**
 * Sends lead data to the configured CRM.
 * It uses the CRM_API_URL and CRM_API_KEY from environment variables.
 * @param {Object} data - The lead data (name, email, phone, subject, message, etc)
 * @param {String} source - Where the lead came from (e.g. 'Contact Form', 'Popup Form')
 */
const sendToCRM = async (data, source) => {
  // Use provided API Key and URL
  const crmUrl = process.env.CRM_API_URL || 'https://biziverse.com/api/lead';
  const crmKey = process.env.CRM_API_KEY || '0029-5F084271-7418-448C-B4BD-7A8C54250472-7028';

  try {
    // Biziverse generic mapping based on "Enter Lead" screenshot fields
    const payload = {
      Business: data.name, // Fallback if no business name is provided
      Name: data.name,
      Mobile: data.phone,
      Email: data.email,
      Requirement: data.requirement || '',
      Source: source,
      City: data.city || '',
      EnquiryType: data.enquiryType || ''
    };

    // Generic POST request to the CRM webhook or API endpoint
    await axios.post(crmUrl, payload, {
      headers: {
        'Authorization': `Bearer ${crmKey}`,
        'api-key': crmKey, 
        'Content-Type': 'application/json'
      },
      timeout: 5000 // 5 seconds timeout
    });
    
    console.log(`✅ Lead successfully sent to CRM (${source})`);
  } catch (error) {
    console.error('⚠️ Failed to send lead to CRM. API returned error:', error.message);
    if (error.response && error.response.status >= 500 && crmUrl.includes('biziverse.com/api/lead')) {
      console.log('---');
      console.log('🚨 BIZIVERSE CONFIGURATION REQUIRED:');
      console.log('The URL "https://biziverse.com/api/lead" is a placeholder and Biziverse is rejecting it (Error 500).');
      console.log('To fix this:');
      console.log('1. Go to your Biziverse Dashboard.');
      console.log('2. Click "Integrate & Import" under "Import Leads".');
      console.log('3. Look for "Website Integration" or "Webhook API".');
      console.log('4. Copy the unique URL they provide.');
      console.log('5. Paste it in your backend/.env file as CRM_API_URL=your_unique_url');
      console.log('6. Restart the backend server.');
      console.log('---');
    }
    // We don't throw the error so that it doesn't break the main flow (saving to MongoDB/sending emails)
  }
};

module.exports = { sendToCRM };
