import React, { useState } from 'react';


const Testimonials = () => {
      // Testimonials slider state
      const testimonials = [
        {
          name: "Wambul Mull",
          date: "12/06/2025",
          text: "Sajid handled both frontend and backend tasks smoothly and always ensured the codebase stayed clean, structured, and easy to maintain. He identified performance bottlenecks early, proposed solid solutions, and implemented them without disrupting the workflow.",
          role: "Lead Developer"
        },
        {
          name: "Sarah Jenkins",
          date: "08/04/2025",
          text: "Working with Sajid was a breeze. He translated our complex design specs into pixel-perfect React components and completed the integration ahead of schedule. Communication was exceptional.",
          role: "Product Manager"
        },
        {
          name: "Khalid Malik",
          date: "15/05/2025",
          text: "Sajid's knowledge of the MERN stack is impressive. His database optimizations on MongoDB reduced our query times by 40%. Highly recommended for any scalable web project.",
          role: "Tech Lead"
        },
        {
          name: "Elena Rostova",
          date: "22/02/2025",
          text: "Sajid helped us build our MVP from scratch. His clean code architecture and clear communication made the entire development process smooth and successful.",
          role: "Startup Founder"
        }
      ];
      const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
      const handlePrevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      };
    
      const handleNextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      };
    return ( 
        <section className="py-24 px-6 bg-slate-900/40">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Feedback from clients and collaborators I've worked with on real projects and web applications.
                </p>
            </div>
            <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
                <div className="glass-card p-8 sm:p-10 rounded-3xl text-center min-h-[300px] flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-xl">★</span>
                            ))}
                        </div>
                        <p className="text-lg text-slate-300 italic mb-8 transition-opacity duration-300">
                            {testimonials[currentTestimonial].text}"
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-accent-pink">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                            {testimonials[currentTestimonial].role} &bull; {testimonials[currentTestimonial].date}
                        </p>
                    </div>
                </div>

                {/* Testimonials Controls */}
                <button
                    onClick={handlePrevTestimonial}
                    className="absolute top-1/2 -left-2 sm:-left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 hover:bg-slate-700 transition-colors text-white"
                    aria-label="Previous testimonial"
                >
                <span className="text-xl">←</span>
                    </button>
                <button
                    onClick={handleNextTestimonial}
                    className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-pink flex items-center justify-center hover:opacity-90 transition-opacity text-white"
                    aria-label="Next testimonial"
                >
                    <span className="text-xl">→</span>
                </button>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentTestimonial(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentTestimonial === i ? "bg-accent-pink scale-110" : "bg-slate-700"
                            }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;