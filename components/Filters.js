import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// Reusable Filter Content Component
const FilterContent = ({ isMobile, t, treatments, selectedTreatments, onTreatmentChange, priceFilter, onPriceChange }) => (
    <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{t('filters.title')}</h3>
            {(selectedTreatments.length > 0 || priceFilter) && (
                <button
                    onClick={() => { onTreatmentChange('__clear__'); onPriceChange(''); }}
                    style={{ fontSize: '0.75rem', color: 'var(--primary)', background: 'none', border: 'none', textDecoration: 'underline' }}
                >
                    {t('filters.clean')}
                </button>
            )}
        </div>

        <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('filters.treatments')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {treatments.map(t => (
                    <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer', transition: 'color 0.2s' }} className="hover:text-primary">
                        <input
                            type="checkbox"
                            checked={selectedTreatments.includes(t)}
                            onChange={() => onTreatmentChange(t)}
                            style={{ accentColor: 'var(--primary)' }}
                        />
                        {t}
                    </label>
                ))}
            </div>
        </div>

        <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('filters.price')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['₺', '₺₺', '₺₺₺'].map(p => (
                    <label key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
                        <input
                            type="radio"
                            name={isMobile ? "price-mobile" : "price-desktop"}
                            checked={priceFilter === p}
                            onChange={() => onPriceChange(p)}
                            style={{ accentColor: 'var(--primary)' }}
                        />
                        {p}
                    </label>
                ))}
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <input
                        type="radio"
                        name={isMobile ? "price-mobile" : "price-desktop"}
                        checked={priceFilter === ''}
                        onChange={() => onPriceChange('')}
                        style={{ accentColor: 'var(--primary)' }}
                    />
                    {t('filters.any')}
                </label>
            </div>
        </div>
    </>
);

export default function Filters({ treatments, selectedTreatments, onTreatmentChange, priceFilter, onPriceChange }) {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const commonProps = {
        t,
        treatments,
        selectedTreatments,
        onTreatmentChange,
        priceFilter,
        onPriceChange
    };

    return (
        <>
            {/* Mobile Trigger */}
            <button className="mobile-filter-trigger" onClick={() => setIsOpen(true)}>
                <span>{t('filters.title')}</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                    {(selectedTreatments.length > 0 || priceFilter) ? '•' : '▼'}
                </span>
            </button>

            {/* Desktop View */}
            <div className="desktop-filters" style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                height: 'fit-content',
                boxShadow: 'var(--shadow-sm)'
            }}>
                <FilterContent isMobile={false} {...commonProps} />
            </div>

            {/* Mobile Drawer */}
            <div className={`filter-overlay-backdrop ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
                <div className="filter-overlay-content" onClick={e => e.stopPropagation()}>
                    <button className="filter-close-btn" onClick={() => setIsOpen(false)}>✕</button>
                    <FilterContent isMobile={true} {...commonProps} />
                </div>
            </div>
        </>
    );
}
