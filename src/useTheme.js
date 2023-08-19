import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('ThemeContext is called outside of ThemeProvider');

  return context;
}
