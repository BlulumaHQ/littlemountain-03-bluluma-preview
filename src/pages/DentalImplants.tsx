import { useI18n } from '@/lib/i18n';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CalendarCheck, ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BOOKING_URL } from '@/lib/booking';
import implantsImg from '@/assets/services/implants.jpg';

const PHONE_DISPLAY = '(604) 879-5612';
const PHONE_TEL = 'tel:6048795612';
const SITE_URL = 'https://littlemountaindental.ca';
const PATH = '/services/dental-implants';

type L = 'en' | 'zh';

const pick = <T,>(lang: string, v: { en: T; zh: T }): T =>
  (lang === 'zh' ? v.zh : v.en);

// Small analytics helper — no-ops if no gtag/dataLayer present
const track = (event: string, params: Record<string, unknown> = {}) => {
  try {
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };
    if (typeof w.gtag === 'function') {
      w.gtag('event', event, {
        clinic: 'Little Mountain Dental Centre',
        language: params.language ?? '',
        page_path: PATH,
        ...params,
      });
    } else if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event, clinic: 'Little Mountain Dental Centre', page_path: PATH, ...params });
    }
  } catch {
    /* analytics errors must never break interactions */
  }
};

const seo = {
  en: {
    title: 'Vancouver Dental Implants | Dr. Patrick Wu | Little Mountain Dental',
    description:
      'Learn about personalized dental implant treatment in Vancouver with Dr. Patrick Wu, including digital implant planning, single-tooth implants, multiple implants and full-mouth reconstruction.',
  },
  zh: {
    title: '溫哥華人工植牙｜吳沛恆醫師｜Little Mountain Dental',
    description:
      '了解吳沛恆醫師在溫哥華提供的個人化人工植牙與缺牙重建服務，包括數位植牙規劃、單顆植牙、多顆植牙及全口重建。',
  },
};

const c = {
  h1: {
    en: 'Vancouver Dental Implants and Missing-Tooth Replacement',
    zh: '溫哥華人工植牙與缺牙重建',
  },
  heroText: {
    en: 'Restore missing teeth with personalized implant treatment from Dr. Patrick Wu at Little Mountain Dental Centre. Treatment planning may include 3D imaging, digital scanning and minimally invasive techniques based on your oral health, bone condition and individual treatment needs.',
    zh: 'Little Mountain Dental Centre 由吳沛恆醫師提供個人化人工植牙與缺牙重建評估，並根據患者的口腔健康、骨質條件及治療需求，運用3D影像、數位掃描與精準植牙規劃。',
  },
  bookCta: { en: 'Book an Implant Consultation', zh: '預約植牙諮詢' },
  callCta: { en: 'Call the Clinic', zh: '致電診所' },
  reassurance: {
    en: 'A clinical examination and appropriate imaging are required before a treatment plan or accurate fee estimate can be provided.',
    zh: '植牙治療方案與準確費用需要經過臨床檢查及適當影像評估後才能確定。',
  },

  // Section 2
  s2Title: { en: 'Experience and Credentials', zh: '植牙經驗與資歷' },
  credentials: {
    en: [
      '15+ Years of Implant Experience',
      'More Than 2,200 Implants Placed',
      'AAID Associate Fellow',
      'Digital Implant Planning',
    ],
    zh: [
      '超過15年植牙經驗',
      '累積完成2,200顆以上人工植體治療',
      'AAID Associate Fellow 資格',
      '數位化植牙規劃',
    ],
  },
  aaidNote: {
    en: 'AAID — American Academy of Implant Dentistry',
    zh: 'AAID — American Academy of Implant Dentistry（美國植牙醫學會）',
  },

  // Section 3
  s3Title: { en: 'Treatment Options', zh: '治療選擇' },
  options: {
    en: [
      {
        t: 'Single Missing Tooth',
        d: 'A single implant may replace one missing tooth without requiring the neighbouring teeth to be prepared as supports for a traditional bridge.',
      },
      {
        t: 'Multiple Missing Teeth',
        d: 'Multiple implants or an implant-supported bridge may be considered when several teeth are missing. The appropriate design depends on bone condition, bite and the number and position of missing teeth.',
      },
      {
        t: 'Full-Arch or Full-Mouth Reconstruction',
        d: 'Patients with extensive tooth loss may be assessed for implant-supported full-arch restorations or other reconstruction options. A comprehensive examination is required to determine suitability.',
      },
    ],
    zh: [
      {
        t: '單顆缺牙',
        d: '單顆植牙可以取代一顆缺失的牙齒，並可能避免為了製作傳統牙橋而磨削相鄰牙齒。',
      },
      {
        t: '多顆缺牙',
        d: '當患者缺少多顆牙齒時，可根據骨質、咬合、缺牙數量及位置，評估多顆植牙或植體支撐牙橋。',
      },
      {
        t: '全口缺牙或全口重建',
        d: '對於大範圍缺牙或全口缺牙患者，可評估植體支撐式全口修復或其他重建方式，實際適用性需要完整檢查後才能判斷。',
      },
    ],
  },
  s3Cta: {
    en: 'Find Out Whether Implants May Be Suitable for You',
    zh: '預約評估是否適合植牙',
  },

  // Section 4 — Dr Wu
  s4Title: {
    en: 'Implant Experience, Continuing Education and Careful Planning',
    zh: '豐富植牙經驗與國際專業進修',
  },
  s4Body: {
    en: [
      'For patients with missing teeth, choosing a dentist with extensive clinical experience and a strong focus on comprehensive treatment planning is an important part of implant care.',
      'Dr. Patrick Wu has remained actively involved in dental implant treatment and missing-tooth reconstruction for many years. While practising in the United States from 2009 to 2012, he pursued continuing implant education and clinical training involving implant surgery, osseointegration, bone augmentation and restorative treatment planning.',
      'After completing further education and clinical assessment, Dr. Wu earned Associate Fellow status with the American Academy of Implant Dentistry.',
      'Dr. Wu now has more than 15 years of clinical implant experience and has placed more than 2,200 dental implants. His experience includes single-tooth implants, multiple implants and more complex missing-tooth reconstruction cases.',
    ],
    zh: [
      '對於缺牙患者而言，選擇一位具有豐富臨床經驗並重視完整治療規劃的牙醫，是植牙治療的重要一環。',
      '吳沛恆醫師多年來持續投入人工植牙與缺牙重建。自2009年至2012年間於美國執業期間，吳醫師接受植牙相關進修與臨床訓練，學習植牙外科、骨整合原理、骨增量技術及缺牙重建治療。',
      '經過進修及臨床考核，吳醫師取得美國植牙醫學會 American Academy of Implant Dentistry 的 Associate Fellow 資格。',
      '至今，吳醫師已累積超過15年植牙臨床經驗，完成超過2,200顆人工植體治療，經驗涵蓋單顆植牙、多顆植牙及較複雜的缺牙重建案例。',
    ],
  },
  principlesTitle: { en: 'Treatment Principles', zh: '治療理念' },
  principles: {
    en: ['Precision', 'Safety', 'Esthetics', 'Longevity', 'Comfort'],
    zh: ['精準', '安全', '美觀', '耐久', '舒適'],
  },

  // Section 5 — Digital
  s5Title: {
    en: 'Digital Technology for Implant Assessment and Planning',
    zh: '數位科技輔助植牙評估與規劃',
  },
  s5Items: {
    en: [
      'CBCT 3D Imaging',
      'Digital Intraoral Scanning',
      'High-Resolution Digital X-Rays',
      'Computer-Assisted Implant Planning',
      'Customized Surgical Guides',
    ],
    zh: [
      '3D電腦斷層掃描',
      '數位口內掃描',
      '高解析度數位X光',
      '電腦輔助植牙規劃',
      '客製化植牙手術導板',
    ],
  },
  s5Body: {
    en: [
      'Modern implant treatment may use CBCT imaging, digital intraoral scanning and computer-assisted planning to help assess bone height, bone width and the location of important anatomical structures.',
      'In suitable cases, a customized surgical guide may help transfer the planned implant position and angle into the clinical procedure.',
    ],
    zh: [
      '現代植牙治療可運用3D電腦斷層掃描、數位口內掃描及電腦輔助規劃，協助醫師評估牙床骨的高度、寬度及重要解剖結構位置。',
      '在適合的病例中，客製化植牙手術導板可以協助醫師將術前規劃轉化到實際手術中，提高植體位置與角度的可控制性。',
    ],
  },

  // Section 6 — Minimally invasive
  s6Title: {
    en: 'A Minimally Invasive Approach When Clinically Appropriate',
    zh: '在適合情況下採用微創植牙理念',
  },
  s6Body: {
    en: [
      'Dr. Wu emphasizes careful planning and the protection of surrounding tissues. When clinically appropriate, treatment is planned to limit the surgical area and avoid unnecessary tissue trauma.',
      'Compared with a more extensive surgical approach, minimally invasive techniques may help reduce the treatment area, bleeding, swelling and postoperative discomfort. The recommended procedure, level of discomfort and recovery time will vary for each patient.',
    ],
    zh: [
      '吳醫師重視精準規劃與組織保護。在患者條件適合的情況下，會盡可能控制手術範圍並減少不必要的組織創傷。',
      '相較於較大範圍的手術方式，微創治療理念可能有助於減少傷口範圍、出血、腫脹及術後不適，但每位患者的治療方式、疼痛程度與恢復時間都可能不同。',
    ],
  },
  s6BenefitsTitle: { en: 'Possible Benefits', zh: '可能的優點' },
  s6Benefits: {
    en: [
      'Smaller treatment area',
      'Reduced tissue disturbance',
      'Potentially less swelling',
      'Potentially less postoperative discomfort',
      'A more comfortable recovery in suitable cases',
    ],
    zh: [
      '較小的手術範圍',
      '減少不必要的組織創傷',
      '可能減少術後腫脹',
      '可能降低術後不適',
      '適合病例可能有較舒適的恢復過程',
    ],
  },

  // Section 7 — Process
  s7Title: { en: 'The Implant Process', zh: '植牙療程' },
  steps: {
    en: [
      'Consultation and Examination',
      'CBCT and Digital Assessment',
      'Personalized Treatment Planning',
      'Implant Placement',
      'Healing and Osseointegration',
      'Final Crown or Restoration',
      'Maintenance and Follow-Up',
    ],
    zh: [
      '植牙諮詢與口腔檢查',
      '3D斷層與數位評估',
      '個人化治療規劃',
      '植體植入手術',
      '傷口癒合與骨整合',
      '製作牙冠或最終修復',
      '定期維護與追蹤',
    ],
  },
  s7Note: {
    en: 'Most cases require a period of healing and osseointegration after implant placement. The complete treatment time depends on extraction timing, bone condition, the need for bone grafting, implant stability and individual healing. A fixed completion date cannot be provided before examination.',
    zh: '大部分案例在植體植入後需要一段骨整合時間。完整療程時間會受到拔牙時間、骨質條件、是否需要補骨、植體穩定度及個人癒合能力影響，因此無法在未經檢查前提供固定完成日期。',
  },

  // Section 9 — Final CTA
  s9Title: {
    en: 'Not Sure Whether Dental Implants Are Right for You?',
    zh: '不確定自己是否適合植牙？',
  },
  s9Body: {
    en: 'Bone condition, oral health, bite, medical history and personal treatment goals all affect implant suitability. A complete examination and appropriate imaging are required before Dr. Patrick Wu can recommend a treatment plan.',
    zh: '骨質條件、口腔健康、咬合、身體狀況及個人治療需求都會影響植牙適用性。經過完整檢查及適當影像評估後，吳沛恆醫師才能提供合適的治療建議。',
  },

  disclaimer: {
    en: 'This page provides general information and is not a diagnosis or a substitute for an individual dental examination. Treatment recommendations, risks, healing time, fees and outcomes vary according to each patient’s condition.',
    zh: '本頁內容僅提供一般牙科資訊，不能取代個別診斷與臨床檢查。治療建議、風險、恢復時間、費用及結果會因每位患者的情況而不同。',
  },

  callShort: { en: 'Call', zh: '致電診所' },
  bookShort: { en: 'Book Consultation', zh: '預約諮詢' },
};

// FAQ data — 13 questions in 3 groups, full en + zh
type FaqItem = { q: string; a: string };
type FaqGroup = { heading: string; items: FaqItem[] };

const faq: Record<L, FaqGroup[]> = {
  en: [
    {
      heading: 'Implant Basics and Treatment Options',
      items: [
        {
          q: 'What Is the Success Rate of Dental Implants?',
          a: 'Published clinical research generally reports high long-term success for dental implants when treatment is well planned and patients follow appropriate maintenance. Individual results depend on bone condition, oral health, bite, general medical history and home care. Dr. Wu can discuss the factors that affect the long-term outcome for your specific case after a complete examination.',
        },
        {
          q: 'What Are the Differences Between Dental Implants, Bridges and Removable Dentures?',
          a: 'A dental implant replaces a missing tooth with an artificial root placed in the jawbone and a crown on top; it usually does not require altering neighbouring teeth. A traditional bridge relies on the adjacent teeth being prepared as supports. A removable denture rests on the gums and can be taken out for cleaning. Each option has different considerations regarding function, comfort, long-term bone support and cost.',
        },
        {
          q: 'How Long After an Extraction Can I Receive an Implant? Can I Still Get an Implant After a Tooth Has Been Missing for a Long Time?',
          a: 'Timing depends on the reason for the extraction, bone condition and healing. Some patients may be suitable for implant placement soon after extraction, while others benefit from a period of healing first. Long-standing tooth loss may lead to bone changes; a CBCT scan and clinical assessment can help determine whether bone grafting is needed before an implant.',
        },
        {
          q: 'What Is a Dental Implant, and What Materials Are Used for the Implant and Crown?',
          a: 'A dental implant is a small screw-shaped fixture, most commonly made from medical-grade titanium, that acts as an artificial tooth root. Over time, the implant integrates with the surrounding bone. A custom-made crown, typically zirconia or porcelain-based, is then attached to restore the visible tooth. The specific materials selected depend on the clinical situation.',
        },
      ],
    },
    {
      heading: 'Procedure, Comfort and Treatment Fees',
      items: [
        {
          q: 'Does Dental Implant Treatment Hurt? I Am Afraid of Pain.',
          a: 'Implant placement is performed with local anesthetic so the treatment area is numb during the procedure. Most patients describe post-operative discomfort as manageable and similar to a tooth extraction, often controlled with over-the-counter medication. Actual comfort varies by case; Dr. Wu will discuss what to expect for your specific treatment plan.',
        },
        {
          q: 'How Much Does a Dental Implant Cost? Will I Need Bone Grafting?',
          a: 'The fee for an implant depends on the number of implants, the need for extractions or bone grafting, the type of restoration and any additional procedures. An accurate estimate can only be provided after a clinical examination and appropriate imaging. Whether bone grafting is required depends on the bone volume and quality at the implant site.',
        },
        {
          q: 'What Is the Implant Process, and How Long Does It Take?',
          a: 'A typical process includes consultation and examination, CBCT and digital assessment, treatment planning, implant placement, a healing period for osseointegration, and the final crown or restoration. Total treatment time depends on extraction timing, bone condition and individual healing, so a fixed timeline cannot be given before examination.',
        },
        {
          q: 'Is a 3D CBCT Scan Required for Dental Implants? Does the Clinic Have This Equipment?',
          a: 'CBCT imaging is commonly used for implant planning because it provides three-dimensional information about bone height, width and the position of important anatomical structures. Little Mountain Dental Centre uses digital imaging and computer-assisted planning as part of implant assessment when clinically indicated.',
        },
        {
          q: 'Which Implant Brands Do You Use? Does the Brand Matter?',
          a: 'Dr. Wu uses established, internationally recognized implant systems supported by long-term clinical research. Choosing a well-documented implant system helps ensure continued access to compatible components for future maintenance or restoration work. Specific brand selection is based on the clinical situation and treatment plan.',
        },
      ],
    },
    {
      heading: 'Health Considerations and Implant Suitability',
      items: [
        {
          q: 'Can Older Adults Receive Dental Implants? Is There an Age Limit?',
          a: 'There is no strict upper age limit for dental implants. Suitability depends on general health, medications, bone condition and oral health rather than age alone. Many older adults are candidates for implant treatment after a comprehensive assessment.',
        },
        {
          q: 'Can I Receive Dental Implants If I Take Osteoporosis Medication?',
          a: 'Certain osteoporosis medications, particularly some bisphosphonates and related drugs, can affect healing after oral surgery. Please share the full name, dose and duration of any such medication so Dr. Wu can review your medical history, consult with your physician if needed, and determine whether implant treatment is appropriate.',
        },
        {
          q: 'Can I Receive Dental Implants If I Have Gum Disease?',
          a: 'Active gum disease should generally be treated and brought under control before implant placement, because inflammation and bone loss around natural teeth can also affect implants. After periodontal treatment and stabilization, many patients with a history of gum disease can still be considered for implants with ongoing maintenance.',
        },
        {
          q: 'Do I Need a Dental Cleaning or Cavity Treatment Before Receiving an Implant?',
          a: 'A stable, healthy oral environment supports better implant outcomes. Existing cavities, infection and heavy tartar are usually addressed before implant surgery. Your treatment plan will outline any preparatory care recommended for your case.',
        },
      ],
    },
  ],
  zh: [
    {
      heading: '植牙基本知識與治療選擇',
      items: [
        {
          q: '植牙成功率如何？',
          a: '在完整治療規劃並配合良好維護的情況下，臨床研究普遍顯示人工植牙具有良好的長期成功率。個別結果會受到骨質、口腔健康、咬合、身體狀況及居家照護的影響。經過完整檢查後，吳醫師可針對您的個別情況說明影響長期預後的因素。',
        },
        {
          q: '缺牙後有哪些重建方式？植牙、牙橋與活動假牙有什麼不同？',
          a: '人工植牙是以人工牙根植入齒槽骨中，再於上方製作牙冠，通常不需修磨鄰牙。傳統牙橋需以相鄰牙齒作為支撐並進行磨牙。活動假牙則以牙床支撐並可自行取下清潔。三種方式在功能、舒適度、長期骨質維持及費用上皆有不同考量。',
        },
        {
          q: '拔牙後多久可以植牙？缺牙很久還能植牙嗎？',
          a: '植牙時機取決於拔牙原因、骨質條件與癒合情況。有些患者適合在拔牙後短時間內植牙，有些則建議先經歷一段癒合期。長期缺牙可能造成齒槽骨變化，經由CBCT檢查與臨床評估，可以判斷是否需要在植牙前進行補骨。',
        },
        {
          q: '植牙是什麼？植體和牙冠是什麼材質？',
          a: '人工植體是一種螺絲狀的植入物，通常以醫療級鈦金屬製作，作為人工牙根植入齒槽骨中，並與骨組織逐漸整合。上方則會製作客製化的牙冠，常見材質包含二氧化鋯或陶瓷。實際材料選擇需依臨床情況而定。',
        },
      ],
    },
    {
      heading: '植牙流程、疼痛與費用',
      items: [
        {
          q: '植牙會很痛嗎？我很怕痛。',
          a: '植牙手術會使用局部麻醉，因此手術過程中治療區域是麻木的。多數患者術後不適感類似拔牙，通常可以使用一般止痛藥控制。實際感受因人而異，吳醫師會依您的治療計畫說明可能的術後情況。',
        },
        {
          q: '植牙費用是多少？我需要補骨嗎？',
          a: '植牙費用會依植體數量、是否需要拔牙或補骨、修復方式及其他相關處置而不同。準確費用需要經過臨床檢查與適當影像評估後才能提供。是否需要補骨則取決於植牙位置的骨質量與骨質條件。',
        },
        {
          q: '植牙流程是什麼？多久可以完成？',
          a: '典型流程包含諮詢與檢查、CBCT與數位評估、治療規劃、植體植入、骨整合等待期，以及最後的牙冠或修復物。整體治療時間會受到拔牙時間、骨質狀況與個人癒合影響，因此無法在檢查前提供固定的完成時間。',
        },
        {
          q: '植牙一定要拍3D斷層掃描嗎？診所有設備嗎？',
          a: 'CBCT三維影像是植牙規劃中常用的檢查方式，可提供骨頭高度、寬度及重要解剖結構位置的立體資訊。Little Mountain Dental Centre 在臨床需要時，會運用數位影像與電腦輔助規劃作為植牙評估的一部分。',
        },
        {
          q: '你們使用什麼品牌的植體？品牌有差別嗎？',
          a: '吳醫師選用具長期臨床研究支持、國際廣泛使用的植體系統。選擇文件完整、長期支援的植體系統有助於日後的維護、修復或更換配件。實際使用的品牌會依臨床情況與治療規劃決定。',
        },
      ],
    },
    {
      heading: '健康條件與植牙風險',
      items: [
        {
          q: '年紀大還能植牙嗎？有年齡限制嗎？',
          a: '植牙沒有嚴格的年齡上限。是否適合植牙主要取決於整體健康狀況、目前服用的藥物、骨質條件及口腔健康，而不是單純看年齡。許多年長患者在完整評估後仍是合適的植牙候選人。',
        },
        {
          q: '服用骨質疏鬆症藥物可以植牙嗎？',
          a: '部分骨質疏鬆症藥物，特別是某些雙磷酸鹽類與相關藥物，可能影響口腔手術後的癒合。請提供藥物名稱、劑量與使用時間，讓吳醫師能夠了解您的病史，必要時與您的主治醫師溝通，再判斷是否適合進行植牙治療。',
        },
        {
          q: '有牙周病還可以植牙嗎？',
          a: '活動性牙周病建議先治療並控制穩定後再進行植牙，因為天然牙周圍的發炎與骨質流失同樣可能影響植體。經過牙周治療與病況穩定後，許多曾有牙周病史的患者仍可在持續維護下考慮植牙。',
        },
        {
          q: '植牙前需要先洗牙、補蛀牙嗎？',
          a: '穩定、健康的口腔環境有助於植牙的長期結果。植牙前通常會先處理蛀牙、感染及大量牙結石。您的治療計畫中會明確列出建議在植牙前先完成的相關處置。',
        },
      ],
    },
  ],
};

const DentalImplants = () => {
  const { lang } = useI18n();
  const L: L = lang === 'zh' ? 'zh' : 'en';
  const p = <T,>(v: { en: T; zh: T }): T => pick<T>(L, v);

  const meta = seo[L];
  const canonical = `${SITE_URL}${PATH}`;

  const faqGroups = faq[L];
  const flatFaqs = faqGroups.flatMap((g) => g.items);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: flatFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: p({ en: 'Home', zh: '首頁' }), item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: p({ en: 'Services', zh: '我們的服務' }), item: SITE_URL + '/services' },
      { '@type': 'ListItem', position: 3, name: p({ en: 'Dental Implants', zh: '人工植牙' }), item: canonical },
    ],
  };

  const dentistLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Little Mountain Dental Centre',
    telephone: '+1-604-879-5612',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '620 East Broadway',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
  };

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Patrick Wu',
    jobTitle: 'Dentist',
    worksFor: { '@type': 'Dentist', name: 'Little Mountain Dental Centre' },
    alumniOf: 'University of Pennsylvania School of Dental Medicine',
  };

  const onBook = () => track('implant_book_click', { language: L });
  const onCall = () => track('implant_call_click', { language: L });

  return (
    <>
      <Helmet>
        <html lang={L === 'zh' ? 'zh-Hant' : 'en'} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <link rel="alternate" hrefLang="en" href={canonical} />
        <link rel="alternate" hrefLang="zh-Hant" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(dentistLd)}</script>
        <script type="application/ld+json">{JSON.stringify(personLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-site py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <nav aria-label="Breadcrumb" className="text-xs text-primary-foreground/70 mb-4">
                <Link to="/" className="hover:text-primary-foreground">
                  {p({ en: 'Home', zh: '首頁' })}
                </Link>
                <span className="mx-2 opacity-60">/</span>
                <Link to="/services" className="hover:text-primary-foreground">
                  {p({ en: 'Services', zh: '我們的服務' })}
                </Link>
                <span className="mx-2 opacity-60">/</span>
                <span aria-current="page">{p({ en: 'Dental Implants', zh: '人工植牙' })}</span>
              </nav>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5">
                {p(c.h1)}
              </h1>
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed mb-7">
                {p(c.heroText)}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onBook}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-medium text-sm tracking-wider uppercase rounded hover:opacity-90 transition min-h-[44px]"
                >
                  <CalendarCheck size={16} />
                  {p(c.bookCta)}
                </a>
                <a
                  href={PHONE_TEL}
                  onClick={onCall}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/70 text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-primary-foreground/10 transition min-h-[44px]"
                >
                  <Phone size={16} />
                  {p(c.callCta)}
                </a>
              </div>
              <p className="text-primary-foreground/70 text-xs md:text-sm mt-5 leading-relaxed">
                {p(c.reassurance)}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={implantsImg}
                alt={p({
                  en: 'Dental implant consultation at Little Mountain Dental Centre',
                  zh: 'Little Mountain Dental Centre 植牙諮詢',
                })}
                className="w-full h-64 md:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CREDENTIALS */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green text-center mb-8">
            {p(c.s2Title)}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {p(c.credentials).map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-lg border border-border bg-secondary/40"
              >
                <p className="font-heading text-base md:text-lg font-medium text-brand-green">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">{p(c.aaidNote)}</p>
        </div>
      </section>

      {/* SECTION 3 — TREATMENT OPTIONS */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green text-center mb-10">
            {p(c.s3Title)}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {p(c.options).map((o, i) => (
              <div key={i} className="bg-background rounded-lg p-7 border border-border shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-brand-green mb-3">
                  {o.t}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onBook}
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-brand-green-dark transition min-h-[44px]"
            >
              {p(c.s3Cta)}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 — DR WU */}
      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-6">
            {p(c.s4Title)}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {p(c.s4Body).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="font-heading text-lg font-semibold text-brand-green mb-3">
              {p(c.principlesTitle)}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {p(c.principles).map((item, i) => (
                <li
                  key={i}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-cream border border-primary/20 text-sm text-brand-green"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DIGITAL */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green text-center mb-8">
            {p(c.s5Title)}
          </h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {p(c.s5Items).map((item, i) => (
              <li
                key={i}
                className="bg-background rounded-md px-4 py-3 border border-border text-sm md:text-base text-foreground flex items-start gap-2"
              >
                <ChevronRight size={16} className="text-brand-green mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {p(c.s5Body).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — MINIMALLY INVASIVE */}
      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-6">
            {p(c.s6Title)}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {p(c.s6Body).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="font-heading text-lg font-semibold text-brand-green mb-3">
              {p(c.s6BenefitsTitle)}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {p(c.s6Benefits).map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <ChevronRight size={16} className="text-brand-green mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROCESS */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green text-center mb-10">
            {p(c.s7Title)}
          </h2>
          <ol className="grid md:grid-cols-7 gap-4 mb-8">
            {p(c.steps).map((step, i) => (
              <li
                key={i}
                className="bg-background rounded-lg p-4 border border-border text-center"
              >
                <div className="mx-auto w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mb-2">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground leading-snug">{step}</p>
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
            {p(c.s7Note)}
          </p>
        </div>
      </section>

      {/* SECTION 8 — IMPLANT FAQ */}
      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green text-center mb-10">
            {p({ en: 'Dental Implant FAQ', zh: '植牙常見問題' })}
          </h2>
          <div className="space-y-8">
            {faqGroups.map((group, gi) => (
              <div key={gi}>
                <h3 className="font-heading text-lg font-semibold text-brand-green mb-3">
                  {group.heading}
                </h3>
                <Accordion type="multiple" className="w-full">
                  {group.items.map((item, ii) => (
                    <AccordionItem key={ii} value={`g${gi}-i${ii}`}>
                      <AccordionTrigger
                        onClick={() => track('implant_faq_open', { language: L, question: item.q })}
                        className="text-left font-heading text-base md:text-lg font-medium min-h-[44px]"
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            {p(c.s9Title)}
          </h2>
          <p className="text-primary-foreground/90 leading-relaxed mb-7">{p(c.s9Body)}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onBook}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-medium text-sm tracking-wider uppercase rounded hover:opacity-90 transition min-h-[44px]"
            >
              <CalendarCheck size={16} />
              {p(c.bookCta)}
            </a>
            <a
              href={PHONE_TEL}
              onClick={onCall}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/70 text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-primary-foreground/10 transition min-h-[44px]"
            >
              <Phone size={16} />
              {p(c.callCta)} · {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* MEDICAL NOTICE */}
      <section className="py-8 bg-background">
        <div className="container-site max-w-3xl">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            {p(c.disclaimer)}
          </p>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div
        className="md:hidden fixed left-0 right-0 bottom-0 z-40 bg-background border-t border-border shadow-lg"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="grid grid-cols-2 gap-2 p-2">
          <a
            href={PHONE_TEL}
            onClick={onCall}
            className="inline-flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded font-medium text-sm min-h-[44px]"
          >
            <Phone size={16} />
            {p(c.callShort)}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBook}
            className="inline-flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded font-medium text-sm min-h-[44px]"
          >
            <CalendarCheck size={16} />
            {p(c.bookShort)}
          </a>
        </div>
      </div>
      {/* Spacer so sticky CTA doesn't cover footer content on mobile */}
      <div className="md:hidden h-20" aria-hidden="true" />
    </>
  );
};

export default DentalImplants;
