// src/components/ui/Button.js
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md';
  
  const variants = {
    primary: 'bg-[#f06123] text-white hover:bg-[#d4551e]',
    secondary: 'bg-gray-200 text-[#464646] hover:bg-gray-300',
    outline: 'border border-gray-200 text-[#464646] hover:border-[#f06123]'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;