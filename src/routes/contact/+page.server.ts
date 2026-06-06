import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const resendApiKey = env.RESEND_API_KEY;
    if (!resendApiKey) {
      return fail(503, { error: 'Contact form is temporarily unavailable. Please email info@shopsupport.ai directly.' });
    }

    const data = await request.formData();
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const company = data.get('company') as string;
    const message = data.get('message') as string;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'noreply@shopsupport.ai',
        to: 'info@shopsupport.ai',
        subject: `New inquiry from ${name}${company ? ` · ${company}` : ''}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    if (!res.ok) {
      return fail(500, { error: 'Something went wrong. Please try again or email us directly.' });
    }

    return { success: true };
  }
};
