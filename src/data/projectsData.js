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
    id: 'hozatra-corporate-web-ui',
    num: '02',
    title: 'AFTTER — CORPORATE PLATFORM & ILLUSTRATION UI',
    subtitle: 'Corporate Innovation, B2B Digital Platform & Illustration Web UI Design',
    category: 'WEB',
    typeTag: 'Corporate Enterprise Web UI & Illustration',
    year: '2025',
    client: 'Aftter Enterprise',
    role: 'Web UI/UX Designer & Illustrator',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    tools: ['Figma', 'Responsive Web Design', 'Web Architecture', 'Design System', 'Analytics UX', 'Illustration'],
    image: '/aftter_storefront.webp',
    gallery: [
      '/aftter_storefront.webp',
      '/real_aftter.webp',
      '/aftter_real.webp',
      '/work3.webp'
    ],
    aspect: 'aspect-[3/4]',
    colSpan: 'lg:col-span-5 lg:-translate-y-6',
    summary: 'Responsive corporate website UI & illustration design for Aftter, highlighting global impact, analytics dashboards, and sustainable growth.',
    
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
        image: '/aftter_storefront.webp'
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
      overview: 'Built responsive web UI for Aftter corporate platform, establishing brand authority through dark cinematic contrast and structured layout grids.'
    }
  },
  {
    id: 'resort-hospitality-web-ui',
    num: '03',
    title: 'SEED TO SOUL — DESTINATION RESORT & HOSPITALITY WEB UI',
    subtitle: 'Luxury Travel, Resort Booking Engine & Immersive Hospitality Web UI',
    category: 'WEB',
    typeTag: 'Hospitality Web UI & Booking Engine',
    year: '2025',
    client: 'Seed to Soul Resorts',
    role: 'UI/UX Designer',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    externalUrl: 'https://www.seedtosoul.co/',
    tools: ['Figma', 'Visual Storytelling', 'Booking UX', 'Responsive Web', 'Luxury Branding'],
    image: '/seed_to_soul.webp',
    gallery: [
      '/seed_to_soul.webp',
      '/real_seedtosoul.webp',
      '/seedtosoul_real.webp'
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
        image: '/seed_to_soul.webp'
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
    num: '04',
    title: 'LYNK FOODS — E-COMMERCE & WEB APP',
    subtitle: 'Digital E-Commerce, Sweets Storefront & Interactive Web App',
    category: 'E-COMMERCE',
    typeTag: 'Web App UX & E-Commerce Platform',
    year: '2025',
    client: 'Lynk Foods',
    role: 'Product & Web App Designer',
    behanceUrl: 'https://www.behance.net/hemchanpaunika',
    externalUrl: 'https://lynkfoods.com/',
    tools: ['Figma', 'Web App UX', 'Dark Mode UI', 'E-Commerce Platform', 'PBR Shaders'],
    image: '/lynk_sweets.webp',
    gallery: [
      '/lynk_sweets.webp',
      '/real_lynk.webp',
      '/lynk_real.webp'
    ],
    aspect: 'aspect-[16/9]',
    colSpan: 'lg:col-span-7',
    summary: 'A dark digital e-commerce web app UI designed for Lynk Foods & Sweets storefront, featuring seamless ordering workflows.',
    
    problemStatement: 'Shoppers lose focus and experience checkout hesitation when browsing digital sweets storefronts without instant product customization previews.',

    persona: {
      name: 'David Chen',
      age: '29',
      role: 'Lead Product Designer',
      location: 'Vancouver',
      goals: ['Search premium sweets & food products by category', 'Customize gift boxes and quantity in browser', '1-click checkout directly on Lynk Foods live platform'],
      frustrations: ['Sluggish asset managers', 'Inaccurate material previews on flat thumbnails', 'Manual form remapping'],
      quote: '"I need a digital store that renders product previews instantly without slowing down my shopping flow."'
    },

    userJourney: [
      { step: '01. Asset Search', action: 'Filters by "Gourmet Sweets"', emotion: 'Focused', friction: 'Zero', score: 5 },
      { step: '02. Product Inspection', action: 'Explores product gallery', emotion: 'Delighted', friction: 'Zero', score: 5 },
      { step: '03. Customization', action: 'Adjusts quantity slider', emotion: 'In Control', friction: 'Low', score: 4 },
      { step: '04. 1-Click Checkout', action: 'Directs to Lynk Foods live website', emotion: 'Productive', friction: 'Zero', score: 5 }
    ],

    researchFindings: [
      'Shoppers preferred a dark obsidian backdrop to maximize product preview contrast and visual accuracy.',
      'Direct link presets to Lynk Foods live site increased purchasing conversion.'
    ],

    redesignFocus: [
      'Dark obsidian UI layout maximizing product preview contrast',
      'Grid thumbnail library supporting high-resolution previews',
      'Property adjustment sidebar for order customization',
      'Direct 1-click external link to live Lynk Foods store'
    ],

    interactiveScreens: [
      {
        id: 'texture-1',
        title: 'Screen 01: Lynk Sweets Digital Storefront Grid',
        subtitle: 'High-contrast product previews with category tagging',
        description: 'Organizes products into a high-density dark grid optimized for rapid scanning and previewing.',
        keyFeature: 'Dark Obsidian Storefront Grid',
        image: '/lynk_sweets.webp'
      },
      {
        id: 'texture-2',
        title: 'Screen 02: Real-Time Product Inspector Sidebar',
        subtitle: 'Interactive sliders for product quantities & gift packaging',
        description: 'Allows shoppers to customize order details directly in the web app before checkout.',
        keyFeature: 'Live Product Inspector',
        image: '/real_lynk.webp'
      }
    ],

    beforeAfterMetrics: [
      { metric: 'Product Discovery Speed', before: '45 seconds', after: '8 seconds', change: '82% Faster Discovery' },
      { metric: 'Store Checkout Time', before: '3 minutes', after: '45 seconds', change: '75% Time Saved' }
    ],

    designSystem: {
      colors: ['#050508', '#8B5CF6', '#06B6D4', '#1F2937', '#FFFFFF'],
      typography: ['Space Grotesk (UI Labels)', 'JetBrains Mono (Parameters)', 'Inter (Body)'],
      keyFeatures: ['High-Res Product Render Preview', 'Live Quantity Slider HUD', '1-Click Live Store Link']
    },

    keyTakeaway: 'E-commerce web apps must prioritize high visual contrast, minimal friction, and instant purchasing access.',

    sections: {
      overview: 'Crafted web app interface for Lynk Foods & Sweets, streamlining product selection and e-commerce ordering.'
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

