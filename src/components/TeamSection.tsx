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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {dentists.map((d) => (
            <div
              key={d.name}
              className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* White frame around photo */}
              <div className="p-6 bg-white border-b" style={{ borderColor: '#e5e5e5' }}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={d.photo}
                    alt={d.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-base lg:text-lg font-semibold text-foreground">{d.name}</h3>
                <p className="text-xs text-brand-green font-medium mb-2">{d.title}</p>
                {d.credentials.length > 0 && (
                  <ul className="text-[11px] text-muted-foreground mb-2 space-y-0.5">
                    {d.credentials.map((c) => (
                      <li key={c}>– {c}</li>
                    ))}
                  </ul>
                )}
                <p className="text-xs text-muted-foreground leading-relaxed">{t(d.bioKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
