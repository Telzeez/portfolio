import { useEffect, useState } from "react";

export default function useDarkMode() {
  // Initialize state with the current theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;

    // Logic to apply/remove dark class
    const applyTheme = (themeName) => {
      if (
        themeName === 'dark' || 
        (!themeName && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme(theme);

    // Sync with System Preferences
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(null);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return { theme, toggleTheme };}