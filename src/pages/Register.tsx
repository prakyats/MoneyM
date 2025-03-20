
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Logo from '@/components/Logo';
import AuthForm from '@/components/AuthForm';
import { Check } from 'lucide-react';

const Register = () => {
  const benefits = [
    "Track expenses in real-time",
    "Personalized financial insights",
    "Secure data encryption",
    "Free for personal use"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Decoration */}
        <div className="hidden lg:block relative bg-fingray">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center p-12"
          >
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-finyellow/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-finyellow/20 rounded-full blur-3xl"></div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative bg-white p-8 rounded-2xl shadow-xl max-w-md"
              >
                <h3 className="font-bold text-2xl text-finblack mb-6">
                  Join thousands of users who trust VaultFlow
                </h3>
                
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="mr-3 mt-1 bg-finyellow rounded-full p-1">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-finblack/80">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="bg-fingray p-4 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-fingray-dark flex items-center justify-center">
                      <span className="text-finblack font-medium">ML</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-finblack">Maria Lopez</p>
                      <p className="text-xs text-finblack/70">Financial Analyst</p>
                    </div>
                  </div>
                  <p className="text-sm text-finblack/80 italic">
                    "I've tried many financial tools, but VaultFlow stands out with its intuitive design and powerful features. It's truly exceptional."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Form */}
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
              <h1 className="text-3xl font-bold text-finblack mb-3">Create your account</h1>
              <p className="text-finblack/70">
                Start your financial journey with VaultFlow
              </p>
            </motion.div>

            <AuthForm type="register" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-xs text-center text-finblack/60"
            >
              By creating an account, you agree to our{' '}
              <Link to="#" className="text-finblack underline hover:text-finyellow">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="#" className="text-finblack underline hover:text-finyellow">
                Privacy Policy
              </Link>
            </motion.p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Register;
