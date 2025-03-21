
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FormInput from './FormInput';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@/lib/firebase';

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      if (type === 'register') {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/dashboard');
    } catch (error) {
      console.error('Authentication error:', error);
      
      // Handle specific error codes
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setErrors({ auth: 'Invalid email or password' });
      } else if (error.code === 'auth/email-already-in-use') {
        setErrors({ auth: 'Email is already in use' });
      } else {
        setErrors({ auth: 'An error occurred. Please try again.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {errors.auth && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {errors.auth}
        </div>
      )}
      
      <FormInput
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        required
      />
      
      <FormInput
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        required
      />
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-finyellow focus:ring-finyellow border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-finblack/70">
            Remember me
          </label>
        </div>
        
        <Link to="#" className="text-sm text-finyellow hover:underline">
          Forgot password?
        </Link>
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-finyellow text-white py-3 rounded-md font-medium hover:bg-finyellow/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="inline-flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {type === 'register' ? 'Creating account...' : 'Signing in...'}
          </span>
        ) : (
          <span>{type === 'register' ? 'Create Account' : 'Sign In'}</span>
        )}
      </button>
      
      <div className="text-center mt-6">
        <p className="text-sm text-finblack/70">
          {type === 'register' ? 'Already have an account?' : "Don't have an account?"}
          <Link
            to={type === 'register' ? '/login' : '/register'}
            className="text-finyellow hover:underline ml-1"
          >
            {type === 'register' ? 'Sign in' : 'Create one'}
          </Link>
        </p>
      </div>
    </motion.form>
  );
};

export default AuthForm;
