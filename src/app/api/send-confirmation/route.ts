import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;


export async function POST(request: Request) {

  try {
   
    const { email, name } = await request.json();

   
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
      from: '"புதிய புரட்சி கழகம்" <radhacreative@gmail.com>',
      to: email,
      subject: 'தொடர்பு கொண்டமைக்கு நன்றி',
      html: `
        <h2>வணக்கம் ${name},</h2>
        <p>எங்களுடன் தொடர்பு கொண்டமைக்கு நன்றி. விரைவில் உங்களை தொடர்பு கொள்கிறோம்.</p>
        <br>
        <p>நன்றி,</p>
        <p>புதிய புரட்சி கழகம்</p>
      `,
    });

    return NextResponse.json({ message: 'Confirmation email sent' });
  } catch (error) {
    return NextResponse.json({ error: error, message: 'Failed to send email' }, { status: 500 });
  }
}
