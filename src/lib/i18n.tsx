import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'zh' | 'ja';

const translations: Record<string, Partial<Record<Lang, string>>> = {
  // Nav
  'nav.home': { en: 'Home', zh: '首頁', ja: 'ホーム' },
  'nav.office': { en: 'Our Office', zh: '我們的診所', ja: '医院案内' },
  'nav.team': { en: 'Our Team', zh: '我們的團隊', ja: 'スタッフ紹介' },
  'nav.services': { en: 'Our Services', zh: '我們的服務', ja: '診療内容' },
  'nav.contact': { en: 'Contact', zh: '聯絡我們', ja: 'お問い合わせ' },
  'nav.lang': { en: '中文', zh: '日本語', ja: 'EN' },
  'nav.bookNow': { en: 'Book Online', zh: '線上預約', ja: 'オンライン予約' },
 'nav.faq': { en: 'FAQ', zh: '常見問題', ja: 'よくあるご質問' },
 'nav.insights': { en: 'Insights', zh: '專欄文章', ja: 'コラム' },
 'cta.bookOnline': { en: 'Book Online', zh: '線上預約', ja: 'オンライン予約はこちら' },
 'insights.title': { en: 'Insights', zh: '專欄文章', ja: 'コラム' },
 'insights.intro': {
   en: 'Helpful insights on dental coverage, costs, and patient care — designed to help you make informed decisions before your visit.',
   zh: '有關牙科保險、收費與診療的實用資訊，幫助您在預約前做出明智的決定。',
   ja: '保険・費用・治療に関するわかりやすい情報をまとめました。ご来院前の参考にお役立てください。',
 },
 'insights.readMore': { en: 'Read More', zh: '閱讀更多', ja: '続きを読む' },
 'insights.backToInsights': { en: 'Back to Insights', zh: '返回專欄', ja: 'コラム一覧に戻る' },
  'cta.checkCoverage': { en: 'Check Your Coverage', zh: '查詢您的保障', ja: '保険内容を確認する' },

  // Hero
  'hero.title': { en: 'Enjoy a New Level of Comfort and Care', zh: '享受全新水平的\n舒適和護理', ja: 'バンクーバーの\nファミリー向け歯科医院' },
  'hero.cta1': { en: 'Book Online', zh: '線上預約', ja: 'オンライン予約はこちら' },
  'hero.cta2': { en: 'Our Services', zh: '我們的服務', ja: '診療内容' },
  'hero.cta.line1': { en: 'New Patients Welcome', zh: '歡迎新病患', ja: '新規患者さま歓迎' },
  'hero.cta.line2': { en: 'Modern family dental care in Vancouver', zh: '溫哥華現代家庭牙科照護', ja: '安心・丁寧な治療とわかりやすい料金説明' },
  'hero.cta.line3': { en: 'Book your visit today', zh: '立即預約看診', ja: '今すぐご予約いただけます' },

  // Insurance
 'insurance.title': { en: 'Modern Family Dental Care in Vancouver', zh: '溫哥華現代家庭牙科', ja: 'バンクーバーで信頼できる歯科治療' },
 'insurance.subtitle': { en: 'Clear pricing. Easy booking. No surprises.', zh: '價格透明・預約簡單・絕無隱藏費用', ja: '明確な料金・簡単な予約・安心のサポート' },
 'insurance.cta': { en: 'Start with a simple online appointment.', zh: '從簡單的線上預約開始', ja: 'オンラインで簡単にご予約いただけます。' },

  // Welcome
  'welcome.title': { en: 'Welcome to Little Mountain Dental Centre', zh: '歡迎來到小山牙科中心', ja: 'リトルマウンテン歯科へようこそ' },
  'welcome.text': { en: 'Welcome to Little Mountain Dental Centre. Our friendly team is committed to providing you with the highest level of professional services and personalized care in a warm and welcoming environment. We believe that building strong relationship with our patients is the key to exceptional dental care, and we look forward to knowing you and your unique needs. Thank you for choosing Little Mountain Dental in achieving your optimal oral health.', zh: '歡迎來到小山牙科中心。我們友善的團隊致力於在溫馨友好的環境中為您提供最高水平的專業服務和個性化護理。我們相信與患者建立牢固的關係是卓越牙科護理的關鍵，我們期待了解您和您的獨特需求。感謝您選擇小山牙科來實現您的最佳口腔健康。', ja: 'リトルマウンテン歯科へようこそ。落ち着いた雰囲気の中で、患者さま一人ひとりに合わせた丁寧な診療を心がけています。お口の状態やご希望をしっかりと伺い、安心して通っていただける医院を目指しています。長くお付き合いできる「かかりつけ歯科」として、皆さまのお越しをお待ちしております。' },

  // Team
  'team.title': { en: 'Our Dedicated Dentists', zh: '我們的專業牙醫', ja: '歯科医師のご紹介' },

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
  'services.title': { en: 'Our Comprehensive Services', zh: '我們的綜合服務', ja: '診療内容' },
  'services.subtitle': { en: 'We have the knowledge and experience to achieve your optimal oral health.', zh: '我們擁有知識和經驗，為您實現最佳口腔健康。', ja: '豊富な経験と確かな技術で、患者さまのお口の健康をサポートいたします。' },
  'services.implants': { en: 'Implants', zh: '種植牙', ja: 'インプラント' },
  'services.orthodontics': { en: 'Orthodontics', zh: '矯正牙科', ja: '矯正歯科' },
  'services.pediatric': { en: 'Pediatric', zh: '兒童牙科', ja: '小児歯科' },
  'services.esthetics': { en: 'Esthetics', zh: '美容牙科', ja: '審美歯科' },
  'services.restoratives': { en: 'Restoratives', zh: '修復牙科', ja: '一般歯科' },
  'services.maintenance': { en: 'Maintenance', zh: '牙齒維護', ja: '定期検診・クリーニング' },

  // Service short descriptions
  'services.implants.short': { en: 'Stable, secure tooth replacement', zh: '穩定安全的牙齒替換方案', ja: 'しっかり噛める安心の治療' },
  'services.orthodontics.short': { en: 'Improve function and alignment of your smile', zh: '改善您笑容的功能與排列', ja: '美しく整った歯並びへ' },
  'services.pediatric.short': { en: 'Gentle care for young smiles', zh: '為孩子提供溫柔的牙科護理', ja: 'お子さまにやさしい診療' },
  'services.esthetics.short': { en: 'Enhance beauty of your smile', zh: '提升您笑容的美感', ja: '自然で美しい口元に' },
  'services.restoratives.short': { en: 'Repair and restore your teeth', zh: '修復您的牙齒健康', ja: '虫歯・むし歯治療など総合的な診療' },
  'services.maintenance.short': { en: 'Keep your oral health on track', zh: '維持您的口腔健康', ja: 'お口の健康を長く守ります' },

  // Reviews
  'reviews.title': { en: 'What Our Patients Say', zh: '患者的評價', ja: '患者さまの声' },
  'reviews.subtitle': { en: 'Read reviews from our valued patients', zh: '閱讀我們尊貴患者的評價', ja: '実際にご来院いただいた患者さまからのご感想です' },
  'reviews.rating': { en: '5.0 Average Rating', zh: '5.0 平均評分', ja: '平均評価 5.0' },
  'reviews.based': { en: 'Based on Google Reviews', zh: '基於 Google 評論', ja: 'Google クチコミより' },
  'reviews.review1': { en: 'My first experience at Little Mountain Dental Centre was excellent. From the initial phone consultation, the staff explained everything clearly and helped arrange the appointment smoothly. Dr. Wu was very professional and the treatment process was painless. I felt completely comfortable during the visit.', zh: '我第一次到 Little Mountain Dental Centre 的體驗非常好。從電話諮詢開始，櫃檯人員就很仔細地解釋並協助安排預約。Dr. Wu 非常專業，整個治療過程幾乎沒有任何不適。整個看診過程讓人非常安心。', ja: '初めてリトルマウンテン歯科にお伺いしましたが、とても良い体験でした。お電話の段階からスタッフの方が丁寧にご説明くださり、予約もスムーズに進みました。Dr. Wu はとても専門的で、治療中もほとんど痛みを感じませんでした。安心して受診することができました。' },
  'reviews.review2': { en: 'Great first visit on a family recommendation. The front desk made insurance easy, and the hygienist Irene was excellent during the cleaning. After the final check from the doctor, I felt very well taken care of.', zh: '透過家人推薦第一次來這裡看診。櫃檯人員讓保險流程非常順利，洗牙的 Irene 也非常專業。醫生最後檢查後讓我感到非常安心。', ja: '家族の紹介で初めて伺いました。受付の方が保険手続きを丁寧にサポートしてくださり、衛生士の Irene さんのクリーニングも丁寧でした。最後に先生にも診ていただき、安心して帰ることができました。' },
  'reviews.review3': { en: 'My daughter has been seeing Dr. Wu since she was very young. She is usually anxious about dental procedures, but the hygienist Anise was extremely patient and calming. The team truly cares about their patients.', zh: '我女兒從小就由 Dr. Wu 看診。她平常對牙科治療會有些緊張，但牙科衛生師 Anise 非常有耐心，也很會安撫小朋友。整個團隊都非常關心病患。', ja: '娘は小さい頃から Dr. Wu に診ていただいています。歯科治療が少し苦手な娘ですが、衛生士の Anise さんがとても優しく接してくださいます。スタッフの皆さまが患者さまを大切にされている医院です。' },
  'reviews.review4': { en: "I've had a fantastic experience at Little Mountain Dental Centre. The team is professional and welcoming, and Dr. Patrick explains everything clearly so the visit feels stress-free. The clinic is modern, clean, and very well organized.", zh: '我在 Little Mountain Dental Centre 的看診體驗非常好。整個團隊非常專業又親切，Dr. Patrick 會清楚解釋每個步驟，讓人完全不緊張。診所環境現代、乾淨，而且管理得非常好。', ja: 'リトルマウンテン歯科での診療はとても良い体験でした。スタッフの皆さまは親切で、Dr. Patrick が一つひとつわかりやすく説明してくださるので、緊張せずに受診できました。院内も清潔で、現代的な設備が整っています。' },
  'reviews.review5': { en: 'Our family doctor recommended this clinic and it has been a wonderful experience. The staff are friendly and professional, and the clinic environment is elegant and welcoming.', zh: '這間牙醫診所是家庭醫師推薦的。整個團隊非常友善且專業，診所環境也很優雅舒適。', ja: 'かかりつけ医からの紹介で伺いました。スタッフの皆さまは親しみやすく、診療も丁寧です。院内も落ち着いた雰囲気でとても居心地が良い医院です。' },
  'reviews.review6': { en: 'Dr. Patrick is incredibly patient and kind. He always explains everything clearly and makes sure you feel comfortable. The staff are also very friendly and never pressure patients with unnecessary treatments.', zh: 'Dr. Patrick 非常有耐心也很親切。他會清楚解釋每一個治療步驟，讓人感到很放心。診所團隊也非常友善，不會強迫推銷不必要的治療。', ja: 'Dr. Patrick はとても辛抱強く、優しい先生です。治療内容を一つひとつ丁寧にご説明くださり、安心して任せられます。スタッフも親切で、不要な治療を勧められることもありません。' },

  // Why Trust
  'trust.title': { en: 'Why Choose Little Mountain Dental Centre?', zh: '為什麼選擇小山牙科中心？', ja: 'リトルマウンテン歯科が選ばれる理由' },
  'trust.text': { en: 'Your comfort is our priority. We take pride in offering personalized, attentive care tailored to each patient\'s needs. We combine clinical excellence with a calm, welcoming environment so you can feel relaxed and well looked after at every visit.', zh: '您的舒適是我們的首要任務。我們以為每位患者提供個性化、細心的護理為榮。我們將卓越的臨床技術與平靜、友好的環境相結合，讓您在每次就診時都能感到放鬆和安心。', ja: '患者さまに安心していただけることを何より大切にしています。お一人おひとりのお口の状態やご希望に合わせて、わかりやすくご説明したうえで治療を行います。落ち着いた院内で、ゆったりと診療を受けていただけます。' },

  // CDCP Section (high-conversion)
  'cdcp.title': { en: 'Covered by CDCP or Children\'s Benefits?', zh: '有 CDCP 或兒童福利保障嗎？', ja: 'CDCPおよびお子様向け保険に対応しています' },
  'cdcp.desc': { en: 'Not sure what\'s covered or how much you\'ll pay? We\'ll check your coverage and explain everything before your visit — no surprises.', zh: '不確定保障範圍或自付費用？我們會在您就診前先核實保障並清楚說明，絕無意外。', ja: '保険内容や自己負担について事前にわかりやすくご説明いたします。当日になって思わぬ費用が発生することはありません。' },
  'cdcp.bullet1': { en: 'We help verify your CDCP coverage before treatment', zh: '治療前協助核實您的 CDCP 保障', ja: 'CDCPの適用内容を事前に確認' },
  'cdcp.bullet2': { en: 'Children may qualify for both CDCP & Healthy Kids benefits', zh: '兒童可能同時符合 CDCP 與 Healthy Kids 福利', ja: 'お子様の保険（CDCP・各種補助制度）にも対応' },
  'cdcp.bullet3': { en: 'We clearly explain any out-of-pocket costs upfront', zh: '提前清楚說明任何自付費用', ja: '治療前に自己負担額をご説明' },
  'cdcp.bullet4': { en: 'Simple online booking — no phone calls required', zh: '輕鬆線上預約，無需打電話', ja: 'オンラインで簡単に予約可能' },
  'cdcp.faqTitle': { en: 'Quick answers', zh: '常見疑問', ja: 'よくあるご質問' },

  // FAQ (mini, on homepage) — high-conversion, non-CDCP, max 5 Qs
  'faq.title': { en: 'Frequently Asked Questions', zh: '常見問題', ja: 'よくあるご質問' },
  'faq.q1': { en: 'Can I book an appointment online?', zh: '可以線上預約看診嗎？', ja: 'オンラインで予約はできますか？' },
  'faq.a1': { en: 'Yes, you can book your appointment online anytime. The process is simple and only takes a few minutes.', zh: '可以，您隨時都能線上預約。流程簡單，只需幾分鐘即可完成。', ja: 'はい、24時間いつでもオンラインでご予約いただけます。お手続きは簡単で、数分で完了します。' },
  'faq.q2': { en: 'Do you accept insurance?', zh: '你們接受保險嗎？', ja: '保険は使えますか？' },
  'faq.a2': { en: 'Yes, we direct bill most insurance plans. Patients are responsible for any remaining balance not covered by insurance.', zh: '是的，我們為大多數保險計劃直接申報。保險未涵蓋的差額由患者自付。', ja: 'はい、ほとんどの保険プランで保険会社への直接請求に対応しております。保険適用外の差額分は患者さまのご負担となります。' },
  'faq.q3': { en: 'What should I expect during my first visit?', zh: '第一次看診會包含哪些內容？', ja: '初診ではどのようなことを行いますか？' },
  'faq.a3': { en: 'Your first visit typically includes an examination, consultation, and a discussion of any recommended treatments.', zh: '初診通常包括口腔檢查、諮詢，以及與您討論建議的治療方案。', ja: '初診では、お口の検査・カウンセリング、必要に応じた治療方針のご説明を行います。' },
  'faq.q4': { en: 'How long does a dental appointment take?', zh: '一般看診大約需要多長時間？', ja: '診療にかかる時間はどのくらいですか？' },
  'faq.a4': { en: 'Most routine appointments take between 30 to 60 minutes, depending on the type of visit.', zh: '一般看診大約需要 30 至 60 分鐘，視看診內容而定。', ja: '一般的な診療はおおよそ30〜60分です。診療内容により前後いたします。' },
  'faq.q5': { en: 'Do you accept emergency dental appointments?', zh: '你們有提供急診服務嗎？', ja: '急患の対応はしていますか？' },
  'faq.a5': { en: 'Yes, we do our best to accommodate urgent dental needs. Please contact us or book online as soon as possible.', zh: '有的，我們會盡力安排急診需求。請盡快與我們聯絡或線上預約。', ja: 'はい、できる限り対応いたします。お早めにオンライン予約またはお問い合わせください。' },
  'faq.readyTitle': { en: 'Ready to book your visit?', zh: '準備好預約看診了嗎？', ja: 'ご予約の準備はできましたか？' },
  'faq.bookNow': { en: 'Book Online Now', zh: '立即線上預約', ja: '今すぐオンライン予約' },
  'faq.stillHelp': { en: "Still have questions? We're here to help.", zh: '還有疑問嗎？我們很樂意為您解答。', ja: 'ご不明な点がございましたら、お気軽にお問い合わせください。' },

  // Full FAQ page — restructured into 5 clear categories
  'faqPage.title': { en: 'Dental FAQs', zh: '牙科常見問題', ja: '歯科に関するよくあるご質問' },
  'faqPage.desc': { en: 'Find answers about booking, insurance, CDCP coverage, first visits, and general clinic information.', zh: '了解預約方式、保險、CDCP 保障、初診內容與診所一般資訊。', ja: 'ご予約・保険・CDCP・初診・医院情報など、よくいただくご質問をまとめました。' },

  // Section 1 — Booking
  'faqPage.cat1': { en: 'Booking', zh: '預約', ja: 'ご予約について' },
  'faqPage.c1q1': { en: 'Can I book an appointment online?', zh: '可以線上預約看診嗎？', ja: 'オンラインで予約はできますか？' },
  'faqPage.c1a1': { en: 'Yes, online booking is available for your convenience and can be completed in just a few minutes.', zh: '可以，我們提供線上預約服務，幾分鐘內即可完成。', ja: 'はい、オンライン予約をご利用いただけます。数分でお手続きが完了します。' },
  'faqPage.c1q2': { en: 'Do you accept new patients?', zh: '你們接受新病患嗎？', ja: '新規患者の受付はしていますか？' },
  'faqPage.c1a2': { en: 'Yes, we are currently accepting new patients.', zh: '是的，我們目前接受新病患。', ja: 'はい、新規患者さまを随時受け付けております。' },

  // Section 2 — Insurance & Payment
  'faqPage.cat2': { en: 'Insurance & Payment', zh: '保險與付款', ja: '保険・お支払いについて' },
  'faqPage.c2q1': { en: 'Do you accept insurance?', zh: '你們接受保險嗎？', ja: '保険は使えますか？' },
  'faqPage.c2a1': { en: 'Yes, we direct bill most insurance plans. Patients are responsible for any remaining balance.', zh: '是的，我們為大多數保險計劃直接申報。差額由患者自付。', ja: 'はい、ほとんどの保険プランで直接請求に対応しております。差額分は患者さまのご負担となります。' },

  // Section 3 — CDCP
  'faqPage.cat3': { en: 'CDCP', zh: 'CDCP', ja: 'CDCPについて' },
  'faqPage.c3q1': { en: 'What is CDCP?', zh: '什麼是 CDCP？', ja: 'CDCPとは何ですか？' },
  'faqPage.c3a1': { en: 'CDCP is a federal dental care program. Patients must renew annually and coverage may not be 100%.', zh: 'CDCP 是聯邦牙科保障計劃。需每年續保，且保障未必涵蓋全部費用。', ja: 'CDCPはカナダ連邦政府の歯科保険制度です。毎年更新が必要で、すべての費用が補償されるわけではありません。' },
  'faqPage.c3q2': { en: 'Will CDCP cover everything?', zh: 'CDCP 會涵蓋所有費用嗎？', ja: 'CDCPですべての費用がカバーされますか？' },
  'faqPage.c3a2': { en: 'Not always. A co-pay may apply depending on coverage and fee guide differences.', zh: '不一定。視保障範圍與收費標準差異，可能需要自付部分費用。', ja: 'いいえ。保険の適用範囲や料金基準の差により、自己負担が発生する場合があります。' },
  'faqPage.c3q3': { en: 'How often can I come for cleaning under CDCP?', zh: 'CDCP 下我可以多久洗牙一次？', ja: 'CDCPではクリーニングはどのくらいの頻度で受けられますか？' },
  'faqPage.c3a3': { en: 'Coverage follows specific guidelines, typically once per year unless additional treatment is approved.', zh: '保障依特定指引，通常每年一次，除非獲批准額外治療。', ja: '原則として年1回が対象です。追加の治療が必要な場合は事前承認が必要となります。' },

  // Section 4 — Your Visit
  'faqPage.cat4': { en: 'Your Visit', zh: '您的看診', ja: 'ご来院について' },
  'faqPage.c4q1': { en: 'What should I expect during my first visit?', zh: '第一次看診會包含哪些內容？', ja: '初診ではどのようなことを行いますか？' },
  'faqPage.c4a1': { en: 'Your visit typically includes an examination, consultation, and discussion of any recommended treatments.', zh: '初診通常包括口腔檢查、諮詢，以及與您討論建議的治療方案。', ja: '初診では検査・カウンセリング、必要に応じた治療方針のご説明を行います。' },
  'faqPage.c4q2': { en: 'How long does a dental appointment take?', zh: '一般看診大約需要多長時間？', ja: '診療にかかる時間はどのくらいですか？' },
  'faqPage.c4a2': { en: 'Most appointments take between 30 to 60 minutes.', zh: '大多數看診約需要 30 至 60 分鐘。', ja: 'ほとんどの診療は30〜60分程度です。' },
  'faqPage.c4q3': { en: 'Do you accept emergency dental visits?', zh: '你們接受急診嗎？', ja: '急患の対応はしていますか？' },
  'faqPage.c4a3': { en: 'Yes, we try to accommodate urgent dental needs whenever possible.', zh: '是的，我們會盡力安排緊急牙科需求。', ja: 'はい、できる限り対応するよう努めております。' },

  // Section 5 — Clinic Information
  'faqPage.cat5': { en: 'Clinic Information', zh: '診所資訊', ja: '医院情報' },
  'faqPage.c5q1': { en: 'Where are you located?', zh: '診所位於哪裡？', ja: '医院はどこにありますか？' },
  'faqPage.c5a1': { en: '620 E Broadway, Vancouver, BC V5T 1X6', zh: '620 E Broadway, Vancouver, BC V5T 1X6', ja: '620 E Broadway, Vancouver, BC V5T 1X6' },
  'faqPage.c5q2': { en: 'What are your hours?', zh: '營業時間是？', ja: '診療時間を教えてください。' },
  'faqPage.c5a2': { en: 'Monday–Friday: 9:00 AM – 5:30 PM\nSaturday: 8:30 AM – 5:00 PM\nSunday: Closed', zh: '週一至週五：上午 9:00 – 下午 5:30\n週六：上午 8:30 – 下午 5:00\n週日：休診', ja: '月〜金：9:00 – 17:30\n土：8:30 – 17:00\n日：休診' },
  'faqPage.c5q3': { en: 'Is parking available?', zh: '有停車位嗎？', ja: '駐車場はありますか？' },
  'faqPage.c5a3': { en: 'Street parking is available. Restrictions apply on Broadway during weekday daytime hours.', zh: '提供路邊停車。Broadway 平日白天有停車限制，請留意。', ja: '路上駐車をご利用いただけます。Broadway沿いは平日昼間に駐車制限がありますのでご注意ください。' },
  'faqPage.c5q4': { en: 'What is your phone number?', zh: '電話號碼是？', ja: '電話番号を教えてください。' },
  'faqPage.c5a4': { en: '(604) 879-5612', zh: '(604) 879-5612', ja: '(604) 879-5612' },

  'faqPage.stillTitle': { en: 'Still have questions?', zh: '還有疑問嗎？', ja: 'その他のご質問はございますか？' },
  'faqPage.stillText': { en: 'Our team can help you understand your coverage and plan your visit.', zh: '我們的團隊可協助您了解保障並安排就診。', ja: '当院スタッフが保険内容のご確認や、ご来院のご相談を承ります。お気軽にお問い合わせください。' },

  // Contact
  'contact.title': { en: 'Contact Us', zh: '聯絡我們', ja: 'お問い合わせ' },
  'contact.subtitle': { en: 'Our team is happy to help you and your family achieving that perfect smile!', zh: '我們的團隊很樂意幫助您和您的家人擁有完美的笑容！', ja: 'ご不明な点がございましたらお気軽にお問い合わせください。' },
  'contact.firstName': { en: 'First Name', zh: '名字', ja: 'お名前（名）' },
  'contact.lastName': { en: 'Last Name', zh: '姓氏', ja: 'お名前（姓）' },
  'contact.name': { en: 'Full Name', zh: '全名', ja: 'お名前' },
  'contact.email': { en: 'Email', zh: '電子郵件', ja: 'メールアドレス' },
  'contact.phone': { en: 'Phone', zh: '電話', ja: '電話番号' },
  'contact.message': { en: 'Message', zh: '留言', ja: 'お問い合わせ内容' },
  'contact.send': { en: 'Request a Call Back', zh: '請求回電', ja: '折り返しのご連絡を希望する' },
  'contact.success': { en: 'Thank you! Your message has been sent successfully.', zh: '謝謝！您的訊息已成功發送。', ja: '送信が完了しました。お問い合わせいただきありがとうございます。' },
  'contact.address': { en: 'Address', zh: '地址', ja: '住所' },
  'contact.officeHours': { en: 'Office Hours', zh: '診所時間', ja: '診療時間' },

  // Footer
  'footer.tagline': { en: 'Providing exceptional dental care in a warm and welcoming environment.', zh: '在溫馨友好的環境中提供卓越的牙科護理。', ja: '落ち着いた院内で、丁寧で心のこもった歯科診療をご提供しています。' },
  'footer.richmond': { en: 'Also you are welcome to visit our Richmond Office –', zh: '歡迎您也前來我們的列治文診所 –', ja: 'リッチモンド院もぜひご利用ください –' },
  'footer.friendlyDental': { en: 'Friendly Dental Centre', zh: 'Friendly Dental Centre', ja: 'Friendly Dental Centre' },
  'footer.links': { en: 'Links', zh: '連結', ja: 'リンク' },
  'footer.services': { en: 'Services', zh: '服務', ja: '診療内容' },
  'footer.officeHours': { en: 'Office Hours', zh: '診所時間', ja: '診療時間' },
  'footer.closed': { en: 'Closed', zh: '休息', ja: '休診' },
  'footer.copyright': { en: '© 2026 Little Mountain Dental Centre', zh: '© 2026 小山牙科中心', ja: '© 2026 Little Mountain Dental Centre' },
  'footer.webdesign': { en: 'Web Design by', zh: '網頁設計：', ja: 'Web Design by' },

  // Loading
  'loading': { en: 'Loading...', zh: '載入中...', ja: '読み込み中...' },

  // Office page
  'office.title': { en: 'Our Office', zh: '我們的診所', ja: '医院案内' },
  'office.subtitle': { en: 'Experience dental care in a modern, comfortable environment', zh: '在現代舒適的環境中體驗牙科護理', ja: '清潔で落ち着いた院内で、安心の歯科診療をご提供します' },

  // Service descriptions
  'service.implants.desc': { en: 'Dental implants are a stable and secure surgical option for replacing one or more missing teeth. A dental implant uses an artificial root usually made of titanium. The implant is surgically inserted into the upper or lower jawbone and an artificial tooth is attached to the implant. The implant acts as an anchor to hold the replacement tooth in place.', zh: '種植牙是替換一顆或多顆缺失牙齒的穩定且安全的手術選擇。種植牙使用通常由鈦製成的人工牙根。種植體通過手術植入上頜骨或下頜骨中，人工牙齒附著在種植體上。種植體充當錨固件，將替換牙齒固定到位。', ja: 'インプラントは、失った歯を補うための安定した治療法のひとつです。チタン製の人工歯根を顎の骨にしっかり固定し、その上に人工の歯を装着します。天然歯のように自然な噛み心地と見た目を取り戻せるため、入れ歯やブリッジに代わる選択肢として多くの患者さまに選ばれています。' },
  'service.orthodontics.desc': { en: 'Whether you are an adult or a teen, a healthy smile with bright, well-aligned teeth can be an important part of your self-image. While well-aligned teeth can make a beautiful and confident smile, the benefits can reach far beyond. Improper alignments can also affect speech, chewing and digestion. In addition, teeth that are not well aligned or overcrowded may be more difficult to clean and cause decay or gum disease.', zh: '無論您是成人還是青少年，擁有明亮、整齊牙齒的健康微笑可能是您自我形象的重要組成部分。雖然整齊的牙齒可以帶來美麗而自信的微笑，但好處遠不止於此。不正確的排列還會影響言語、咀嚼和消化。此外，排列不齊或過於擁擠的牙齒可能更難以清潔，並導致蛀牙或牙齦疾病。', ja: '矯正治療は、お子さまから大人の方まで幅広い年代の方にお受けいただけます。歯並びを整えることは見た目の美しさだけでなく、噛み合わせ・発音・消化機能の改善にもつながります。また、歯並びが整うことで歯みがきがしやすくなり、虫歯や歯周病の予防にも効果的です。' },
  'service.pediatric.desc': { en: "We offer children's dentistry services to help your child maintain a healthy smile from an early age. We are experienced in working with children and will make sure your child feels comfortable and at ease during their dental visit. Our children's dentistry services include regular checkups, cleanings, and preventive care to help keep their teeth and gums healthy.", zh: '我們提供兒童牙科服務，幫助您的孩子從小保持健康的微笑。我們在與兒童合作方面經驗豐富，將確保您的孩子在看牙時感到舒適和自在。我們的兒童牙科服務包括定期檢查、清潔和預防護理，以幫助保持他們的牙齒和牙齦健康。', ja: '小児歯科では、お子さまが安心して通える歯医者さんを目指しています。歯科治療が初めてのお子さまにも、緊張せずに受けていただけるよう、優しく丁寧に対応いたします。定期検診・クリーニング・予防処置を通して、健やかな歯の成長をサポートします。' },
  'service.maintenance.desc': { en: 'Regular dental maintenance, including professional cleanings and comprehensive exams, is critical for maintaining good oral health. Professional cleaning is the most effective way of tackling tartar build-up and removing plaque, and regular cleanings are essential to combat tooth decay. A comprehensive dental exam is also critical to catching dental problems early and preventing them from becoming more serious and costly to treat.', zh: '定期牙齒維護，包括專業清潔和全面檢查，對於保持良好的口腔健康至關重要。專業清潔是去除牙石和牙菌斑的最有效方式，定期清潔對於預防蛀牙至關重要。全面的牙齒檢查也對及早發現牙齒問題並防止其變得更加嚴重和昂貴至關重要。', ja: '定期検診とクリーニングは、お口の健康を長く保つためにとても大切です。歯石やプラークは毎日のブラッシングだけでは取り除きにくいため、専門的なクリーニングで定期的にお手入れすることをおすすめしています。早期に問題を見つけることで、大きな治療を防ぐことにもつながります。' },
  'service.restoratives.desc': { en: 'Our restorative dentistry services can help repair damage caused by decay, injury, or other factors and restore your teeth to their optimal health and function. From filling cavities to root canals to repairing broken or missing teeth with dental implants or bridges, we offer a range of restorative dentistry services to help you regain your smile and confidence.', zh: '我們的修復牙科服務可以幫助修復因蛀牙、受傷或其他因素造成的損害，並將您的牙齒恢復到最佳健康狀態和功能。從填補蛀牙到根管治療，再到使用種植牙或牙橋修復破裂或缺失的牙齒，我們提供一系列修復牙科服務，幫助您重獲微笑和信心。', ja: '虫歯や外傷などで傷んでしまった歯を、本来の機能と見た目に近い状態へと回復させる治療です。詰め物・被せ物による修復から、根管治療、インプラントやブリッジによる欠損補綴まで、患者さまに合わせた治療プランをご提案いたします。' },
  'service.esthetics.desc': { en: "We believe that a beautiful smile can boost your confidence and improve your overall quality of life. Our esthetic dentistry services, including veneers, teeth whitening, direct composite bonding, and other cosmetic treatments, can help enhance the appearance of your teeth and give you the smile you've always wanted. From covering up chips or cracks in your teeth with veneers to brightening your smile with professional teeth whitening, we offer a range of esthetic dentistry services to help you achieve the perfect smile.", zh: '我們相信美麗的微笑可以增強您的信心並改善您的整體生活質量。我們的美容牙科服務，包括貼面、牙齒美白、直接複合樹脂修復和其他美容治療，可以幫助改善您牙齒的外觀，讓您擁有一直想要的微笑。從用貼面遮蓋牙齒上的缺口或裂縫，到用專業牙齒美白使您的微笑更加燦爛，我們提供一系列美容牙科服務，幫助您實現完美的微笑。', ja: '審美歯科では、ご自身の歯を美しく整えることで、自然で自信のある笑顔をサポートいたします。ラミネートベニア、ホワイトニング、ダイレクトボンディングなど、患者さまのご希望に合わせた治療をご提案します。歯の色や形を整えたい方も、お気軽にご相談ください。' },
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

const isLang = (v: unknown): v is Lang => v === 'en' || v === 'zh' || v === 'ja';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lm-lang');
    return isLang(saved) ? saved : 'en';
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lm-lang', l);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    // Fallback chain: requested lang → English → key
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);

