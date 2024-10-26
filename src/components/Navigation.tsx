import React from 'react';

interface LinkProps {
  href: string;
  label: string;
}

export const Link: React.FC<LinkProps> = ({ href, label }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {label}
  </a>
);