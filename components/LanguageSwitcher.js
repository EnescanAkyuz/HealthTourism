'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
    const { language, switchLanguage } = useLanguage();

    return (
        <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: '#f1f5f9', padding: '0.25rem', borderRadius: 'var(--radius-full)' }}>
            <button
                onClick={() => switchLanguage('en')}
                style={{
                    border: 'none',
                    background: language === 'en' ? 'white' : 'transparent',
                    color: language === 'en' ? 'var(--primary)' : 'var(--text-muted)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    boxShadow: language === 'en' ? 'var(--shadow-sm)' : 'none',
                    transition: 'all 0.2s'
                }}
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage('tr')}
                style={{
                    border: 'none',
                    background: language === 'tr' ? 'white' : 'transparent',
                    color: language === 'tr' ? 'var(--primary)' : 'var(--text-muted)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    boxShadow: language === 'tr' ? 'var(--shadow-sm)' : 'none',
                    transition: 'all 0.2s'
                }}
            >
                TR
            </button>
        </div>
    );
}
