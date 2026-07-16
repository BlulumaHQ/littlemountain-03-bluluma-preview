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

// Analytics helper — never breaks navigation
const track = (event: string, params: Record<string, unknown> = {}) => {
  try {
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };
    const payload = {
      clinic: 'Little Mountain Dental Centre',
      page_path: PATH,
      ...params,
    };
    if (typeof w.gtag === 'function') {
      w.gtag('event', event, payload);
    } else if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event, ...payload });
    }
  } catch {
    /* analytics must never block */
  }
};

const seo = {
  en: {
    title: 'Vancouver Dental Implants | Dr. Patrick Wu | Little Mountain Dental',
    description:
      'Learn about dental implant treatment in Vancouver with Dr. Patrick Wu, including more than 15 years of experience, digital implant planning, minimally invasive techniques and missing-tooth reconstruction.',
  },
  zh: {
    title: '溫哥華人工植牙｜吳沛恆醫師｜Little Mountain Dental',
    description:
      '了解吳沛恆醫師在溫哥華提供的人工植牙與缺牙重建，包括超過15年植牙經驗、數位植牙規劃及微創治療理念。',
  },
};

const c = {
  h1: {
    en: 'Vancouver Dental Implants with Dr. Patrick Wu',
    zh: '溫哥華人工植牙｜吳沛恆醫師',
  },
  heroText: {
    en: 'Dr. Patrick Wu provides personalized dental implant assessment and missing-tooth reconstruction at Little Mountain Dental Centre in Vancouver. Every treatment plan is based on the patient’s oral health, bone condition, bite, medical history and individual treatment needs.',
    zh: '吳沛恆醫師於溫哥華 Little Mountain Dental Centre 提供個人化人工植牙評估與缺牙重建。每項治療計畫均會根據患者的口腔健康、骨質條件、咬合、身體狀況及個人治療需求制定。',
  },
  bookCta: { en: 'Book an Implant Consultation', zh: '預約植牙諮詢' },
  callCta: { en: 'Call the Clinic', zh: '致電診所' },
  reassurance: {
    en: 'A clinical examination and appropriate imaging are required before a treatment plan, treatment timeline or accurate fee estimate can be provided.',
    zh: '植牙治療方案、所需時間及準確費用，需要經過臨床檢查與適當影像評估後才能確定。',
  },

  // Section 2 — Experience highlights
  s2Title: { en: 'Experience Highlights', zh: '植牙經驗重點' },
  highlights: {
    en: [
      'More Than 15 Years of Implant Experience',
      'More Than 2,200 Dental Implants Placed',
      'AAID Associate Fellow',
      'Digital Implant Assessment and Planning',
    ],
    zh: [
      '超過15年植牙臨床經驗',
      '完成2,200顆以上人工植體治療',
      'AAID Associate Fellow 資格',
      '數位植牙評估與規劃',
    ],
  },
  aaidNote: {
    en: 'AAID — American Academy of Implant Dentistry. AAID Associate Fellow status reflects implant-related education, clinical experience and assessment. It should not be interpreted as recognition of a dental specialty.',
    zh: 'AAID — American Academy of Implant Dentistry（美國植牙醫學會）。AAID Associate Fellow 資格反映醫師完成植牙相關進修、臨床經驗及考核，但不應被解讀為牙科專科資格。',
  },

  // Section 3 — Dr Wu experience
  s3Title: {
    en: 'Dental Implant Care with Dr. Patrick Wu | More Than 15 Years of Experience and Over 2,200 Implants Placed',
    zh: '吳沛恆醫師植牙專業介紹｜超過15年植牙經驗，完成2,200顆以上人工植體治療',
  },
  s3Heading: {
    en: 'More Than 15 Years of Implant Experience and Continuing Education',
    zh: '豐富植牙經驗與國際專業進修',
  },
  s3Body: {
    en: [
      'For patients experiencing tooth loss, choosing a dentist with extensive clinical experience and a strong commitment to comprehensive assessment and treatment planning is an important part of implant care.',
      'Dr. Patrick Wu has dedicated a significant part of his professional career to dental implant treatment and missing-tooth reconstruction, which he considers one of the most technically demanding and rewarding areas of dentistry.',
      'While practising in the United States from 2009 to 2012, Dr. Wu pursued advanced education and clinical training in implant dentistry. His training included implant surgery, osseointegration, bone augmentation and full-mouth rehabilitation.',
      'Through continuing education, clinical experience and assessment, Dr. Wu earned the Associate Fellow credential from the American Academy of Implant Dentistry.',
      'Dr. Wu now has more than 15 years of clinical implant experience and has placed more than 2,200 dental implants. His experience includes single-tooth implants, multiple-tooth replacement, full-mouth reconstruction and implant cases involving limited bone volume or complex restorative requirements.',
    ],
    zh: [
      '對於缺牙患者而言，選擇一位具有豐富臨床經驗，並重視完整評估與治療規劃的牙醫，是植牙治療的重要一環。',
      '吳沛恆醫師多年來持續投入人工植牙與缺牙重建，並將植牙視為牙科治療中極具挑戰性且深具成就感的領域之一。',
      '自2009年至2012年間於美國執業期間，吳醫師持續接受進階植牙教育與臨床訓練，內容涵蓋植牙外科手術、骨整合原理、骨增量技術及全口重建治療。',
      '經過持續進修、臨床經驗累積及相關考核，吳醫師取得美國植牙醫學會 American Academy of Implant Dentistry 的 Associate Fellow 資格。',
      '至今，吳醫師已累積超過15年植牙臨床經驗，完成超過2,200顆人工植體治療。其臨床經驗涵蓋單顆植牙、多顆缺牙重建、全口重建及涉及骨量不足與複雜修復需求的植牙案例。',
    ],
  },

  // Section 4 — Digital technology
  s4Heading: {
    en: 'Digital Technology for Implant Assessment and Planning',
    zh: '數位科技輔助植牙評估與規劃',
  },
  s4Intro: {
    en: 'Modern dental implant treatment frequently uses digital technology to support diagnosis and treatment planning. Depending on the individual case, implant assessment and planning may involve:',
    zh: '現代植牙治療已廣泛運用數位科技協助診斷及規劃。根據患者的個別情況，植牙評估與治療規劃可能使用：',
  },
  s4List: {
    en: [
      '3D Cone Beam Computed Tomography (CBCT)',
      'Digital intraoral scanning',
      'High-resolution digital radiography',
      'Computer-assisted implant planning',
      'Customized surgical guides',
    ],
    zh: [
      '3D電腦斷層掃描（CBCT）',
      '數位口內掃描系統',
      '高解析度數位X光影像',
      '電腦輔助植牙規劃',
      '客製化植牙手術導板',
    ],
  },
  s4Outro: {
    en: [
      'Through comprehensive diagnostic evaluation and computer-assisted planning, the dentist can assess bone height, bone width, bone density and the location of nerves, sinuses and other important anatomical structures.',
      'When clinically appropriate, a customized surgical guide may help transfer the planned implant position and angle into the surgical procedure.',
      'The equipment and planning method used will depend on the patient’s treatment needs.',
    ],
    zh: [
      '透過完整術前評估及電腦輔助分析，醫師可以評估患者的骨頭高度、寬度、密度，以及神經、鼻竇和其他重要解剖結構的位置。',
      '在適合的病例中，植牙手術導板可以協助醫師將術前規劃轉化到實際手術中，增加植體位置與角度的可控制性。',
      '實際使用的設備與規劃方式，會根據患者的治療需要決定。',
    ],
  },

  // Section 5 — Minimally invasive
  s5Heading: {
    en: 'A Minimally Invasive Approach When Clinically Appropriate',
    zh: '在適合情況下採用微創植牙理念',
  },
  s5Body: {
    en: [
      'When clinically appropriate, Dr. Wu follows a minimally invasive approach to implant dentistry. Careful planning, digital technology and refined surgical techniques may help limit unnecessary surgical trauma to the surrounding tissues.',
      'Many patients are understandably concerned about discomfort before implant surgery. The actual experience, degree of swelling and recovery time depend on the surgical area, the number of implants, bone-grafting requirements and individual healing.',
      'Some patients report that the procedure was easier than they had expected.',
    ],
    zh: [
      '吳醫師在臨床條件適合的情況下，採用微創植牙理念，並透過術前規劃、數位科技及精細手術技術，盡可能減少不必要的手術範圍與周圍組織創傷。',
      '許多患者在接受植牙前會擔心疼痛問題。實際感受、腫脹程度及恢復時間，會受到手術範圍、植體數量、是否需要補骨及個人癒合能力影響。',
      '部分患者在治療後表示，實際過程比原先想像中輕鬆。',
    ],
  },
  s5BenefitsTitle: { en: 'Possible Benefits in Suitable Cases', zh: '適合病例可能的優點' },
  s5Benefits: {
    en: [
      'A smaller surgical area',
      'Reduced unnecessary tissue disturbance',
      'Potentially less postoperative swelling',
      'Potentially less postoperative discomfort',
      'Potentially less bleeding',
      'A more comfortable recovery in suitable cases',
    ],
    zh: [
      '較小的手術範圍',
      '減少不必要的組織創傷',
      '可能減少術後腫脹',
      '可能降低術後不適',
      '可能減少出血',
      '適合病例可能有較舒適的恢復過程',
    ],
  },

  // Section 6 — Implant systems and materials (general, brands not shown — not verified)
  s6Heading: {
    en: 'Established Implant Systems and High-Quality Restorative Materials',
    zh: '高品質植體系統與修復材料',
  },
  s6Body: {
    en: [
      'Dental implants do more than fill a missing-tooth space. Implant treatment requires consideration of function, oral health and long-term maintenance.',
      'Selection of an implant system and restorative material may depend on:',
    ],
    zh: [
      '人工植牙不只是填補缺牙，也是一項需要考慮功能、口腔健康及長期維護的治療。',
      '植體系統及修復材料的選擇，可能受到以下因素影響：',
    ],
  },
  s6List: {
    en: [
      'Bone quality and volume',
      'Location of the missing tooth or teeth',
      'Bite relationship and function',
      'Esthetic expectations',
      'Restorative design',
      'Budget considerations',
      'Access to components and long-term maintenance',
    ],
    zh: [
      '骨質與骨量',
      '缺牙位置',
      '咬合關係與功能',
      '美觀需求',
      '修復設計',
      '預算考量',
      '原廠零件及長期維護需求',
    ],
  },
  s6Outro: {
    en: [
      'Dr. Wu evaluates each patient’s individual circumstances and develops a personalized implant treatment plan, including selection of an appropriate implant system and restorative design.',
      'The treatment objective extends beyond implant placement and includes creating a natural-looking, functional, comfortable and maintainable missing-tooth replacement.',
    ],
    zh: [
      '吳醫師會根據患者的個別情況，制定個人化植牙治療方案，並選擇合適的植體系統及修復設計。',
      '治療目標不只是完成植體植入，也包括建立自然、實用、舒適並便於長期維護的缺牙重建方案。',
    ],
  },

  // Section 7 — Five principles
  s7Heading: { en: 'Dr. Wu’s Philosophy of Implant Care', zh: '吳醫師的植牙治療理念' },
  s7Intro: {
    en: 'Dental implant treatment combines principles of medicine, engineering, esthetics and precision treatment. Dr. Wu’s approach to implant care emphasizes five principles:',
    zh: '人工植牙是一項結合醫學、工程、美學及精密技術的治療。吳醫師的植牙治療規劃重視以下五項原則：',
  },
  principles: {
    en: [
      { t: 'Precision', d: 'Careful diagnosis, treatment planning and clinical execution based on the patient’s individual condition.' },
      { t: 'Safety', d: 'Consideration of the patient’s health, bone condition, anatomical structures and individual risk factors.' },
      { t: 'Esthetics', d: 'Restorative planning that considers tooth proportions, surrounding tissues and overall smile appearance.' },
      { t: 'Longevity', d: 'Attention to implant position, restorative design, oral hygiene and long-term professional maintenance.' },
      { t: 'Comfort', d: 'Reducing unnecessary tissue trauma and supporting a manageable treatment and recovery experience when clinically appropriate.' },
    ],
    zh: [
      { t: '精準', d: '根據患者的個別情況，進行仔細診斷、治療規劃及臨床操作。' },
      { t: '安全', d: '評估患者的健康狀況、骨質條件、重要解剖結構及個人風險因素。' },
      { t: '美觀', d: '在修復規劃中考慮牙齒比例、周圍組織及整體笑容外觀。' },
      { t: '耐久', d: '重視植體位置、修復設計、口腔清潔及長期專業維護。' },
      { t: '舒適', d: '在臨床條件適合時，減少不必要的組織創傷，並協助患者獲得較容易管理的治療與恢復過程。' },
    ],
  },

  // Section 9 — Appointment CTA
  s9Title: { en: 'Considering Dental Implants?', zh: '正在考慮人工植牙？' },
  s9Body: {
    en: 'Every patient’s bone condition, oral health, bite, medical history and treatment needs are different. A complete examination and appropriate imaging are required before Dr. Patrick Wu can recommend a treatment plan, timeline or accurate fee estimate.',
    zh: '每位患者的骨質條件、口腔健康、咬合、身體狀況及治療需求都不同。經過完整檢查及適當影像評估後，吳沛恆醫師才能提供治療建議、預計時間及較準確的費用估算。',
  },

  disclaimer: {
    en: 'This page provides general dental information and is not a diagnosis or a substitute for an individual clinical examination. Treatment recommendations, risks, healing time, fees and outcomes vary according to each patient’s condition.',
    zh: '本頁內容僅提供一般牙科資訊，不能取代個別診斷與臨床檢查。治療建議、風險、恢復時間、費用及結果會因每位患者的情況而不同。',
  },

  callShort: { en: 'Call', zh: '致電診所' },
  bookShort: { en: 'Book Consultation', zh: '預約諮詢' },
};

// FAQ data — exactly 13 items, ordered per approved sequence
type FaqItem = { q: string; a: React.ReactNode; aText: string };

const faq: Record<L, FaqItem[]> = {
  en: [
    {
      q: 'What Is the Success Rate of Dental Implants?',
      aText:
        'Dental implants generally demonstrate favourable long-term survival. Large studies commonly report ten-year implant survival rates of approximately 95% to 97%. Implant "survival" means that an implant remains present and functional during the follow-up period. It does not mean that periodontal, bite-related, restorative or other complications cannot occur, and it is not a guarantee of an individual patient’s outcome. Long-term implant results are influenced by several factors, including: Treatment planning and surgical technique; Periodontal and supporting-bone health; Oral hygiene; Smoking; Diabetes and general health; Bite forces; Regular professional maintenance and follow-up. Dr. Wu emphasizes comprehensive diagnosis, digital treatment planning, appropriate surgical techniques and long-term maintenance.',
      a: (
        <>
          <p>Dental implants generally demonstrate favourable long-term survival. Large studies commonly report ten-year implant survival rates of approximately 95% to 97%.</p>
          <p>Implant “survival” means that an implant remains present and functional during the follow-up period. It does not mean that periodontal, bite-related, restorative or other complications cannot occur, and it is not a guarantee of an individual patient’s outcome.</p>
          <p>Long-term implant results are influenced by several factors, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Treatment planning and surgical technique</li>
            <li>Periodontal and supporting-bone health</li>
            <li>Oral hygiene</li>
            <li>Smoking</li>
            <li>Diabetes and general health</li>
            <li>Bite forces</li>
            <li>Regular professional maintenance and follow-up</li>
          </ul>
          <p>Dr. Wu emphasizes comprehensive diagnosis, digital treatment planning, appropriate surgical techniques and long-term maintenance.</p>
        </>
      ),
    },
    {
      q: 'What Are My Options for Replacing Missing Teeth? How Do Implants Compare with Bridges and Dentures?',
      aText:
        'Common options for replacing missing teeth include dental implants, fixed dental bridges and removable dentures. A dental implant uses an artificial tooth root to support a crown or another restoration. For a single missing tooth, it generally does not require the neighbouring teeth to be prepared as supports for a traditional bridge. A fixed dental bridge may require less treatment time, but the neighbouring teeth are usually prepared to support it. Cleaning beneath the bridge, decay involving the supporting teeth and bite forces must also be considered. A removable denture generally has a lower initial cost and may avoid implant surgery. However, stability, chewing efficiency, comfort and adaptation vary between patients. Each replacement option has benefits, limitations and suitability requirements. The decision should consider the number and location of missing teeth, the health of neighbouring teeth, bone condition, bite, general health and budget.',
      a: (
        <>
          <p>Common options for replacing missing teeth include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dental implants</li>
            <li>Fixed dental bridges</li>
            <li>Removable dentures</li>
          </ul>
          <p>A dental implant uses an artificial tooth root to support a crown or another restoration. For a single missing tooth, it generally does not require the neighbouring teeth to be prepared as supports for a traditional bridge.</p>
          <p>A fixed dental bridge may require less treatment time, but the neighbouring teeth are usually prepared to support it. Cleaning beneath the bridge, decay involving the supporting teeth and bite forces must also be considered.</p>
          <p>A removable denture generally has a lower initial cost and may avoid implant surgery. However, stability, chewing efficiency, comfort and adaptation vary between patients.</p>
          <p>Each replacement option has benefits, limitations and suitability requirements. The decision should consider the number and location of missing teeth, the health of neighbouring teeth, bone condition, bite, general health and budget.</p>
        </>
      ),
    },
    {
      q: 'How Soon After a Tooth Extraction Can I Receive a Dental Implant? What If My Tooth Has Been Missing for Years?',
      aText:
        'If dental implant treatment may be considered in the future, an implant assessment before the extraction is recommended. Some patients may benefit from socket preservation at the time of extraction to help maintain bone that may be needed for future implant treatment. In many cases, the extraction area may require approximately three to four months of initial healing before a clinical examination, 3D CBCT scan and implant planning are completed. The waiting period varies according to infection, bone condition, the extraction site and individual healing. Implant treatment may still be possible after a tooth has been missing for an extended period. However, the jawbone can gradually shrink, and some patients may require bone grafting or other preliminary treatment. Clinical and imaging assessment is required to determine whether implant treatment remains possible.',
      a: (
        <>
          <p>If dental implant treatment may be considered in the future, an implant assessment before the extraction is recommended.</p>
          <p>Some patients may benefit from socket preservation at the time of extraction to help maintain bone that may be needed for future implant treatment.</p>
          <p>In many cases, the extraction area may require approximately three to four months of initial healing before a clinical examination, 3D CBCT scan and implant planning are completed. The waiting period varies according to infection, bone condition, the extraction site and individual healing.</p>
          <p>Implant treatment may still be possible after a tooth has been missing for an extended period. However, the jawbone can gradually shrink, and some patients may require bone grafting or other preliminary treatment.</p>
          <p>Clinical and imaging assessment is required to determine whether implant treatment remains possible.</p>
        </>
      ),
    },
    {
      q: 'What Is a Dental Implant? What Materials Are Used for the Implant and Crown?',
      aText:
        'A dental implant uses an implant fixture to replace the root of a missing tooth. An abutment, crown or another restoration is then attached to restore appearance and chewing function. Implants are commonly manufactured from biocompatible medical-grade titanium or titanium alloy. Dental crowns may be made from several materials. Common options include all-ceramic materials and zirconia. The appropriate crown material depends on the tooth location, bite forces, esthetic requirements and overall treatment design.',
      a: (
        <>
          <p>A dental implant uses an implant fixture to replace the root of a missing tooth. An abutment, crown or another restoration is then attached to restore appearance and chewing function.</p>
          <p>Implants are commonly manufactured from biocompatible medical-grade titanium or titanium alloy.</p>
          <p>Dental crowns may be made from several materials. Common options include all-ceramic materials and zirconia.</p>
          <p>The appropriate crown material depends on the tooth location, bite forces, esthetic requirements and overall treatment design.</p>
        </>
      ),
    },
    {
      q: 'Is Dental Implant Surgery Painful?',
      aText:
        'Dental implant surgery is usually performed under local anesthesia. The experience during treatment and the degree of postoperative discomfort vary according to the surgical area, bone-grafting requirements, number of implants, individual sensitivity and healing. When clinically appropriate, precise planning and minimally invasive techniques may help reduce the surgical area and unnecessary tissue trauma. Before treatment, the dentist will explain anesthesia, postoperative care and pain-control options. Patients who are particularly anxious about dental treatment should inform the clinic during the consultation. Some patients report that the procedure was easier than they had expected.',
      a: (
        <>
          <p>Dental implant surgery is usually performed under local anesthesia.</p>
          <p>The experience during treatment and the degree of postoperative discomfort vary according to the surgical area, bone-grafting requirements, number of implants, individual sensitivity and healing.</p>
          <p>When clinically appropriate, precise planning and minimally invasive techniques may help reduce the surgical area and unnecessary tissue trauma.</p>
          <p>Before treatment, the dentist will explain anesthesia, postoperative care and pain-control options. Patients who are particularly anxious about dental treatment should inform the clinic during the consultation.</p>
          <p>Some patients report that the procedure was easier than they had expected.</p>
        </>
      ),
    },
    {
      q: 'How Much Does a Dental Implant Cost? Will I Need Bone Grafting?',
      aText:
        'An accurate implant fee cannot be determined by telephone or email alone. The fee may be affected by: The number of implants; The location of the missing tooth or teeth; The implant system; The type of restoration; Bone quality and volume; Bone-grafting requirements; Extractions; Periodontal and oral health; Other preliminary treatment; General health and healing capacity. A clinical examination and appropriate imaging are required before the dentist can determine whether bone grafting may be needed and provide an individualized treatment plan and more accurate fee estimate.',
      a: (
        <>
          <p>An accurate implant fee cannot be determined by telephone or email alone.</p>
          <p>The fee may be affected by:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The number of implants</li>
            <li>The location of the missing tooth or teeth</li>
            <li>The implant system</li>
            <li>The type of restoration</li>
            <li>Bone quality and volume</li>
            <li>Bone-grafting requirements</li>
            <li>Extractions</li>
            <li>Periodontal and oral health</li>
            <li>Other preliminary treatment</li>
            <li>General health and healing capacity</li>
          </ul>
          <p>A clinical examination and appropriate imaging are required before the dentist can determine whether bone grafting may be needed and provide an individualized treatment plan and more accurate fee estimate.</p>
        </>
      ),
    },
    {
      q: 'What Is the Dental Implant Process and How Long Does It Take?',
      aText:
        'The dental implant process commonly includes: Oral examination; 3D imaging; Digital treatment planning; Implant placement; Healing and osseointegration; Fabrication of the crown or another restoration; Regular maintenance and follow-up. Some cases may proceed to the final restoration approximately three to four months after implant placement. The actual timeline depends on bone condition, implant stability, bone-grafting requirements, extraction timing and individual healing. More complex treatment may require additional time. The expected stages and timeline will be explained after examination.',
      a: (
        <>
          <p>The dental implant process commonly includes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Oral examination</li>
            <li>3D imaging</li>
            <li>Digital treatment planning</li>
            <li>Implant placement</li>
            <li>Healing and osseointegration</li>
            <li>Fabrication of the crown or another restoration</li>
            <li>Regular maintenance and follow-up</li>
          </ul>
          <p>Some cases may proceed to the final restoration approximately three to four months after implant placement.</p>
          <p>The actual timeline depends on bone condition, implant stability, bone-grafting requirements, extraction timing and individual healing.</p>
          <p>More complex treatment may require additional time. The expected stages and timeline will be explained after examination.</p>
        </>
      ),
    },
    {
      q: 'Is a 3D CBCT Scan Always Required for Dental Implants?',
      aText:
        '3D CBCT imaging is an important tool in modern implant assessment and treatment planning. CBCT can help the dentist assess the height, width, density and shape of the jawbone, as well as the location of important nerves, sinuses and other anatomical structures. The dentist will determine which imaging examinations are appropriate for the individual patient.',
      a: (
        <>
          <p>3D CBCT imaging is an important tool in modern implant assessment and treatment planning.</p>
          <p>CBCT can help the dentist assess the height, width, density and shape of the jawbone, as well as the location of important nerves, sinuses and other anatomical structures.</p>
          <p>The dentist will determine which imaging examinations are appropriate for the individual patient.</p>
        </>
      ),
    },
    {
      q: 'Which Implant Brands Do You Use? Does the Brand Matter?',
      aText:
        'Dr. Wu uses established implant systems supported by clinical research, consistent manufacturing standards and access to replacement components. Selection of the implant system depends on bone condition, tooth location, treatment design, restorative requirements and component availability. Implant brand is one treatment consideration, but diagnosis, surgical planning, implant position, restoration design, oral hygiene and long-term maintenance are also important.',
      a: (
        <>
          <p>Dr. Wu uses established implant systems supported by clinical research, consistent manufacturing standards and access to replacement components.</p>
          <p>Selection of the implant system depends on bone condition, tooth location, treatment design, restorative requirements and component availability.</p>
          <p>Implant brand is one treatment consideration, but diagnosis, surgical planning, implant position, restoration design, oral hygiene and long-term maintenance are also important.</p>
        </>
      ),
    },
    {
      q: 'Am I Too Old for Dental Implants?',
      aText:
        'Dental implant treatment does not generally have one absolute upper age limit. Overall health, diabetes control, periodontal condition, bone condition, medications, oral-hygiene ability and surgical safety are generally more important than chronological age. Some patients in their seventies or eighties may still be considered for implant treatment after a complete assessment and when their health is stable. Suitability must be determined according to the individual patient’s health and oral condition.',
      a: (
        <>
          <p>Dental implant treatment does not generally have one absolute upper age limit.</p>
          <p>Overall health, diabetes control, periodontal condition, bone condition, medications, oral-hygiene ability and surgical safety are generally more important than chronological age.</p>
          <p>Some patients in their seventies or eighties may still be considered for implant treatment after a complete assessment and when their health is stable.</p>
          <p>Suitability must be determined according to the individual patient’s health and oral condition.</p>
        </>
      ),
    },
    {
      q: 'Can I Receive Dental Implants If I Take Osteoporosis Medications?',
      aText:
        'Some osteoporosis medications may affect bone metabolism and healing and may increase the risk of jaw-related complications. The level of risk depends on: The medication; Oral or injectable administration; Dose; Duration of treatment; Other health factors. Patients must provide the complete medication name and treatment history during the implant assessment. The dentist may need to consult the patient’s family physician or medical specialist. Patients should not stop osteoporosis medication on their own. Any medication change must be directed by the prescribing medical professional.',
      a: (
        <>
          <p>Some osteoporosis medications may affect bone metabolism and healing and may increase the risk of jaw-related complications.</p>
          <p>The level of risk depends on:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The medication</li>
            <li>Oral or injectable administration</li>
            <li>Dose</li>
            <li>Duration of treatment</li>
            <li>Other health factors</li>
          </ul>
          <p>Patients must provide the complete medication name and treatment history during the implant assessment.</p>
          <p>The dentist may need to consult the patient’s family physician or medical specialist.</p>
          <p>Patients should not stop osteoporosis medication on their own. Any medication change must be directed by the prescribing medical professional.</p>
        </>
      ),
    },
    {
      q: 'Can I Receive Dental Implants If I Have Gum Disease?',
      aText:
        'If active periodontal disease is present, the inflammation generally needs to be controlled before implant treatment is considered. Periodontal care may include: Deep cleaning; Root planing; Control of inflammation; Improved daily oral hygiene; Regular professional monitoring. The bacteria associated with periodontal disease can affect tissues around natural teeth and may also increase the risk of peri-implant disease and peri-implantitis. Stable periodontal health and effective daily cleaning are important foundations for long-term implant maintenance.',
      a: (
        <>
          <p>If active periodontal disease is present, the inflammation generally needs to be controlled before implant treatment is considered.</p>
          <p>Periodontal care may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Deep cleaning</li>
            <li>Root planing</li>
            <li>Control of inflammation</li>
            <li>Improved daily oral hygiene</li>
            <li>Regular professional monitoring</li>
          </ul>
          <p>The bacteria associated with periodontal disease can affect tissues around natural teeth and may also increase the risk of peri-implant disease and peri-implantitis.</p>
          <p>Stable periodontal health and effective daily cleaning are important foundations for long-term implant maintenance.</p>
        </>
      ),
    },
    {
      q: 'Do I Need a Cleaning or Other Dental Treatment Before Receiving an Implant?',
      aText:
        'Before implant treatment, the dentist will generally evaluate the patient’s overall oral health. If substantial calculus, periodontal inflammation, tooth decay, damaged teeth or another infection is present, the patient may first require: Dental cleaning; Periodontal treatment; Cavity restoration; Treatment of damaged teeth; Other necessary care. Establishing a healthier and more stable oral environment may help reduce infection risk and support long-term implant maintenance.',
      a: (
        <>
          <p>Before implant treatment, the dentist will generally evaluate the patient’s overall oral health.</p>
          <p>If substantial calculus, periodontal inflammation, tooth decay, damaged teeth or another infection is present, the patient may first require:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dental cleaning</li>
            <li>Periodontal treatment</li>
            <li>Cavity restoration</li>
            <li>Treatment of damaged teeth</li>
            <li>Other necessary care</li>
          </ul>
          <p>Establishing a healthier and more stable oral environment may help reduce infection risk and support long-term implant maintenance.</p>
        </>
      ),
    },
  ],
  zh: [
    {
      q: '植牙成功率如何？',
      aText:
        '人工植牙通常具有良好的長期存活表現。大型研究常見的植體十年存活率約為95%至97%。植體「存活」代表植體在追蹤期間仍然存在及使用，但不代表完全不會發生牙周、咬合、修復物或其他併發症，也不能作為個別患者的成功保證。植牙的長期結果會受到多項因素影響，包括：治療規劃與手術操作、牙周及牙床骨健康、口腔清潔、抽菸習慣、糖尿病及整體健康、咬合力量、定期專業維護與追蹤。吳醫師重視完整診斷、數位治療規劃、適當的手術方式及長期維護。',
      a: (
        <>
          <p>人工植牙通常具有良好的長期存活表現。大型研究常見的植體十年存活率約為95%至97%。</p>
          <p>植體「存活」代表植體在追蹤期間仍然存在及使用，但不代表完全不會發生牙周、咬合、修復物或其他併發症，也不能作為個別患者的成功保證。</p>
          <p>植牙的長期結果會受到多項因素影響，包括：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>治療規劃與手術操作</li>
            <li>牙周及牙床骨健康</li>
            <li>口腔清潔</li>
            <li>抽菸習慣</li>
            <li>糖尿病及整體健康</li>
            <li>咬合力量</li>
            <li>定期專業維護與追蹤</li>
          </ul>
          <p>吳醫師重視完整診斷、數位治療規劃、適當的手術方式及長期維護。</p>
        </>
      ),
    },
    {
      q: '缺牙後有哪些重建方式？植牙、牙橋與活動假牙有什麼不同？',
      aText:
        '缺牙後常見的重建方式包括人工植牙、固定式牙橋與活動假牙。人工植牙利用人工牙根支撐牙冠或其他修復物。對於單顆缺牙，通常不需要為了製作傳統牙橋而磨削兩側健康牙齒。固定式牙橋的療程可能較短，但通常需要修磨相鄰牙齒作為支撐。日後也需要特別注意牙橋下方清潔、支撐牙齒蛀牙及咬合受力等問題。活動假牙通常初期費用較低，也不一定需要植牙手術，但穩定度、咀嚼效率、舒適度及適應情況會因患者而異。每種缺牙重建方式都有其優點、限制及適用條件。治療選擇應根據缺牙數量、缺牙位置、鄰牙健康、骨質、咬合、整體健康及預算共同評估。',
      a: (
        <>
          <p>缺牙後常見的重建方式包括：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>人工植牙</li>
            <li>固定式牙橋</li>
            <li>活動假牙</li>
          </ul>
          <p>人工植牙利用人工牙根支撐牙冠或其他修復物。對於單顆缺牙，通常不需要為了製作傳統牙橋而磨削兩側健康牙齒。</p>
          <p>固定式牙橋的療程可能較短，但通常需要修磨相鄰牙齒作為支撐。日後也需要特別注意牙橋下方清潔、支撐牙齒蛀牙及咬合受力等問題。</p>
          <p>活動假牙通常初期費用較低，也不一定需要植牙手術，但穩定度、咀嚼效率、舒適度及適應情況會因患者而異。</p>
          <p>每種缺牙重建方式都有其優點、限制及適用條件。治療選擇應根據缺牙數量、缺牙位置、鄰牙健康、骨質、咬合、整體健康及預算共同評估。</p>
        </>
      ),
    },
    {
      q: '拔牙後多久可以植牙？缺牙很久還能植牙嗎？',
      aText:
        '如果未來可能考慮植牙，建議在拔牙前先接受植牙評估。部分患者可在拔牙時同步進行牙槽骨保存，以協助維持未來植牙可能需要的骨量。一般情況下，拔牙區域可能需要約三至四個月初步癒合，再進行臨床檢查、3D電腦斷層掃描及植牙規劃。實際等待時間會因感染、骨質、拔牙傷口及個人癒合情況而不同。即使缺牙已經一段時間，仍可能接受植牙。但牙床骨會隨時間逐漸萎縮，部分患者可能需要補骨或其他前置治療。是否仍具備植牙條件，需要透過臨床檢查及影像評估確認。',
      a: (
        <>
          <p>如果未來可能考慮植牙，建議在拔牙前先接受植牙評估。</p>
          <p>部分患者可在拔牙時同步進行牙槽骨保存，以協助維持未來植牙可能需要的骨量。</p>
          <p>一般情況下，拔牙區域可能需要約三至四個月初步癒合，再進行臨床檢查、3D電腦斷層掃描及植牙規劃。實際等待時間會因感染、骨質、拔牙傷口及個人癒合情況而不同。</p>
          <p>即使缺牙已經一段時間，仍可能接受植牙。但牙床骨會隨時間逐漸萎縮，部分患者可能需要補骨或其他前置治療。</p>
          <p>是否仍具備植牙條件，需要透過臨床檢查及影像評估確認。</p>
        </>
      ),
    },
    {
      q: '植牙是什麼？植體和牙冠是什麼材質？',
      aText:
        '人工植牙是利用植體取代缺失牙齒的牙根，再於植體上方安裝基台、牙冠或其他修復物，以恢復牙齒外觀及咀嚼功能。植體通常由具有良好生物相容性的醫療級鈦或鈦合金製成。牙冠可以使用不同材質製作，目前常見的選擇包括全瓷及氧化鋯。適合的牙冠材質會根據缺牙位置、咬合力量、美觀需求及整體治療設計決定。',
      a: (
        <>
          <p>人工植牙是利用植體取代缺失牙齒的牙根，再於植體上方安裝基台、牙冠或其他修復物，以恢復牙齒外觀及咀嚼功能。</p>
          <p>植體通常由具有良好生物相容性的醫療級鈦或鈦合金製成。</p>
          <p>牙冠可以使用不同材質製作，目前常見的選擇包括全瓷及氧化鋯。</p>
          <p>適合的牙冠材質會根據缺牙位置、咬合力量、美觀需求及整體治療設計決定。</p>
        </>
      ),
    },
    {
      q: '植牙會很痛嗎？我很怕痛。',
      aText:
        '植牙手術通常會在局部麻醉下進行。治療過程中的感受及術後不適程度，會因手術範圍、是否補骨、植體數量、個人敏感度及癒合情況而不同。在患者條件適合時，精準規劃及微創方式可能有助於減少手術範圍與組織創傷。醫師會在治療前說明麻醉方式、術後照護及疼痛控制方法。對牙科治療特別緊張的患者，應在諮詢時主動告知診所。部分患者在治療後表示，實際過程比原先想像中輕鬆。',
      a: (
        <>
          <p>植牙手術通常會在局部麻醉下進行。</p>
          <p>治療過程中的感受及術後不適程度，會因手術範圍、是否補骨、植體數量、個人敏感度及癒合情況而不同。</p>
          <p>在患者條件適合時，精準規劃及微創方式可能有助於減少手術範圍與組織創傷。</p>
          <p>醫師會在治療前說明麻醉方式、術後照護及疼痛控制方法。對牙科治療特別緊張的患者，應在諮詢時主動告知診所。</p>
          <p>部分患者在治療後表示，實際過程比原先想像中輕鬆。</p>
        </>
      ),
    },
    {
      q: '植牙費用是多少？我需要補骨嗎？',
      aText:
        '植牙費用無法只透過電話或電子郵件準確判斷。費用可能受到以下因素影響：植體數量、缺牙位置、植體系統、修復方式、骨質與骨量、是否需要補骨、是否需要拔牙、牙周及口腔健康、其他前置治療、整體健康與癒合能力。醫師需要先完成口腔檢查及適當影像評估，才能判斷是否需要補骨，並提供個人化治療方案及較準確的費用估算。',
      a: (
        <>
          <p>植牙費用無法只透過電話或電子郵件準確判斷。</p>
          <p>費用可能受到以下因素影響：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>植體數量</li>
            <li>缺牙位置</li>
            <li>植體系統</li>
            <li>修復方式</li>
            <li>骨質與骨量</li>
            <li>是否需要補骨</li>
            <li>是否需要拔牙</li>
            <li>牙周及口腔健康</li>
            <li>其他前置治療</li>
            <li>整體健康與癒合能力</li>
          </ul>
          <p>醫師需要先完成口腔檢查及適當影像評估，才能判斷是否需要補骨，並提供個人化治療方案及較準確的費用估算。</p>
        </>
      ),
    },
    {
      q: '植牙流程是什麼？多久可以完成？',
      aText:
        '植牙流程通常包括：口腔檢查、3D影像評估、數位治療規劃、植體植入、癒合與骨整合、牙冠或其他修復物製作、定期維護與追蹤。部分案例可能在植體植入後約三至四個月進行最終修復。實際治療時間會受到骨質、植體穩定度、補骨需求、拔牙時間及個人癒合能力影響。較複雜的治療可能需要更長時間。完成檢查後，醫師會說明預計的治療階段及時間。',
      a: (
        <>
          <p>植牙流程通常包括：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>口腔檢查</li>
            <li>3D影像評估</li>
            <li>數位治療規劃</li>
            <li>植體植入</li>
            <li>癒合與骨整合</li>
            <li>牙冠或其他修復物製作</li>
            <li>定期維護與追蹤</li>
          </ul>
          <p>部分案例可能在植體植入後約三至四個月進行最終修復。</p>
          <p>實際治療時間會受到骨質、植體穩定度、補骨需求、拔牙時間及個人癒合能力影響。</p>
          <p>較複雜的治療可能需要更長時間。完成檢查後，醫師會說明預計的治療階段及時間。</p>
        </>
      ),
    },
    {
      q: '植牙一定要拍3D斷層掃描嗎？',
      aText:
        '3D電腦斷層掃描是現代植牙評估與規劃的重要工具。CBCT可以協助醫師評估牙床骨的高度、寬度、密度及形態，以及重要神經、鼻竇和其他解剖結構的位置。醫師會根據患者的個別情況，決定適合的影像檢查方式。',
      a: (
        <>
          <p>3D電腦斷層掃描是現代植牙評估與規劃的重要工具。</p>
          <p>CBCT可以協助醫師評估牙床骨的高度、寬度、密度及形態，以及重要神經、鼻竇和其他解剖結構的位置。</p>
          <p>醫師會根據患者的個別情況，決定適合的影像檢查方式。</p>
        </>
      ),
    },
    {
      q: '你們使用什麼品牌的植體？品牌有差別嗎？',
      aText:
        '吳醫師採用具有研究資料、穩定製造品質及原廠零件支援的植體系統。植體系統的選擇會根據患者的骨質、缺牙位置、治療設計、修復需求及零件供應情況決定。植體品牌是治療考量之一，但醫師的診斷、手術規劃、植體位置、修復設計、口腔清潔及長期維護同樣重要。',
      a: (
        <>
          <p>吳醫師採用具有研究資料、穩定製造品質及原廠零件支援的植體系統。</p>
          <p>植體系統的選擇會根據患者的骨質、缺牙位置、治療設計、修復需求及零件供應情況決定。</p>
          <p>植體品牌是治療考量之一，但醫師的診斷、手術規劃、植體位置、修復設計、口腔清潔及長期維護同樣重要。</p>
        </>
      ),
    },
    {
      q: '年紀大還能植牙嗎？有年齡限制嗎？',
      aText:
        '人工植牙通常沒有單一的絕對年齡上限。比實際年齡更重要的是患者的整體健康、糖尿病控制、牙周狀況、骨質、服用藥物、口腔清潔能力及接受手術的安全性。部分七十歲或八十歲以上患者，在健康狀況穩定並經過完整評估後，仍可能接受植牙治療。是否適合植牙，必須根據每位患者的健康及口腔條件個別判斷。',
      a: (
        <>
          <p>人工植牙通常沒有單一的絕對年齡上限。</p>
          <p>比實際年齡更重要的是患者的整體健康、糖尿病控制、牙周狀況、骨質、服用藥物、口腔清潔能力及接受手術的安全性。</p>
          <p>部分七十歲或八十歲以上患者，在健康狀況穩定並經過完整評估後，仍可能接受植牙治療。</p>
          <p>是否適合植牙，必須根據每位患者的健康及口腔條件個別判斷。</p>
        </>
      ),
    },
    {
      q: '服用骨質疏鬆症藥物可以植牙嗎？',
      aText:
        '部分骨質疏鬆症藥物可能影響骨頭代謝及傷口癒合，並可能增加顎骨相關併發症的風險。風險會受到以下因素影響：藥物種類、口服或注射方式、劑量、治療時間、其他健康因素。患者必須在植牙評估時提供完整的藥物名稱及治療紀錄。牙醫可能需要與患者的家庭醫師或相關專科醫師共同評估。患者不應自行停用骨質疏鬆症藥物，任何藥物調整都應由開藥的醫療專業人員決定。',
      a: (
        <>
          <p>部分骨質疏鬆症藥物可能影響骨頭代謝及傷口癒合，並可能增加顎骨相關併發症的風險。</p>
          <p>風險會受到以下因素影響：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>藥物種類</li>
            <li>口服或注射方式</li>
            <li>劑量</li>
            <li>治療時間</li>
            <li>其他健康因素</li>
          </ul>
          <p>患者必須在植牙評估時提供完整的藥物名稱及治療紀錄。</p>
          <p>牙醫可能需要與患者的家庭醫師或相關專科醫師共同評估。</p>
          <p>患者不應自行停用骨質疏鬆症藥物，任何藥物調整都應由開藥的醫療專業人員決定。</p>
        </>
      ),
    },
    {
      q: '有牙周病還可以植牙嗎？',
      aText:
        '如果患者有活動性牙周病，通常需要先控制牙周發炎，再評估植牙。牙周治療可能包括：深層清潔、牙根整平、控制發炎、改善日常口腔清潔、定期專業追蹤。牙周病相關細菌不只會影響天然牙周圍組織，也可能增加植體周圍疾病及植體周圍炎的風險。穩定的牙周健康及良好的日常清潔，是植牙長期維護的重要基礎。',
      a: (
        <>
          <p>如果患者有活動性牙周病，通常需要先控制牙周發炎，再評估植牙。</p>
          <p>牙周治療可能包括：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>深層清潔</li>
            <li>牙根整平</li>
            <li>控制發炎</li>
            <li>改善日常口腔清潔</li>
            <li>定期專業追蹤</li>
          </ul>
          <p>牙周病相關細菌不只會影響天然牙周圍組織，也可能增加植體周圍疾病及植體周圍炎的風險。</p>
          <p>穩定的牙周健康及良好的日常清潔，是植牙長期維護的重要基礎。</p>
        </>
      ),
    },
    {
      q: '植牙前需要先洗牙、補蛀牙嗎？',
      aText:
        '在植牙前，醫師通常會先評估患者的整體口腔健康。如果存在明顯牙結石、牙周發炎、蛀牙、受損牙齒或其他感染，可能需要先完成：洗牙、牙周治療、蛀牙修復、受損牙齒治療、其他必要處置。建立較健康及穩定的口腔環境，有助於降低感染風險，並改善植牙的長期維護條件。',
      a: (
        <>
          <p>在植牙前，醫師通常會先評估患者的整體口腔健康。</p>
          <p>如果存在明顯牙結石、牙周發炎、蛀牙、受損牙齒或其他感染，可能需要先完成：</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>洗牙</li>
            <li>牙周治療</li>
            <li>蛀牙修復</li>
            <li>受損牙齒治療</li>
            <li>其他必要處置</li>
          </ul>
          <p>建立較健康及穩定的口腔環境，有助於降低感染風險，並改善植牙的長期維護條件。</p>
        </>
      ),
    },
  ],
};

const DentalImplants = () => {
  const { lang } = useI18n();
  const L: L = lang === 'zh' ? 'zh' : 'en';
  const p = <T,>(v: { en: T; zh: T }): T => pick<T>(L, v);

  const meta = seo[L];
  const canonical = `${SITE_URL}${PATH}`;

  const faqItems = faq[L];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.aText },
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
  };

  const onBook = (position: string) =>
    track('implant_book_click', { language: L, cta_position: position });
  const onCall = (position: string) =>
    track('implant_call_click', { language: L, cta_position: position });

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

      {/* SECTION 1 — HERO */}
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
                  onClick={() => onBook('hero')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-medium text-sm tracking-wider uppercase rounded hover:opacity-90 transition min-h-[44px]"
                >
                  <CalendarCheck size={16} />
                  {p(c.bookCta)}
                </a>
                <a
                  href={PHONE_TEL}
                  onClick={() => onCall('hero')}
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
                  en: 'Dental implant consultation at Little Mountain Dental Centre in Vancouver',
                  zh: '溫哥華 Little Mountain Dental Centre 植牙諮詢',
                })}
                className="w-full h-64 md:h-[420px] object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — EXPERIENCE HIGHLIGHTS */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green text-center mb-8">
            {p(c.s2Title)}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {p(c.highlights).map((item, i) => (
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
          <p className="text-center text-xs text-muted-foreground mt-5 max-w-3xl mx-auto leading-relaxed">
            {p(c.aaidNote)}
          </p>
        </div>
      </section>

      {/* SECTION 3 — DR PATRICK WU'S EXPERIENCE */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-4 leading-snug">
            {p(c.s3Title)}
          </h2>
          <h3 className="font-heading text-lg md:text-xl font-medium text-foreground mb-6">
            {p(c.s3Heading)}
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {p(c.s3Body).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — DIGITAL TECHNOLOGY */}
      <section className="section-padding">
        <div className="container-site max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green text-center mb-6">
            {p(c.s4Heading)}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
            {p(c.s4Intro)}
          </p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {p(c.s4List).map((item, i) => (
              <li
                key={i}
                className="bg-secondary/40 rounded-md px-4 py-3 border border-border text-sm md:text-base text-foreground flex items-start gap-2"
              >
                <ChevronRight size={16} className="text-brand-green mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {p(c.s4Outro).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — MINIMALLY INVASIVE */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-6">
            {p(c.s5Heading)}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {p(c.s5Body).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="font-heading text-lg font-semibold text-brand-green mb-3">
              {p(c.s5BenefitsTitle)}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {p(c.s5Benefits).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <ChevronRight size={16} className="text-brand-green mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 — IMPLANT SYSTEMS AND MATERIALS */}
      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green mb-6">
            {p(c.s6Heading)}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {p(c.s6Body).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <ul className="grid sm:grid-cols-2 gap-2 mt-4 mb-6">
            {p(c.s6List).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <ChevronRight size={16} className="text-brand-green mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {p(c.s6Outro).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FIVE PRINCIPLES */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green text-center mb-4">
            {p(c.s7Heading)}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-10">
            {p(c.s7Intro)}
          </p>
          <ol className="grid md:grid-cols-5 gap-4">
            {p(c.principles).map((item, i) => (
              <li key={i} className="bg-background rounded-lg p-5 border border-border">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mb-3">
                  {i + 1}
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-green mb-2">
                  {item.t}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 8 — IMPLANT FAQ */}
      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-brand-green text-center mb-10">
            {p({ en: 'Dental Implant FAQ', zh: '植牙常見問題' })}
          </h2>
          <Accordion type="multiple" className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger
                  onClick={() =>
                    track('implant_faq_open', { language: L, question: item.q, position: i + 1 })
                  }
                  className="text-left font-heading text-base md:text-lg font-medium min-h-[44px]"
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 9 — APPOINTMENT CTA */}
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
              onClick={() => onBook('footer_cta')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-medium text-sm tracking-wider uppercase rounded hover:opacity-90 transition min-h-[44px]"
            >
              <CalendarCheck size={16} />
              {p(c.bookCta)}
            </a>
            <a
              href={PHONE_TEL}
              onClick={() => onCall('footer_cta')}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/70 text-primary-foreground font-medium text-sm tracking-wider uppercase rounded hover:bg-primary-foreground/10 transition min-h-[44px]"
            >
              <Phone size={16} />
              {p(c.callCta)} · {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 10 — MEDICAL INFORMATION NOTICE */}
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
            onClick={() => onCall('mobile_sticky')}
            className="inline-flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded font-medium text-sm min-h-[44px]"
          >
            <Phone size={16} />
            {p(c.callShort)}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onBook('mobile_sticky')}
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
