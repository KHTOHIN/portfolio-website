# Kawsar Hamid — Software Engineer & Developer Portfolio

<div align="center">

![Portfolio Banner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  A high-performance, developer portfolio showcasing 5+ years of enterprise software engineering, national-scale government automation systems, database optimization, and technical articles.
</p>

[**Explore Live Demo**](#) • [**View Resume**](public/Kawsar_Hamid_Resume.pdf) • [**LinkedIn**](https://www.linkedin.com/in/kawsar-hamid-tohin/) • [**GitHub**](https://github.com/KHTohin)

</div>

---

## 📌 Table of Contents

- [About The Portfolio](#-about-the-portfolio)
- [Key Features](#-key-features)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Portfolio Sections](#-portfolio-sections)
- [Customization](#-customization)
- [Contact & Connect](#-contact--connect)

---

## 👨‍💻 About The Portfolio

This portfolio represents the professional work, skills, certifications, and enterprise contributions of **Kawsar Hamid** (Software Engineer I / Programmer).

Specializing in **system design, high-performance SQL optimization, robust RESTful APIs, and mission-critical government platforms** (including DAE, CCI&E, and national tracking systems), this application is designed with a sleek **Cyberpunk / Modern Minimalist Dark & Light mode** interface.

---

## ✨ Key Features

- 🌓 **Dual Theme Engine**: Seamless real-time toggle between Cyber Dark (matrix/neon aesthetic) and Light Theme with persistent context state.
- ⚡ **Blazing Fast Performance**: Built on React 19 and Vite for instant load times and optimized bundle chunks.
- 📱 **Fully Responsive Design**: Optimized across mobile screens, tablets, ultra-wide desktops, and high-DPI displays.
- 📂 **Interactive Sections**:
  - **Government & Enterprise Projects**: In-depth breakdowns of production systems with tech stacks, live links, and performance metrics.
  - **Dynamic Filtering & Search**: Instant multi-category filter and search across Certifications, Articles, and Testimonials.
  - **Pagination & "Show All" Toggles**: Smooth progressive view controls for large collections (Certifications, Testimonials, Technical Writing).
  - **Interactive Modals**: Full-detail reading view for technical articles and peer recommendations.
  - **Quick Resume Download & Contact**: Integrated direct WhatsApp link, email triggers, and downloadable resume.

---

## 🛠 Tech Stack & Architecture

### Frontend & UI
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom cyber-theme color tokens and grid patterns
- **Icons**: [Lucide React](https://lucide.dev/)

### Core Concepts & Patterns
- Single-Source-of-Truth configuration via `constants.ts`
- Clean Component Architecture with strict TypeScript type definitions (`types.ts`)
- Context API for global theme switching (`ThemeContext.tsx`)

---

## 📁 Project Structure

```text
Kawsar-Hamid-Portfolio/
├── index.html               # Entry HTML shell with Tailwind configuration
├── index.tsx                # React DOM root entry point
├── App.tsx                  # Root layout & section composition
├── ThemeContext.tsx         # Dark/Light theme state provider
├── types.ts                 # TypeScript interfaces and data models
├── constants.ts             # All portfolio content, projects, experience, certs
├── components/              # Modular UI section components
│   ├── Hero.tsx             # Hero section with headline and CTAs
│   ├── Highlights.tsx       # Key career metrics banner
│   ├── About.tsx            # Personal background & engineering philosophy
│   ├── Experience.tsx       # Timeline of professional roles & achievements
│   ├── Projects.tsx         # Enterprise & government projects
│   ├── PersonalProjects.tsx # Open-source & personal development projects
│   ├── Skills.tsx           # Categorized technical skills matrix
│   ├── Certifications.tsx   # Verified credentials with search & category filters
│   ├── Achievements.tsx     # Hackathons, academic, and professional milestones
│   ├── Testimonials.tsx     # Client & colleague recommendations with filter tabs
│   ├── Writing.tsx          # Technical articles with reader modal
│   ├── Contact.tsx          # Contact channels, availability status & message CTA
│   ├── Navbar.tsx           # Floating responsive navigation bar
│   ├── SidebarNav.tsx       # Quick-jump section navigation
│   ├── SocialSidebar.tsx    # Sticky social connection icons
│   └── Footer.tsx           # Footer with copyright and quick links
├── public/                  # Static assets, resume PDF, and favicon
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KHTohin/Kawsar-Hamid-Portfolio.git
   cd Kawsar-Hamid-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal).

### Production Build

To build the project for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📋 Portfolio Sections

1. **Hero**: Quick introduction, technical roles, quick contact links, and resume download.
2. **Career Highlights**: High-level impact stats (5+ years exp, enterprise/gov domain, core stack).
3. **About Me**: Engineering philosophy, backend & server automation workflows, architecture principles.
4. **Experience**: Career timeline from Software Engineer I at Synesis IT PLC to earlier roles.
5. **Projects**: In-depth coverage of high-impact government platforms (CCI&E, DAE Phyto-Sanitary, Contract Farming).
6. **Personal Projects**: Open-source repositories and utility systems.
7. **Skills Matrix**: Categorized breakdown across Languages, Frameworks, Databases, Server Tools, and Core Concepts.
8. **Certifications**: Searchable & filterable professional certifications with live verification links.
9. **Achievements**: Academic distinctions, competitions, and professional recognition.
10. **Testimonials**: Colleague, supervisor, and peer recommendations.
11. **Technical Writing**: Published articles on database optimization, software architecture, and development.
12. **Contact**: Direct communication form, WhatsApp link, and availability status.

---

## ⚙️ Customization

All portfolio data is centralized in `constants.ts`. To update personal info, projects, or experience:

1. Open `constants.ts`.
2. Modify the relevant exported constant (`PERSONAL_INFO`, `EXPERIENCE`, `PROJECTS`, `CERTIFICATIONS`, etc.).
3. The UI components will automatically reflect the updated content without requiring structural changes.

---

## 📬 Contact & Connect

- **Name**: Kawsar Hamid
- **Role**: Software Engineer I | Programmer
- **Location**: Dhaka, Bangladesh
- **Email**: [kawsarhamidtohin@gmail.com](mailto:kawsarhamidtohin@gmail.com)
- **WhatsApp**: [+8801750047354](https://wa.me/8801750047354)
- **LinkedIn**: [linkedin.com/in/kawsar-hamid-tohin](https://www.linkedin.com/in/kawsar-hamid-tohin/)
- **GitHub**: [github.com/KHTohin](https://github.com/KHTohin)

---

<div align="center">
  <sub>Built with ❤️ by <b>Kawsar Hamid</b>. Powered by React, Vite, and Tailwind CSS.</sub>
</div>
