import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'USD' | 'INR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  toggleCurrency: () => void;
  formatPrice: (usdStr: string, inrStr?: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('aihub_currency');
    return (saved as Currency) || 'INR'; // Default to INR to cater directly to the strong India focus
  });

  useEffect(() => {
    localStorage.setItem('aihub_currency', currency);
  }, [currency]);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'INR' : 'USD'));
  };

  const formatPrice = (usdStr: string, inrStr?: string) => {
    if (currency === 'INR' && inrStr) {
      return inrStr;
    }
    return usdStr;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
