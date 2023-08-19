import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  //states, logic, functions
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  function changeTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
