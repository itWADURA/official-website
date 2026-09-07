import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  type: string;
  budget: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Basic Validation
    if (!body.name || !body.email || !body.type) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields (Name, Email, and Project Type).",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Process & log inquiry
    console.log("[INQUIRY_RECEIVED]:", {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      type: body.type,
      budget: body.budget || "Not specified",
      message: body.message || "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. Our engineering team has received your inquiry and will respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again or email us directly at info@itwadura.com.",
      },
      { status: 500 }
    );
  }
}
