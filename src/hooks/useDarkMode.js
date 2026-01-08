
import React,  { useEffect } from "react";

export default function useDarkMode() {
  useEffect(() =>{
    // on page load check theme preference
    if(
       localStorage.theme === 'dark' || (!('theme' in localStorage) && 
    window.matchMedia('(prefers-color-scheme: dark)').matches)
    ){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    };

    const mediaQuery  = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
        if(!('theme' in localStorage)){
          if (e.matches){
            document.documentElement.classList.add('dark');
          }else{
            document.documentElement.classList.remove('dark')
          }
        }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange)
   
  })
}

