// Sends the contact form to the Edge Function on Sony's own Supabase project (bluluma-central-cms).
// Returns the same { data, error } shape as supabase.functions.invoke so callers don't change.
const ENDPOINT = "https://uzdjwpkgldzhnoxjeyrw.supabase.co/functions/v1/lmd-contact";

export async function sendContact(body: unknown): Promise<{ data: any; error: Error | null }> {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return { data, error: new Error(data?.error || `Request failed (${res.status})`) };
    return { data, error: null };
  } catch (e) {
    return { data: null, error: e as Error };
  }
}
