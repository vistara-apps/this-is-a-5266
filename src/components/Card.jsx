import React from 'react'

const Card = ({ children, className = '', variant = 'default', ...props }) => {
  const baseClasses = 'glass-effect rounded-lg p-6 shadow-card'
  const variantClasses = {
    default: '',
    highlighted: 'ring-2 ring-accent/50'
  }

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}

export default Card