export type ProjectStatus = 'Production' | 'Ready for go-live' | 'In development';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  period: string;
  status?: ProjectStatus;
  links: {
    live?: string;
    code?: string;
    caseStudy?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  workMode: 'On-site' | 'Hybrid' | 'Remote';
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  /** LinkedIn relationship line, e.g. "Managed Kawsar directly" */
  relationship?: string;
  /** Date of the recommendation, e.g. "Dec 2024" */
  date?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  tag: string;
  body: string[];
}

export type CertificationCategory = 'AI' | 'Security & Linux' | 'Programming & Web' | 'Data & SQL' | 'E-Government';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  expires?: string;
  category: CertificationCategory;
  /** Public credential URL; only certifications with a link are shown as "Verified" */
  link?: string;
}

export type PersonalProjectCategory = 'PHP & Web' | 'Java' | '.NET / C#' | 'IoT & Hardware' | 'Cryptography & OpenGL';

export interface PersonalProject {
  id: string;
  name: string;
  description: string;
  tech: string;
  link: string;
  categories: PersonalProjectCategory[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  highlights?: string[];
  fieldOfStudy?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  badge?: string;
  link?: string;
}
