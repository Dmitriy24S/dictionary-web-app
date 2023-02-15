import { useEffect, useLayoutEffect, useState } from 'react';

const useDarkMode = () => {
  const localStorageDarkThemeState = localStorage.getItem('dark-mode-enabled');

  const [darkTheme, setDarkTheme] = useState<boolean>(
    localStorageDarkThemeState !== null
      ? JSON.parse(localStorageDarkThemeState)
      : true
  );
  console.log('darkTheme', darkTheme);
  // JSON.parse(localStorageTheme)

  // const root = document.getElementById('root') // ! possibly null error
  const root = document.getElementsByTagName('html')[0]; // ! no possibly null error?
  // console.log('root', root);

  const handleToggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  // Theme - Set app/page theme on page load (paints the app before it renders elements)
  useLayoutEffect(() => {
    console.log('LAYOUT EFFECT');

    // Theme - Apple app/website theme (light/dark theme)
    const applyTheme = () => {
      console.log('apply theme');
      // check system preference:
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      console.log({ prefersDark }); // prefersDark: false

      // check saved app/website theme preference:
      const localDarkTheme = localStorage.getItem('dark-mode-enabled');
      // console.log({ localDarkTheme }); // localTheme: null

      // if system preference dark theme and have not set app/website theme (e.g. first time visit) -> set dark theme according to OS preference -> after that use theme preference from local state:

      // if (prefersDark && localStorageDarkThemeState == null) {
      if (prefersDark && localDarkTheme == null) {
        console.log('run prefersDark && localDarkTheme == null');
        localStorage.setItem('dark-mode-enabled', 'true');
        setDarkTheme(true);
      }
    };

    applyTheme();
    // }, [localStorageDarkThemeState]);
  }, []);

  // Theme - Toggle theme on theme state change (toggle button)
  useEffect(() => {
    // if currently on dark theme -> switch to light theme
    if (darkTheme) {
      console.log('run IF DARKTHEME = TRUE');
      root.classList.add('dark-mode');
      localStorage.setItem('dark-mode-enabled', 'true');
    }
    // if currently on light theme -> switch to dark theme
    if (!darkTheme) {
      console.log('run IF DARKTHEME = FALSE');
      root.classList.remove('dark-mode');
      localStorage.setItem('dark-mode-enabled', 'false');
    }
  }, [darkTheme, root]);

  return { darkTheme, handleToggleTheme };
};

export default useDarkMode;
