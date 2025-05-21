import { NextResponse } from 'next/server';
import { socialLinks } from '@/constants';

// Formspree endpoint - you'll need to create an account and get your form ID
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, to } = body;
    const recipientEmail = to || socialLinks.email;

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name, 
        email, 
        message, 
        _replyto: email,
        _subject: `Contact form submission from ${name}`,
        recipient: recipientEmail
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
