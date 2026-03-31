export const personalInfo = {
  name: 'Moaaz Salama',
  title: 'Senior Flutter Developer',
  roles: [
    'Senior Flutter Developer',
    'Mobile App Architect',
    'Clean Code Advocate',
    'Cross-Platform Expert',
    'Real-Time Apps Builder',
  ],
  summary:
    'Senior Flutter Developer with 5+ years of experience building high-quality, scalable cross-platform mobile applications. Published 12+ apps on Google Play and App Store with 4.5+ average rating. Expertise in Clean Architecture, state management, and real-time features. Currently leading Flutter development at Wuilt.',
  email: 'eng.moaaz.salama@gmail.com',
  phone: '+201013747217',
  location: 'Giza, Egypt',
  linkedin: 'https://linkedin.com/in/moaaz-salama',
  github: 'https://github.com/moaazsalama',
  youtube: 'https://youtube.com/@moaaz.salama',
  available: true,
}

export const stats = [
  { value: 12, suffix: '+', label: 'Published Apps', icon: '📱' },
  { value: 4.5, suffix: '+', label: 'Avg Rating', decimals: 1, icon: '⭐' },
  { value: 10, suffix: 'K+', label: 'Downloads', icon: '⬇️' },
  { value: 99.5, suffix: '%', label: 'Crash-Free Rate', decimals: 1, icon: '🛡️' },
  { value: 5, suffix: '+', label: 'Years Experience', icon: '🚀' },
  { value: 100, suffix: '+', label: 'Students Mentored', icon: '🎓' },
]

export const skills = [
  {
    category: 'Mobile Development',
    color: '#00D4FF',
    items: ['Flutter', 'Dart', 'Android', 'iOS', 'Cross-Platform'],
  },
  {
    category: 'State Management',
    color: '#8B5CF6',
    items: ['Bloc / Cubit', 'Provider', 'GetX', 'MobX'],
  },
  {
    category: 'Architecture',
    color: '#10B981',
    items: ['Clean Architecture', 'MVVM', 'Repository Pattern', 'SOLID', 'Design Patterns'],
  },
  {
    category: 'Backend & APIs',
    color: '#F59E0B',
    items: ['REST APIs', 'GraphQL', 'WebSockets', 'Pusher Channels', 'Firebase'],
  },
  {
    category: 'Maps & Location',
    color: '#EF4444',
    items: ['Google Maps API', 'Geolocation', 'GeoFire', 'Geofencing', 'GPS Tracking'],
  },
  {
    category: 'Databases',
    color: '#06B6D4',
    items: ['Hive', 'SQLite', 'Firebase Firestore', 'MySQL'],
  },
  {
    category: 'Firebase Services',
    color: '#F97316',
    items: ['Auth', 'Firestore', 'FCM', 'Storage', 'Analytics', 'Crashlytics'],
  },
  {
    category: 'Tools & Practices',
    color: '#84CC16',
    items: ['Git & GitHub', 'VS Code', 'Android Studio', 'Figma', 'Agile/Scrum', 'CI/CD'],
  },
]

export const projects = [
  {
    id: 1,
    name: 'Wuilt Merchant',
    category: 'E-Commerce',
    company: 'Wuilt',
    year: '2025',
    description:
      'Official companion app for 20,000+ store owners. Real-time order management dashboard, live shipment tracking, push notifications, and mobile-first business operations.',
    tech: ['Flutter', 'Clean Architecture', 'Firebase', 'REST APIs', 'Real-time'],
    impact: '20,000+ merchants served',
    rating: null,
    featured: true,
    playStore: 'https://play.google.com/store/apps/details?id=com.wuilt.merchant.app',
    appStore: 'https://apps.apple.com/us/app/wuilt-merchant/id6743070643',
  },
  {
    id: 2,
    name: 'Shayaal',
    category: 'Location-Based',
    company: 'Sigma Tech',
    year: '2024',
    description:
      'Real-time road assistance platform. Live GPS tracking with smart nearest-provider matching. Reduced battery by 40%, launch time improved 57% (4.2s → 1.8s). 99.5% crash-free.',
    tech: ['Flutter', 'Bloc', 'Google Maps', 'Pusher', 'Firebase', 'Hive'],
    impact: '10,000+ downloads • 4.6★',
    rating: '4.6',
    featured: true,
    playStore: null,
  },
  {
    id: 3,
    name: 'Listat',
    category: 'Productivity',
    company: 'Sigma Tech',
    year: '2024',
    description:
      'Complete project management solution with real-time team collaboration, task tracking, multi-step workflow support, and offline-first architecture.',
    tech: ['Flutter', 'Bloc', 'REST API', 'Pusher Channels', 'Hive'],
    impact: 'Streamlined team workflows',
    rating: null,
    featured: false,
    playStore: 'https://play.google.com/store/apps/details?id=com.listat.sigmatech',
  },
  {
    id: 4,
    name: 'Zero-Carb',
    category: 'Health',
    company: 'Sigma Tech',
    year: '2024',
    description:
      'Popular weight loss & nutrition tracking app with personalized health recommendations, real-time sync, and OneSignal push notifications.',
    tech: ['Flutter', 'Bloc', 'REST APIs', 'OneSignal', 'Hive'],
    impact: 'High user engagement',
    rating: null,
    featured: false,
    playStore: 'https://play.google.com/store/apps/details?id=com.q8intouch.zerocarb',
  },
  {
    id: 5,
    name: 'Telagi (تلاقي)',
    category: 'E-Commerce',
    company: 'Sigma Tech',
    year: '2024',
    description:
      'Full-featured e-commerce platform for the Kuwait market with payment integration, product catalog, shopping cart, and real-time order tracking.',
    tech: ['Flutter', 'Bloc', 'Firebase', 'REST APIs', 'Local DB'],
    impact: 'Kuwait market focus',
    rating: null,
    featured: false,
    playStore: 'https://play.google.com/store/apps/details?id=com.app.telagi',
  },
  {
    id: 6,
    name: 'Almanam',
    category: 'AI',
    company: 'Freelance',
    year: '2022',
    description:
      'AI-powered dream interpretation app with real-time chat with experts, dream journal, Pusher Channels for live messaging, and notification system.',
    tech: ['Flutter', 'Bloc', 'REST API', 'Pusher Channels', 'Hive'],
    impact: 'AI + real-time chat',
    rating: null,
    featured: false,
    playStore: null,
  },
]

export const experience = [
  {
    title: 'Senior Flutter Developer',
    company: 'Wuilt',
    period: 'March 2025 – Present',
    location: 'Giza, Egypt',
    current: true,
    points: [
      'Leading Flutter development for mobile and web solutions',
      'Architecting scalable cross-platform apps with Clean Architecture',
      'Implementing SOLID principles across the codebase',
      'Mentoring junior developers and conducting code reviews',
    ],
  },
  {
    title: 'Mid-Level Flutter Developer',
    company: 'Sigma Tech',
    period: 'April 2024 – March 2025',
    location: 'Kuwait',
    current: false,
    points: [
      'Built 9+ cross-platform apps: location-based, e-commerce, real-time chat',
      'Achieved 4.5+/5 average rating across all published apps',
      'Reduced app size by 35% through aggressive optimization',
      'Generated $50K+ in client revenue through e-commerce solutions',
      'Mentored 3 junior developers',
    ],
  },
  {
    title: 'Flutter Developer',
    company: 'WSM Company (شركة وسم)',
    period: 'September 2022 – April 2024',
    location: 'Riyadh, Saudi Arabia',
    current: false,
    points: [
      'Designed and maintained cross-platform mobile applications',
      'Collaborated with UI/UX designers and QA teams',
      'Delivered robust products in agile environment',
    ],
  },
  {
    title: 'Mobile Development Head',
    company: 'Minders',
    period: 'November 2021 – April 2024',
    location: 'Egypt',
    current: false,
    points: [
      'Led the mobile development team across all Flutter projects',
      'Managed team growth, hiring, and developer onboarding',
      'Also served as Flutter Instructor (Aug–Oct 2021)',
    ],
  },
  {
    title: 'Flutter Instructor',
    company: 'Developer Career & Pepo Tech',
    period: 'January 2022 – April 2024',
    location: 'Giza, Egypt',
    current: false,
    points: [
      'Taught 100+ students: Dart, OOP, Flutter widgets, state management',
      'Covered Firebase, SQLite, REST APIs integration',
      'Published Dart Programming course on Udemy',
      'Runs Flutter & C++ YouTube channel',
    ],
  },
]

export const achievements = [
  { metric: '12+', label: 'Published Apps', sub: 'Google Play & App Store' },
  { metric: '4.5+', label: 'Avg Rating', sub: 'Across all apps' },
  { metric: '$50K+', label: 'Revenue Generated', sub: 'E-commerce solutions' },
  { metric: '57%', label: 'Launch Time Reduction', sub: '4.2s → 1.8s' },
  { metric: '40%', label: 'Battery Efficiency', sub: 'Adaptive GPS tracking' },
  { metric: '35%', label: 'App Size Reduction', sub: 'Optimization techniques' },
]
