const axios = require('axios');
const qs = require('qs');

/**
 * Sends lead data to the configured Google Sheet Web App.
 * @param {Object} data - The lead data
 * @param {String} source - Where the lead came from
 */
const sendToGoogleSheet = async (data, source) => {
  // Use the provided Google Apps Script Web App URL
  const sheetUrl = process.env.GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbwKUW1X4ndyU4O-DdL-fWfddhN_Bd1R5l2q3VRq747D0of_oHSrR2pbWaBkh4Oau_K8/exec';

  try {
    const payload = {
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      city: data.city || '',
      enquiryType: data.enquiryType || data.subject || '',
      requirement: data.requirement || data.message || '',
      source: source
    };

    // Google Apps Script is extremely unreliable with POST bodies. 
    // The most bulletproof way to guarantee e.parameter receives the data 
    // is to send it directly in the URL query string.
    const urlWithParams = `${sheetUrl}?${qs.stringify(payload)}`;
    await axios.post(urlWithParams, {});

    // Alternatively, sending as form-urlencoded which is ultra-compatible with basic Apps Scripts:
    // await axios.post(sheetUrl, qs.stringify(payload), {
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    // });
    
    console.log(`✅ Lead successfully sent to Google Sheet (${source})`);
  } catch (error) {
    // Google scripts sometimes redirect with a 302 to an HTML page after a successful POST, which axios might see as an error if it fails to follow
    if (error.response && error.response.status === 302) {
      console.log(`✅ Lead successfully sent to Google Sheet (${source}) [302 Redirected]`);
    } else {
      console.error('⚠️ Failed to send lead to Google Sheet:', error.message);
    }
  }
};

module.exports = { sendToGoogleSheet };
