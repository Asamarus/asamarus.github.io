import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useState } from 'react';

import { lightColorScheme, darkColorScheme } from './theme';

import './ToggleTheme.css';

function ToggleTheme() {
  const [isDark, setOpened] = useState(false);

  const toggle = () => {
    const r = document.querySelector(':root');
    const newColorScheme = isDark ? 'light' : 'dark';
    setOpened(!isDark);
    document.documentElement.classList.toggle('light');
    document.documentElement.classList.toggle('dark');

    if (newColorScheme === 'light') {
      for (const key in lightColorScheme) {
        r.style.setProperty(key, lightColorScheme[key]);
      }
    } else {
      for (const key in darkColorScheme) {
        r.style.setProperty(key, darkColorScheme[key]);
      }
    }
  };

  return (
    <div className="ToggleTheme-wrapper" onClick={toggle}>
      {isDark ? (
        <MdLightMode size={30} color="rgb(255, 236, 153)" />
      ) : (
        <MdDarkMode size={30} />
      )}
    </div>
  );
}

export default ToggleTheme;
