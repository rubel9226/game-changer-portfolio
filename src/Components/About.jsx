import React from 'react';

const About = () => {
    return ( 
        <section 
            className="py-24 px-6 bg-slate-900/30" 
            id="about"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        alt="Professional Portrait"
                        className="w-full h-[500px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                        src="/image/me2.png"
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                        <p>
                            I am a MERN Stack Web Developer focusing on building production-ready applications. I enjoy designing APIs, creating interactive user interfaces, and optimizing performance to deliver smooth and efficient user experiences.
                        </p>
                        <p>
                            Along with strong problem-solving skills, I follow clean architecture principles and modern development patterns. I'm passionate about writing maintainable code, improving UX/UI flows, and building applications that feel fast, secure, and intuitive. I actively explore new tools in the MERN ecosystem to stay updated and keep improving my development workflow.
                        </p>
                    </div>
                    <div className="mt-10">
                        <button 
                            onClick={() => alert("Downloading resume...")} 
                            className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-pink rounded-lg font-bold inline-flex items-center gap-2 hover:opacity-90 text-white transition-opacity"
                        >
                            Download Resume <span className="text-lg">📥</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;