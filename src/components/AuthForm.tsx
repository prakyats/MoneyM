
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FormInput from './FormInput';
import { toast } from '@/components/ui/use-toast';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@/lib/firebase';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [fullName, setFullName] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (type === 'register') {
      if (!fullName) {
        newErrors.fullName = 'Full name is required';
      }
      
      if (!passwordConfirm) {
        newErrors.passwordConfirm = 'Please confirm your password';
      } else if (password !== passwordConfirm) {
        newErrors.passwordConfirm = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      if (type === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
        toast({
          title: "Welcome back!",
          description: "You've successfully logged in.",
          variant: "default",
        });
        navigate('/dashboard');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        toast({
          title: "Registration successful!",
          description: "Your account has been created.",
          variant: "default",
        });
        navigate('/dashboard');
      }
    } catch (error: any) {
      console.error('Authentication error:', error);
      
      let errorMessage = 'An unexpected error occurred';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already in use';
        setErrors({ ...errors, email: errorMessage });
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address';
        setErrors({ ...errors, email: errorMessage });
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak';
        setErrors({ ...errors, password: errorMessage });
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMessage = 'Invalid email or password';
        setErrors({ 
          email: errorMessage,
          password: errorMessage 
        });
      }
      
      toast({
        title: "Authentication failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  return (
    <motion.form 
      onSubmit={handleSubmit}
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="w-full space-y-6"
    >
      {type === 'register' && (
        <motion.div variants={itemVariants}>
          <FormInput
            id="fullName"
            label="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName}
            required
          />
        </motion.div>
      )}
      
      <motion.div variants={itemVariants}>
        <FormInput
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          required
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <FormInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          required
        />
      </motion.div>
      
      {type === 'register' && (
        <motion.div variants={itemVariants}>
          <FormInput
            id="passwordConfirm"
            label="Confirm Password"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            error={errors.passwordConfirm}
            required
          />
        </motion.div>
      )}
      
      {type === 'login' && (
        <motion.div 
          variants={itemVariants}
          className="flex justify-end"
        >
          <Link
            to="/forgot-password"
            className="text-sm text-finblack hover:text-finyellow transition-colors"
          >
            Forgot password?
          </Link>
        </motion.div>
      )}
      
      <motion.div variants={itemVariants}>
        <button
          type="submit"
          disabled={isLoading}
          className={`btn-primary w-full flex items-center justify-center gap-2 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <div className="w-5 h-5 rounded-full border-2 border-finblack border-t-transparent animate-spin"></div>
          ) : (
            <>
              {type === 'login' ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="text-center mt-6"
      >
        <p className="text-muted-foreground">
          {type === 'login' ? "Don't have an account? " : "Already have an account? "}
          <Link
            to={type === 'login' ? '/register' : '/login'}
            className="text-finblack font-medium hover:text-finyellow transition-colors"
          >
            {type === 'login' ? 'Sign up' : 'Sign in'}
          </Link>
        </p>
      </motion.div>
    </motion.form>
  );
};

export default AuthForm;
