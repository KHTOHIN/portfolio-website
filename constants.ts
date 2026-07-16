import { Project, ExperienceItem, SkillCategory, Testimonial, BlogPost, Certification, PersonalProject, Achievement } from './types';
import { 
  Code, 
  Server, 
  Layout, 
  Cloud, 
  Database, 
  CheckCircle, 
  Users, 
  Terminal 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Kawsar Hamid",
  role: "Software Engineer I | Programmer",
  headline: "System design, SQL expertise, and code debugging — building robust solutions with PHP, Java & MySQL.",
  subheadline: "I'm Kawsar Hamid — a passionate programmer with a strong focus on system design, SQL expertise, and code debugging. I specialize in support-based development, client-centric solutions, and building robust reporting modules.",
  location: "Bangladesh",
  availability: "Available for Full-time opportunities — remote & on-site.",
  phone: "+8801750047354",
  social: {
    github: "https://github.com/KHTohin",
    linkedin: "https://www.linkedin.com/in/kawsar-hamid-tohin/",
    facebook: "https://www.facebook.com/kawsarhamid.tohin.1/",
    email: "mailto:kawsarhamidtohin@gmail.com"
  }
};

export const HIGHLIGHTS = [
  { label: "Years Experience", value: "5+" },
  { label: "Domain Expertise", value: "Gov & Enterprise" },
  { label: "Core Stack", value: "PHP, Laravel, Java" },
  { label: "Location", value: "Bangladesh / Remote" },
];

export const ABOUT = {
  intro: "I'm Kawsar Hamid — a passionate programmer with a strong focus on system design, SQL expertise, and code debugging. I specialize in support-based development, client-centric solutions, and building robust reporting modules using PHP, Java, and MySQL.",
  body: [
    "My journey began with an internship at Dream Deviser Digital, and since then, I've contributed to impactful projects at Synesis IT PLC, including national initiatives such as the Department of Agricultural Extension (DAE) and the Chief Controller of Imports & Exports (CCI&E). I thrive in both development and support roles, quickly adapting to dynamic project requirements and tight deadlines.",
    "Beyond development, I manage Linux servers, automate workflows using Cron jobs and Shell scripting, and write efficient automation scripts in PHP and Python. I follow clean architectural principles and apply design patterns like Singleton, MVC, and Repository across both monolithic and microservice architectures.",
    "Currently, I'm deepening my expertise in Java Spring Boot and exploring big data technologies. I'm driven by curiosity and a strong problem-solving mindset. I enjoy collaborating with teams, learning new technologies, and turning complex challenges into scalable, efficient solutions."
  ],
  values: [
    "Clean architecture and design patterns",
    "Client-centric solutions and support excellence",
    "Lifelong learning and continuous improvement"
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["PHP", "JavaScript", "Python", "Java", "SQL", "Bash"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Laravel", "CakePHP", "Spring Boot", "React", "Node.js", "Angular", "Bootstrap"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MariaDB", "OracleDB", "MSSQL"]
  },
  {
    title: "Tools & Environments",
    skills: ["Git", "Docker", "Postman", "Cron Jobs", "Linux", "Shell Scripting"]
  },
  {
    title: "Key Concepts",
    skills: ["API Development", "System Design", "SQL Optimization", "Code Debugging", "Clean Architecture", "Design Patterns"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Online Licence Module - CCI&E",
    tagline: "Chief Controller of Imports & Exports licensing system.",
    description: "Provided ongoing support through bug fixes and service enhancements to improve system stability and user experience. Designed and implemented the 5-year renewal system, along with comprehensive revenue reporting features and related administrative tools. Focused on database optimization to boost performance, scalability, and reliability.",
    techStack: ["Laravel", "PHP", "MariaDB", "REST API"],
    highlights: [
      "Designed and implemented the 5-year renewal system",
      "Built comprehensive revenue reporting features",
      "Focused on database optimization for performance and scalability"
    ],
    links: {
      live: "https://olm.ccie.gov.bd/"
    }
  },
  {
    id: "2",
    name: "Phyto-Sanitary System - DAE",
    tagline: "Automation of Phyto-Sanitary System of Plant Quarantine Wing.",
    description: "Contributed to the Automation system for certificates & permits. Led bug fixes and feature enhancements as the main programmer. Key work included IP Time Extension, Reusable Chalan System, e-Flow, SMS, server maintenance, and DB optimization. Also handled malware scanning and PDF certificate signing, covering 90% of the project.",
    techStack: ["CakePHP", "PHP", "MySQL", "Bootstrap"],
    highlights: [
      "Led bug fixes and feature enhancements as main programmer",
      "Implemented IP Time Extension, Reusable Chalan System, e-Flow, SMS",
      "Handled malware scanning and PDF certificate signing, covering 90% of the project"
    ],
    links: {
      live: "https://pqw.dae.gov.bd/"
    }
  },
  {
    id: "3",
    name: "Contract Farming Management - DAE",
    tagline: "Contract Farming Management and Traceability Reporting System.",
    description: "Developed the system from scratch using Laravel 7, Angular 9, and MariaDB. Led requirement analysis, database design, and task breakdown to ensure a structured development process. Implemented core features including exporter registration, contract management, and a robust admin panel.",
    techStack: ["Laravel", "Angular", "PHP", "MariaDB", "REST API"],
    highlights: [
      "Built the system from scratch with Laravel 7, Angular 9, and MariaDB",
      "Led requirement analysis, database design, and task breakdown",
      "Implemented exporter registration, contract management, and admin panel"
    ],
    links: {
      live: "https://cftpqw.dae.gov.bd/"
    }
  },
  {
    id: "4",
    name: "Jiban Bima Corporation (JBC)",
    tagline: "Insurance system supporting go-live across regional offices.",
    description: "Conducted problem analysis to support go-live approvals across five regional offices. Delivered effective solutions for key issues, including the development of a detailed revenue report to meet stakeholder needs. Actively engaged in client handling, gathering requirements, and resolving pain points.",
    techStack: ["Spring Boot", "Java", "OracleDB"],
    highlights: [
      "Supported go-live approvals across five regional offices",
      "Developed detailed revenue reports for stakeholders",
      "Engaged in client handling and requirements gathering"
    ],
    links: {
      live: "http://einsurance.gov.bd/"
    }
  },
  {
    id: "5",
    name: "Synesis SMS Gateway",
    tagline: "In-house SMS gateway with BTRC-compliant API integration.",
    description: "Integrated two APIs to ensure compliance with updated BTRC regulations, requiring minimal changes to the existing system. Completed the full integration within four hours, followed by an additional hour of testing to ensure stability and successful deployment.",
    techStack: ["CakePHP", "PHP", "REST API", "Bootstrap", "MariaDB"],
    highlights: [
      "Integrated two APIs for BTRC regulation compliance",
      "Completed full integration within four hours",
      "Ensured stability through thorough testing"
    ],
    links: {}
  },
  {
    id: "6",
    name: "Online Recruitment - BWDB",
    tagline: "Online Recruitment Management System for BWDB.",
    description: "Focused on support-based tasks, including bug fixing, custom report development, exam attendance refinement, and admit card design improvements. Contributed to system stability and feature enhancement through consistent maintenance and user-focused updates.",
    techStack: ["CakePHP", "PHP", "Bootstrap", "OracleDB"],
    highlights: [
      "Custom report development and exam attendance refinement",
      "Admit card design improvements",
      "System stability through consistent maintenance"
    ],
    links: {}
  },
  {
    id: "7",
    name: "PMIS - BWDB",
    tagline: "Personnel Management Information System for BWDB.",
    description: "Contributed to key modules including PMIS, GAD, Training, and APR. Handled support-based tasks such as bug fixing, level adjustments, custom report development, and the integration of new Training and APR modules. Enhanced system workflows by incorporating photo and signature features.",
    techStack: ["CakePHP", "PHP", "Bootstrap", "OracleDB"],
    highlights: [
      "Contributed to PMIS, GAD, Training, and APR modules",
      "Integrated new Training and APR modules",
      "Enhanced workflows with photo and signature features"
    ],
    links: {}
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    role: "Software Engineer I",
    company: "Synesis IT PLC",
    period: "Jun 2025 — Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Promoted from Programmer due to company designation style upgradation.",
      "Continuing to lead development and optimization of government systems.",
      "Built key modules, optimized queries, managed servers and backups.",
      "Attended client meetings and analyzed requirements."
    ]
  },
  {
    id: "1b",
    role: "Programmer",
    company: "Synesis IT PLC",
    period: "Sep 2024 — Jun 2025",
    location: "Dhaka, Bangladesh",
    description: [
      "Led the Phyto-Sanitary Automation System, cutting certificate processing time by 30%.",
      "Improved government system performance by 25% through optimization.",
      "Built key modules, optimized queries, managed servers and backups.",
      "Attended client meetings and analyzed requirements."
    ]
  },
  {
    id: "2",
    role: "Junior Programmer",
    company: "Synesis IT PLC",
    period: "Apr 2022 — Aug 2024",
    location: "Dhaka, Bangladesh",
    description: [
      "Improved database speed by 20% with optimization techniques.",
      "Helped design and build the Contract Farming Management System.",
      "Provided tech solutions that boosted efficiency by 15%."
    ]
  },
  {
    id: "3",
    role: "Implementation Engineer",
    company: "Synesis IT PLC",
    period: "Sep 2021 — Mar 2022",
    location: "Dhaka, Bangladesh",
    description: [
      "Contributed to project planning and module design.",
      "Developed APIs and supported both backend and frontend.",
      "Joined client discussions for requirement gathering."
    ]
  },
  {
    id: "4",
    role: "Implementation Engineer - Contract",
    company: "Synesis IT PLC",
    period: "Oct 2020 — Aug 2021",
    location: "Dhaka, Bangladesh",
    description: [
      "Helped analyze project requirements and design systems.",
      "Worked on backend modules and joined client meetings."
    ]
  },
  {
    id: "5",
    role: "Software Developer - Intern",
    company: "Dream Deviser Digital",
    period: "May 2019 — Aug 2019",
    location: "Dhaka, Bangladesh",
    description: [
      "Worked on full-stack projects in a hybrid work setup.",
      "Used Java and databases in hands-on development tasks."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    content: "I had the privilege of working with KAWSAR HAMID during our time at Synesis IT PLC. KAWSAR'S is an exceptionally skilled professional with expertise in Java, Spring & Spring Boot, Spring Security, OAuth2, Microservices, Hibernate, JPA, JOOQ, Oracle, MySQL, Thymeleaf, Jasper, JavaScript, HTML, CSS, React, PHP, MySQL, Angular, Code Debugging & Reuse and Support-based Development, Client Management, Reporting Modules.",
    author: "MD.NUR-A-ALAM (PMP, PRINCE2® Practitioner)",
    role: "Project Manager",
    company: "Dynamic Solution Innovators (DSi)"
  },
  {
    id: "2",
    content: "I had the pleasure of working with KAWSAR HAMID at Synesis and was consistently impressed by his programming skills and problem-solving abilities. KAWSAR HAMID played a key role in all the project, using latest technology to deliver high-quality, scalable code. HE has a keen eye for detail, spotting issues early and proactively finding solutions that saved our team both time and resources.",
    author: "Md.Shakil Khan",
    role: "Database Administrator, DBA ORACLE, MSSQL, PostgreSQL, MySQL",
    company: "Synesis IT PLC"
  },
  {
    id: "3",
    content: "I had the pleasure of working with Kawsar as the programmer on our project, and his expertise has been invaluable. Kawsar is skilled, detail-oriented, and consistently delivers high-quality work. He has a strong problem-solving mindset and quickly adapts to project needs.",
    author: "Sharuk Ahmed",
    role: "Project Management Executive",
    company: "Synesis IT PLC"
  },
  {
    id: "4",
    content: "I had the opportunity to work with Kawsar Bhai on a project at Synesis IT and found him to be a positive and skilled problem-solver. His contributions as an engineer were instrumental in completing the project work.",
    author: "Md Aminul Islam, PMP, CSM",
    role: "Founder, ITQAN | Project & Digital Transformation Consultant",
    company: "ITQAN"
  },
  {
    id: "5",
    content: "I've had the pleasure of working with Kawser Hamid at Synesis IT, where he consistently proved himself to be a skilled and reliable programmer. He has strong problem-solving abilities, writes clean and maintainable code, and quickly understands system requirements.",
    author: "Borhan Uddin",
    role: "Application & Technical Support Lead",
    company: "Government IT Systems"
  },
  {
    id: "6",
    content: "Kawser is an outstanding professional - hardworking, honest, and technically passionate. He's an exceptional team player with strong problem-solving skills. His dedication, technical expertise, and positive attitude make him an invaluable team member.",
    author: "Md Noor E Alam Siddiki",
    role: "Software Engineer",
    company: "Synesis IT Ltd."
  },
  {
    id: "7",
    content: "I highly recommend Kawsar Hamid for his outstanding technical skills and expertise. Kawsar's proficiency in SQL, Shell Script, and Linux Server Configuration, including maintenance, is remarkable. His deep understanding of server data recovery further highlights his technical prowess.",
    author: "Nazmul Huda",
    role: "IT Infrastructure & System Administration",
    company: "Synesis IT PLC"
  },
  {
    id: "8",
    content: "I highly recommend Kawsar Hamid. Over the past year, I've been impressed by his dedication and professionalism. Kawser is reliable, supportive, and always ready to help others. His positive attitude and friendly nature create a great work environment.",
    author: "Md. Emran Hossain",
    role: "Senior Software Engineer",
    company: "Synesis IT PLC"
  },
  {
    id: "9",
    content: "I highly recommend Kawser Hamid from Synesis IT PLC. He has exceptional skills in PHP and database systems and is a key problem-solver on our team. Kawser is also a great team player and leader, always ready to help and support his colleagues.",
    author: "Protiva Ahamed",
    role: "Software Developer | Strategist",
    company: "Synesis IT PLC"
  },
  {
    id: "10",
    content: "I had the pleasure of working with Kawsar Hamid, a talented programmer at Synesis IT PLC. Kawsar consistently demonstrated exceptional coding skills, a keen eye for detail, and a strong work ethic. His innovative solutions and dedication to quality greatly contributed to the success of our projects.",
    author: "Arif Fuad Rocky",
    role: "AGM - Group Administration | Corporate Governance",
    company: "Synesis IT PLC"
  },
  {
    id: "11",
    content: "Meet Kawsar Hamid the Laravel, Angular, and MySQL maestro. With his coding prowess, he turn complex ideas into elegant digital solutions. Need a reliable hand to craft your next project? Kawsar is your go-to guru for all things web development.",
    author: "Raisul Islam",
    role: "Software Engineer | Android App Developer",
    company: "Ex Synesis IT"
  },
  {
    id: "12",
    content: "I have had the opportunity of knowing Kawsar Hamid for the past. Proactive, ambitious, committed and broad-minded perfectionist. He showed a high level of php, laravel technical skills and was a valuable contributor to our projects. Eager professional. Certainly worth recommending.",
    author: "Moinul Islam",
    role: "Head of Software Development",
    company: "Synesis IT PLC"
  },
  {
    id: "13",
    content: "I have been working with Mr Kawser Hamid since the start of 2022. He is very decent human being. He has strong foundation on SQL. Whenever I got stuck with any query related problem I directly take help from him. He is a great team player, punctual, dedicated, disciplined and committed to work.",
    author: "Mushfiq Fuad",
    role: "Senior Software Engineer",
    company: "Synesis IT PLC"
  },
  {
    id: "14",
    content: "I've had the pleasure of working with many professionals in our line of work, but Kawsar is someone who I will always remember fondly. I started my career working alongside Kawsar. Not only did he show me many tricks of the trade, but he helped me navigate the company's internal processes.",
    author: "S. M. Arefin Rumi",
    role: "DevOps Engineer | CI/CD · Docker · Jenkins · AWS/Azure",
    company: "Synesis IT PLC"
  },
  {
    id: "15",
    content: "Kawsar is very Hardworking, energetic, and knowledgeable IT person around me. He is dedicated and honest in his work. I wish his everyday progress in his career path.",
    author: "ABU TAHER",
    role: "Software Engineer | CSM® | ACMP 4.0 | AWS Certified Solutions Architect",
    company: "Synesis IT PLC"
  },
  {
    id: "16",
    content: "Kawsar is not only incredibly energetic but also highly goal-oriented. He consistently set and achieved ambitious targets, driving the team to excel. His ability to focus on the bigger picture while paying meticulous attention to detail is commendable.",
    author: "Mithun Ghosh",
    role: "CSM | ACMP 4.0 | Java, .NET Core, Spring Boot, PLSQL, SQL",
    company: "Synesis IT PLC"
  },
  {
    id: "17",
    content: "Skillful, hardworking and quick learner and having hunger to learn new things.",
    author: "Shoikat Chowdhury",
    role: "Assistant General Manager (AGM) CSM, Technology",
    company: "Synesis IT"
  },
  {
    id: "18",
    content: "Besides his strong skills and qualities, he is energetic, joyous, hard worker and very much sincere to his responsibilities. I would like to work with him without any doubt.",
    author: "Mosharof Hossen",
    role: "Software Engineer",
    company: "Synesis IT PLC"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Optimizing MySQL Queries for Government-Scale Systems",
    summary: "Techniques I used to improve database performance by 25% on national-level projects — indexing strategies, query profiling, and slow query analysis.",
    link: "#"
  },
  {
    id: "2",
    title: "Building a 5-Year License Renewal System with Laravel",
    summary: "A deep dive into designing the renewal workflow for CCI&E — handling complex business rules, revenue reporting, and scalable architecture.",
    link: "#"
  },
  {
    id: "3",
    title: "Linux Server Management for PHP Applications",
    summary: "Lessons learned from managing production servers — Cron jobs, Shell scripting, malware scanning, and automated backups.",
    link: "#"
  },
  {
    id: "4",
    title: "From Monolith to Microservices: A Practical Guide",
    summary: "How I apply Singleton, MVC, and Repository patterns across monolithic and microservice architectures in real-world projects.",
    link: "#"
  },
  {
    id: "5",
    title: "PDF Certificate Signing & Digital Security in PHP",
    summary: "Implementing digital signatures for government certificates — handling PDF generation, signing workflows, and security compliance.",
    link: "#"
  },
  {
    id: "6",
    title: "Effective Code Debugging Strategies for Legacy Systems",
    summary: "My approach to debugging complex codebases — systematic analysis, logging strategies, and tools that save hours of troubleshooting.",
    link: "#"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: "1", title: "E-Phyto (E-Certification) Readiness", issuer: "CABI", date: "Jan 2025" },
  { id: "2", title: "Google Cybersecurity", issuer: "Coursera", date: "Nov 2023", link: "https://www.credly.com/go/NwRl5UP1" },
  { id: "3", title: "Crash Course on Python", issuer: "Coursera", date: "Dec 2022", link: "https://www.coursera.org/account/accomplishments/certificate/M33LSS6QPNHP" },
  { id: "4", title: "Information System Security Management", issuer: "BASIS", date: "Sep 2022" },
  { id: "5", title: "Web Development Live Course", issuer: "Eshikhon", date: "Sep 2021" },
  { id: "6", title: "Web Design", issuer: "Orbit IT", date: "Feb 2020" },
  { id: "7", title: "Complete Java Masterclass", issuer: "Eshikhon", date: "Jan 2019" },
  { id: "8", title: "HTML Fundamentals", issuer: "Sololearn", date: "May 2018", link: "https://www.sololearn.com/Certificate/1014-5185058/pdf" },
  { id: "9", title: "Big Data", issuer: "Bangladesh Computer Council", date: "Mar 2018" },
  { id: "10", title: "SQL Fundamentals", issuer: "Sololearn", date: "Jan 2018", link: "https://www.sololearn.com/Certificate/1060-5185058/pdf" },
];

export const PERSONAL_PROJECTS: PersonalProject[] = [
  { id: "1", name: "BANGLAR-NARI", description: "E-commerce platform for women's products.", tech: "PHP, MySQL, Bootstrap", link: "https://github.com/KHTOHIN/BANGLAR-NARI" },
  { id: "2", name: "Car Sell Management System", description: "Admin dashboard to manage car listings and sales.", tech: "Java Swing, MySQL", link: "https://github.com/KHTOHIN/Car-Sell-Management-System-Admin-Panel" },
  { id: "3", name: "Courier Management System", description: "System to manage parcels, delivery status, and tracking.", tech: "PHP, MySQL, Bootstrap", link: "https://github.com/KHTOHIN/Courier-Management-System" },
  { id: "4", name: "HAATBAZAR", description: "Local online shopping platform.", tech: "PHP, MySQL, Bootstrap", link: "https://github.com/KHTOHIN/HAATBAZAR" },
  { id: "5", name: "IoT Fan Control", description: "Arduino-based project controlling fan via human presence and temperature.", tech: "C++, Bluetooth, Sensors", link: "https://github.com/KHTOHIN/IoT---Bluetooth-Temprature-Human-Detect-Based-Fan-Control" },
  { id: "6", name: "Online Photography Voting System", description: "Users vote for photos in competitions.", tech: "PHP, JavaScript, MySQL, Bootstrap", link: "https://github.com/KHTOHIN/Online-Photography-Voting-System" },
  { id: "7", name: "OpenGL: Moving Car", description: "Simple 2D animation with national monument.", tech: "OpenGL, C++", link: "https://github.com/KHTOHIN/Open-GL---Moving-Car-with-jatiyo-sriti-shoudho-" },
  { id: "8", name: "OpenGL: Rocket Launch", description: "Visual simulation of rocket launching.", tech: "OpenGL, C++", link: "https://github.com/KHTOHIN/OpenGL-Rocket-Launch" },
  { id: "9", name: "Portfolio Website", description: "My personal portfolio site.", tech: "Bootstrap, CSS, JavaScript", link: "https://github.com/KHTOHIN/portfolio-website" },
  { id: "10", name: "Cryptography - MD5", description: "Educational demo of MD5 hashing.", tech: "Java", link: "https://github.com/KHTOHIN/Practical-Cryptography---MD5" },
  { id: "11", name: "Cryptography - SHA1", description: "Educational demo of SHA1 hashing.", tech: "Java", link: "https://github.com/KHTOHIN/Practical-Cryptography---SHA1" },
  { id: "12", name: "Practice with MinIO", description: "Object storage practice using MinIO.", tech: "Docker, MinIO, PHP", link: "https://github.com/KHTOHIN/Practice-with-MinIO" },
  { id: "13", name: "Product Selling Management System", description: "Backend system to manage product inventory and sales.", tech: "PHP, MySQL, Bootstrap", link: "https://github.com/KHTOHIN/Product-Selling-Management-System" },
  { id: "14", name: "Socket Programming in Java", description: "Simple client-server chat system.", tech: "Java SE", link: "https://github.com/KHTOHIN/Socket-Programming-in-Java" },
  { id: "15", name: "Caesar Cipher", description: "Implementation of basic Caesar encryption.", tech: "Java", link: "https://github.com/ucsclabs/caesar-cipher-KHTOHIN" },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: "1", title: "Appreciation for DAE Project by Synesis IT (Jan 2024)" },
];
