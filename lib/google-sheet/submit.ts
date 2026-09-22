interface SheetData {
  timestamp: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  enquiryType: string;
  requirements: string;
  source: string;
  page: string;
}

export async function submitToGoogleSheet(data: SheetData): Promise<boolean> {
  const sheetUrl = process.env.GOOGLE_SHEET_URL;

  if (!sheetUrl) {
    console.error("GOOGLE_SHEET_URL not configured");
    return false;
  }

  try {
    // CRITICAL FIX:
    // Google Apps Script's doPost(e) reads e.parameter — which ONLY works
    // when the request body is application/x-www-form-urlencoded (NOT JSON).
    // Sending JSON body causes e.parameter to be empty → all cells blank.
    // Fix: send as URL-encoded form data instead.
    const params = new URLSearchParams({
      timestamp: data.timestamp,
      date: data.timestamp,
      name: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      enquiryType: data.enquiryType,
      service: data.enquiryType,
      requirement: data.requirements || "",
      requirements: data.requirements || "",
      message: data.requirements || "",
      details: data.requirements || "",
      calledStatus: "",
      thought: "",
      source: data.source,
      page: data.page,
    });

    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      redirect: "follow",
    });

    // Google Apps Script web app returns 200 after redirect on success.
    // We accept 200 or 302 as valid responses.
    if (!response.ok && response.status !== 302) {
      console.error("Google Sheet submission failed:", response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Google Sheet submission error:", error);
    return false;
  }
}
