import { createContext, useContext, useState, useEffect } from 'react';

const IceFireContext = createContext();

export function IceFireProvider({ children }) {
  // Theme options: 'fire' (amber/warm), 'ice' (cyan/cold), 'dual' (balanced split)
  const [theme, setTheme] = useState('fire');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'fire' ? 'ice' : 'fire'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isFire: theme === 'fire',
    isIce: theme === 'ice',
    // Dynamic color helper classes
    accentColor: theme === 'ice' ? '#3FBCE8' : '#FF7A18',
    glowGradient: theme === 'ice'
      ? 'radial-gradient(circle at center, rgba(63, 188, 232, 0.25) 0%, rgba(15, 23, 42, 0) 70%)'
      : 'radial-gradient(circle at center, rgba(255, 122, 24, 0.25) 0%, rgba(15, 23, 42, 0) 70%)',
  };

  return (
    <IceFireContext.Provider value={value}>
      {children}
    </IceFireContext.Provider>
  );
}

export function useIceFire() {
  const context = useContext(IceFireContext);
  if (!context) {
    throw new Error('useIceFire must be used within an IceFireProvider');
  }
  return context;
}
