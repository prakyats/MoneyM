
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Logo from '@/components/Logo';
import { ChevronRight, LineChart, Shield, CreditCard } from 'lucide-react';

const Index = () => {
  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroImage = document.querySelector('#hero-image') as HTMLElement;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Feature card animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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
  };

  // Feature cards data
  const features = [
    {
      icon: <LineChart className="h-10 w-10 text-finyellow" />,
      title: "Financial Insights",
      description: "Get detailed analytics and insights about your spending habits and financial health.",
    },
    {
      icon: <Shield className="h-10 w-10 text-finyellow" />,
      title: "Secure Transactions",
      description: "Bank-level security ensures your financial data is always protected and private.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-finyellow" />,
      title: "Smart Budgeting",
      description: "Create and manage budgets effortlessly to reach your financial goals faster.",
    },
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
              <a href="#testimonials" className="text-finblack hover:text-finyellow transition-colors">Testimonials</a>
              <a href="#pricing" className="text-finblack hover:text-finyellow transition-colors">Pricing</a>
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
                  VaultFlow gives you the tools to manage your money with confidence. 
                  Track spending, set budgets, and reach your financial goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/register" 
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Get Started for Free
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a 
                    href="#features" 
                    className="btn-secondary inline-flex items-center justify-center"
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
                    className="relative glass-panel rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src="https://placehold.co/600x400/fafafa/1a1a1a?text=Dashboard+Preview"
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
                Powerful Financial Tools
              </h2>
              <p className="text-lg text-finblack/70 max-w-2xl mx-auto">
                Everything you need to take control of your finances in one place.
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-fingray rounded-xl p-4 inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-finblack mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-finblack/70">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-16 text-center">
              <Link 
                to="/register" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Start Your Financial Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-finblack text-white py-12">
          <div className="container max-w-7xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <Logo size="lg" />
                <p className="mt-4 text-gray-400 max-w-md">
                  Modern financial management for the digital age. 
                  Take control of your finances with VaultFlow.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-finyellow transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-finyellow transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-finyellow transition-colors">Testimonials</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-finyellow transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-finyellow transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-finyellow transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-finyellow transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} VaultFlow. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-finyellow transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-finyellow transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-finyellow transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;
