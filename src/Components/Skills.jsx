import React from 'react';

const Skills = () => {
    return ( 
        <section className="py-24 px-6" id="skills">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-2">Skills</h2>
                <p className="text-slate-400 text-xs tracking-widest uppercase">
                    My Technical Level
                </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Frontend Developer Card */}
                <div className="glass-card p-8 sm:p-10 rounded-3xl flex flex-col items-center">
                    <h3 className="text-xl font-bold text-slate-100 mb-10 text-center">
                        Frontend Developer
                    </h3>
                    <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-6 w-full">
                        {[
                            { name: "HTML", level: "Expert" },
                            { name: "CSS", level: "Expert" },
                            { name: "Tailwind", level: "Intermediate" },
                            { name: "JavaScript", level: "Expert" },
                            { name: "TypeScript", level: "Expert" },
                            { name: "React.js", level: "Expert" },
                            { name: "Next.js", level: "Expert" }
                        ].map((skill, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                            <svg className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="font-bold text-white text-base leading-tight">{skill.name}</h4>
                                <span className="text-xs text-slate-400 font-medium">{skill.level}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Backend Developer Card */}
                <div className="glass-card p-8 sm:p-10 rounded-3xl flex flex-col items-center">
                    <h3 className="text-xl font-bold text-slate-100 mb-10 text-center">
                        Backend Developer
                    </h3>
                    <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-6 w-full">
                        {[
                            { name: "Node.js", level: "Expert" },
                            { name: "Express.js", level: "Expert" },
                            { name: "MongoDB", level: "Expert" },
                            { name: "PostgreSQL", level: "Intermediate" },
                            { name: "Next.js", level: "Expert" }
                        ].map((skill, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                            <svg className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="font-bold text-white text-base leading-tight">{skill.name}</h4>
                                <span className="text-xs text-slate-400 font-medium">{skill.level}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;