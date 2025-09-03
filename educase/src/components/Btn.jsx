import React from 'react'

const Btn = ({ label, className = 'bg-[#8852f5] text-white' }) => {
    return (
        <button className={`${className} w-full py-3 rounded-lg font-semibold cursor-pointer `}>
            {label}
        </button>
    )
}

export default Btn