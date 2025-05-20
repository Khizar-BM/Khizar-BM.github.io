"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission (e.g., send data to an API)
    console.log("Form submitted:", formState);
    
    // Reset form after submission (in a real app, you'd do this after successful API response)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <div className="md:col-span-7">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input 
            type="text" 
            id="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input 
            type="email" 
            id="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none"
            required
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <input 
            type="text" 
            id="subject"
            value={formState.subject}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea 
            id="message" 
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-card border-0 outline-none resize-none"
            required
          ></textarea>
        </div>
        
        <div>
          <button 
            type="submit" 
            className="px-8 py-3 bg-primary text-white font-medium inline-flex items-center"
          >
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
} 