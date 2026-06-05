const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

const test = async () => {
    try {
        const crmKey = process.env.CRM_API_KEY || '0029-5F084271-7418-448C-B4BD-7A8C54250472-7028';
        const crmUrl = process.env.CRM_API_URL || 'https://biziverse.com/api/lead';
        
        const payload = {
            name: "Test User",
            email: "corp.ekosys@gmail.com",
            phone: "8757686826",
            city: "Patna",
            enquiryType: "Solar Quote",
            requirement: "Need 5kW system",
            lead_source: "Popup Form"
        };
        
        console.log("Sending payload urlencoded");
        const response = await axios.post(crmUrl, qs.stringify(payload), {
            headers: {
                'Authorization': `Bearer ${crmKey}`,
                'api-key': crmKey,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        
        console.log("Success!", response.data);
    } catch(e) {
        console.error("Error:", e.response ? e.response.status : e.message);
    }
}
test();
