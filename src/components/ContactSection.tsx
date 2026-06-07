import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Phone, MapPin, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const firstName = String(fd.get('firstName') ?? '').trim();
    const lastName = String(fd.get('lastName') ?? '').trim();
    const payload = {
      name: `${firstName} ${lastName}`.trim(),
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
    <section id="contact-section" className="section-padding bg-brand-cream">
      <div className="container-site">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green text-center mb-3">
          {t('contact.title')}
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-background rounded-lg p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-brand-green font-heading text-xl font-semibold">{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                      {t('contact.firstName')}
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                      {t('contact.lastName')}
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">
                    {t('contact.email')}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-1.5">
                    {t('contact.phone')}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase py-3 rounded-md hover:bg-brand-green-dark transition-colors"
                >
                  {t('contact.send')}
                </button>
              </form>
            )}
          </div>

          {/* Map + Info */}
          <div className="flex flex-col h-full">
            <div className="rounded-lg overflow-hidden shadow-sm flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.1005!3d49.2627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d0a0b1c1c1%3A0x1!2s620+E+Broadway%2C+Vancouver%2C+BC!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location"
              />
            </div>

            {/* Info: 3 equal columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-0.5">{t('contact.address')}</p>
                  <a
                    href="https://maps.google.com/?q=620+East+Broadway,+Vancouver,+BC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground leading-relaxed hover:text-primary transition-colors"
                  >
                    620 East Broadway<br />Vancouver, BC
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-0.5">{t('contact.phone')}</p>
                  <a href="tel:6048795612" className="text-xs text-muted-foreground hover:text-primary transition-colors">(604) 879-5612</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-0.5">{t('contact.email')}</p>
                  <a href="mailto:drphwu@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors break-all">drphwu@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
