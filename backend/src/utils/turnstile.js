const axios = require('axios');

/**
 * Verify Cloudflare Turnstile Token
 * @param {string} token - The token received from the frontend
 * @returns {Promise<boolean>} - True if valid, false otherwise
 */
const verifyTurnstileToken = async (token) => {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!token) {
    return false;
  }

  try {
    const response = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return response.data.success;
  } catch (error) {
    console.error('Turnstile verification error:', error.message);
    return false;
  }
};

module.exports = { verifyTurnstileToken };
