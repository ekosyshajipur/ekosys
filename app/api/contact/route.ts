import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { sendCustomerConfirmation, sendAdminNotification } from "@/lib/email/send";
import { submitToGoogleSheet } from "@/lib/google-sheet/submit";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request data
    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || "Invalid form submission";
      return NextResponse.json(
        { success: false, error: firstError, details: parseResult.error.issues },
        { status: 400 }
      );
    }

    const validData = parseResult.data;

    // Asynchronously submit to Google Sheet (non-blocking)
    const timestamp = new Date().toISOString();
    submitToGoogleSheet({
      timestamp,
      name: validData.name,
      phone: validData.phone,
      email: validData.email,
      city: validData.city || "Hajipur",
      enquiryType: validData.enquiryType,
      requirements: validData.requirements,
      source: "EKOSYS Corporate Website",
      page: validData.page || "Contact Form",
    }).catch((err) => {
      console.warn("Google Sheet sync warning:", err);
    });

    // Send emails if SMTP is configured (non-blocking or best effort)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      Promise.allSettled([
        sendCustomerConfirmation({
          name: validData.name,
          email: validData.email,
          phone: validData.phone,
          city: validData.city || "Hajipur",
          enquiryType: validData.enquiryType,
          requirements: validData.requirements,
        }),
        sendAdminNotification({
          name: validData.name,
          email: validData.email,
          phone: validData.phone,
          city: validData.city || "Hajipur",
          enquiryType: validData.enquiryType,
          requirements: validData.requirements,
        }),
      ]).catch((err) => {
        console.warn("Email delivery notice:", err);
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
