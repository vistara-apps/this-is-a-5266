import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-accent hover:bg-accent/90 text-white focus:ring-accent/50',
    secondary: 'bg-white/20 hover:bg-white/30 text-white focus:ring-white/50',
    destructive: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    iconOnly: 'p-2 hover:bg-white/10 text-white'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button