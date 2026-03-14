import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'zh';

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.home': { en: 'Home', zh: '首頁' },
  'nav.office': { en: 'Our Office', zh: '我們的診所' },
  'nav.team': { en: 'Our Team', zh: '我們的團隊' },
  'nav.services': { en: 'Our Services', zh: '我們的服務' },
  'nav.contact': { en: 'Contact', zh: '聯絡我們' },
  'nav.lang': { en: '中文', zh: 'EN' },
  'nav.bookNow': { en: 'Book Now', zh: '立即預約' },

  // Hero
  'hero.title': { en: 'Enjoy a New Level of Comfort and Care', zh: '享受全新水平的\n舒適和護理' },
  'hero.cta1': { en: 'Book Now', zh: '立即預約' },
  'hero.cta2': { en: 'Our Services', zh: '我們的服務' },
  'hero.cta.line1': { en: 'New Patients Welcome', zh: '歡迎新病患' },
  'hero.cta.line2': { en: 'Modern family dental care in Vancouver', zh: '溫哥華現代家庭牙科照護' },
  'hero.cta.line3': { en: 'Book your visit today', zh: '立即預約看診' },

  // Insurance
  'insurance.title': { en: 'We Accept Most Dental Insurance Plans', zh: '接受大部分牙科保險' },
  'insurance.subtitle': { en: 'Direct Billing Available', zh: '可協助直接向保險公司申請理賠' },

  // Welcome
  'welcome.title': { en: 'Welcome to Little Mountain Dental Centre', zh: '歡迎來到小山牙科中心' },
  'welcome.text': { en: 'Welcome to Little Mountain Dental Centre. Our friendly team is committed to providing you with the highest level of professional services and personalized care in a warm and welcoming environment. We believe that building strong relationship with our patients is the key to exceptional dental care, and we look forward to knowing you and your unique needs. Thank you for choosing Little Mountain Dental in achieving your optimal oral health.', zh: '歡迎來到小山牙科中心。我們友善的團隊致力於在溫馨友好的環境中為您提供最高水平的專業服務和個性化護理。我們相信與患者建立牢固的關係是卓越牙科護理的關鍵，我們期待了解您和您的獨特需求。感謝您選擇小山牙科來實現您的最佳口腔健康。' },

  // Team
  'team.title': { en: 'Our Dedicated Dentists', zh: '我們的專業牙醫' },

  // Doctor bios
  'team.drwu.bio': {
    en: 'Dr. Patrick Wu graduated with honours from the University of Pennsylvania School of Dental Medicine. After practicing dentistry in New Jersey for four years, he returned to his hometown of Vancouver in 2012. Dr. Wu provides comprehensive dental care for patients of all ages and has special interests in implant dentistry, orthodontics, pediatric dentistry, and complex restorative treatments.',
    zh: 'Dr. Patrick Wu 以優異成績畢業於 University of Pennsylvania School of Dental Medicine。在 New Jersey 執業四年後，於2012年回到家鄉溫哥華。Dr. Wu 為各年齡層的患者提供全面的牙科護理，並對種植牙、矯正牙科、兒童牙科及複雜修復治療有特別的興趣。'
  },
  'team.drogura.bio': {
    en: 'Dr. Yukari Ogura received her dental degree and Ph.D. from Nihon University in Japan, specializing in dental materials and adhesives. Before relocating to Vancouver, she practiced pediatric dentistry in Tokyo and was highly appreciated by children and their families. Dr. Ogura focuses on restorative dentistry, aesthetics, and endodontic treatment while providing attentive and compassionate care.',
    zh: 'Dr. Yukari Ogura 在日本 Nihon University 取得牙科學位和博士學位，專攻牙科材料與黏合劑。在移居溫哥華之前，她在東京從事兒童牙科，深受孩子們和家長的喜愛。Dr. Ogura 專注於修復牙科、美學牙科及根管治療，同時提供細心且富有同理心的護理。'
  },
  'team.dryip.bio': {
    en: 'Dr. Jacqueline Yip graduated from McGill University in 2016 and practiced dentistry in Toronto for seven years before returning to Vancouver. She is dedicated to family dentistry and is known for her approachable personality and strong clinical skills. Dr. Yip enjoys building long-term relationships with patients and helping families maintain healthy smiles. She is fluent in English, Cantonese, and Mandarin.',
    zh: 'Dr. Jacqueline Yip 於2016年畢業於 McGill University，在多倫多執業七年後回到溫哥華。她專注於家庭牙科，以親切的性格和出色的臨床技術著稱。Dr. Yip 喜歡與患者建立長期關係，幫助家庭維持健康的笑容。她精通英語、粵語和普通話。'
  },
  'team.drhsu.bio': {
    en: 'Dr. Ivy Hsu received her dental degree from Cardinal Herrera University in Valencia, Spain. She later gained valuable clinical experience at Kaohsiung Chang Gung Memorial Hospital, where she developed strong skills in general and family dentistry. Dr. Hsu is detail-oriented and dedicated to providing gentle, comprehensive care for patients of all ages. She is fluent in Mandarin, Spanish, and English.',
    zh: 'Dr. Ivy Hsu 在西班牙瓦倫西亞的 Cardinal Herrera University 取得牙科學位。她之後在高雄長庚紀念醫院獲得寶貴的臨床經驗，在全科和家庭牙科方面培養了扎實的技能。Dr. Hsu 注重細節，致力於為各年齡層的患者提供溫和、全面的護理。她精通中文、西班牙語和英語。'
  },
  'team.drcheng.bio': {
    en: 'Dr. Kathy Cheng has extensive experience in general dentistry and many years of expertise providing Invisalign treatment. She is committed to patient-centered care and takes time to carefully explain treatment options and communicate with each patient. Dr. Cheng\'s calm and gentle approach helps patients feel relaxed and confident throughout their dental visits.',
    zh: 'Dr. Kathy Cheng 在全科牙科方面擁有豐富的經驗，並有多年提供 Invisalign 治療的專業經驗。她致力於以患者為中心的護理，花時間仔細解釋治療方案並與每位患者溝通。Dr. Cheng 沉穩溫和的方式讓患者在整個看診過程中感到放鬆和安心。'
  },

  // Services
  'services.title': { en: 'Our Comprehensive Services', zh: '我們的綜合服務' },
  'services.subtitle': { en: 'We have the knowledge and experience to achieve your optimal oral health.', zh: '我們擁有知識和經驗，為您實現最佳口腔健康。' },
  'services.implants': { en: 'Implants', zh: '種植牙' },
  'services.orthodontics': { en: 'Orthodontics', zh: '矯正牙科' },
  'services.pediatric': { en: 'Pediatric', zh: '兒童牙科' },
  'services.esthetics': { en: 'Esthetics', zh: '美容牙科' },
  'services.restoratives': { en: 'Restoratives', zh: '修復牙科' },
  'services.maintenance': { en: 'Maintenance', zh: '牙齒維護' },

  // Service short descriptions
  'services.implants.short': { en: 'Stable, secure tooth replacement', zh: '穩定安全的牙齒替換方案' },
  'services.orthodontics.short': { en: 'Align your smile beautifully', zh: '打造整齊美麗的笑容' },
  'services.pediatric.short': { en: 'Gentle care for young smiles', zh: '為孩子提供溫柔的牙科護理' },
  'services.esthetics.short': { en: "Enhance your smile's appearance", zh: '提升您的笑容美感' },
  'services.restoratives.short': { en: 'Repair and restore your teeth', zh: '修復您的牙齒健康' },
  'services.maintenance.short': { en: 'Keep your oral health on track', zh: '維持您的口腔健康' },

  // Reviews
  'reviews.title': { en: 'What Our Patients Say', zh: '患者的評價' },
  'reviews.subtitle': { en: 'Read reviews from our valued patients', zh: '閱讀我們尊貴患者的評價' },
  'reviews.rating': { en: '5.0 Average Rating', zh: '5.0 平均評分' },
  'reviews.based': { en: 'Based on Google Reviews', zh: '基於 Google 評論' },
  'reviews.review1': { en: 'My first experience at Little Mountain Dental Centre was excellent. From the initial phone consultation, the staff explained everything clearly and helped arrange the appointment smoothly. Dr. Wu was very professional and the treatment process was painless. I felt completely comfortable during the visit.', zh: '我第一次到 Little Mountain Dental Centre 的體驗非常好。從電話諮詢開始，櫃檯人員就很仔細地解釋並協助安排預約。Dr. Wu 非常專業，整個治療過程幾乎沒有任何不適。整個看診過程讓人非常安心。' },
  'reviews.review2': { en: 'Great first visit on a family recommendation. The front desk made insurance easy, and the hygienist Irene was excellent during the cleaning. After the final check from the doctor, I felt very well taken care of.', zh: '透過家人推薦第一次來這裡看診。櫃檯人員讓保險流程非常順利，洗牙的 Irene 也非常專業。醫生最後檢查後讓我感到非常安心。' },
  'reviews.review3': { en: 'My daughter has been seeing Dr. Wu since she was very young. She is usually anxious about dental procedures, but the hygienist Anise was extremely patient and calming. The team truly cares about their patients.', zh: '我女兒從小就由 Dr. Wu 看診。她平常對牙科治療會有些緊張，但牙科衛生師 Anise 非常有耐心，也很會安撫小朋友。整個團隊都非常關心病患。' },
  'reviews.review4': { en: "I've had a fantastic experience at Little Mountain Dental Centre. The team is professional and welcoming, and Dr. Patrick explains everything clearly so the visit feels stress-free. The clinic is modern, clean, and very well organized.", zh: '我在 Little Mountain Dental Centre 的看診體驗非常好。整個團隊非常專業又親切，Dr. Patrick 會清楚解釋每個步驟，讓人完全不緊張。診所環境現代、乾淨，而且管理得非常好。' },
  'reviews.review5': { en: 'Our family doctor recommended this clinic and it has been a wonderful experience. The staff are friendly and professional, and the clinic environment is elegant and welcoming.', zh: '這間牙醫診所是家庭醫師推薦的。整個團隊非常友善且專業，診所環境也很優雅舒適。' },
  'reviews.review6': { en: 'Dr. Patrick is incredibly patient and kind. He always explains everything clearly and makes sure you feel comfortable. The staff are also very friendly and never pressure patients with unnecessary treatments.', zh: 'Dr. Patrick 非常有耐心也很親切。他會清楚解釋每一個治療步驟，讓人感到很放心。診所團隊也非常友善，不會強迫推銷不必要的治療。' },

  // Why Trust
  'trust.title': { en: 'Why Trust Little Mountain Dental Centre?', zh: '為什麼信任小山牙科中心？' },
  'trust.text': { en: 'We understand that visiting the dentist can be stressful. Our highly trained and knowledgeable team is dedicated in providing you with personalized care in a warm and inviting environment. We take time learning about your concerns and answering your questions. Let us take care of your dental needs while keeping your mind at ease.', zh: '我們理解看牙醫可能會令人緊張。我們高度訓練和知識豐富的團隊致力於在溫馨友好的環境中為您提供個性化護理。我們花時間了解您的顧慮並回答您的問題。讓我們照顧您的牙齒需求，同時讓您安心。' },

  // FAQ
  'faq.title': { en: 'Frequently Asked Questions', zh: '常見問題' },
  'faq.q1': { en: 'What services do you offer?', zh: '你們提供哪些服務？' },
  'faq.a1': { en: 'We offer a comprehensive range of dental services including implants, orthodontics, pediatric dentistry, esthetic dentistry, restorative treatments, and regular maintenance and cleanings. Our team is equipped to handle everything from routine checkups to complex procedures.', zh: '我們提供全面的牙科服務，包括種植牙、矯正牙科、兒童牙科、美容牙科、修復治療以及定期維護和清潔。我們的團隊能夠處理從例行檢查到複雜手術的所有需求。' },
  'faq.q2': { en: 'Do you accept new patients?', zh: '你們接受新病患嗎？' },
  'faq.a2': { en: 'Yes! We warmly welcome new patients of all ages. You can book your first appointment by calling us at (604) 874-5111 or by filling out our contact form. We look forward to meeting you and your family.', zh: '是的！我們熱忱歡迎所有年齡層的新病患。您可以撥打 (604) 874-5111 或填寫我們的聯絡表單預約第一次看診。我們期待認識您和您的家人。' },
  'faq.q3': { en: 'What are your office hours?', zh: '你們的診所營業時間是什麼？' },
  'faq.a3': { en: 'We are open Monday to Friday from 9:00am to 5:30pm, and Saturday from 8:30am to 5:00pm. We are closed on Sundays. Please call ahead to confirm availability or to schedule an appointment.', zh: '我們的營業時間為週一至週五上午9:00至下午5:30，週六上午8:30至下午5:00。週日休息。請提前致電確認時間或預約看診。' },
  'faq.q4': { en: 'Where are you located?', zh: '你們的診所在哪裡？' },
  'faq.a4': { en: 'We are located at #208 – 4818 Main Street, Vancouver, BC. Our clinic is easily accessible by public transit and there is street parking available nearby.', zh: '我們位於 #208 – 4818 Main Street, Vancouver, BC。診所交通便利，附近有街邊停車位。' },
  'faq.q5': { en: 'Do you offer emergency dental services?', zh: '你們提供緊急牙科服務嗎？' },
  'faq.a5': { en: 'Yes, we do our best to accommodate dental emergencies during regular office hours. If you are experiencing a dental emergency, please call us at (604) 874-5111 and we will try to see you as soon as possible.', zh: '是的，我們盡力在正常營業時間內處理牙科緊急狀況。如果您遇到牙科緊急情況，請撥打 (604) 874-5111，我們會盡快為您安排看診。' },

  // Contact
  'contact.title': { en: 'Contact Us', zh: '聯絡我們' },
  'contact.subtitle': { en: 'Our team is happy to help you and your family achieving that perfect smile!', zh: '我們的團隊很樂意幫助您和您的家人擁有完美的笑容！' },
  'contact.firstName': { en: 'First Name', zh: '名字' },
  'contact.lastName': { en: 'Last Name', zh: '姓氏' },
  'contact.name': { en: 'Full Name', zh: '全名' },
  'contact.email': { en: 'Email', zh: '電子郵件' },
  'contact.phone': { en: 'Phone', zh: '電話' },
  'contact.message': { en: 'Message', zh: '留言' },
  'contact.send': { en: 'Request a Call Back', zh: '請求回電' },
  'contact.success': { en: 'Thank you! Your message has been sent successfully.', zh: '謝謝！您的訊息已成功發送。' },
  'contact.address': { en: 'Address', zh: '地址' },
  'contact.officeHours': { en: 'Office Hours', zh: '診所時間' },

  // Footer
  'footer.tagline': { en: 'Providing exceptional dental care in a warm and welcoming environment.', zh: '在溫馨友好的環境中提供卓越的牙科護理。' },
  'footer.richmond': { en: 'Also you are welcome to visit our Richmond Office –', zh: '歡迎您也前來我們的列治文診所 –' },
  'footer.friendlyDental': { en: 'Friendly Dental Centre', zh: 'Friendly Dental Centre' },
  'footer.links': { en: 'Links', zh: '連結' },
  'footer.services': { en: 'Services', zh: '服務' },
  'footer.officeHours': { en: 'Office Hours', zh: '診所時間' },
  'footer.closed': { en: 'Closed', zh: '休息' },
  'footer.copyright': { en: '© 2026 Little Mountain Dental Centre', zh: '© 2026 小山牙科中心' },
  'footer.webdesign': { en: 'Web Design by', zh: '網頁設計：' },

  // Loading
  'loading': { en: 'Loading...', zh: '載入中...' },

  // Office page
  'office.title': { en: 'Our Office', zh: '我們的診所' },
  'office.subtitle': { en: 'Experience dental care in a modern, comfortable environment', zh: '在現代舒適的環境中體驗牙科護理' },

  // Service descriptions
  'service.implants.desc': { en: 'Dental implants are a stable and secure surgical option for replacing one or more missing teeth. A dental implant uses an artificial root usually made of titanium. The implant is surgically inserted into the upper or lower jawbone and an artificial tooth is attached to the implant. The implant acts as an anchor to hold the replacement tooth in place.', zh: '種植牙是替換一顆或多顆缺失牙齒的穩定且安全的手術選擇。種植牙使用通常由鈦製成的人工牙根。種植體通過手術植入上頜骨或下頜骨中，人工牙齒附著在種植體上。種植體充當錨固件，將替換牙齒固定到位。' },
  'service.orthodontics.desc': { en: 'Whether you are an adult or a teen, a healthy smile with bright, well-aligned teeth can be an important part of your self-image. While well-aligned teeth can make a beautiful and confident smile, the benefits can reach far beyond. Improper alignments can also affect speech, chewing and digestion. In addition, teeth that are not well aligned or overcrowded may be more difficult to clean and cause decay or gum disease.', zh: '無論您是成人還是青少年，擁有明亮、整齊牙齒的健康微笑可能是您自我形象的重要組成部分。雖然整齊的牙齒可以帶來美麗而自信的微笑，但好處遠不止於此。不正確的排列還會影響言語、咀嚼和消化。此外，排列不齊或過於擁擠的牙齒可能更難以清潔，並導致蛀牙或牙齦疾病。' },
  'service.pediatric.desc': { en: "We offer children's dentistry services to help your child maintain a healthy smile from an early age. We are experienced in working with children and will make sure your child feels comfortable and at ease during their dental visit. Our children's dentistry services include regular checkups, cleanings, and preventive care to help keep their teeth and gums healthy.", zh: '我們提供兒童牙科服務，幫助您的孩子從小保持健康的微笑。我們在與兒童合作方面經驗豐富，將確保您的孩子在看牙時感到舒適和自在。我們的兒童牙科服務包括定期檢查、清潔和預防護理，以幫助保持他們的牙齒和牙齦健康。' },
  'service.maintenance.desc': { en: 'Regular dental maintenance, including professional cleanings and comprehensive exams, is critical for maintaining good oral health. Professional cleaning is the most effective way of tackling tartar build-up and removing plaque, and regular cleanings are essential to combat tooth decay. A comprehensive dental exam is also critical to catching dental problems early and preventing them from becoming more serious and costly to treat.', zh: '定期牙齒維護，包括專業清潔和全面檢查，對於保持良好的口腔健康至關重要。專業清潔是去除牙石和牙菌斑的最有效方式，定期清潔對於預防蛀牙至關重要。全面的牙齒檢查也對及早發現牙齒問題並防止其變得更加嚴重和昂貴至關重要。' },
  'service.restoratives.desc': { en: 'Our restorative dentistry services can help repair damage caused by decay, injury, or other factors and restore your teeth to their optimal health and function. From filling cavities to root canals to repairing broken or missing teeth with dental implants or bridges, we offer a range of restorative dentistry services to help you regain your smile and confidence.', zh: '我們的修復牙科服務可以幫助修復因蛀牙、受傷或其他因素造成的損害，並將您的牙齒恢復到最佳健康狀態和功能。從填補蛀牙到根管治療，再到使用種植牙或牙橋修復破裂或缺失的牙齒，我們提供一系列修復牙科服務，幫助您重獲微笑和信心。' },
  'service.esthetics.desc': { en: "We believe that a beautiful smile can boost your confidence and improve your overall quality of life. Our esthetic dentistry services, including veneers, teeth whitening, direct composite bonding, and other cosmetic treatments, can help enhance the appearance of your teeth and give you the smile you've always wanted. From covering up chips or cracks in your teeth with veneers to brightening your smile with professional teeth whitening, we offer a range of esthetic dentistry services to help you achieve the perfect smile.", zh: '我們相信美麗的微笑可以增強您的信心並改善您的整體生活質量。我們的美容牙科服務，包括貼面、牙齒美白、直接複合樹脂修復和其他美容治療，可以幫助改善您牙齒的外觀，讓您擁有一直想要的微笑。從用貼面遮蓋牙齒上的缺口或裂縫，到用專業牙齒美白使您的微笑更加燦爛，我們提供一系列美容牙科服務，幫助您實現完美的微笑。' },
};

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lm-lang');
    return (saved === 'zh' ? 'zh' : 'en') as Lang;
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lm-lang', l);
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
