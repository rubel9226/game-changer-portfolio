"use client";

import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Testimonials from "@/Components/Testimonials";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error



  // Scroll Spy Observer to track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");

    // Simulate API request
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen text-slate-100 bg-[#0a0f1a]">

      {/*  */}
      <Navbar activeSection={activeSection} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main>

          <Hero />

          <About />

          <Skills />
          
          <Services />
        
          <Projects />

          <Testimonials />
        

        

        {/* Contact Us Section */}
        <section className="py-24 px-6" id="contact">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Have a project in mind? Let's connect and discuss how I can help bring your ideas to life.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              <div data-purpose="contact-info">
                <h3 className="text-3xl font-bold mb-8">Get in touch today</h3>
                <p className="text-slate-400 mb-10">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 text-xl">📧</div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-medium text-slate-200">sajidyaqub@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 text-xl">📞</div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-medium text-slate-200">+92 3000000000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 text-xl">📍</div>
                    <div>
                      <p className="text-sm text-slate-500">Address</p>
                      <p className="font-medium text-slate-200">Lahore, Punjab, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass-card p-8 rounded-3xl" data-purpose="contact-form-container">
                {formStatus === "success" ? (
                  <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                    <span className="text-5xl mb-4 text-green-400">✓</span>
                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-slate-400">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-6 px-6 py-2 border border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Name *</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          disabled={formStatus === "submitting"}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50"
                          placeholder="John Carter"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          disabled={formStatus === "submitting"}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          disabled={formStatus === "submitting"}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50"
                          placeholder="(123) 456-789"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          disabled={formStatus === "submitting"}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50"
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Message *</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        disabled={formStatus === "submitting"}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50"
                        placeholder="Please type your message here..."
                        rows={4}
                      ></textarea>
                    </div>

                    {formStatus === "error" && (
                      <p className="text-red-500 text-sm">Please fill out all required fields.</p>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 bg-gradient-to-r from-accent-blue to-accent-pink rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all text-white disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-xl font-bold">
            <span className="text-white">MERN Stack</span>{" "}
            <span className="text-accent-pink">Developer</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
            <a className="hover:text-white transition-colors" href="#home">Home</a>
            <a className="hover:text-white transition-colors" href="#about">About</a>
            <a className="hover:text-white transition-colors" href="#services">Services</a>
            <a className="hover:text-white transition-colors" href="#projects">Projects</a>
            <a className="hover:text-white transition-colors" href="#contact">Contact</a>
          </div>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-slate-350"
              href="#"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 transition-colors text-slate-350"
              href="#"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors text-slate-350"
              href="#"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center border-t border-white/5 pt-8 text-sm text-slate-500">
          Copyright © 2025 Sajid Yaqub | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
