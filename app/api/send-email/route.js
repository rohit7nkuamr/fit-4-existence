import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Using Web3Forms with a public access key (no environment variable needed)
    // Get your own key from https://web3forms.com and replace below
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'c8c0e8e4-7f5d-4b3a-9c2e-1a4b5c6d7e8f', // Replace with your Web3Forms key
        subject: `New Appointment Request from ${name}`,
        from_name: 'Fit 4 Existence Website',
        email: 'fit4existence@gmail.com',
        name: name,
        reply_to: email,
        phone: phone,
        service: service,
        message: message,
      })
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } else {
      return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
