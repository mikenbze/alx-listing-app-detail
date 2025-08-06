import React from 'react';
import { CardProps } from '../types/card';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => (
  <div onClick={onClick} className="p-4 border rounded shadow-sm cursor-pointer">
    {imageUrl && <img src={imageUrl} alt={title} className="mb-2 w-full h-48 object-cover" />}
    <h2 className="text-lg font-semibold">{title}</h2>
    {description && <p className="text-gray-600">{description}</p>}
  </div>
);

export default Card;
