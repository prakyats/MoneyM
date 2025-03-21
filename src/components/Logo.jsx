
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ size = 'md' }) => {
  const sizes = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
  };

  return (
    <Link 
      to="/" 
      className={`font-bold ${sizes[size]} tracking-tight inline-flex items-center transition-all duration-300 hover:opacity-90`}
    >
      <div className="mr-2 relative">
        <div className="h-8 w-8 bg-finyellow rounded-lg flex items-center justify-center">
          <div className="h-4 w-4 bg-finblack rounded-sm"></div>
        </div>
      </div>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-finblack to-finblack-light">Vault</span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-finyellow to-finyellow-dark">Flow</span>
    </Link>
  );
};

export default Logo;
