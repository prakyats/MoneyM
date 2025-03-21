
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
    <div className="bg-finyellow/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-finblack/70">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="flex items-start">
    <div className="bg-finyellow text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
      {number}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-finblack/70">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ quote, name, role, imageUrl }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-finyellow">★</span>
      ))}
    </div>
    <blockquote className="text-finblack/80 mb-6">"{quote}"</blockquote>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-fingray-dark flex items-center justify-center mr-3">
        {imageUrl ? <img src={imageUrl} alt={name} className="w-10 h-10 rounded-full object-cover" /> : 
        <span className="text-white font-medium">{name.charAt(0)}{name.split(' ')[1]?.charAt(0)}</span>}
      </div>
      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-finblack/70">{role}</p>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <PageTransition>
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-finblack/80 hover:text-finyellow transition-colors">Features</Link>
            <Link to="#" className="text-finblack/80 hover:text-finyellow transition-colors">Pricing</Link>
            <Link to="#" className="text-finblack/80 hover:text-finyellow transition-colors">About</Link>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-finblack font-medium hover:text-finyellow transition-colors">Login</Link>
              <Link to="/register" className="bg-finyellow text-white px-4 py-2 rounded-md hover:bg-finyellow/90 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          
          <button className="block md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-fingray py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-finblack mb-6">
                Simplify Your <span className="text-finyellow">Financial</span> Life
              </h1>
              <p className="text-lg text-finblack/70 mb-8">
                Track expenses, set budgets, and gain insights into your financial habits with our all-in-one financial management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="bg-finyellow text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-finyellow/90 transition-colors">
                  Get Started - It's Free
                </Link>
                <Link to="#how-it-works" className="border border-finblack/20 text-finblack px-6 py-3 rounded-lg text-center font-medium hover:bg-finblack/5 transition-colors">
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-finyellow/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-finyellow/10 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                <img
                  src="/dashboard-preview.png"
                  alt="Financial Dashboard Preview"
                  className="rounded-lg w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-finblack mb-4">
              Powerful Features for Your Financial Journey
            </h2>
            <p className="text-finblack/70 max-w-3xl mx-auto">
              Our platform provides all the tools you need to take control of your finances and build a secure financial future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-finyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>}
              title="Smart Expense Tracking"
              description="Automatically categorize your expenses and track spending patterns to identify areas for improvement."
            />
            
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-finyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>}
              title="Goal-Based Budgeting"
              description="Set personalized financial goals and create budgets that help you stay on track to achieve them."
            />
            
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-finyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>}
              title="Financial Insights"
              description="Gain valuable insights through detailed reports and visualizations of your financial data."
            />
          </div>
        </div>
      </section>
      
      {/* How it Works */}
      <section id="how-it-works" className="py-16 bg-fingray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-finblack mb-4">
              How It Works
            </h2>
            <p className="text-finblack/70 max-w-3xl mx-auto">
              Getting started with VaultFlow is easy and takes just a few minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StepCard
              number="1"
              title="Create Your Account"
              description="Sign up for a free account and set up your profile in minutes. No credit card required."
            />
            
            <StepCard
              number="2"
              title="Connect Your Accounts"
              description="Securely connect your bank accounts, credit cards, and investment portfolios for a complete financial picture."
            />
            
            <StepCard
              number="3"
              title="Start Optimizing"
              description="Use our tools and insights to optimize your spending, save more, and work toward your financial goals."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-finblack mb-4">
              What Our Users Say
            </h2>
            <p className="text-finblack/70 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their financial lives with VaultFlow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I've tried many finance apps, but this one stands out with its intuitive interface and powerful insights."
              name="Sarah Johnson"
              role="Small Business Owner"
            />
            
            <TestimonialCard
              quote="The budgeting tools helped me save for my first home down payment six months ahead of schedule!"
              name="Michael Chen"
              role="Software Engineer"
            />
            
            <TestimonialCard
              quote="Finally, a financial platform that's both powerful and easy to use. It's changed how I think about money."
              name="Emily Rodriguez"
              role="Marketing Director"
            />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-finyellow">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of users who are transforming their financial lives with VaultFlow.
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
                <span className="text-white">Vault</span>
                <span className="text-finyellow">Flow</span>
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
              © 2023 VaultFlow. All rights reserved.
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
    </PageTransition>
  );
};

export default Index;
