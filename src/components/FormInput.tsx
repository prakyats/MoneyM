
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type: initialType,
  placeholder = ' ',
  value,
  onChange,
  error,
  required = false,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [type, setType] = useState(initialType);

  const togglePasswordVisibility = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <div className={cn('relative mb-6', className)}>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            'form-input',
            error && 'border-destructive focus:border-destructive focus:ring-destructive/30',
            value && 'filled'
          )}
        />
        <label
          htmlFor={id}
          className={cn(
            'form-label',
            (isFocused || value) && '-translate-y-7 text-xs',
            isFocused && !error && 'text-finyellow',
            error && 'text-destructive'
          )}
        >
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </label>
        
        {initialType === 'password' && (
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={togglePasswordVisibility}
          >
            {type === 'password' ? (
              <Eye className="h-5 w-5" />
            ) : (
              <EyeOff className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-destructive animate-fade-in">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
