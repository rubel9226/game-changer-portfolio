import React from 'react';

const Services = () => {
    return (
        <section className="py-24 px-6 bg-slate-900/20" id="services">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Services I Provide</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    I offer design and development services focused on building fast, modern, and user-friendly digital experiences.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { icon: "💻", title: "Full-Stack Web Development", desc: "End-to-end web applications using React, Node.js, Express, and MongoDB with clean and scalable code." },
                    { icon: "🎨", title: "Frontend Development", desc: "Fast, responsive, and user-friendly interfaces built with React and modern UI libraries like Tailwind CSS." },
                    { icon: "⚙️", title: "Backend & API Development", desc: "Secure and efficient RESTful APIs using Node.js and Express, optimized for performance and scalability." },
                    { icon: "📊", title: "Database Design & Management", desc: "Well-structured MongoDB databases with optimized queries for speed, reliability, and data integrity." },
                    { icon: "🔐", title: "Authentication & Authorization", desc: "Implementation of secure login systems using JWT, role-based access control and best security practices." },
                    { icon: "🛒", title: "E-Commerce Development", desc: "Product listings, cart systems, checkout flows, and payment gateway integrations for demo or real projects." },
                    { icon: "⚡", title: "Performance Optimization", desc: "Improving load times, API response speed, and overall application performance for better user experience." },
                    { icon: "☁️", title: "Deployment & Hosting Support", desc: "Deploying applications on cloud platforms with proper environment setup and production-ready configuration." },
                ].map((svc, i) => (
                <div
                    key={i}
                    className="p-6 rounded-xl border border-white/5 bg-slate-800/40 hover:bg-slate-800/60 transition-colors"
                >
                    <div className="mb-4 text-blue-400 text-2xl">{svc.icon}</div>
                    <h4 className="font-bold mb-2 text-slate-100">{svc.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{svc.desc}</p>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Services;