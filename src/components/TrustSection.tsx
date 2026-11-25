import { useI18n } from '@/lib/i18n';
import trustImg1 from '@/assets/little-mountain-dental-exterior.webp';
import trustImg2 from '@/assets/dentist-showing-tooth-model-to-child.webp';

const TrustSection = () => {
  const { t, lang } = useI18n();

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={trustImg1}
              alt={({
                en: 'Street entrance to Little Mountain Dental Centre on East Broadway',
                zh: 'Little Mountain Dental Centre 位於東百老匯街的入口',
                ja: 'イースト・ブロードウェイに面した Little Mountain Dental Centre の入口',
              })[lang]}
              className="rounded-lg w-full h-64 object-cover shadow-sm"
              loading="lazy"
            />
            <img
              src={trustImg2}
              alt={({
                en: 'Dentist showing a model of teeth to a child',
                zh: '牙醫向孩子展示牙齒模型',
                ja: '子どもに歯の模型を見せる歯科医師',
              })[lang]}
              className="rounded-lg w-full h-64 object-cover shadow-sm mt-8"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green mb-6">
              {t('trust.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('trust.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
