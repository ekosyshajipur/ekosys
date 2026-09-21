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
    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Google Apps Script returns 302 redirect on success
      // so we also accept redirect responses
      if (response.status !== 302) {
        console.error("Google Sheet submission failed:", response.status);
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error("Google Sheet submission error:", error);
    return false;
  }
}
