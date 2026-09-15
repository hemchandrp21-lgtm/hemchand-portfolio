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
    accentColor: theme === 'ice' ? '#E1CBA6' : '#A93207',
    glowGradient: theme === 'ice'
      ? 'radial-gradient(circle at center, rgba(225, 203, 166, 0.25) 0%, rgba(0, 0, 0, 0) 70%)'
      : 'radial-gradient(circle at center, rgba(169, 50, 7, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
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
    return {
      theme: 'fire',
      setTheme: () => {},
      toggleTheme: () => {},
      isFire: true,
      isIce: false,
      accentColor: '#A93207',
      glowGradient: 'radial-gradient(circle at center, rgba(169, 50, 7, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
    };
  }
  return context;
}
