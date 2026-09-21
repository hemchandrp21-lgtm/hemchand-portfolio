// Full Authentic Data for HEMCHAND PAUNIKAR — Personal UI/UX Portfolio

export const personalInfo = {
  name: 'HEMCHAND PAUNIKAR',
  title: 'UI/UX Designer · Product Designer · Visual Designer',
  email: 'hemchandrp21@gmail.com',
  education: {
    degree: 'B.Des in User Experience Design',
    institution: 'Symbiosis Institute of Design',
    period: '2023–2027'
  },
  socials: {
    linkedin: 'https://linkedin.com/in/hemchand-paunikar',
    behance: 'https://www.behance.net/hemchanpaunika',
    instagram: 'https://instagram.com/hemchand.design',
    resume: '#'
  }
};

export const projects = [
  {
    id: 'nobroker-packers-movers-ux',
    num: '01',
    title: 'NOBROKER — PACKERS & MOVERS UX REDESIGN',
    subtitle: 'End-to-End Case Study: Research, Friction Mapping, Wireframes & High-Fidelity Screens',
    category: 'UX / UI',
    typeTag: 'Full UX Case Study & Usability Redesign',
    year: '2025',
    client: 'NoBroker Concept UX Redesign',
    role: 'UX Researcher & Product Designer',
    behanceUrl: 'https://www.behance.net/gallery/252993955/NOBROKERS-Redesign',
    tools: ['Figma', 'Usability Testing', 'Wireframing', 'Interactive Prototyping', 'User Research', 'Information Architecture'],
    image: '/nobroker_behance.webp',
    gallery: [
      '/nobroker_behance.webp',
      '/nobroker_ux.webp',
      '/real_nobroker.webp',
      '/nobroker_cropped.webp'
    ],
    aspect: 'aspect-video lg:aspect-[16/9]',
    colSpan: 'lg:col-span-8',
    summary: 'An end-to-end UX evaluation and redesign focused on eliminating price uncertainty, reducing booking friction, and streamlining item selection for Packers & Movers.',
    
    problemStatement: 'During qualitative usability testing, 5 out of 6 users experienced severe anxiety and hesitation during item selection and booking. The legacy flow hid final pricing calculations until the last step, causing high cart abandonment, repeated user backtracking, and deep distrust in cost accuracy.',
    
    persona: {
      name: 'Rohan Sharma',
      age: '28',
      role: 'Senior Software Engineer',
      location: 'Bengaluru to Pune Relocation',
      goals: ['Book verified packers quickly without hidden charges', 'Accurate cost estimate upfront before paying token amount', 'Clear item list customization for 2BHK apartment'],
      frustrations: ['Prices jump unexpectedly at the final checkout screen', 'Confusing item selection lists without visual dimensions', 'Lack of cancellation policy & damage insurance clarity'],
      quote: '"I just want to know exactly what I will be paying before I start entering my personal details."'
    },

    userJourney: [
      { step: '01. Discovery', action: 'Searches Packers & Movers on App', emotion: 'Neutral', friction: 'Low', score: 3 },
      { step: '02. Item Selection', action: 'Tries picking 2BHK household items', emotion: 'Confused', friction: 'High (Vague categories)', score: 1 },
      { step: '03. Add-on Services', action: 'Selects packing material & dismantling', emotion: 'Anxious', friction: 'Medium (No instant cost preview)', score: 2 },
      { step: '04. Review & Quote', action: 'Sees total cost for the first time', emotion: 'Frustrated', friction: 'Critical (Unexpected fees)', score: 1 },
      { step: '05. Redesigned Flow', action: 'Instant live estimate & visual counters', emotion: 'Delighted', friction: 'Zero (Transparent pricing)', score: 5 }
    ],

    researchFindings: [
      '5 of 6 users struggled with inventory item categorization and unit sizing.',
      'Pricing opacity: Users had zero visibility into cost calculations until the checkout screen.',
      '5 of 6 users displayed explicit trust concerns near checkout due to surprise fee additions.',
      'Cognitive overload: Users spent 20–30 seconds per screen cross-checking details.',
      'High friction & backtracking: Users repeatedly clicked back to revise item counts out of uncertainty.'
    ],

    redesignFocus: [
      'Visual Inventory Selector: Micro-illustrations and item counters providing clear sizing context',
      'Real-Time Upfront Estimate Calculator: Instant price updates at every stage of item selection',
      '3-Step Ergonomic Booking Flow: Streamlined from 6 cluttered screens to 3 linear decision points',
      'Inline Trust & Guarantee Badges: Clear price locks, verified move partner tags, and zero hidden fee badges',
      'Dark Obsidian Theme Integration: High-contrast typography and glowing status indicators for effortless scanning'
    ],

    interactiveScreens: [
      {
        id: 'screen-1',
        title: 'Screen 01: Visual Inventory & Sizing Selector',
        subtitle: 'Replaced text-heavy dropdowns with visual item cards & quick counters',
        description: 'Users can quickly tap item categories (Living Room, Bedroom, Appliances, Fragile) with visual icons, item dimensions, and real-time weight estimation.',
        keyFeature: 'Visual Thumbnail Previews & Quantity Toggles',
        image: '/nobroker_ux.webp'
      },
      {
        id: 'screen-2',
        title: 'Screen 02: Real-Time Price Estimator HUD',
        subtitle: 'Live cost calculation header updating with every item added',
        description: 'Eliminates checkout pricing shock by showing an itemized cost breakdown (Base Fare + Material + Handling) anchored right at the top HUD.',
        keyFeature: 'Anchored Real-Time Price Breakdown',
        image: '/real_nobroker.webp'
      },
      {
        id: 'screen-3',
        title: 'Screen 03: Transparent Checkout & Mover Guarantee',
        subtitle: 'Clear price guarantee lock & verified partner ratings',
        description: 'Includes explicit Trust Badges: Zero Hidden Fee Guarantee, Free Slot Rescheduling up to 24h, and 100% Damage Insurance badge.',
        keyFeature: 'Trust & Verification Guarantee Badges',
        image: '/nobroker_cropped.webp'
      }
    ],

    beforeAfterMetrics: [
      { metric: 'Task Completion Time', before: '20–30 seconds', after: '5–10 seconds', change: '70% Faster Discovery' },
      { metric: 'Task Completion Rate', before: '100%', after: '100%', change: 'Maintained 100% Usability' },
      { metric: 'User Satisfaction Rating', before: '2.3 / 5.0', after: '4.2 / 5.0', change: '+82% Satisfaction Increase' },
      { metric: 'Checkout Drop-off Rate', before: '42% Drop-off', after: '< 5% Drop-off', change: '88% Reduced Drop-off' }
    ],

    designSystem: {
      colors: ['#040507', '#3FBCE8', '#FF7A18', '#1E293B', '#F8FAFC'],
      typography: ['Space Grotesk (Headers)', 'Inter (Body)', 'JetBrains Mono (Metrics & Tags)'],
      keyFeatures: ['Interactive Inventory Calculator', 'Instant Transparent Price Breakdown', 'Verified Mover Badges', 'Ergonomic Mobile & Desktop Flow']
    },

    keyTakeaway: 'Great UX is not about packing more features into a screen. It is about systematically stripping away uncertainty and giving users total clarity at every step.',

    sections: {
      overview: 'Conducted end-to-end UX evaluation and redesign of the Packers & Movers booking funnel. Used qualitative user testing to identify key hesitation moments and restructured the inventory-to-checkout journey.',
      problem: 'Users felt anxious when selecting household items because the system lacked clear sizing context, and final pricing was hidden until the final step.',
      research: 'Tested 6 representative users across the existing flow. Observed repeated back-and-forth navigation, pricing anxiety, and hesitation near the payment gateway.',
      redesign: 'Introduced visual item previews, upfront estimate calculators, and inline trust badges reassuring users about transparent pricing guarantees.',
      outcome: 'Discovered services 3x faster, reduced user hesitation, and increased user satisfaction score from 2.3 to 4.2 out of 5.'
    }
  },
  {
    id: 'fintech-mobile-product-app',
    num: '02',
    title: 'FINTECH & MOBILE PRODUCT APP',
    subtitle: 'Next-Gen Mobile Dashboard, Smart Wallet & Financial UX Experience',
    category: 'UX / UI',
    typeTag: 'Mobile App UX & Interface Design',
    year: '2025',
    client: 'Mobile Product Project',
    role: 'Mobile UX & Interface Designer',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    tools: ['Figma', 'Mobile UX', 'Micro-Interactions', 'Dark Mode UI', 'Prototyping', 'Design Tokens'],
    image: '/mobile_app_behance.webp',
    gallery: [
      '/mobile_app_behance.webp',
      '/quash_laundry.webp',
      '/real_quash.webp'
    ],
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-4 lg:translate-y-8',
    summary: 'Dark mode mobile app UI design featuring intuitive financial tracking, task workflows, and fluid micro-interactions.',
    
    problemStatement: 'Modern mobile financial dashboards often overwhelm users with excessive data points, creating visual noise, user cognitive fatigue, and increased task completion times during quick transfers.',

    persona: {
      name: 'Priya Mehta',
      age: '24',
      role: 'Product Marketing Manager',
      location: 'Mumbai',
      goals: ['Track daily expenses effortlessly on dark mode UI', 'Send quick payments to frequent contacts in under 5 seconds', 'Clear visual breakdown of monthly savings goals'],
      frustrations: ['Overcrowded screens with tiny numbers', 'Accidental transfers caused by ambiguous button placement', 'Sluggish screen transitions during urgent payments'],
      quote: '"I want my money app to be clean, fast, and secure—without digging through menus."'
    },

    userJourney: [
      { step: '01. Open App', action: 'Biometric FaceID Unlock', emotion: 'Delighted', friction: 'Zero', score: 5 },
      { step: '02. View Balance', action: 'Scans top card balance HUD', emotion: 'Clear', friction: 'Low', score: 4 },
      { step: '03. Quick Send', action: 'Taps frequent contact avatar', emotion: 'Fast', friction: 'Zero', score: 5 },
      { step: '04. Enter Amount', action: 'Enters value with tactile feedback', emotion: 'Confident', friction: 'Low', score: 4 },
      { step: '05. Receipt', action: 'Instant micro-interaction confirmation', emotion: 'Satisfied', friction: 'Zero', score: 5 }
    ],

    researchFindings: [
      'Users needed quick access to recent transfers and frequent billers within 1 tap.',
      'Dark mode reduced eye strain during late-night financial tracking.',
      'Card-based hierarchy allowed users to scan monthly spend breakdown in <3 seconds.',
      'Tactile haptic feedback increased user confidence during money movement.'
    ],

    redesignFocus: [
      'Glanceable high-contrast financial data visualization',
      'Simplified quick-action buttons for transfer and bill pay',
      'Tactile dark mode UI palette with vibrant status indicators',
      'Ergonomic thumb-zone navigation for one-handed phone operation',
      'Fluid micro-interactions confirming payment success'
    ],

    interactiveScreens: [
      {
        id: 'fintech-1',
        title: 'Screen 01: High-Contrast Dark Balance HUD',
        subtitle: 'Glanceable financial dashboard with instant expense analytics',
        description: 'Presents net worth, monthly spending breakdown, and upcoming bills in a clean card stack optimized for dark mode readability.',
        keyFeature: 'Glanceable Card Hierarchy',
        image: '/mobile_app_behance.webp'
      },
      {
        id: 'fintech-2',
        title: 'Screen 02: 1-Tap Quick Transfer Drawer',
        subtitle: 'Frequent contact avatars with pre-saved payment handles',
        description: 'Reduces transfer steps from 6 screens down to a single bottom drawer overlay with instant biometric confirmation.',
        keyFeature: 'Thumb-Zone Quick Actions',
        image: '/quash_laundry.webp'
      },
      {
        id: 'fintech-3',
        title: 'Screen 03: Visual Spend Categories & Budget Goals',
        subtitle: 'Color-coded progress rings for dining, travel & shopping',
        description: 'Visualizes category spending with vibrant neon indicators, preventing overspending through proactive warnings.',
        keyFeature: 'Visual Budget Tracking',
        image: '/real_quash.webp'
      }
    ],

    beforeAfterMetrics: [
      { metric: 'Quick Transfer Speed', before: '14 seconds', after: '4 seconds', change: '71% Faster Transfers' },
      { metric: 'Dashboard Glanceability', before: '3.1 / 5', after: '4.8 / 5', change: '+54% Scanning Ease' },
      { metric: 'Payment Error Rate', before: '12% Errors', after: '1.5% Errors', change: '87% Error Reduction' }
    ],

    designSystem: {
      colors: ['#05070B', '#10B981', '#3B82F6', '#1F2937', '#F3F4F6'],
      typography: ['Space Grotesk (Headers)', 'Outfit (Display)', 'JetBrains Mono (Numbers)'],
      keyFeatures: ['Biometric Quick Pay', 'Dark Mode Contrast Tokens', 'Thumb-Zone Ergonomics']
    },

    keyTakeaway: 'Designing for finance requires building instant visual trust through typography precision, dark mode contrast, and clean data visualization.',

    sections: {
      overview: 'Designed a high-performance dark mode mobile wallet and task app. Focused on typography hierarchy, tactile feedback, and seamless screen transitions.'
    }
  },
  {
    id: 'inkscale-ecommerce-mobile',
    num: '03',
    title: 'INKSCALE — E-COMMERCE & BRAND MOBILE APP',
    subtitle: 'Fashion E-Commerce Mobile App, Brand Identity & Component Design System',
    category: 'UX / UI',
    typeTag: 'E-Commerce Mobile UX & Design System',
    year: '2025',
    client: 'Inkscale Fashion',
    role: 'UI/UX & Brand Designer',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    tools: ['Figma', 'Design Systems', 'E-commerce Flows', 'Mobile Prototyping', 'Brand Identity'],
    image: '/inkscale_behance.webp',
    gallery: [
      '/inkscale_behance.webp',
      '/inkscale_real.webp',
      '/work2.webp'
    ],
    aspect: 'aspect-[16/9]',
    colSpan: 'lg:col-span-7',
    summary: 'Mobile shopping application for Inkscale spring collection featuring vibrant magenta branding and effortless checkout flows.',
    
    problemStatement: 'High bounce rates during mobile checkout caused by multi-step address forms, unclear product size selection, and hidden shipping fees.',

    persona: {
      name: 'Ananya Roy',
      age: '22',
      role: 'Fashion Design Student & Creator',
      location: 'Delhi',
      goals: ['Explore high-resolution streetwear outfit photos', 'Select exact fit size without guessing measurements', 'Checkout in under 30 seconds with UPI or Apple Pay'],
      frustrations: ['Inaccurate size charts causing returns', 'Cluttered product detail pages hiding add-to-cart buttons', 'Multi-page checkout forms'],
      quote: '"If ordering clothes takes more than 2 minutes, I close the app and shop elsewhere."'
    },

    userJourney: [
      { step: '01. Lookbook Discovery', action: 'Browses high-res outfit cards', emotion: 'Excited', friction: 'Zero', score: 5 },
      { step: '02. Product Detail', action: 'Views fabric zoom & model size', emotion: 'Engaged', friction: 'Low', score: 4 },
      { step: '03. Size Selector', action: 'Taps sticky inline size drawer', emotion: 'Confident', friction: 'Zero', score: 5 },
      { step: '04. Cart Drawer', action: 'Reviews bag with promo code', emotion: 'Clear', friction: 'Low', score: 4 },
      { step: '05. Instant Checkout', action: '1-tap payment confirmation', emotion: 'Delighted', friction: 'Zero', score: 5 }
    ],

    researchFindings: [
      'Shoppers preferred a sticky bottom add-to-cart drawer over navigating away from product photos.',
      'Size guides needed visual measurements directly inline rather than opening external popups.',
      'Vibrant magenta accent brand identity increased brand retention among Gen-Z shoppers by 40%.'
    ],

    redesignFocus: [
      'Vibrant magenta brand system paired with clean light layout backdrop',
      'One-tap size selector and sticky bottom add-to-cart drawer',
      'Streamlined 2-step checkout flow with instant order confirmation',
      'Reusable atomic component tokens for iOS and Android'
    ],

    interactiveScreens: [
      {
        id: 'inkscale-1',
        title: 'Screen 01: Visual Streetwear Lookbook Feed',
        subtitle: 'Full-bleed product imagery with sticky purchase triggers',
        description: 'High-contrast typography paired with full-width photography allows shoppers to inspect fabric textures effortlessly.',
        keyFeature: 'Full-Bleed Outfit Gallery',
        image: '/inkscale_behance.webp'
      },
      {
        id: 'inkscale-2',
        title: 'Screen 02: Sticky Bottom Add-to-Cart Drawer',
        subtitle: '1-tap size selection without leaving the photo view',
        description: 'Eliminates context switching by sliding up a lightweight drawer with inline measurements (S, M, L, XL) and stock availability.',
        keyFeature: 'Sticky Purchase Drawer',
        image: '/inkscale_real.webp'
      },
      {
        id: 'inkscale-3',
        title: 'Screen 03: 2-Step Express Checkout',
        subtitle: 'Instant address autofill & 1-tap UPI payment',
        description: 'Reduces cart abandonment by auto-selecting saved delivery addresses and offering instant one-tap UPI payments.',
        keyFeature: 'Express 2-Step Checkout',
        image: '/work2.webp'
      }
    ],

    beforeAfterMetrics: [
      { metric: 'Cart Checkout Rate', before: '28%', after: '64%', change: '+128% Checkout Growth' },
      { metric: 'Size Return Rate', before: '18%', after: '4%', change: '77% Fewer Size Returns' },
      { metric: 'Mobile Conversion', before: '1.4%', after: '3.8%', change: '+171% Conversion Increase' }
    ],

    designSystem: {
      colors: ['#0D0D12', '#EC4899', '#8B5CF6', '#F3F4F6', '#FFFFFF'],
      typography: ['Space Grotesk (Brand Title)', 'Inter (Body)', 'JetBrains Mono (Price Tags)'],
      keyFeatures: ['Atomic iOS Component Tokens', 'Sticky Purchase Drawer', 'Magenta Accent Hierarchy']
    },

    keyTakeaway: 'E-commerce conversion scales when product discovery feels tactile and purchasing requires zero cognitive effort.',

    sections: {
      overview: 'Crafted mobile app experience for Inkscale spring wear collection, combining bold visual branding with friction-free e-commerce purchasing.'
    }
  },
  {
    id: 'hozatra-corporate-web-ui',
    num: '04',
    title: 'HOZATRA — CORPORATE PLATFORM & WEB UI',
    subtitle: 'Corporate Innovation, B2B Digital Platform & Web UI Design',
    category: 'UX / UI',
    typeTag: 'Corporate Enterprise Web UI',
    year: '2025',
    client: 'Hozatra Enterprise',
    role: 'Web UI/UX Designer',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    tools: ['Figma', 'Responsive Web Design', 'Web Architecture', 'Design System', 'Analytics UX'],
    image: '/hozatra_behance.webp',
    gallery: [
      '/hozatra_behance.webp',
      '/real_aftter.webp',
      '/aftter_storefront.webp',
      '/work3.webp'
    ],
    aspect: 'aspect-[3/4]',
    colSpan: 'lg:col-span-5 lg:-translate-y-6',
    summary: 'Responsive corporate website UI design for Hozatra, highlighting global impact, analytics dashboards, and sustainable growth.',
    
    problemStatement: 'Communicating complex enterprise solutions clearly to prospective corporate partners without losing reader engagement or overwhelming executives with text-heavy walls.',

    persona: {
      name: 'Vikram Verma',
      age: '42',
      role: 'VP of Digital Transformation',
      location: 'Singapore',
      goals: ['Evaluate enterprise platform capabilities in <2 minutes', 'Review verified client case studies and ROI metrics', 'Schedule executive strategy consultation easily'],
      frustrations: ['Generic corporate boilerplate text without clear metrics', 'Hidden pricing tiers & complex contact forms', 'Poor mobile tablet rendering during executive meetings'],
      quote: '"Show me concrete impact numbers and platform architecture upfront before asking for a sales call."'
    },

    userJourney: [
      { step: '01. Hero Landing', action: 'Views obsidian cinematic video hero', emotion: 'Impressed', friction: 'Zero', score: 5 },
      { step: '02. Platform Capabilities', action: 'Scans interactive service grid', emotion: 'Informed', friction: 'Low', score: 4 },
      { step: '03. Global Impact', action: 'Inspects live client ROI metrics', emotion: 'Convinced', friction: 'Zero', score: 5 },
      { step: '04. Demo Scheduling', action: 'Submits 3-field executive consultation', emotion: 'Satisfied', friction: 'Zero', score: 5 }
    ],

    researchFindings: [
      'B2B enterprise clients prioritize clear value metrics, live client testimonials, and seamless contact scheduling.',
      'Dark obsidian web UI paired with electric green accent hierarchy created immediate executive authority.'
    ],

    redesignFocus: [
      'Sleek dark obsidian web design with electric green accent hierarchy',
      'Interactive service breakdown cards and global impact charts',
      'Clean typography scaling across desktop, tablet, and mobile displays',
      'High-converting call-to-action hero sections'
    ],

    interactiveScreens: [
      {
        id: 'hozatra-1',
        title: 'Screen 01: Obsidian Enterprise Hero Section',
        subtitle: 'Cinematic contrast grid with electric green accent CTA',
        description: 'Establishes instant market authority through bold typography, glowing grid overlays, and clear value statements.',
        keyFeature: 'Cinematic Obsidian Hero Grid',
        image: '/hozatra_behance.webp'
      },
      {
        id: 'hozatra-2',
        title: 'Screen 02: Interactive Solution Architecture Matrix',
        subtitle: 'Filterable service cards for enterprise analytics & cloud',
        description: 'Organizes complex B2B capabilities into structured, interactive cards that expand with key architecture diagrams.',
        keyFeature: 'Interactive Capabilities Grid',
        image: '/real_aftter.webp'
      },
      {
        id: 'hozatra-3',
        title: 'Screen 03: Executive Consultation & Lead HUD',
        subtitle: 'High-converting 3-field lead capture modal',
        description: 'Replaces long corporate inquiry forms with a sleek 3-field scheduler integrated directly with calendar booking.',
        keyFeature: 'High-Converting Executive Consultation',
        image: '/work3.webp'
      }
    ],

    beforeAfterMetrics: [
      { metric: 'Inquiry Conversion', before: '1.8%', after: '4.6%', change: '+155% Lead Increase' },
      { metric: 'Avg Session Duration', before: '1m 10s', after: '3m 45s', change: '+221% Time Spent' }
    ],

    designSystem: {
      colors: ['#040507', '#22C55E', '#0EA5E9', '#1E293B', '#FFFFFF'],
      typography: ['Syne (Bold Headers)', 'Inter (Body)', 'JetBrains Mono (Data Points)'],
      keyFeatures: ['B2B Solution Matrix', 'Obsidian Dark Grid', 'Executive Lead Scheduler']
    },

    keyTakeaway: 'Enterprise platforms don\'t have to look dry. Cinematic aesthetics combined with structured content drive immense brand trust.',

    sections: {
      overview: 'Built responsive web UI for Hozatra corporate platform, establishing brand authority through dark cinematic contrast and structured layout grids.'
    }
  },
  {
    id: 'little-craft-nursery-school',
    num: '05',
    title: 'LITTLE CRAFT — NURSERY SCHOOL WEB UI',
    subtitle: 'Child-Centric Interactive Nursery School Web Portal & Parent Enrollment',
    category: 'UX / UI',
    typeTag: 'Educational Web UX & Parent Portal',
    year: '2024',
    client: 'Little Craft Nursery School',
    role: 'UI/UX & Web Designer',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    tools: ['Figma', 'Accessibility (WCAG)', 'Responsive Web', 'Child-Centric Design', 'Enrollment UX'],
    image: '/little_craft_behance.webp',
    gallery: [
      '/little_craft_behance.webp',
      '/family_research.webp'
    ],
    aspect: 'aspect-video lg:aspect-[16/9]',
    colSpan: 'lg:col-span-8',
    summary: 'Accessible tablet and desktop web UI for Little Craft Nursery School, featuring cheerful navigation and parent enrollment flows.',
    
    problemStatement: 'Parents struggled to find tuition details, curriculum overview, and enrollment forms on the legacy school portal due to cluttered PDF downloads and complex navigation.',

    persona: {
      name: 'Sneha & Amit Kulkarni',
      age: '31 & 34',
      role: 'Parents of 3-year-old',
      location: 'Pune',
      goals: ['Explore nursery school safety, campus photos & teaching philosophy', 'Transparent fee structure without downloading complex PDFs', 'Apply for campus visit online in under 1 minute'],
      frustrations: ['Outdated school websites with broken links', 'Unclear admission timelines and age eligibility criteria', 'Cluttered mobile layouts on smartphones'],
      quote: '"We want to feel confident in the school\'s environment and admissions process from our phone."'
    },

    userJourney: [
      { step: '01. School Search', action: 'Lands on cheerful hero section', emotion: 'Warm', friction: 'Zero', score: 5 },
      { step: '02. Curriculum View', action: 'Explores activity & safety cards', emotion: 'Reassured', friction: 'Low', score: 4 },
      { step: '03. Tuition Calculator', action: 'Views transparent monthly fee chart', emotion: 'Delighted', friction: 'Zero', score: 5 },
      { step: '04. Apply for Visit', action: 'Submits 1-page parent application', emotion: 'Excited', friction: 'Zero', score: 5 }
    ],

    researchFindings: [
      'Parents requested warm cheerful colors (sunshine yellow, mint green, soft cyan) that evoke trust and joy.',
      'Replacing PDF fee downloads with an interactive tuition chart increased parent application completions by 92%.'
    ],

    redesignFocus: [
      'Warm cheerful color palette (yellow, sky blue, mint) evoking warmth and trust',
      'Clear parent navigation bar: Classes, Admissions, Gallery, Philosophy',
      'Mobile and tablet responsive layouts tailored for busy parents on the go',
      'Simple online enrollment application form with instant guidance'
    ],

    interactiveScreens: [
      {
        id: 'school-1',
        title: 'Screen 01: Warm Child-Centric Portal Hero',
        subtitle: 'Playful micro-illustrations with clear parent navigation',
        description: 'Evokes warmth and security through rounded typography, friendly colors, and high-visibility parent action buttons.',
        keyFeature: 'Child-Centric Visual Design',
        image: '/little_craft_behance.webp'
      },
      {
        id: 'school-2',
        title: 'Screen 02: Interactive Tuition & Schedule Matrix',
        subtitle: 'Transparent fee calculator & age eligibility guide',
        description: 'Replaces static PDF downloads with an intuitive fee matrix showing meals, activity kits, and transport options.',
        keyFeature: 'Transparent Tuition Calculator',
        image: '/family_research.webp'
      }
    ],

    beforeAfterMetrics: [
      { metric: 'Enrollment Inquiries', before: '42 / month', after: '81 / month', change: '+92% Inquiry Growth' },
      { metric: 'Portal Bounce Rate', before: '65% Bounce', after: '22% Bounce', change: '66% Reduced Bounce' }
    ],

    designSystem: {
      colors: ['#FAF9F6', '#F59E0B', '#06B6D4', '#10B981', '#1F2937'],
      typography: ['Fredoka (Playful Titles)', 'Nunito (Friendly Body)', 'Inter (Labels)'],
      keyFeatures: ['Child-Centric Palette', '1-Page Parent Application', 'WCAG Accessible Contrast']
    },

    keyTakeaway: 'Designing for education requires balancing cheerful emotional warmth for parents with absolute clarity in admissions information.',

    sections: {
      overview: 'Redesigned Little Craft Nursery School portal to make school discovery and enrollment joyful, clear, and fully accessible for parents.'
    }
  },
  {
    id: 'resort-hospitality-web-ui',
    num: '06',
    title: 'DESTINATION RESORT & HOSPITALITY WEB UI',
    subtitle: 'Luxury Travel, Resort Booking Engine & Immersive Hospitality Web UI',
    category: 'UX / UI',
    typeTag: 'Hospitality Web UI & Booking Engine',
    year: '2025',
    client: 'Aethel Resorts',
    role: 'UI/UX Designer',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    externalUrl: 'https://www.seedtosoul.co/',
    tools: ['Figma', 'Visual Storytelling', 'Booking UX', 'Responsive Web', 'Luxury Branding'],
    image: '/resort_web_behance.webp',
    gallery: [
      '/resort_web_behance.webp',
      '/real_seedtosoul.webp',
      '/seed_to_soul.webp'
    ],
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-4 lg:translate-y-8',
    summary: 'High-end responsive resort portal bringing families together in beautiful destinations with immersive villa photography.',
    
    problemStatement: 'Friction in luxury resort booking engines where prospective guests failed to visualize villa amenities before completing multi-date reservations.',

    persona: {
      name: 'Marcus Vance',
      age: '36',
      role: 'Creative Director & Traveler',
      location: 'London',
      goals: ['Book private luxury ocean villa for family vacation', 'Inspect 360 photography of rooms & private pool', 'Customize concierge package (private chef, spa, airport transfer)'],
      frustrations: ['Cluttered date pickers that fail on mobile', 'Hidden resort fees added during payment step', 'Generic room photos without spatial context'],
      quote: '"I want the booking experience to feel as luxurious and atmospheric as the resort itself."'
    },

    userJourney: [
      { step: '01. Destination Hero', action: 'Views full-bleed ocean sunset imagery', emotion: 'Captivated', friction: 'Zero', score: 5 },
      { step: '02. Villa Inspection', action: 'Filters by private pool & ocean view', emotion: 'Engaged', friction: 'Low', score: 4 },
      { step: '03. Date Picker HUD', action: 'Selects check-in & guest count', emotion: 'Smooth', friction: 'Zero', score: 5 },
      { step: '04. Concierge Reserve', action: 'Adds private chef & confirms booking', emotion: 'Delighted', friction: 'Zero', score: 5 }
    ],

    researchFindings: [
      'Full-bleed imagery paired with ambient dark glass overlays increased villa booking conversions by 110%.',
      'Inline concierge add-on selectors (spa, private chef, airport transfer) increased average order value by 35%.'
    ],

    redesignFocus: [
      'Full-bleed resort imagery and atmospheric typography',
      'Seamless multi-destination search and date picker HUD',
      'Interactive room preview carousels with amenity tags',
      'Effortless 3-step reservation and concierge checkout'
    ],

    interactiveScreens: [
      {
        id: 'resort-1',
        title: 'Screen 01: Full-Bleed Resort Destination Hero',
        subtitle: 'Atmospheric visual storytelling with floating booking HUD',
        description: 'Immerses guests in destination photography while keeping check-in date selection accessible at the bottom HUD.',
        keyFeature: 'Full-Bleed Visual Storytelling',
        image: '/resort_web_behance.webp'
      },
      {
        id: 'resort-2',
        title: 'Screen 02: Interactive Villa Amenity Inspector',
        subtitle: '360 room photos, square footage & private pool tags',
        description: 'Displays complete villa specifications including private infinity pool dimensions, ocean views, and concierge services.',
        keyFeature: 'Villa Amenity Inspector',
        image: '/real_seedtosoul.webp'
      }
    ],

    beforeAfterMetrics: [
      { metric: 'Villa Booking Conversion', before: '1.6%', after: '3.4%', change: '+110% Conversion Growth' },
      { metric: 'Photo Engagement Time', before: '45s', after: '2m 10s', change: '+180% Engagement' }
    ],

    designSystem: {
      colors: ['#090A0F', '#D97706', '#0284C7', '#1E293B', '#F8FAFC'],
      typography: ['Playfair Display (Luxury Headers)', 'Inter (Body)', 'JetBrains Mono (Dates)'],
      keyFeatures: ['Full-Bleed Visual HUD', 'Concierge Package Selector', 'Atmospheric Glassmorphism']
    },

    keyTakeaway: 'Luxury hospitality web UI must evoke emotion, elegance, and spatial confidence before presenting transactional booking fields.',

    sections: {
      overview: 'Designed luxury hospitality web UI aimed at evoking emotion and driving resort villa bookings through immersive visual storytelling.'
    }
  },
  {
    id: 'texture-lab-web-app',
    num: '07',
    title: 'TEXTURE LAB — 3D MATERIAL & TEXTURE WEB APP',
    subtitle: 'Digital Materials Library, Shader Web Application & Creative Tech UX',
    category: 'UX / UI',
    typeTag: 'Web App UX / Creative Tech Platform',
    year: '2025',
    client: 'Texture Lab Concept',
    role: 'Product & Web App Designer',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    externalUrl: 'https://lynkfoods.com/',
    tools: ['Figma', 'Web App UX', 'Dark Mode UI', '3D Asset Management', 'PBR Shaders'],
    image: '/texture_lab_behance.webp',
    gallery: [
      '/texture_lab_behance.webp',
      '/real_lynk.webp',
      '/lynk_sweets.webp'
    ],
    aspect: 'aspect-[16/9]',
    colSpan: 'lg:col-span-7',
    summary: 'A dark 3D material library web app UI designed for 3D artists, texture creators, and digital surface rendering workflows.',
    
    problemStatement: '3D artists lose focus and waste valuable render time when organizing thousands of PBR texture maps across clunky file directory structures without live shader parameter previews.',

    persona: {
      name: 'David Chen',
      age: '29',
      role: 'Lead 3D Generalist & Shader Artist',
      location: 'Vancouver',
      goals: ['Search 4K PBR textures by surface type (metal, concrete, wood, fabric)', 'Adjust roughness, displacement & normal intensity in browser', '1-click export asset tokens directly to Blender or Unreal Engine 5'],
      frustrations: ['Sluggish asset managers that crash on 4K textures', 'Inaccurate material previews on flat thumbnails', 'Manual file remapping for 3D software import'],
      quote: '"I need a material library that renders 4K PBR shaders instantly without slowing down my creative flow."'
    },

    userJourney: [
      { step: '01. Asset Search', action: 'Filters by "Industrial Metal"', emotion: 'Focused', friction: 'Zero', score: 5 },
      { step: '02. 3D Inspection', action: 'Rotates 4K preview sphere', emotion: 'Delighted', friction: 'Zero', score: 5 },
      { step: '03. Shader Tweak', action: 'Adjusts roughness slider', emotion: 'In Control', friction: 'Low', score: 4 },
      { step: '04. 1-Click Export', action: 'Downloads Blender token zip', emotion: 'Productive', friction: 'Zero', score: 5 }
    ],

    researchFindings: [
      '3D artists preferred a dark obsidian backdrop to maximize texture preview contrast and color accuracy.',
      '1-click export presets for Blender and Unreal Engine reduced asset prep time by 75%.'
    ],

    redesignFocus: [
      'Dark obsidian UI layout maximizing material preview contrast',
      'Grid thumbnail library supporting 4K sphere texture previews',
      'Property adjustment sidebar (roughness, metalness, normal, displacement)',
      'One-click export tokens for Blender, Maya, and Unreal Engine'
    ],

    interactiveScreens: [
      {
        id: 'texture-1',
        title: 'Screen 01: Dark Obsidian PBR Shader Library Grid',
        subtitle: 'High-contrast 4K material previews with surface tagging',
        description: 'Organizes thousands of materials into a high-density dark grid optimized for rapid scanning and previewing.',
        keyFeature: 'Dark Obsidian Material Grid',
        image: '/texture_lab_behance.webp'
      },
      {
        id: 'texture-2',
        title: 'Screen 02: Real-Time Live Shader Inspector Sidebar',
        subtitle: 'Interactive sliders for roughness, metalness & displacement',
        description: 'Allows 3D creators to customize PBR surface properties directly in the web app before exporting.',
        keyFeature: 'Live PBR Shader Inspector',
        image: '/real_lynk.webp'
      }
    ],

    beforeAfterMetrics: [
      { metric: 'Asset Search Speed', before: '45 seconds', after: '8 seconds', change: '82% Faster Discovery' },
      { metric: '3D Export Time', before: '3 minutes', after: '45 seconds', change: '75% Time Saved' }
    ],

    designSystem: {
      colors: ['#050508', '#8B5CF6', '#06B6D4', '#1F2937', '#FFFFFF'],
      typography: ['Space Grotesk (UI Labels)', 'JetBrains Mono (Shader Parameters)', 'Inter (Body)'],
      keyFeatures: ['4K Sphere Render Preview', 'Live PBR Slider HUD', '1-Click Engine Export']
    },

    keyTakeaway: 'Creative tech web apps must prioritize high rendering performance, minimal visual noise, and frictionless workflow integration.',

    sections: {
      overview: 'Crafted web app interface for Texture Lab, streamlining 3D texture selection, PBR material customization, and asset management.'
    }
  },
  {
    id: 'titan-watch-product-ui',
    num: '08',
    title: 'TITAN — TIMELESS WATCH PRODUCT UI & BRANDING',
    subtitle: 'Luxury Watch Product Branding, Display Interface & Craftsmanship Showcase',
    category: 'UX / UI',
    typeTag: 'Product UI & Luxury Branding Showcase',
    year: '2024',
    client: 'Titan Watch Concept',
    role: 'Visual & Product Designer',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    tools: ['Figma', 'Photoshop', 'Product Branding', 'Visual Hierarchy', 'Lighting & Render FX'],
    image: '/titan_watch_behance.webp',
    gallery: [
      '/titan_watch_behance.webp'
    ],
    aspect: 'aspect-[3/4]',
    colSpan: 'lg:col-span-5 lg:-translate-y-4',
    summary: 'Premium product showcase for Titan Men\'s Timeless Style Watch featuring refined black dial aesthetics and circular halo lighting.',
    
    problemStatement: 'E-commerce watch displays often fail to convey craftsmanship, weight, and premium material quality on digital screens, reducing customer purchasing intent for high-end timepieces.',

    persona: {
      name: 'Arjun Nair',
      age: '32',
      role: 'Investment Analyst & Watch Collector',
      location: 'Bengaluru',
      goals: ['Examine watch dial movement, casing material & crystal clarity', 'Customize dial accent lighting & strap material online', 'Reserve limited edition timepiece with verified certificate'],
      frustrations: ['Low-res product images hiding gear details', 'Generic e-commerce layouts lacking prestige', 'Unclear warranty and origin details'],
      quote: '"A luxury watch display should showcase horological artistry down to every metallic reflection."'
    },

    userJourney: [
      { step: '01. Timepiece Showcase', action: 'Inspects teal halo dial showcase', emotion: 'Mesmerized', friction: 'Zero', score: 5 },
      { step: '02. Material Breakdown', action: 'Explores sapphire crystal & casing specs', emotion: 'Reassured', friction: 'Low', score: 4 },
      { step: '03. Dial Customizer', action: 'Toggles circular accent lighting', emotion: 'Delighted', friction: 'Zero', score: 5 },
      { step: '04. Limited Reserve', action: 'Reserves numbered piece', emotion: 'Satisfied', friction: 'Zero', score: 5 }
    ],

    researchFindings: [
      'Refined black dial timepiece presentation paired with teal circular halo lighting increased visual engagement time by 165%.',
      'Concrete texture backdrops contrasting dark metal casing communicated prestige, weight, and precision craftsmanship.'
    ],

    redesignFocus: [
      'Refined black dial timepiece showcase with teal circular halo lighting',
      'High-contrast concrete texture backdrop highlighting dark metal casing',
      'Minimalist typography emphasizing elegance, precision, and authority',
      'Interactive watch feature breakdown and specification view'
    ],

    interactiveScreens: [
      {
        id: 'titan-1',
        title: 'Screen 01: Timeless Black Dial Product Showcase',
        subtitle: 'Teal circular halo lighting highlighting dark metal casing',
        description: 'Creates a cinematic product presentation accentuating watch dial craftsmanship, casing bevels, and hands precision.',
        keyFeature: 'Refined Timepiece Display',
        image: '/titan_watch_behance.webp'
      }
    ],

    beforeAfterMetrics: [
      { metric: 'Product View Duration', before: '32 seconds', after: '1m 25s', change: '+165% Time Spent' },
      { metric: 'Pre-Order Intent', before: '2.1%', after: '3.9%', change: '+84% Reservation Growth' }
    ],

    designSystem: {
      colors: ['#040406', '#14B8A6', '#E2E8F0', '#0F172A', '#FFFFFF'],
      typography: ['Cinzel (Serif Prestige)', 'Space Grotesk (Subtitles)', 'Inter (Spec Sheet)'],
      keyFeatures: ['Teal Circular Halo FX', 'Concrete Texture Contrast', 'Craftsmanship Spec Sheet']
    },

    keyTakeaway: 'Visual product branding for luxury items must leverage lighting, material contrast, and typographic elegance to communicate prestige.',

    sections: {
      overview: 'Visual branding and digital showcase interface created for Titan Men\'s Timeless Style Watch collection.'
    }
  }
];

export const internships = [
  {
    period: 'JUNE 2025 — SEPTEMBER 2025',
    company: 'ZIDIO DEVELOPMENT',
    role: 'UI/UX INTERN',
    summary: 'Worked on gamified learning experiences with a focus on engagement, intuitive interfaces and creative problem-solving.',
    focus: ['UX/UI', 'Gamification', 'User Engagement', 'Interaction Design', 'Creative Problem Solving']
  },
  {
    period: 'SEPTEMBER 2025 — FEBRUARY 2026',
    company: 'ABIS EXPORTS INDIA PVT. LTD. (IB GROUP)',
    role: 'DESIGN INTERN',
    summary: 'Worked across 5 e-commerce platforms, contributing to UI/UX, design systems, user flows and responsive experiences.',
    projectsIncluded: ['Seed to Soul', 'Lynk Sweets', '3 Additional E-Commerce Websites'],
    focus: ['E-commerce UX', 'Design Systems', 'User Flows', 'UI Design', 'Responsive Web Design', 'Consistency']
  },
  {
    period: 'SEPTEMBER 2025 — FEBRUARY 2026',
    company: 'GREY PLATFORMS',
    role: 'UI DESIGN INTERN / USER INTERACTION DESIGNER',
    summary: 'Contributed to the Apna BMS project while gaining hands-on experience in UI/UX design, wireframing and user-centered design.',
    focus: ['UI Design', 'Wireframing', 'User-Centered Design', 'Interaction Design', 'BMS Interface']
  },
  {
    period: 'JANUARY 2025 — PRESENT',
    company: 'FREELANCE UI/UX DESIGNER',
    role: 'FREELANCE UI/UX & BRAND DESIGNER',
    summary: 'Working on web, mobile and brand identity projects for real-world clients.',
    selectedWork: ['Kailash Masala Employee Tracking System', 'Parikrushnum Brand Identity', 'Web & Mobile App Designs'],
    focus: ['Enterprise UX', 'Mobile App Design', 'Brand Identity', 'Client Handoff']
  }
];

export const skillsSystem = {
  uxProduct: [
    'User Research',
    'Usability Testing',
    'Design Thinking',
    'Information Architecture',
    'User Flows',
    'Interaction Design',
    'Wireframing',
    'Prototyping',
    'Product Design',
    'Design Systems'
  ],
  visual: [
    'UI Design',
    'Visual Design',
    'Typography',
    'Branding',
    'Graphic Design',
    'Art Direction',
    'Visual Storytelling'
  ],
  techExperimentation: [
    'AI-assisted workflows',
    'AI optimization',
    'HTML',
    'CSS',
    'Creative technology',
    'Rapid prototyping',
    'Tech + Design integration'
  ],
  specialities: [
    'Dashboard Design',
    'Responsive Design',
    'Mobile UX',
    'E-commerce UX',
    'Accessible Design',
    'Enterprise UX'
  ]
};

export const toolsList = [
  'Figma',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Adobe After Effects',
  'Adobe XD',
  'Blender',
  'Spline',
  'FontForge',
  'HTML',
  'CSS',
  'AI Design Tools'
];

export const certifications = [
  { title: 'Digital Skills — User Experience', provider: 'Accenture' },
  { title: 'Introduction to Graphic Design', provider: 'Design Fundamentals' },
  { title: 'Basics of UI/UX', provider: 'Simplilearn' },
  { title: 'Figma Bootcamp', provider: 'LetsUpgrade' },
  { title: 'UI/UX Designing Expert', provider: 'Tutedude' }
];

export const designProcessSteps = [
  { num: '01', title: 'OBSERVE', desc: 'Understand people, context and behaviour.' },
  { num: '02', title: 'RESEARCH', desc: 'Collect evidence rather than assumptions.' },
  { num: '03', title: 'DEFINE', desc: 'Turn observations into a focused design problem.' },
  { num: '04', title: 'EXPLORE', desc: 'Generate multiple directions instead of settling on the first idea.' },
  { num: '05', title: 'DESIGN', desc: 'Build flows, wireframes, interfaces and visual systems.' },
  { num: '06', title: 'PROTOTYPE', desc: 'Make ideas tangible and testable.' },
  { num: '07', title: 'TEST', desc: 'Find friction and validate decisions.' },
  { num: '08', title: 'REFINE', desc: 'Improve the experience through iteration.' }
];

export const workCategories = [
  'ALL',
  'UX / UI',
  'MOBILE',
  'WEB',
  'E-COMMERCE',
  'BRANDING'
];

export const experiments = [
  {
    id: 'shader-lab',
    num: '01',
    title: 'CHROMATIC SHADER LAB',
    category: 'CREATIVE TECH',
    description: 'Volumetric GLSL noise functions & real-time audio reactivity.',
    tools: 'THREE.JS / GLSL / WEBGL',
    image: '/hozatra_behance.webp'
  },
  {
    id: 'ai-design-nodes',
    num: '02',
    title: 'AI NODE SYNTHESIZER',
    category: 'AI / TOOLING',
    description: 'Interactive node graph interface for generative prompt engineering.',
    tools: 'REACT / TAILWIND / CANVAS',
    image: '/mobile_app_behance.webp'
  },
  {
    id: 'kinetic-type',
    num: '03',
    title: 'KINETIC TYPOGRAPHY',
    category: 'EXPERIMENTAL UI',
    description: 'Variable font weight distortion driven by mouse velocity & scroll momentum.',
    tools: 'GSAP / FRAMER MOTION',
    image: '/inkscale_behance.webp'
  },
  {
    id: 'spatial-audio',
    num: '04',
    title: 'SPATIAL AUDIO ENGINE',
    category: 'SOUND DESIGN',
    description: 'WebAudio API spatial panner node integrated with interactive 3D camera.',
    tools: 'WEBAUDIO API / CANVAS',
    image: '/nobroker_behance.webp'
  }
];

