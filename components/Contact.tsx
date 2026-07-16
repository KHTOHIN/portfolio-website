import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <Section id="contact" dark className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Build Something</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Whether you're looking for a developer to join your team, a collaborator for a new idea, or just want to talk about architecture and tooling, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
             <Button as="a" href={PERSONAL_INFO.social.email} size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-10 shadow-lg shadow-blue-600/25">
               <Mail className="w-5 h-5 mr-2" />
               Email Me
             </Button>
             <Button as="a" href={`tel:${PERSONAL_INFO.phone}`} size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 text-lg px-10">
               <Phone className="w-5 h-5 mr-2" />
               {PERSONAL_INFO.phone}
             </Button>
          </div>

          <div className="flex justify-center gap-8 pt-12">
            <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={PERSONAL_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </Section>
      
      <div className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {year} {PERSONAL_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};
