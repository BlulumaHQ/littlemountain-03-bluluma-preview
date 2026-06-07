import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Email service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json();
    const name = String(body.name ?? '').trim().slice(0, 200);
    const email = String(body.email ?? '').trim().slice(0, 320);
    const phone = String(body.phone ?? '').trim().slice(0, 50);
    const service = String(body.service ?? '').trim().slice(0, 200);
    const message = String(body.message ?? '').trim().slice(0, 5000);
    const sourceUrl = String(body.source_url ?? '').trim().slice(0, 500);

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const timestamp = new Date().toLocaleString('en-CA', {
      timeZone: 'America/Vancouver',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const rows: Array<[string, string]> = [
      ['Name', name],
      ['Phone', phone || '—'],
      ['Email', email],
      ['Service', service || '—'],
      ['Website URL', sourceUrl || '—'],
      ['Submitted', timestamp],
    ];

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; color:#1a1a1a; max-width:640px; margin:0 auto; padding:24px;">
        <h2 style="color:#2f694c; margin:0 0 16px;">New Website Inquiry</h2>
        <p style="margin:0 0 20px; color:#555;">A new contact form submission was received from the Little Mountain Dental website.</p>
        <table cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse; margin-bottom:20px;">
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:10px 12px; background:#f6f6f4; border:1px solid #eaeaea; width:140px; font-weight:600; color:#2f694c;">${k}</td>
              <td style="padding:10px 12px; border:1px solid #eaeaea;">${escapeHtml(v)}</td>
            </tr>`,
            )
            .join('')}
        </table>
        <div style="padding:16px; background:#f6f6f4; border-left:4px solid #2f694c;">
          <div style="font-weight:600; color:#2f694c; margin-bottom:6px;">Message</div>
          <div style="white-space:pre-wrap; line-height:1.55;">${escapeHtml(message)}</div>
        </div>
        <p style="margin-top:24px; font-size:12px; color:#888;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
      </div>
    `;

    const text = [
      'New Website Inquiry - Little Mountain Dental',
      '',
      ...rows.map(([k, v]) => `${k}: ${v}`),
      '',
      'Message:',
      message,
    ].join('\n');

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Little Mountain Dental Website <info@littlemountaindental.ca>',
        to: ['info@littlemountaindental.ca'],
        cc: ['sony@bluluma.com'],
        reply_to: email,
        subject: 'New Website Inquiry - Little Mountain Dental',
        html,
        text,
      }),
    });

    const data = await resendRes.json();

    if (!resendRes.ok) {
      console.error('Resend error', resendRes.status, data);
      return new Response(
        JSON.stringify({ error: 'Failed to send email.', details: data?.message ?? null }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ success: true, id: data?.id ?? null }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-contact-email error', err);
    return new Response(JSON.stringify({ error: 'Unexpected server error.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
