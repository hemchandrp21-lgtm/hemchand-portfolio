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
    subtitle: 'Usability Testing & Case Study',
    category: 'UX / UI',
    typeTag: 'Case Study / Usability Testing',
    year: '2025',
    client: 'NoBroker Concept UX Redesign',
    role: 'UX Researcher & Product Designer',
    tools: ['Figma', 'Usability Testing', 'Wireframing', 'Prototyping', 'User Research'],
    image: '/nobroker_behance.jpg',
    gallery: [
      '/nobroker_behance.jpg',
      '/nobroker_ux.jpg',
      '/nobroker_cropped.jpg'
    ],
    aspect: 'aspect-video lg:aspect-[16/9]',
    colSpan: 'lg:col-span-8',
    summary: 'A UX redesign focused on reducing confusion and improving transparency in the Packers & Movers booking experience.',
    
    problemStatement: 'The existing booking experience created friction around inventory selection, pricing visibility and trust. Users struggled to understand what they were selecting and became uncertain when costs appeared late in the flow.',
    
    researchFindings: [
      '5 of 6 users struggled with the booking flow.',
      'Inventory selection created confusion.',
      'Pricing was not visible early enough.',
      '5 of 6 users showed trust concerns near checkout.',
      'Users repeatedly checked information before continuing.'
    ],

    redesignFocus: [
      'Clearer inventory guidance and item categorization',
      'Earlier pricing visibility to eliminate checkout cost surprises',
      'Simplified booking flow reducing overall friction',
      'Stronger visual hierarchy and clearer decision-making points',
      'Improved trust indicators and price transparency'
    ],

    beforeAfterMetrics: [
      { metric: 'Task Completion Time', before: '20–30 seconds', after: '5–10 seconds', change: '70% Faster Discovery' },
      { metric: 'Task Completion Rate', before: '100%', after: '100%', change: 'Maintained 100% Usability' },
      { metric: 'User Satisfaction Rating', before: '2.3 / 5.0', after: '4.2 / 5.0', change: '+82% Satisfaction Increase' }
    ],

    keyTakeaway: 'Sometimes improving UX isn\'t about adding more functionality. It is about removing uncertainty.',

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
    subtitle: 'Next-Gen Mobile Dashboard & Wallet Experience',
    category: 'UX / UI',
    typeTag: 'Mobile App Design',
    year: '2025',
    client: 'Mobile Product Project',
    role: 'Mobile UX & Interface Designer',
    tools: ['Figma', 'Mobile UX', 'Micro-Interactions', 'Dark Mode UI'],
    image: '/mobile_app_behance.jpg',
    gallery: [
      '/mobile_app_behance.jpg',
      '/work1.jpg'
    ],
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-4 lg:translate-y-8',
    summary: 'Dark mode mobile app UI design featuring intuitive financial tracking, task workflows, and fluid micro-interactions.',
    
    problemStatement: 'Modern mobile dashboards often overwhelm users with excessive data points, creating visual noise and increasing task completion times.',

    redesignFocus: [
      'Glanceable high-contrast financial data visualization',
      'Simplified quick-action buttons for transfer and bill pay',
      'Tactile dark mode UI palette with vibrant green status indicators',
      'Ergonomic thumb-zone navigation for one-handed phone operation'
    ],

    sections: {
      overview: 'Designed a high-performance dark mode mobile wallet and task app. Focused on typography hierarchy, tactile feedback, and seamless screen transitions.'
    }
  },
  {
    id: 'inkscale-ecommerce-mobile',
    num: '03',
    title: 'INKSCALE — E-COMMERCE & BRAND MOBILE APP',
    subtitle: 'Fashion E-Commerce Mobile App & Brand Design System',
    category: 'UX / UI',
    typeTag: 'E-Commerce Mobile UX',
    year: '2025',
    client: 'Inkscale Fashion',
    role: 'UI/UX & Brand Designer',
    tools: ['Figma', 'Design Systems', 'E-commerce Flows', 'Mobile Prototyping'],
    image: '/inkscale_behance.jpg',
    gallery: [
      '/inkscale_behance.jpg',
      '/work2.jpg'
    ],
    aspect: 'aspect-[16/9]',
    colSpan: 'lg:col-span-7',
    summary: 'Mobile shopping application for Inkscale spring collection featuring vibrant magenta branding and effortless checkout flows.',
    
    problemStatement: 'High bounce rates during mobile checkout caused by multi-step address forms and unclear product size selection.',

    redesignFocus: [
      'Vibrant magenta brand system paired with clean light layout backdrop',
      'One-tap size selector and sticky bottom add-to-cart drawer',
      'Streamlined 2-step checkout flow with instant order confirmation',
      'Reusable atomic component tokens for iOS and Android'
    ],

    sections: {
      overview: 'Crafted mobile app experience for Inkscale spring wear collection, combining bold visual branding with friction-free e-commerce purchasing.'
    }
  },
  {
    id: 'hozatra-corporate-web-ui',
    num: '04',
    title: 'HOZATRA — CORPORATE PLATFORM & WEB UI',
    subtitle: 'Corporate Innovation & Digital Platform Web UI',
    category: 'UX / UI',
    typeTag: 'Corporate Web UI',
    year: '2025',
    client: 'Hozatra Enterprise',
    role: 'Web UI/UX Designer',
    tools: ['Figma', 'Responsive Web Design', 'Web Architecture', 'Design System'],
    image: '/hozatra_behance.jpg',
    gallery: [
      '/hozatra_behance.jpg',
      '/work3.jpg'
    ],
    aspect: 'aspect-[3/4]',
    colSpan: 'lg:col-span-5 lg:-translate-y-6',
    summary: 'Responsive corporate website UI design for Hozatra, highlighting global impact, analytics dashboards, and sustainable growth.',
    
    problemStatement: 'Communicating complex enterprise solutions clearly to prospective corporate partners without losing reader engagement.',

    redesignFocus: [
      'Sleek dark obsidian web design with electric green accent hierarchy',
      'Interactive service breakdown cards and global impact charts',
      'Clean typography scaling across desktop, tablet, and mobile displays',
      'High-converting call-to-action hero sections'
    ],

    sections: {
      overview: 'Built responsive web UI for Hozatra corporate platform, establishing brand authority through dark cinematic contrast and structured layout grids.'
    }
  },
  {
    id: 'little-craft-nursery-school',
    num: '05',
    title: 'LITTLE CRAFT — NURSERY SCHOOL WEB UI',
    subtitle: 'Child-Centric Interactive Nursery School Web Portal',
    category: 'UX / UI',
    typeTag: 'Educational Web UX',
    year: '2024',
    client: 'Little Craft Nursery School',
    role: 'UI/UX & Web Designer',
    tools: ['Figma', 'Accessibility (WCAG)', 'Responsive Web', 'Child-Centric Design'],
    image: '/little_craft_behance.jpg',
    gallery: [
      '/little_craft_behance.jpg'
    ],
    aspect: 'aspect-video lg:aspect-[16/9]',
    colSpan: 'lg:col-span-8',
    summary: 'Accessible tablet and desktop web UI for Little Craft Nursery School, featuring cheerful navigation and parent enrollment flows.',
    
    problemStatement: 'Parents struggled to find tuition details, curriculum overview, and enrollment forms on the legacy school portal.',

    redesignFocus: [
      'Warm cheerful color palette (yellow, sky blue, mint) evoking warmth and trust',
      'Clear parent navigation bar: Classes, Admissions, Gallery, Philosophy',
      'Mobile and tablet responsive layouts tailored for busy parents on the go',
      'Simple online enrollment application form with instant guidance'
    ],

    sections: {
      overview: 'Redesigned Little Craft Nursery School portal to make school discovery and enrollment joyful, clear, and fully accessible for parents.'
    }
  },
  {
    id: 'resort-hospitality-web-ui',
    num: '06',
    title: 'DESTINATION RESORT & HOSPITALITY WEB UI',
    subtitle: 'Luxury Travel & Resort Booking Web Experience',
    category: 'UX / UI',
    typeTag: 'Hospitality Web UI',
    year: '2025',
    client: 'Aethel Resorts',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Visual Storytelling', 'Booking UX', 'Responsive Web'],
    image: '/resort_web_behance.jpg',
    gallery: [
      '/resort_web_behance.jpg'
    ],
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-4 lg:translate-y-8',
    summary: 'High-end responsive resort portal bringing families together in beautiful destinations with immersive villa photography.',
    
    problemStatement: 'Friction in luxury resort booking engines where guests fail to visualize villa amenities before completing reservation.',

    redesignFocus: [
      'Full-bleed resort imagery and atmospheric typography',
      'Seamless multi-destination search and date picker HUD',
      'Interactive room preview carousels with amenity tags',
      'Effortless 3-step reservation and concierge checkout'
    ],

    sections: {
      overview: 'Designed luxury hospitality web UI aimed at evoking emotion and driving resort villa bookings through immersive visual storytelling.'
    }
  },
  {
    id: 'texture-lab-web-app',
    num: '07',
    title: 'TEXTURE LAB — 3D MATERIAL & TEXTURE WEB APP',
    subtitle: 'Digital Materials Library & Shader Web Application',
    category: 'UX / UI',
    typeTag: 'Web App UX / Creative Tech',
    year: '2025',
    client: 'Texture Lab Concept',
    role: 'Product & Web App Designer',
    tools: ['Figma', 'Web App UX', 'Dark Mode UI', '3D Asset Management'],
    image: '/texture_lab_behance.jpg',
    gallery: [
      '/texture_lab_behance.jpg'
    ],
    aspect: 'aspect-[16/9]',
    colSpan: 'lg:col-span-7',
    summary: 'A dark 3D material library web app UI designed for 3D artists, texture creators, and digital surface rendering workflows.',
    
    problemStatement: '3D artists lose focus when organizing thousands of PBR texture maps across clunky file directory structures.',

    redesignFocus: [
      'Dark obsidian UI layout maximizing material preview contrast',
      'Grid thumbnail library supporting 4K sphere texture previews',
      'Property adjustment sidebar (roughness, metalness, normal, displacement)',
      'One-click export tokens for Blender, Maya, and Unreal Engine'
    ],

    sections: {
      overview: 'Crafted web app interface for Texture Lab, streamlining 3D texture selection, PBR material customization, and asset management.'
    }
  },
  {
    id: 'titan-watch-product-ui',
    num: '08',
    title: 'TITAN — TIMELESS WATCH PRODUCT UI & BRANDING',
    subtitle: 'Luxury Watch Product Branding & Display Interface',
    category: 'UX / UI',
    typeTag: 'Product UI & Branding',
    year: '2024',
    client: 'Titan Watch Concept',
    role: 'Visual & Product Designer',
    tools: ['Figma', 'Photoshop', 'Product Branding', 'Visual Hierarchy'],
    image: '/titan_watch_behance.jpg',
    gallery: [
      '/titan_watch_behance.jpg'
    ],
    aspect: 'aspect-[3/4]',
    colSpan: 'lg:col-span-5 lg:-translate-y-4',
    summary: 'Premium product showcase for Titan Men\'s Timeless Style Watch featuring refined black dial aesthetics and circular halo lighting.',
    
    problemStatement: 'E-commerce watch displays often fail to convey craftsmanship, weight, and premium material quality on digital screens.',

    redesignFocus: [
      'Refined black dial timepiece showcase with teal circular halo lighting',
      'High-contrast concrete texture backdrop highlighting dark metal casing',
      'Minimalist typography emphasizing elegance, precision, and authority',
      'Interactive watch feature breakdown and specification view'
    ],

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
