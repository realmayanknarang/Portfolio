// ─────────────────────────────────────────────────────────
// This file is the single source of truth for all portfolio text.
// Pulled from Mayank's resume — tweak wording anytime, nothing else
// needs to change.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: 'Mayank Narang',
  role: 'Full-Stack Developer',
  tagline: 'Building intelligent solutions. Solving meaningful problems.',
  location: 'Chandigarh, India',
  email: 'imayanknarang@gmail.com',
  phone: '+91 7986672707',
  whatsapp: '+917986672707',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/realmayanknarang',
    linkedin: 'https://linkedin.com/in/mayank-narang-052328343',
    twitter: null,
  },
}

export const about = {
  bio: `As an ambitious, endeavouring and optimistic 20-year old undergrad, I am always interested in staying up to date with the latest developments in the fields of technology, science, business and finance. I constantly look forward towards learning new skills, exploring untapped ideas and acquiring more knowledge. Love interacting with new people and learning from their achievements and experiences. Never afraid of making mistakes, I try to solve problems in multiple ways and look for most efficient and effective solutions. something like this and better`,
  photoUrl: '/profile.jpg',
  highlights: [
    '98.1 percentile in JEE Main 2024 — top ~2% among 1.5M+ candidates',
    '400+ DSA problems solved on LeetCode',
    'CGPA 9.51 in B.Tech Computer Science & Engineering',
  ],
}

export const skills = [
  {
    category: 'Languages',
    items: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Web Development',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'CS Fundamentals',
    items: ['Data Structures', 'Algorithms', 'OOPS', 'Operating Systems', 'DBMS', 'Computer Networks'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Firebase', 'Jupyter Notebook', 'Regression', 'Classification', 'Clustering'],
  },
  {
  category: 'ML',
    items: ['Regression', 'Classification', 'Clustering', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  }
]

export const knowledge = [
  {
    category: 'General Programming',
    items: [
      'Strong grasp of major data structures in both C++ and Python',
      'Familiar with core algorithms and their real-world tradeoffs',
      'Complex problem solving, including competitive programming',
      'Regression, classification, and clustering algorithms for machine learning',
      'Experience working in the Linux operating system',
      'In-depth knowledge of Object-Oriented Programming concepts',
    ],
  },
  {
    category: 'Development',
    items: [
      'Building full MERN stack web applications',
      'Designing smooth, user-friendly UI/UX',
      'Implementing accurate, reliable backend functionality',
      'Working across multiple Node.js and React libraries',
      'Testing and debugging code',
      'Responsive web design',
      'Deploying web applications',
      'Contributing to open source',
    ],
  },
  {
    category: 'Beyond Code',
    items: [
      'Working in diverse teams',
      'Leading and managing people',
      'Public speaking',
      'Content writing',
      'Project management',
      'Event coordination',
      'Writing reports and academic studies',
      'Time management',
      'Real-world problem solving',
      'Adaptability',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'AI-Powered Procurement Platform',
    description:
      'A full-stack AI procurement platform with role-based access serving builders, vendors, and owners — covering purchase orders, vendor management, and multi-step approval workflows. Includes an independently deployed Python microservice for material demand forecasting, LLM-powered invoice scanning and vendor search, an AI copilot, real-time spending analytics, and automated stock/budget alerts.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Python (Flask + Prophet)'],
    liveUrl: '#',
    githubUrl: 'https://github.com/realmayanknarang/SmartBrick',
    image:' /projects/SmartBrick.png',
  },
  {
    id: 2,
    title: 'Social Media Application',
    description:
      'A full-stack social platform with secure authentication (hashed + salted passwords), profile management, and a content feed supporting both posts and short-form videos ("loops"). Real-time private messaging is powered by Socket.IO for instant bidirectional chat alongside the core social feed.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    liveUrl: '#',
    githubUrl: 'https://github.com/realmayanknarang/Wave',
    image: '/projects/Wave.png',
  },
  {
    id: 3,
    title: 'Weather Application',
    description:
      'A weather application that allows users to search for the current weather conditions of any city in the world. It fetches data from the OpenWeatherMap API and displays it in a user-friendly interface, including temperature, humidity, wind speed, and weather description.',
    tech: ['Node.js', 'Express.js', 'EJS', 'OpenWeather API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/realmayanknarang/weatherapp',
    image: '/projects/WeatherApp.png',
  },
  {
    id: 4,
    title: 'ToDoList Application',
    description:
      'A simple ToDoList application that allows users to create, update, and delete tasks. It features a clean and intuitive interface for managing daily activities.',
    tech: ['Node.js', 'Express.js', 'EJS', 'MongoDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com/realmayanknarang/TodoList',
    image: 'projects/ToDo.png',
  },
]

export const experience = [
  {
    id: 1,
    type: 'work',
    title: 'Member, ACM-CSS PEC (Coding Society)',
    org: 'Punjab Engineering College, Chandigarh',
    date: '2024 — Present',
    description: 'Helped plan and organize technical events, ran programming sessions, and arranged coding contests and hackathons for hundreds of students.',
  },
  {
    id: 2,
    type: 'education',
    title: 'B.Tech, Computer Science and Engineering',
    org: 'Punjab Engineering College, Chandigarh',
    date: '2024 — 2028',
    description: 'CGPA: 9.51 (current). Certified in Programming in Modern C++ by NPTEL, IIT Kharagpur.',
  },
  {
    id: 3,
    type: 'education',
    title: 'Senior Secondary (CBSE)',
    org: 'G.M.S.S.S-35D, Chandigarh',
    date: '2024',
    description: '83%',
  },
  {
    id: 4,
    type: 'education',
    title: 'Secondary (ICSE)',
    org: 'Holy Angels School, Rajpura',
    date: '2022',
    description: '93%',
  },
]
