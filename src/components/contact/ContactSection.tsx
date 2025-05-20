"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export function ContactSection() {
  return (
    <section id="contact" className="section relative">
      <div className="container-custom">
        <SectionTitle title="Get In Touch" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left side - info and text */}
          <ContactInfo />
          
          {/* Right side - contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
} 