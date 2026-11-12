import { NextResponse } from "next/server";

interface ContactInquiryPayload {
  name: string;
  businessName?: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactInquiryPayload = await request.json();

    // Required fields validation
    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!body.email || !body.email.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!body.service || !body.service.trim()) {
      return NextResponse.json(
        { success: false, error: "Please select a service category." },
        { status: 400 }
      );
    }

    if (!body.message || !body.message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide a brief description of your project." },
        { status: 400 }
      );
    }

    // Safely log the structured inquiry for internal triage
    console.log("[itWADURA_INQUIRY_RECEIVED]:", {
      timestamp: new Date().toISOString(),
      name: body.name.trim(),
      businessName: body.businessName?.trim() || "Not provided",
      email: body.email.trim(),
      phone: body.phone?.trim() || "Not provided",
      service: body.service,
      budget: body.budget || "To be discussed",
      message: body.message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. We have received your inquiry and will be in touch within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[itWADURA_CONTACT_ERROR]:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while transmitting your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
