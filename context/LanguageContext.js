'use client';

import { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // Hardcode language to Turkish
    const [language] = useState('tr');

    // No-op for switchLanguage since english is removed
    const switchLanguage = () => { };

    const t = (key) => {
        // Determine the source object based on language availability
        // Since we forced 'tr', it uses translations.tr
        const text = translations[language][key];
        if (!text) {
            // Fallback or warning
            return key;
        }
        return text;
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
