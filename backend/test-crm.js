const axios = require('axios');
require('dotenv').config();

const testUrls = async () => {
    const crmKey = process.env.CRM_API_KEY || '0029-5F084271-7418-448C-B4BD-7A8C54250472-7028';
    
    // According to screenshot, 'Business' and 'Name' are mandatory
    const payloads = [
        {
            Business: "Test Business",
            Name: "Test User",
            Mobile: "9876543210",
            Email: "test@ekosys.in"
        },
        {
            business: "Test Business",
            name: "Test User",
            mobile: "9876543210",
            email: "test@ekosys.in"
        },
        {
            BusinessName: "Test Business",
            ContactPerson: "Test User",
            MobileNo: "9876543210"
        },
        {
            company_name: "Test Business",
            first_name: "Test",
            last_name: "User",
            phone: "9876543210"
        },
        {
            "Business": "Test",
            "FirstName": "John",
            "LastName": "Doe",
            "Mobile": "+919876543210"
        }
    ];
    
    const endpoints = [
        'https://biziverse.com/api/lead',
        'https://biziverse.com/api/leads',
        'https://biziverse.com/api/Lead',
        'https://biziverse.com/api/AddLead',
        'https://biziverse.com/api/v1/lead',
        'https://biziverse.com/api/crm/lead',
        'https://biziverse.com/webhook/lead'
    ];

    for (const url of endpoints) {
        for (const payload of payloads) {
            try {
                const response = await axios.post(url, payload, {
                    headers: {
                        'Authorization': `Bearer ${crmKey}`,
                        'api-key': crmKey,
                        'Content-Type': 'application/json'
                    }
                });
                console.log(`\n✅ Success on ${url}!`);
                console.log(`Payload: ${JSON.stringify(payload)}`);
                console.log(`Response:`, response.data);
                return;
            } catch(e) {
                // Ignore 404s to keep output clean, print 500s or others
                if (e.response && e.response.status !== 404) {
                    console.log(`❌ Error ${e.response.status} on ${url} with ${JSON.stringify(payload)}`);
                }
            }
        }
    }
    console.log("All combinations failed.");
};
testUrls();
