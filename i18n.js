/* ─────────────────────────────────────────────────────────
   TRANSLATIONS  —  English · Arabic · Dutch
───────────────────────────────────────────────────────── */
const T = {
  en: {
    dir: 'ltr', lang: 'en',

    /* Nav */
    'nav.home':       'Home',
    'nav.about':      'About Me',
    'nav.mystory':    'My Story',
    'nav.process':    'How I Solve Problems',
    'nav.skills':     'Skills & Tools',
    'nav.experience': 'My Experience',
    'nav.work':       'Work',
    'nav.services':   'Services',
    'nav.reviews':    'Reviews',
    'nav.contact':    'Contact',
    'nav.hireme':     'Hire Me',

    /* Hero */
    'hero.avail':   'Open to Remote Roles · US / EU / AU',
    'hero.title':   'I Help SaaS &amp;<br>AI Startups <span class="accent-text serif">Design</span><br>Brands That Convert.',
    'hero.line1':   'I Help SaaS &',
    'hero.line2':   'AI Startups',
    'hero.line3':   'Design',
    'hero.line4':   'Brands That Convert.',
    'hero.sub':     'Senior Brand & Web Designer — 7+ years turning business goals into visual systems, products, and websites that drive real results.',
    'hero.cta1':    'Start a Project',
    'hero.cta2':    'View My Work',
    'hero.stat1l':  'Years Experience',
    'hero.stat2l':  'Projects Delivered',
    'hero.stat3l':  'Companies & Brands',
    'hero.avail2':  'Available for Work',
    'hero.role':    'Senior Brand & Web Designer',

    /* Proof */
    'proof.label':  'Trusted by',

    /* Work */
    'work.label':   'Selected Work',
    'work.title':   'Case Studies',
    'work.desc':    'A closer look at projects that moved the needle — with real challenges, decisions, and results.',
    'work.behance': 'Full Portfolio on Behance →',
    'work.viewcs':  'View Full Case Study →',

    /* CS 1 */
    'cs1.cat':   'Brand Identity · Branding System',
    'cs1.title': 'Complete Brand Identity for a B2B SaaS Platform',
    'cs1.desc':  'The client had a product but no brand — their visuals were inconsistent across marketing, product, and social. I designed a full identity system from the ground up that unified everything.',

    /* CS 2 */
    'cs2.cat':   'UI/UX Design · SaaS Dashboard',
    'cs2.title': 'AI Analytics Dashboard Redesign',
    'cs2.desc':  'The existing dashboard was overloaded with data and causing user drop-off. I led a full redesign — from discovery and wireframes to a polished, component-based design system in Figma.',

    /* CS 3 */
    'cs3.cat':   'Web Design · Lead Generation',
    'cs3.title': 'High-Converting Landing Page for AI Startup',
    'cs3.desc':  'Designed a results-driven marketing website for an early-stage AI startup — clear value proposition, strategic CTAs, social proof sections, and mobile-first responsive design.',

    /* CS 4 */
    'cs4.cat':   'Pitch Deck',
    'cs4.title': 'Investor Pitch Deck — Series A Startup',
    'cs4.desc':  'Story-driven presentation design built to impress investors and close the round.',

    /* CS 5 */
    'cs5.cat':   'Social Media',
    'cs5.title': 'LinkedIn Growth Campaign',
    'cs5.desc':  'Branded social assets that drove measurable LinkedIn engagement growth for a tech company.',

    /* Services */
    'svc.label':  'Services',
    'svc.title':  'What I Do',
    'svc.quote':  'Get a Quote →',
    'svc1.title': 'Brand Identity Design',
    'svc1.desc':  'Full visual identities that tell your story — logo systems, color palettes, typography, and brand guidelines that scale.',
    'svc2.title': 'UI/UX Design',
    'svc2.desc':  'End-to-end product design for web and mobile — wireframes, user flows, prototypes, and pixel-perfect Figma screens.',
    'svc3.title': 'Web & Landing Page Design',
    'svc3.desc':  'Conversion-focused marketing websites and landing pages that align with your brand and turn visitors into customers.',
    'svc4.title': 'Social Media & Digital Assets',
    'svc4.desc':  'Scroll-stopping social posts, web banners, email templates, and digital assets — consistent, on-brand, at scale.',
    'svc5.title': 'Pitch Deck Design',
    'svc5.desc':  'Investor-grade presentations built to communicate your vision clearly and make your ask impossible to ignore.',
    'svc6.title': 'AI-Enhanced Design',
    'svc6.desc':  'Faster delivery using Midjourney, Canva AI, Uizard, and Figma AI plugins — same quality, better turnaround, smarter budget.',

    /* Testimonials */
    'testi.label': 'Reviews',
    'testi.title': 'What Clients Say',
    'testi.desc':  'Real feedback from the people I\'ve worked with.',

    /* Contact */
    'contact.label':  'Get In Touch',
    'contact.title':  'Let\'s build something<br><span class="serif accent-text">remarkable together.</span>',
    'contact.desc':   'Open to full-time remote roles and freelance projects. Drop me a message — I reply within 24 hours.',
    'contact.f.name': 'Your Name',
    'contact.f.email':'Email Address',
    'contact.f.svc':  'Service Needed',
    'contact.f.bgt':  'Budget Range',
    'contact.f.msg':  'Project Details',
    'contact.f.ph.name':  'John Smith',
    'contact.f.ph.email': 'john@company.com',
    'contact.f.ph.msg':   'Tell me about your project, goals, timeline, and any specific requirements...',
    'contact.f.submit':   'Send Message',
    'contact.f.success':  '✓ Message sent! I\'ll get back to you within 24 hours.',
    'contact.email.lbl':  'Email',
    'contact.phone.lbl':  'Phone / WhatsApp',
    'contact.loc.lbl':    'Location',
    'contact.loc.val':    'Lahore, Pakistan · Remote Worldwide',
    'contact.tz.lbl':     'Timezone',
    'contact.tz.val':     'PKT (UTC+5) · Flexible US/EU overlap',

    /* Footer */
    'footer.copy': '© 2026 Tanzeel Ur Rehman. Designed & built with intent.',

    /* About page */
    'about.pg.label': 'About Me',
    'about.pg.title': 'The designer behind<br><span class="serif accent-text">the work.</span>',
    'about.pg.sub':   'My story, how I think, the tools I use, and the companies I\'ve worked with.',

    'about.label': 'My Story',
    'about.title': 'Design is how I<br><span class="serif accent-text">solve problems.</span>',
    'about.p1': 'I\'m <strong>Tanzeel Ur Rehman</strong>, a Senior Brand & Web Designer based in Lahore, Pakistan — with <strong>7+ years</strong> helping SaaS products and AI startups build brands that mean something and interfaces that work.',
    'about.p2': 'At <strong>Arbisoft</strong>, one of Pakistan\'s top-tier software companies, I lead visual design across brand identity, product UI/UX, marketing websites, and growth campaigns for international clients. Before that, I\'ve worked across SaaS, email marketing (Unlayer), and AI analytics (Adlytic AI).',
    'about.p3': 'I\'m <strong>timezone-flexible</strong>, async-friendly, and have worked with remote teams for years. I\'m actively looking for senior remote design roles or freelance partnerships with ambitious teams.',
    'about.cta1':    'Work With Me',
    'about.cta2':    'Download CV',
    'about.stat1l':  'Years of Experience',
    'about.stat2l':  'Projects Delivered',
    'about.stat3l':  'Companies Served',
    'about.stat4l':  'Client Satisfaction',
    'about.current': 'Current · Senior Graphic Designer · Jan 2023–Present',

    'process.label': 'How I Solve Problems',
    'process.title': 'My Design Process',
    'process.desc':  'A clear, collaborative process that keeps projects on time, on brand, and on brief.',
    'ps1.title': 'Discover', 'ps1.desc': 'Deep-dive into your business, audience, competitors, and goals. No guesswork — only informed design decisions.',
    'ps2.title': 'Define',   'ps2.desc': 'Clarify the brief, set success metrics, map user flows, and align on a creative direction before a single pixel is placed.',
    'ps3.title': 'Design',   'ps3.desc': 'Wireframes, iterations, high-fidelity screens, and prototypes — with structured feedback rounds to keep it tight.',
    'ps4.title': 'Deliver',  'ps4.desc': 'Pixel-perfect files, full handoff documentation, dev-ready assets, and post-launch support if needed.',

    'skills.label': 'Expertise',
    'skills.title': 'Skills & Tools',
    'skills.soft':  'Design Software',
    'skills.disc':  'Design Disciplines',
    'skills.tools': 'Tools & Platforms',

    'exp.label': 'Career',
    'exp.title': 'My Experience',
    'exp.desc':  '7+ years across SaaS, AI, and software companies.',
  },

  /* ─── ARABIC ─── */
  ar: {
    dir: 'rtl', lang: 'ar',

    'nav.home':       'الرئيسية',
    'nav.about':      'نبذة عني',
    'nav.mystory':    'قصتي',
    'nav.process':    'كيف أحل المشكلات',
    'nav.skills':     'المهارات والأدوات',
    'nav.experience': 'خبرتي',
    'nav.work':       'أعمالي',
    'nav.services':   'الخدمات',
    'nav.reviews':    'التقييمات',
    'nav.contact':    'تواصل',
    'nav.hireme':     'وظّفني',

    'hero.avail':   'متاح للعمل عن بُعد · US / EU / AU',
    'hero.title':   'أساعد شركات SaaS<br>والناشئة في AI <span class="accent-text serif">تصميم</span><br>علامات تجارية تحقق نتائج.',
    'hero.line1':   'أساعد شركات SaaS',
    'hero.line2':   'والشركات الناشئة في AI',
    'hero.line3':   'تصميم',
    'hero.line4':   'علامات تجارية تحقق نتائج.',
    'hero.sub':     'مصمم برند وويب بأكثر من 7 سنوات خبرة في تحويل أهداف الأعمال إلى أنظمة بصرية ومنتجات ومواقع تحقق نتائج حقيقية.',
    'hero.cta1':    'ابدأ مشروعًا',
    'hero.cta2':    'عرض أعمالي',
    'hero.stat1l':  'سنوات خبرة',
    'hero.stat2l':  'مشروع منجز',
    'hero.stat3l':  'شركات وعلامات',
    'hero.avail2':  'متاح للعمل',
    'hero.role':    'مصمم برند وويب أول',

    'proof.label':  'موثوق من قِبَل',

    'work.label':   'أعمال مختارة',
    'work.title':   'دراسات الحالة',
    'work.desc':    'نظرة معمّقة على مشاريع حققت نتائج — تحديات حقيقية وقرارات ونتائج ملموسة.',
    'work.behance': '← عرض Portfolio كامل على Behance',
    'work.viewcs':  '← عرض دراسة الحالة الكاملة',

    'cs1.cat':   'هوية بصرية · نظام برند',
    'cs1.title': 'هوية بصرية متكاملة لمنصة SaaS بين الشركات',
    'cs1.desc':  'كان العميل يمتلك منتجًا بدون هوية — التصميمات كانت غير متسقة عبر التسويق والمنتج والسوشيال ميديا. صممت نظام هوية متكاملاً من الصفر يوحّد كل شيء.',

    'cs2.cat':   'تصميم UI/UX · لوحة تحكم SaaS',
    'cs2.title': 'إعادة تصميم لوحة تحكم تحليلات الذكاء الاصطناعي',
    'cs2.desc':  'كانت لوحة التحكم مثقلة بالبيانات وتسبب تراجع المستخدمين. قدت إعادة تصميم شاملة — من الاستكشاف والإطارات التخطيطية إلى نظام تصميم متكامل في Figma.',

    'cs3.cat':   'تصميم ويب · توليد عملاء',
    'cs3.title': 'صفحة هبوط عالية التحويل لشركة ذكاء اصطناعي ناشئة',
    'cs3.desc':  'صممت موقعًا تسويقيًا موجهًا للنتائج لشركة ذكاء اصطناعي ناشئة — عرض قيمة واضح، CTAs استراتيجية، أقسام إثبات اجتماعي، وتصميم متجاوب للجوال.',

    'cs4.cat':   'عرض تقديمي للمستثمرين',
    'cs4.title': 'Pitch Deck للمستثمرين — جولة Series A',
    'cs4.desc':  'تصميم عرض تقديمي قائم على القصة لإبهار المستثمرين وإتمام جولة التمويل.',

    'cs5.cat':   'سوشيال ميديا',
    'cs5.title': 'حملة نمو على LinkedIn',
    'cs5.desc':  'أصول سوشيال ميديا مُبرمَجة أسهمت في نمو ملحوظ في تفاعل LinkedIn لشركة تقنية.',

    'svc.label':  'الخدمات',
    'svc.title':  'ماذا أقدم',
    'svc.quote':  '← احصل على عرض سعر',
    'svc1.title': 'تصميم الهوية البصرية',
    'svc1.desc':  'هويات بصرية متكاملة تحكي قصتك — أنظمة شعار، لوحات ألوان، طباعة، ودليل علامة تجارية قابل للتوسع.',
    'svc2.title': 'تصميم UI/UX',
    'svc2.desc':  'تصميم منتج شامل للويب والجوال — إطارات تخطيطية، تدفقات المستخدم، نماذج أولية، وشاشات Figma عالية الدقة.',
    'svc3.title': 'تصميم مواقع وصفحات هبوط',
    'svc3.desc':  'مواقع تسويقية وصفحات هبوط تركز على التحويل وتتوافق مع علامتك التجارية.',
    'svc4.title': 'سوشيال ميديا وأصول رقمية',
    'svc4.desc':  'منشورات سوشيال جذابة، بانرات ويب، قوالب بريد إلكتروني، وأصول رقمية — متسقة وعلى المستوى.',
    'svc5.title': 'تصميم Pitch Deck',
    'svc5.desc':  'عروض تقديمية بجودة المستثمرين مبنية لتوصيل رؤيتك بوضوح وجعل طلبك لا يُرفض.',
    'svc6.title': 'تصميم مُعزَّز بالذكاء الاصطناعي',
    'svc6.desc':  'تسليم أسرع باستخدام Midjourney وCanva AI وUizard وإضافات Figma — نفس الجودة، تسليم أسرع، ميزانية أذكى.',

    'testi.label': 'التقييمات',
    'testi.title': 'ماذا يقول العملاء',
    'testi.desc':  'آراء حقيقية من الأشخاص الذين عملت معهم.',

    'contact.label':  'تواصل معي',
    'contact.title':  'لنبني شيئًا<br><span class="serif accent-text">رائعًا معًا.</span>',
    'contact.desc':   'متاح للأدوار عن بُعد بدوام كامل والمشاريع المستقلة. أرسل رسالة — أرد خلال 24 ساعة.',
    'contact.f.name': 'اسمك',
    'contact.f.email':'البريد الإلكتروني',
    'contact.f.svc':  'الخدمة المطلوبة',
    'contact.f.bgt':  'نطاق الميزانية',
    'contact.f.msg':  'تفاصيل المشروع',
    'contact.f.ph.name':  'محمد أحمد',
    'contact.f.ph.email': 'name@company.com',
    'contact.f.ph.msg':   'أخبرني عن مشروعك وأهدافك والجدول الزمني وأي متطلبات خاصة...',
    'contact.f.submit':   'إرسال الرسالة',
    'contact.f.success':  '✓ تم الإرسال! سأرد خلال 24 ساعة.',
    'contact.email.lbl':  'البريد الإلكتروني',
    'contact.phone.lbl':  'هاتف / واتساب',
    'contact.loc.lbl':    'الموقع',
    'contact.loc.val':    'لاهور، باكستان · عن بُعد حول العالم',
    'contact.tz.lbl':     'المنطقة الزمنية',
    'contact.tz.val':     'PKT (UTC+5) · مرن مع توقيت US/EU',

    'footer.copy': '© 2026 تنزيل الرحمن. مُصمَّم ومبني بعناية.',

    'about.pg.label': 'نبذة عني',
    'about.pg.title': 'المصمم وراء<br><span class="serif accent-text">الأعمال.</span>',
    'about.pg.sub':   'قصتي، طريقة تفكيري، الأدوات التي أستخدمها، والشركات التي عملت معها.',

    'about.label': 'قصتي',
    'about.title': 'التصميم هو كيف<br><span class="serif accent-text">أحل المشكلات.</span>',
    'about.p1': 'أنا <strong>تنزيل الرحمن</strong>، مصمم برند وويب أول مقيم في لاهور، باكستان — بخبرة <strong>أكثر من 7 سنوات</strong> في مساعدة منتجات SaaS والشركات الناشئة في مجال الذكاء الاصطناعي على بناء علامات تجارية ذات معنى وواجهات تعمل بفعالية.',
    'about.p2': 'في <strong>Arbisoft</strong>، إحدى كبرى شركات التقنية في باكستان، أقود التصميم البصري عبر الهوية، UI/UX، مواقع التسويق، وحملات النمو للعملاء الدوليين.',
    'about.p3': 'أتمتع بمرونة في المناطق الزمنية، وأعمل بشكل غير متزامن، وأبحث بنشاط عن أدوار تصميم أول عن بُعد أو شراكات مستقلة مع فرق طموحة.',
    'about.cta1':    'تعاون معي',
    'about.cta2':    'تحميل السيرة الذاتية',
    'about.stat1l':  'سنوات خبرة',
    'about.stat2l':  'مشروع منجز',
    'about.stat3l':  'شركات خدّمتها',
    'about.stat4l':  'رضا العملاء',
    'about.current': 'الحالي · مصمم جرافيك أول · يناير 2023 – الآن',

    'process.label': 'كيف أحل المشكلات',
    'process.title': 'عملية التصميم لديّ',
    'process.desc':  'عملية واضحة وتعاونية تبقي المشاريع في الوقت المحدد وعلى المسار الصحيح.',
    'ps1.title': 'الاكتشاف',  'ps1.desc': 'التعمق في عملك وجمهورك ومنافسيك وأهدافك. بلا تخمين — فقط قرارات تصميم مدروسة.',
    'ps2.title': 'التحديد',    'ps2.desc': 'توضيح الإيجاز، تحديد مقاييس النجاح، رسم تدفقات المستخدم، والتوافق على التوجه الإبداعي.',
    'ps3.title': 'التصميم',    'ps3.desc': 'إطارات تخطيطية، تكرارات، شاشات عالية الدقة، ونماذج أولية — مع جولات تغذية راجعة منظمة.',
    'ps4.title': 'التسليم',    'ps4.desc': 'ملفات دقيقة للبكسل، توثيق تسليم كامل، أصول جاهزة للتطوير، ودعم ما بعد الإطلاق عند الحاجة.',

    'skills.label': 'الخبرات',
    'skills.title': 'المهارات والأدوات',
    'skills.soft':  'برامج التصميم',
    'skills.disc':  'تخصصات التصميم',
    'skills.tools': 'الأدوات والمنصات',

    'exp.label': 'المسيرة المهنية',
    'exp.title': 'خبرتي',
    'exp.desc':  'أكثر من 7 سنوات في شركات SaaS والذكاء الاصطناعي والبرمجيات.',
  },

  /* ─── DUTCH ─── */
  nl: {
    dir: 'ltr', lang: 'nl',

    'nav.home':       'Home',
    'nav.about':      'Over Mij',
    'nav.mystory':    'Mijn Verhaal',
    'nav.process':    'Hoe Ik Problemen Oplos',
    'nav.skills':     'Vaardigheden & Tools',
    'nav.experience': 'Mijn Ervaring',
    'nav.work':       'Werk',
    'nav.services':   'Diensten',
    'nav.reviews':    'Reviews',
    'nav.contact':    'Contact',
    'nav.hireme':     'Huur Mij In',

    'hero.avail':   'Beschikbaar voor Remote Rollen · US / EU / AU',
    'hero.title':   'Ik Help SaaS &amp;<br>AI Startups <span class="accent-text serif">Ontwerpen</span><br>Merken Die Converteren.',
    'hero.line1':   'Ik Help SaaS &',
    'hero.line2':   'AI Startups',
    'hero.line3':   'Ontwerpen',
    'hero.line4':   'Merken Die Converteren.',
    'hero.sub':     'Senior Brand & Web Designer — 7+ jaar zakelijke doelen omzetten in visuele systemen, producten en websites die echte resultaten opleveren.',
    'hero.cta1':    'Start een Project',
    'hero.cta2':    'Bekijk Mijn Werk',
    'hero.stat1l':  'Jaar Ervaring',
    'hero.stat2l':  'Projecten Afgeleverd',
    'hero.stat3l':  'Bedrijven & Merken',
    'hero.avail2':  'Beschikbaar voor Werk',
    'hero.role':    'Senior Brand & Web Designer',

    'proof.label':  'Vertrouwd door',

    'work.label':   'Geselecteerd Werk',
    'work.title':   'Case Studies',
    'work.desc':    'Een diepere blik op projecten die het verschil maakten — echte uitdagingen, beslissingen en resultaten.',
    'work.behance': 'Volledig Portfolio op Behance →',
    'work.viewcs':  'Volledige Case Study Bekijken →',

    'cs1.cat':   'Merkidentiteit · Brandingsysteem',
    'cs1.title': 'Complete Merkidentiteit voor een B2B SaaS Platform',
    'cs1.desc':  'De klant had een product maar geen merk — visuals waren inconsistent over marketing, product en social. Ik ontwierp een volledig identiteitssysteem van de grond af dat alles verenigde.',

    'cs2.cat':   'UI/UX Design · SaaS Dashboard',
    'cs2.title': 'AI Analytics Dashboard Herontwerp',
    'cs2.desc':  'Het bestaande dashboard was overladen met data en veroorzaakte gebruikersuitval. Ik leidde een volledig herontwerp — van ontdekking en wireframes tot een gepolijst, componentgebaseerd ontwerpsysteem in Figma.',

    'cs3.cat':   'Webdesign · Leadgeneratie',
    'cs3.title': 'Hoog-converterende Landingspagina voor AI Startup',
    'cs3.desc':  'Ontworpen een resultaatgericht marketingwebsite voor een vroegstadium AI-startup — duidelijke waardepropositie, strategische CTAs, social proof secties en mobile-first responsief design.',

    'cs4.cat':   'Pitch Deck',
    'cs4.title': 'Investeerders Pitch Deck — Series A Startup',
    'cs4.desc':  'Verhaalgericht presentatieontwerp om investeerders te imponeren en de ronde te sluiten.',

    'cs5.cat':   'Social Media',
    'cs5.title': 'LinkedIn Groeicampagne',
    'cs5.desc':  'Branded social assets die meetbare LinkedIn-engagementgroei stimuleerden voor een techbedrijf.',

    'svc.label':  'Diensten',
    'svc.title':  'Wat Ik Doe',
    'svc.quote':  'Offerte Aanvragen →',
    'svc1.title': 'Merkidentiteit Ontwerp',
    'svc1.desc':  'Volledige visuele identiteiten die uw verhaal vertellen — logosystemen, kleurpaletten, typografie en merkrichtlijnen die schalen.',
    'svc2.title': 'UI/UX Design',
    'svc2.desc':  'End-to-end productontwerp voor web en mobiel — wireframes, gebruikersstromen, prototypes en pixel-perfecte Figma schermen.',
    'svc3.title': 'Web & Landingspagina Ontwerp',
    'svc3.desc':  'Conversiegerichte marketingwebsites en landingspagina\'s die aansluiten bij uw merk en bezoekers omzetten in klanten.',
    'svc4.title': 'Social Media & Digitale Assets',
    'svc4.desc':  'Opvallende social posts, webbanners, e-mailsjablonen en digitale assets — consistent, on-brand en op schaal.',
    'svc5.title': 'Pitch Deck Ontwerp',
    'svc5.desc':  'Presentaties van investeerderskwaliteit die uw visie duidelijk communiceren en uw verzoek onmogelijk te negeren maken.',
    'svc6.title': 'AI-Verbeterd Ontwerp',
    'svc6.desc':  'Snellere levering met Midjourney, Canva AI, Uizard en Figma AI-plugins — zelfde kwaliteit, betere doorlooptijd, slimmer budget.',

    'testi.label': 'Reviews',
    'testi.title': 'Wat Klanten Zeggen',
    'testi.desc':  'Echte feedback van mensen met wie ik heb gewerkt.',

    'contact.label':  'Neem Contact Op',
    'contact.title':  'Laten we samen iets<br><span class="serif accent-text">bijzonders bouwen.</span>',
    'contact.desc':   'Beschikbaar voor fulltime remote rollen en freelanceprojecten. Stuur een bericht — ik reageer binnen 24 uur.',
    'contact.f.name': 'Uw Naam',
    'contact.f.email':'E-mailadres',
    'contact.f.svc':  'Benodigde Dienst',
    'contact.f.bgt':  'Budgetbereik',
    'contact.f.msg':  'Projectdetails',
    'contact.f.ph.name':  'Jan de Vries',
    'contact.f.ph.email': 'jan@bedrijf.nl',
    'contact.f.ph.msg':   'Vertel me over uw project, doelen, tijdlijn en specifieke vereisten...',
    'contact.f.submit':   'Bericht Versturen',
    'contact.f.success':  '✓ Bericht verzonden! Ik reageer binnen 24 uur.',
    'contact.email.lbl':  'E-mail',
    'contact.phone.lbl':  'Telefoon / WhatsApp',
    'contact.loc.lbl':    'Locatie',
    'contact.loc.val':    'Lahore, Pakistan · Remote Wereldwijd',
    'contact.tz.lbl':     'Tijdzone',
    'contact.tz.val':     'PKT (UTC+5) · Flexibel voor US/EU overlap',

    'footer.copy': '© 2026 Tanzeel Ur Rehman. Ontworpen & gebouwd met zorg.',

    'about.pg.label': 'Over Mij',
    'about.pg.title': 'De ontwerper achter<br><span class="serif accent-text">het werk.</span>',
    'about.pg.sub':   'Mijn verhaal, hoe ik denk, de tools die ik gebruik en de bedrijven waarmee ik heb gewerkt.',

    'about.label': 'Mijn Verhaal',
    'about.title': 'Design is hoe ik<br><span class="serif accent-text">problemen oplos.</span>',
    'about.p1': 'Ik ben <strong>Tanzeel Ur Rehman</strong>, een Senior Brand & Web Designer gevestigd in Lahore, Pakistan — met <strong>7+ jaar</strong> ervaring in het helpen van SaaS-producten en AI-startups bij het bouwen van merken die betekenis hebben en interfaces die werken.',
    'about.p2': 'Bij <strong>Arbisoft</strong>, een van Pakistan\'s toonaangevende softwarebedrijven, leid ik visueel ontwerp voor merkidentiteit, UI/UX, marketingwebsites en groeicampagnes voor internationale klanten.',
    'about.p3': 'Ik ben <strong>tijdzone-flexibel</strong>, async-vriendelijk en heb jaren met remote teams gewerkt. Ik ben actief op zoek naar senior remote ontwerpfuncties of freelancepartnerschappen met ambitieuze teams.',
    'about.cta1':    'Werk Met Mij',
    'about.cta2':    'CV Downloaden',
    'about.stat1l':  'Jaar Ervaring',
    'about.stat2l':  'Projecten Afgeleverd',
    'about.stat3l':  'Bedrijven Bediend',
    'about.stat4l':  'Klanttevredenheid',
    'about.current': 'Huidig · Senior Grafisch Ontwerper · Jan 2023–Heden',

    'process.label': 'Hoe Ik Problemen Oplos',
    'process.title': 'Mijn Ontwerpproces',
    'process.desc':  'Een helder, collaboratief proces dat projecten op tijd, on-brand en on-brief houdt.',
    'ps1.title': 'Ontdekken', 'ps1.desc': 'Diepgaand onderzoek naar uw bedrijf, doelgroep, concurrenten en doelen. Geen giswerk — alleen geïnformeerde ontwerpbeslissingen.',
    'ps2.title': 'Definiëren','ps2.desc': 'Brief verduidelijken, succesmetrieken instellen, gebruikersstromen in kaart brengen en creatieve richting afstemmen voordat één pixel wordt geplaatst.',
    'ps3.title': 'Ontwerpen', 'ps3.desc': 'Wireframes, iteraties, high-fidelity schermen en prototypes — met gestructureerde feedbackrondes om het strak te houden.',
    'ps4.title': 'Opleveren', 'ps4.desc': 'Pixel-perfecte bestanden, volledige overdrachtsdocumentatie, dev-klare assets en ondersteuning na lancering indien nodig.',

    'skills.label': 'Expertise',
    'skills.title': 'Vaardigheden & Tools',
    'skills.soft':  'Ontwerpsoftware',
    'skills.disc':  'Ontwerpdisciplines',
    'skills.tools': 'Tools & Platformen',

    'exp.label': 'Carrière',
    'exp.title': 'Mijn Ervaring',
    'exp.desc':  '7+ jaar bij SaaS-, AI- en softwarebedrijven.',
  }
};

/* ─────────────────────────────────────────────────────────
   ENGINE
───────────────────────────────────────────────────────── */
function applyLang(code) {
  const t = T[code];
  if (!t) return;

  // Direction & lang attribute
  document.documentElement.setAttribute('dir', t.dir);
  document.documentElement.setAttribute('lang', t.lang);

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Save
  localStorage.setItem('ts-lang', code);

  // Update switcher button label
  const flags = { en: '🇬🇧 EN', ar: '🇦🇪 AR', nl: '🇳🇱 NL' };
  document.querySelectorAll('.lang-current').forEach(el => el.textContent = flags[code]);

  // Mark active in dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('lang-active', opt.getAttribute('data-lang') === code);
  });
}

function initI18n() {
  const saved = localStorage.getItem('ts-lang') || 'en';
  applyLang(saved);
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.getAttribute('data-lang'));
      // Close dropdown
      document.querySelector('.lang-dropdown')?.classList.remove('open');
    });
  });
  // Toggle dropdown
  document.querySelector('.lang-btn')?.addEventListener('click', e => {
    e.stopPropagation();
    document.querySelector('.lang-dropdown')?.classList.toggle('open');
  });
  document.addEventListener('click', () => {
    document.querySelector('.lang-dropdown')?.classList.remove('open');
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
