import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Using Web3Forms API (free email service)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_KEY', // Get from https://web3forms.com
        subject: `New Appointment Request from ${name}`,
        from_name: 'Fit 4 Existence Website',
        to_email: 'fit4existence@gmail.com',
        name: name,
        email: email,
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
