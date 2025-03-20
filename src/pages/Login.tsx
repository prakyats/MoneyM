
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Logo from '@/components/Logo';
import AuthForm from '@/components/AuthForm';

const Login = () => {
  return (
    <PageTransition>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center sm:text-left">
              <Logo size="md" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold text-finblack mb-3">Welcome back</h1>
              <p className="text-finblack/70">
                Enter your credentials to access your account
              </p>
            </motion.div>

            <AuthForm type="login" />
          </div>
        </div>
        
        {/* Right Side - Decoration */}
        <div className="hidden lg:block relative bg-fingray">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center p-12"
          >
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-finyellow/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-finyellow/20 rounded-full blur-3xl"></div>
              
              <div className="relative glass-panel p-8 rounded-2xl shadow-xl max-w-md">
                <div className="bg-finyellow/20 p-4 rounded-xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-finyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <blockquote className="text-lg text-finblack mb-6">
                  "VaultFlow has completely transformed how I manage my finances. The insights are incredibly valuable and the interface is a joy to use."
                </blockquote>
                
                <footer className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-fingray flex items-center justify-center">
                    <span className="text-finblack font-medium">AK</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-finblack">Alex Kim</p>
                    <p className="text-xs text-finblack/70">Product Designer</p>
                  </div>
                </footer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
