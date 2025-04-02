import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;


export async function POST(request: Request) {

  try {
   
    const { email, name, phone, district, message } = await request.json();

    
    console.log('Form Data Received:', {
      email,
      name,
      phone,
      district,
      message
    });

    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
   
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });
    

    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token || ''
      },
    });

    await transporter.sendMail({
      from:email ,
      to: `புதிய புரட்சி கழகம் <${process.env.EMAIL_USER}>`,
      subject: 'தொடர்பு கொண்டமைக்கு நன்றி',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000080;">வணக்கம் ${name},</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>District:</strong> ${district}</p>
          <p><strong>Message:</strong> ${message}</p>

          <p style="font-size: 16px; line-height: 1.5;">எங்களுடன் தொடர்பு கொண்டமைக்கு நன்றி. விரைவில் உங்களை தொடர்பு கொள்கிறோம்.</p>
          <br>
          <p style="font-size: 16px;">நன்றி,</p>
          <p style="font-size: 16px; font-weight: bold; color: #000080;">புதிய புரட்சி கழகம்</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('Email sending error:', error);
    return NextResponse.json({ error: 'Email service temporarily unavailable' }, { status: 500 });
  }
}
