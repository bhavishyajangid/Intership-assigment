import React, { useEffect, useState } from 'react'
import { BiMoon } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeChange = () => {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage first, fallback to classList
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme !== null) {
            return savedTheme === 'dark'
        }
        return document.documentElement.classList.contains('dark')
    })

    useEffect(() => {
        // Update all instances when theme changes
        const updateTheme = (e) => {
            setIsDark(e.detail.isDark)
        }
        window.addEventListener('themeChange', updateTheme)
        return () => window.removeEventListener('themeChange', updateTheme)
    }, [])

    useEffect(() => {
        // Update classList and localStorage when isDark changes
        if (isDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    const toggleTheme = () => {
        const newIsDark = !isDark
        setIsDark(newIsDark)

        // Dispatch custom event to notify other instances
        window.dispatchEvent(new CustomEvent('themeChange', {
            detail: { isDark: newIsDark }
        }))
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 md:hover:bg-gray-300 dark:md:hover:bg-gray-600 transition-colors"
        >
            {isDark ? <MdOutlineWbSunny className='w-6 h-6 dark:text-gray-200 text-gray-800' /> : <BiMoon className='w-6 h-6 text-gray-800 dark:text-gray-200' />}
        </button>
    )
}

export default ThemeChange