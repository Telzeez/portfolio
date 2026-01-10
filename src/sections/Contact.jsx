import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Calendar,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    { platform: 'GitHub', icon: Github, url: 'https://github.com/Telzeez', color: 'hover:text-gray-800 dark:hover:text-gray-300' },
    { platform: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/abdlazeez', color: 'hover:text-blue-600' },
    { platform: 'Twitter', icon: Twitter, url: 'https://twitter.com/olasunkanmi_A_A', color: 'hover:text-sky-500' },
    { platform: 'Instagram', icon: Instagram, url: 'https://instagram.com/abdlazeez', color: 'hover:text-pink-600' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'Abdlazeezolasunkanmi@gmail.com',
      subtitle: 'Response within 24 hours',
      action: 'mailto:Abdlazeezolasunkanmi@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+234 (901) 697-1707',
      subtitle: 'Mon-Fri, 9AM-6PM',
      action: 'tel:+2349016971707'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Ibadan, Nigeria',
      subtitle: 'Available for remote work',
      action: 'https://maps.google.com'
    },
    {
      icon: Calendar,
      title: 'Schedule',
      details: 'Book a meeting',
      subtitle: '30-min consultation',
      action: 'https://cal.com/abdlazeez'
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent. I\'ll get back to you soon.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-panel p-8 rounded-2xl animate-fade-up delay-100">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">{item.details}</p>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-panel p-8 rounded-2xl animate-fade-up delay-200">
              <h3 className="text-2xl font-bold mb-6">Connect with Me</h3>
              <p className="text-muted-foreground mb-6">
                Follow me on social media for updates, insights, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-background hover:scale-105 transition-all duration-300 ${social.color}`}
                    aria-label={`Follow on ${social.platform}`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="font-medium">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-panel p-6 rounded-2xl animate-fade-up delay-300">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <h4 className="font-bold">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-panel p-8 rounded-2xl animate-fade-up delay-400">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              {/* Status Message */}
              {status.message && (
                <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-600' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-600'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Form Note */}
                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. All fields are required.
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass-panel p-6 rounded-2xl animate-fade-up delay-500">
                <h4 className="font-bold mb-3">What happens next?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>I'll review your message within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>We'll schedule a call to discuss details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>I'll provide a proposal with timeline & budget</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-6 rounded-2xl animate-fade-up delay-600">
                <h4 className="font-bold mb-3">Looking for?</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Web Development',
                    'Mobile Apps',
                    
                    'Consultation',
                    'Full-time Role',
                    'Contract Work'
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup (Optional) */}
        <div className="mt-20 text-center animate-fade-up delay-700">
          <div className="inline-flex flex-col items-center glass-container p-8 rounded-2xl max-w-2xl mx-auto">
            <Mail className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Subscribe to my newsletter for development tips, project updates, and career insights.
            </p>
            <form className="w-full max-w-md flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:border-primary outline-none"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;