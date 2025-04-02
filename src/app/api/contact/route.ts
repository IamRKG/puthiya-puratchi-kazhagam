import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data,"data");
    // Store data in database
    // Example using your preferred database client
    
    return NextResponse.json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error, message: 'Failed to submit form' }, { status: 500 });
  }
}
