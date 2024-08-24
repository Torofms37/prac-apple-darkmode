import { useEffect, useState } from "react"


function useThemeDetector() {

  const [theme, setTheme] = useState(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if(theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme])

  const toggleChooseTheme = () => {
    setTheme(e => e === 'light' ? 'dark' : 'light' );
  }

  return {toggleChooseTheme}

}

export default useThemeDetector;