import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasTimony = false

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      content: 'Abdlazeez turned complex requirements into beautiful, functional applications with exceptional attention to detail.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      content: 'His React components are incredibly performant and maintainable. Code quality that sets new standards.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Design Lead',
      content: 'Pixel-perfect implementation with outstanding understanding of modern CSS and animations.',
      rating: 5
    },
  ];

  const handlePrev = () => setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  const handleNext = () => setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);

  return (
    hasTimony && (<section id="testimonials" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground">Trusted by professionals across industries</p>
        </div>

        <div className="glass-panel p-8 rounded-2xl relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto md:mx-0 mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold">{testimonials[activeIndex].name}</h3>
              <p className="text-primary text-sm mb-2">{testimonials[activeIndex].role}</p>
              <div className="flex justify-center md:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>

            <div className="md:w-2/3 text-center md:text-left">
              <Quote className="h-6 w-6 text-primary/30 mb-4 mx-auto md:mx-0" />
              <p className="text-lg italic mb-6">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full ${activeIndex === i ? 'bg-primary' : 'bg-border'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>)
  );
};

export default Testimonials;