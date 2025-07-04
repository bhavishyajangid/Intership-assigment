// SidebarItem.jsx
import React from 'react';

export default function SidebarItem({ icon: Icon, label, showLabel = false }) {
  return (
    <button
      className={`
        p-3 rounded-xl hover:bg-[linear-gradient(to_right,_#00D1B233_0%,_#66666620_40%,_#66666600_100%)] transition w-full 
        flex items-center gap-3 text-sm font-medium text-white
        group-hover:flex cursor-pointer
      `}
    >
      <Icon className="w-5 h-5 text-gray-400" />
      <span
        className={`
          text-gray-200 transition-all duration-200
          hidden group-hover:inline ${showLabel ? 'inline' : ''}
        `}
      >
        {label}
      </span>
    </button>
  );
}
