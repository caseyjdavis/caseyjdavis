import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>", // You'll change this after domain verification
        to: "casey.j.davis@gmail.com",
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
      });

      // Log successful submission
      console.log("Contact form submission sent:", {
        name,
        email,
        company,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { success: true, message: "Message sent successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again or contact directly via email." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}