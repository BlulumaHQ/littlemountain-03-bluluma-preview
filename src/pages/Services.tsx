import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import implantsImg from '@/assets/services/dental-implant-model-and-instruments.webp';
import orthodonticsImg from '@/assets/services/braces-model-and-clear-aligner.webp';
import pediatricImg from '@/assets/services/child-in-dental-chair.webp';
import estheticsImg from '@/assets/services/smiling-patient-in-dental-chair.webp';
import restorativesImg from '@/assets/services/restorative-dental-instruments.webp';
import maintenanceImg from '@/assets/services/dentist-examining-adult-patient.webp';

const serviceData = [
  { id: 'implants', titleKey: 'services.implants', descKey: 'service.implants.desc', image: implantsImg, alt: { en: 'Dental implant model beside a tray of instruments', zh: '牙科器械托盤旁的人工植牙模型', ja: '器具トレーの隣に置かれたインプラント模型' } },
  { id: 'orthodontics', titleKey: 'services.orthodontics', descKey: 'service.orthodontics.desc', image: orthodonticsImg, alt: { en: 'Braces on a model of teeth beside a clear aligner', zh: '裝有牙套的牙齒模型與透明矯正器', ja: '矯正装置を付けた歯の模型と透明なマウスピース' } },
  { id: 'pediatric', titleKey: 'services.pediatric', descKey: 'service.pediatric.desc', image: pediatricImg, alt: { en: 'Smiling child in a dental chair with a clinician', zh: '牙科椅上微笑的孩子與旁邊的醫護人員', ja: '歯科用チェアで笑顔を見せる子どもと歯科スタッフ' } },
  { id: 'esthetics', titleKey: 'services.esthetics', descKey: 'service.esthetics.desc', image: estheticsImg, alt: { en: 'Smiling adult patient in a dental chair', zh: '坐在牙科椅上微笑的成人患者', ja: '歯科用チェアで笑顔を見せる成人患者' } },
  { id: 'restoratives', titleKey: 'services.restoratives', descKey: 'service.restoratives.desc', image: restorativesImg, alt: { en: 'Dental instruments on a tray beside a treatment chair', zh: '牙科椅旁托盤上的牙科器械', ja: '診療用チェアの横のトレーに並ぶ歯科器具' } },
  { id: 'maintenance', titleKey: 'services.maintenance', descKey: 'service.maintenance.desc', image: maintenanceImg, alt: { en: 'Clinician examining a patient in a dental chair', zh: '醫護人員為牙科椅上的患者檢查', ja: '歯科用チェアの患者を診察する歯科スタッフ' } },
];

const IMPLANT_CTA: Record<string, string> = {
  en: 'Learn More About Dental Implants',
  zh: '了解更多人工植牙資訊',
  ja: 'インプラント治療の詳細を見る',
};

const Services = () => {
  const { t, lang } = useI18n();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerOffset = 80;
          const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title="Dental Services | Little Mountain Dental Centre Vancouver"
        description="Implants, orthodontics, pediatric, esthetic, restorative, and preventive dental services at Little Mountain Dental Centre in Vancouver."
        canonicalPath="/services"
      />
      <PageHeader title={t('services.title')} subtitle={t('services.subtitle')} />
      <div className="container-site section-padding">
        <div className="space-y-20">
          {serviceData.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-4">
                  {t(s.titleKey)}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{t(s.descKey)}</p>
                {s.id === 'implants' && (
                  <Link
                    to="/services/dental-implants"
                    className="inline-flex items-center mt-5 text-brand-green font-medium text-sm tracking-wider uppercase border-b border-brand-green/40 hover:border-brand-green transition-colors"
                  >
                    {IMPLANT_CTA[lang] ?? IMPLANT_CTA.en}
                  </Link>
                )}
              </div>
              <div className={`rounded-lg overflow-hidden shadow-md ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <img
                  src={s.image}
                  alt={s.alt[lang]}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
