import React from 'react';
import { ButtonProps } from '../types/button';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  type = 'button',
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    type={type}
    className={`px-4 py-2 rounded ${
      variant === 'primary'
        ? 'bg-blue-600 text-white'
        : variant === 'secondary'
        ? 'bg-gray-200 text-black'
        : 'border border-gray-400 text-gray-800'
    }`}
  >
    {label}
  </button>
);

export default Button;
