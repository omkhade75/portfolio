import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'solar' | 'cyber' | 'hyper' | 'mono';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('om_khade_theme') as string | null;
      if (saved === 'solar' || saved === 'cyber' || saved === 'hyper' || saved === 'mono') {
        return saved;
      }
      // Backward compatibility for 'light' / 'dark'
      if (saved === 'dark') return 'cyber';
      if (saved === 'light') return 'solar';
    }
    return 'solar';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove any previous theme classes
    root.classList.remove('dark', 'theme-solar', 'theme-cyber', 'theme-hyper', 'theme-mono');
    root.setAttribute('data-theme', theme);

    if (theme === 'cyber') {
      root.classList.add('dark', 'theme-cyber');
    } else if (theme === 'hyper') {
      root.classList.add('dark', 'theme-hyper');
    } else if (theme === 'mono') {
      root.classList.add('theme-mono');
    } else {
      root.classList.add('theme-solar');
    }

    localStorage.setItem('om_khade_theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    const themeOrder: Theme[] = ['solar', 'cyber', 'hyper', 'mono'];
    const nextIndex = (themeOrder.indexOf(theme) + 1) % themeOrder.length;
    setThemeState(themeOrder[nextIndex]);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
