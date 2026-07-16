export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
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
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  link: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface PersonalProject {
  id: string;
  name: string;
  description: string;
  tech: string;
  link: string;
}

export interface Achievement {
  id: string;
  title: string;
  link?: string;
}
