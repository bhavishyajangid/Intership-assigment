// src/components/Card.jsx
import React from 'react';

export default function MiniCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-card-primary p-4 rounded-2xl w-full flex flex-col gap-2 cursor-pointer transition-shadow duration-300 hover:shadow-sm hover:shadow-cyan">
      <div className="flex gap-2 items-center">
        <Icon className="text-gray-500 text-2xl max-sm:text-xl" />
        <p className="text-gray-200 font-medium text-md">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-cyan font-bold text-xl ml-1">{value}</p>
        {(title === 'Balance' || title === 'Packages') && (
          <span className="text-cyan font-semibold text-lg max-sm:text-[16px]">USDT</span>
        )}
      </div>
    </div>
  );
}
