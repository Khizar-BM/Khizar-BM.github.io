"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export function ContactSection() {
  return (
    <section id="contact" className="section relative">
      <motion.div 
        className="container-custom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <SectionTitle title="Get In Touch" />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
        >
          {/* Left side - info and text */}
          <motion.div 
            className="md:col-span-5"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <ContactInfo />
          </motion.div>
          
          {/* Right side - contact form */}
          <motion.div 
            className="md:col-span-7"
            variants={fadeInUp}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 