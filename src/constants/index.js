export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects'
  },
  {
    id: 4,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Mychal was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Mychal’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Mychal. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Mychal was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Apple iPhone 15 Website Clone',
    desc: 'A visually stunning clone of Apple’s iPhone 15 Pro website built using React.js, Three.js, and GSAP for animations. It showcases the iPhone 15 Pro in multiple colors and sizes with interactive 3D models.',
    subdesc:
      'This project highlights the effective use of GSAP for smooth animations, React Three Fiber for 3D rendering, and Tailwind CSS for responsive design. Built with Vite for optimized performance and fast development.',
    href: 'https://apple-website-2acg1840q-mychal-salgados-projects.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Three.js',
        path: '/assets/threejs.png',
      },
      {
        id: 4,
        name: 'GSAP',
        path: '/assets/gsap.png',
      },
      {
        id: 5,
        name: 'Vite',
        path: '/assets/vite.png',
      },
    ],
  },
  {
    title: 'Drone Flight Path Optimization with Mapbox',
    desc: 'Developed in collaboration with the Army Research Labs as part of my senior design project at California State University, Los Angeles (CSULA), this application optimizes drone flight paths to minimize detection while enhancing operational efficiency.',
    subdesc:
      'This project leverages cutting-edge technologies such as React, Three.js, and Mapbox to provide real-time geospatial data analysis and 3D visualization. Designed to calculate optimal, stealthy flight routes, it plays a crucial role in improving unmanned aerial vehicle (UAV) mission success rates while reducing the risk of detection.',
    href: 'https://github.com/mycsal/suas-dfps',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Three.js',
        path: 'assets/threejs.png',
      },
      {
        id: 3,
        name: 'Mapbox',
        path: '/assets/mapbox.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Developer Portfolio',
    desc: 'This is my personal developer portfolio showcasing my skills, projects, and experience in front-end development and software engineering.',
    subdesc:
      'Built with React.js and styled with Tailwind CSS, this portfolio demonstrates responsive design principles and includes detailed project showcases with interactive elements.',
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Three.js',
        path: '/assets/threejs.png',
      },
    ],
  },
  {
    title: 'Full-Stack Uber Clone (In Progress)',
    desc: 'A full-stack Uber Clone application using Expo’s latest features, React Native, and a lightning-fast edge-ready Postgres database.',
    subdesc:
      'This Uber clone leverages Expo for fast mobile development and integrates a robust back-end powered by Postgres to handle real-time data and transactions.',
    href: '',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React Native',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Expo',
        path: 'assets/expo.png',
      },
      {
        id: 3,
        name: 'Postgres',
        path: '/assets/postgres.png',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Apple, Inc.',
    pos: 'Genius Administrator',
    duration: 'Oct 2018 - Present',
    title: `•	Demonstrated expertise in Apple products and services, with a passion for hands-on problem solving and continuous technical learning, equipping me to adeptly navigate complex challenges.\n
    •	Proven leadership in mentoring and guiding teams of up to 30 technicians, optimizing work processes, leading to a 25% reduction in repair turnaround time and a 30% increase in customer satisfaction, as measured by Net Promoter Scores (NPS).\n
    •	Leveraged exceptional communication skills to engage diverse audiences, ensuring effective stakeholder collaboration and delivering user-centric software solutions through a customer-focused approach.\n
    •	Strong ability to manage multiple tasks in high-pressure environments, successfully handling an average of 250 repair cases per day, showcasing agility in planning and prioritization, essential for meeting tight deadlines.`,
    icon: '/assets/apple.svg',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'California State University: Los Angeles',
    pos: 'Bachelor of Science, Computer Science',
    duration: 'Aug 2022 - May 2024',
    title: `•	Graduated Cum Laude, while consistently recognized for academic excellence, making the Dean’s List multiple semesters, achieving a cumulative GPA of 3.5\n
    •	Demonstrated strong foundational knowledge in core computer science subjects, including Discrete Structures, Analysis of Algorithms, Artificial Intelligence, and Data Science.\n
    •	Completed advanced coursework in machine and deep learning, virtual reality immersive worlds, and cryptography & information security, contributing to a comprehensive understanding of contemporary technological trends.`,
    icon: '/assets/csula.svg',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Apple, Inc.',
    pos: 'Software QA Engineer',
    duration: 'June 2023 - December 2023',
    title: `• Automated a pipeline trigger for testing data used in Tableau reporting, reducing data processing time by 30% and improving the accuracy of real-time data feeds for strategic decision-making.\n
    •	Executed comprehensive test plans, implementing testing strategies and methodologies, contributing to the successful shipment of Beats consumer audio electronics by completing approximately 750 test cases across various builds. \n
    •	Identified, reproduced, and isolated source and firmware bugs through automated, structured, and exploratory testing methods, documenting and tracking issues using JIRA, significantly enhancing product reliability and performance. \n
    •	Collaborated closely with cross-functional engineering teams to implement and test new features, conduct regression testing on critical areas, and drive the resolution of complex issues, consistently upholding Apple's high standards for excellence.`,
    icon: '/assets/apple.svg',
    animation: 'victory',
  },

  {
    id: 4,
    name: 'Old Dominion Freight Line, Inc.',
    pos: 'Senior Logistics & Transportation Manager',
    duration: 'July 2008 - Mar 2017',
    title: `•	Analyzed and improved transportation processes, achieving a 20% reduction in costs and a 15% decrease in inefficiencies year over year.\n
    •	Implemented innovative solutions to streamline operations, enhancing logistical performance and increasing on-time delivery rates by 25%.\n
    •	Conducted comprehensive data analysis on over 1 million shipments, influencing strategic decisions that led to a 10% improvement in overall business processes.\n
    •	Collaborated cross-functionally with teams of up to 50 members, fostering improvements and guiding future planning based on historical data and trends, resulting in a 30% increase in operational efficiency.`,
    icon: '/assets/odfl.svg',
    animation: 'salute',
  },
];

