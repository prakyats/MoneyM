
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import Logo from './Logo';
import { ChevronRight } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
  >
    <div className="h-12 w-12 bg-finyellow/20 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const StepCard = ({ number, title, description }) => (
  <div className="text-center">
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="w-20 h-20 bg-finyellow/20 rounded-full flex items-center justify-center mx-auto mb-6"
    >
      <span className="text-3xl font-bold text-finyellow">{number}</span>
    </motion.div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ image, name, role, quote }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-xl shadow-md"
  >
    <div className="flex items-center mb-6">
      <img src={image} alt={name} className="w-14 h-14 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600">"{quote}"</p>
    <div className="flex mt-4 text-finyellow">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </motion.div>
);

const LandingPage = () => {
  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroImage = document.querySelector('#hero-image');
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Feature cards data
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-finyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>,
      title: "Budget Tracking",
      description: "Create and manage budgets with ease. Stay on top of your spending habits and save more."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-finyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
      title: "Financial Insights",
      description: "Get detailed insights and analytics on your spending patterns and financial health."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-finyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>,
      title: "Secure Access",
      description: "Your financial data is protected with enterprise-grade security and encryption."
    }
  ];

  // Steps data
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create your free account in minutes and connect your financial accounts."
    },
    {
      number: "2",
      title: "Track Finances",
      description: "Monitor your income, expenses, and savings goals in one dashboard."
    },
    {
      number: "3",
      title: "Improve & Grow",
      description: "Get personalized insights and tips to optimize your financial health."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      name: "Sarah Johnson",
      role: "Small Business Owner",
      quote: "Money Mentor has completely transformed how I manage both personal and business finances. The insights are invaluable!"
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Chen",
      role: "Software Engineer",
      quote: "As someone who loves data, Money Mentor gives me all the analytics I need to optimize my finances and plan for the future."
    },
    {
      image: "https://randomuser.me/api/portraits/women/67.jpg",
      name: "Olivia Martinez",
      role: "Marketing Specialist",
      quote: "The budgeting tools helped me save for a down payment on my house in just 18 months. I couldn't have done it without Money Mentor!"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-6 px-6 sm:px-10 bg-white/70 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-100">
          <div className="container max-w-7xl mx-auto flex justify-between items-center">
            <Logo size="md" />
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-finblack hover:text-finyellow transition-colors">Features</a>
              <a href="#how-it-works" className="text-finblack hover:text-finyellow transition-colors">How It Works</a>
              <a href="#testimonials" className="text-finblack hover:text-finyellow transition-colors">Testimonials</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="hidden sm:block text-finblack hover:text-finyellow transition-colors"
              >
                Log in
              </Link>
              <Link 
                to="/register" 
                className="bg-finyellow hover:bg-finyellow-dark text-finblack font-medium px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-[1.03]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20 sm:py-32">
          <div 
            className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"
            aria-hidden="true"
          ></div>
          
          <div className="relative container max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-finyellow/20 text-finblack">
                  Modern Financial Management
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-finblack mb-6">
                  Control your finances with precision
                </h1>
                <p className="text-lg sm:text-xl text-finblack/70 mb-8 max-w-xl">
                  Money Mentor gives you the tools to manage your money with confidence. 
                  Track spending, set budgets, and reach your financial goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/register" 
                    className="bg-finyellow hover:bg-finyellow-dark text-finblack px-6 py-3 rounded-lg text-center font-medium transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Get Started for Free
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a 
                    href="#features" 
                    className="border border-finblack/20 text-finblack px-6 py-3 rounded-lg text-center font-medium hover:bg-finblack/5 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
              
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="w-full h-full flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-xl">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-finyellow/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-finyellow/30 rounded-full blur-3xl"></div>
                  <div 
                    id="hero-image"
                    className="relative bg-white rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                      alt="Financial Dashboard Preview" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-32 bg-fingray">
          <div className="container max-w-7xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-finblack mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-finblack/70 max-w-2xl mx-auto">
                Everything you need to take control of your financial life in one place.
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      },
                    },
                  }}
                >
                  <FeatureCard 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Money Mentor Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">A simple three-step process to transform your financial life</p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      },
                    },
                  }}
                >
                  <StepCard 
                    number={step.number}
                    title={step.title}
                    description={step.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-fingray">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied users who have transformed their financial lives</p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      },
                    },
                  }}
                >
                  <TestimonialCard 
                    image={testimonial.image}
                    name={testimonial.name}
                    role={testimonial.role}
                    quote={testimonial.quote}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-finyellow">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-finblack mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-finblack/90 max-w-3xl mx-auto mb-8">
              Join thousands of users who are transforming their financial lives with Money Mentor.
            </p>
            <Link to="/register" className="bg-white text-finyellow px-8 py-3 rounded-lg font-medium hover:bg-white/95 transition-colors inline-block">
              Get Started - It's Free
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-finblack text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link to="/" className="font-bold text-2xl inline-flex items-center">
                  <div className="mr-2 relative">
                    <div className="h-6 w-6 bg-finyellow rounded-lg flex items-center justify-center">
                      <div className="h-3 w-3 bg-finblack rounded-sm"></div>
                    </div>
                  </div>
                  <span className="text-white">Money</span>
                  <span className="text-finyellow">Mentor</span>
                </Link>
                <p className="mt-4 text-white/70">
                  Simplifying finance for everyone. Your journey to financial freedom starts here.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Budgeting</Link></li>
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Investing</Link></li>
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Savings</Link></li>
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Learning</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Press</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Security</Link></li>
                  <li><Link to="#" className="text-white/70 hover:text-white transition-colors">Cookies</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} Money Mentor. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link to="#" className="text-white/70 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link to="#" className="text-white/70 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
                <Link to="#" className="text-white/70 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default LandingPage;
