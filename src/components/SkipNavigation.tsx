import React from 'react';

const SkipNavigation = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-[9999] bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-br-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      onFocus={(e) => e.currentTarget.classList.remove('sr-only')}
      onBlur={(e) => e.currentTarget.classList.add('sr-only')}
    >
      Skip to main content
    </a>
  );
};

export default SkipNavigation;