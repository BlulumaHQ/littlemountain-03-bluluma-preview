import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import { Phone, MapPin, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      phone: String(fd.get('phone') ?? '').trim(),
      message: String(fd.get('message') ?? '').trim(),
      source_url: typeof window !== 'undefined' ? window.location.href : '',
    };

    setSubmitting(true);
    setErrorMsg(null);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: payload,
      });
      if (error || (data && (data as { error?: string }).error)) {
        throw new Error(error?.message || (data as { error?: string })?.error || 'Send failed');
      }
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader title={t('contact.title')} subtitle={t('contact.subtitle')} compact />
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="space-y-6">
              <a href="tel:6048795612" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Phone size={20} className="text-primary" />
                <span>(604) 879-5612</span>
              </a>
              <a href="mailto:drphwu@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Mail size={20} className="text-primary" />
                <span>drphwu@gmail.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=620+East+Broadway,+Vancouver,+BC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-foreground hover:text-primary transition-colors"
              >
                <MapPin size={20} className="text-primary mt-0.5" />
                <span>620 East Broadway, Vancouver, BC</span>
              </a>
            </div>

            {/* Map embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.1005!3d49.2627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d0a0b1c1c1%3A0x1!2s620+E+Broadway%2C+Vancouver%2C+BC!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-brand-cream rounded-lg p-8 text-center">
                <p className="text-brand-green font-heading text-xl font-semibold">{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">


                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    {t('contact.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    {t('contact.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    {t('contact.phone')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                {errorMsg && (
                  <p className="text-sm text-destructive">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase py-3 rounded-md hover:bg-brand-green-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? '...' : t('contact.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
