import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/mbdabbql', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // handle silently
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-background rounded-lg p-8 text-center">
                <p className="text-brand-green font-heading text-xl font-semibold">{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="site_name" value="Little Mountain Dental Centre" />
                <input type="hidden" name="client_name" value="Little Mountain Dental" />
                <input type="hidden" name="mode" value="2" />
                <input type="hidden" name="source_url" value="https://littlemountaindental.ca/" />

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
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.8!2d-123.1!3d49.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE0JzI0LjAiTiAxMjPCsDA2JzAwLjAiVw!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t('contact.address')}</p>
                  <p className="text-sm text-muted-foreground">#208 – 4818 Main Street, Vancouver, BC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t('contact.phone')}</p>
                  <a href="tel:6048745111" className="text-sm text-muted-foreground hover:text-primary transition-colors">(604) 874-5111</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t('contact.email')}</p>
                  <a href="mailto:info@littlemountaindental.ca" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@littlemountaindental.ca</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t('contact.officeHours')}</p>
                  <div className="text-sm text-muted-foreground space-y-0.5">
                    <p>Mon – Fri: 9:00am – 5:30pm</p>
                    <p>Saturday: 8:30am – 5:00pm</p>
                    <p>Sunday: {t('footer.closed')}</p>
                  </div>
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
