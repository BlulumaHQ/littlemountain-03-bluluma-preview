import { useI18n } from '@/lib/i18n';
import drWu from '@/assets/team/dr-wu.png';
import drOgura from '@/assets/team/dr-ogura.jpg';
import drYip from '@/assets/team/dr-yip.jpg';
import drHsu from '@/assets/team/dr-hsu.jpg';
import drCheng from '@/assets/team/dr-cheng.png';


const dentists = [
  {
    name: 'Dr. Patrick Wu',
    title: 'D.M.D.',
    credentials: [
      'University of Pennsylvania, School of Dental Medicine, 2009',
      'Clinical Assistant Professor, University of British Columbia',
      'Associate Fellow, American Association of Implant Dentistry',
    ],
    bioKey: 'team.drwu.bio',
    photo: drWu,
  },
  {
    name: 'Dr. Yukari Ogura',
    title: 'D.D.S., Ph.D.',
    credentials: [
      'Nihon University, D.D.S., 2008',
      'Nihon University, Ph.D. in Dental Materials and Adhesives, 2012',
      'National Dental Examining Board of Canada, 2020',
    ],
    bioKey: 'team.drogura.bio',
    photo: drOgura,
  },
  {
    name: 'Dr. Jacqueline Yip',
    title: 'D.M.D.',
    credentials: [
      'McGill University, Doctor of Dental Medicine, 2016',
    ],
    bioKey: 'team.dryip.bio',
    photo: drYip,
  },
  {
    name: 'Dr. Ivy Hsu',
    title: 'D.D.S.',
    credentials: [
      'Cardinal Herrera University, Spain, 2014',
      'National Dental Examining Board of Canada, 2018',
    ],
    bioKey: 'team.drhsu.bio',
    photo: drHsu,
  },
  {
    name: 'Dr. Kathy Cheng',
    title: 'D.D.S.',
    credentials: [
      'Taipei Medical University, 1994',
      'National Dental Examining Board of Canada, 2018',
    ],
    bioKey: 'team.drcheng.bio',
    photo: drCheng,
  },
];

const TeamSection = () => {
  const { t } = useI18n();

  return (
    <section id="our-team" className="section-padding bg-brand-cream">
      <div className="container-site">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-green text-center mb-12">
          {t('team.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 px-4 sm:px-4 md:gap-8 md:px-0">
          {dentists.map((d) => (
            <div
              key={d.name}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-5 sm:p-0"
            >
              {/* Unified content column: image + text share same boundaries */}
              <div className="sm:p-3 md:p-6 sm:bg-white sm:border-b" style={{ borderColor: '#e5e5e5' }}>
                <div className="w-full aspect-[3/4] overflow-hidden rounded-md sm:rounded-none">
                  <img
                    src={d.photo}
                    alt={`${d.name}, ${d.title} at Little Mountain Dental Centre in Vancouver`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="pt-5 sm:pt-0 sm:p-3 md:p-4">
                <h3 className="font-heading text-[19px] sm:text-base lg:text-lg font-semibold text-foreground leading-snug">{d.name}</h3>
                <p className="text-[14px] sm:text-sm text-brand-green font-medium mt-1 mb-3 sm:mb-2">{d.title}</p>
                {d.credentials.length > 0 && (
                  <ul className="text-[14px] leading-[1.55] sm:text-xs sm:leading-normal text-muted-foreground mb-3 sm:mb-2 space-y-1 sm:space-y-0.5">
                    {d.credentials.map((c) => (
                      <li key={c}>– {c}</li>
                    ))}
                  </ul>
                )}
                <p className="text-[16px] leading-[1.65] sm:text-sm sm:leading-relaxed text-muted-foreground">{t(d.bioKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
