import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Waitlist } from "@/lib/models/waitlist";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    await connectDB();

    // Save email to database
    await Waitlist.create({ email });

    // Send confirmation email with Resend
    await resend.emails.send({
      from: "waitlist@yourdomain.com",
      to: email,
      subject: "You're on the waitlist! 🚀",
      html: `<p>Hey there! 🎉 You're officially on our waitlist. Stay tuned for updates.</p>`,
    });

    return NextResponse.json({ message: "Email added to waitlist!" }, { status: 201 });
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}