import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
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
    <>
      <PageHeader title={t('contact.title')} subtitle={t('contact.subtitle')} compact />
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="space-y-6">
              <a href="tel:6048745111" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Phone size={20} className="text-primary" />
                <span>(604) 874-5111</span>
              </a>
              <a href="mailto:info@littlemountaindental.ca" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Mail size={20} className="text-primary" />
                <span>info@littlemountaindental.ca</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5" />
                <span>#208 – 4818 Main Street, Vancouver, BC</span>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.8!2d-123.1!3d49.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE0JzI0LjAiTiAxMjPCsDA2JzAwLjAiVw!5e0!3m2!1sen!2sca!4v1"
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
                <input type="hidden" name="site_name" value="Little Mountain Dental Centre" />
                <input type="hidden" name="client_name" value="Little Mountain Dental" />
                <input type="hidden" name="mode" value="2" />
                <input type="hidden" name="source_url" value="https://littlemountaindental.ca/" />

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
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase py-3 rounded-md hover:bg-brand-green-dark transition-colors"
                >
                  {t('contact.send')}
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
