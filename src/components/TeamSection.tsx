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
      'Clinical assistant professor, University of British Columbia',
      'Associate Fellow, American Association of Implant Dentistry',
    ],
    bio: 'Dr. Patrick Wu, an honour graduate from the esteemed University of Pennsylvania, practiced dentistry in New Jersey for four years before returning to his hometown of Vancouver in 2012. Dr. Wu treats patients across all age groups and has profound interest in implant dentistry, orthodontics, pediatrics, and complex restorative cases.',
    photo: drWu,
  },
  {
    name: 'Dr. Yukari Ogura',
    title: 'D.D.S., Ph.D',
    credentials: [
      'Nihon University, D.D.S, 2008',
      'Nihon University Operative Dentistry, Ph.D, 2012',
      'National Dental Examining Board of Canada, 2020',
    ],
    bio: 'Dr. Yukari Ogura obtained her degree in dentistry from Nihon University in Japan and later completed her Ph.D degree in dental materials and adhesives. She has special interest in restorative dentistry, aesthetics and root canal treatment. Before moving to Vancouver, Dr. Ogura engaged her professional development practicing children\'s dentistry in Tokyo, Japan, where she was very appreciated by children and their parents. Dr. Ogura is skillful, knowledgeable, and warm-hearted. We welcome you to meet her.',
    photo: drOgura,
  },
  {
    name: 'Dr. Jacqueline Yip',
    title: 'D.M.D',
    credentials: [],
    bio: 'Dr. Jaqueline Yip graduated from McGill University in 2016 and had practiced in Toronto for seven years prior to returning to Vancouver. Dr. Yip has excellent clinical skills, is personable, and focuses on family dentistry. Dr. Yip is fluent in English, Cantonese and Mandarin.',
    photo: drYip,
  },
  {
    name: 'Dr. Ivy Hsu',
    title: 'D.D.S.',
    credentials: [
      'Cardinal Herrera University, 2014',
      'National Dental Examining Board of Canada, 2018',
    ],
    bio: 'Dr. Ivy Hsu obtained her degree in Dentistry from Cardinal Herrera University in Valencia, Spain, in 2018. She completed her practicum at Kaohsiung Chang Gung Memorial Hospital in 2020, where she gained extensive experience in general and family dentistry. Dr. Hsu is very detail-oriented and dedicated to providing gentle, comprehensive care for patients of all ages. She is fluent in Mandarin, Spanish and English. Outside of the clinic, Dr. Hsu enjoys exploring nature and spending quality time with her family.',
    photo: drHsu,
  },
  {
    name: 'Dr. Kathy Cheng',
    title: 'D.D.S.',
    credentials: [
      'Taipei Medical University, 1994',
      'National Dental Examining Board of Canada, 2018',
    ],
    bio: 'Dr. Cheng has vast experience in general dentistry and has many years of experience delivering Invisalign treatment. She is committed to providing patient-centered dental care, spending time treatment planning and communicating with patients. Her calming manner and gentle touch make patients feel at ease.',
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
                <p className="text-xs text-muted-foreground leading-relaxed">{d.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
