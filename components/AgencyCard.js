'use client';

import Link from 'next/link';
import { useComparison } from '@/context/ComparisonContext';
import { useLanguage } from '@/context/LanguageContext';

export default function AgencyCard({ agency }) {
    const { isSelected, addToCompare, removeFromCompare, selectedAgencies } = useComparison();
    const { t } = useLanguage();
    const checked = isSelected(agency.id);

    const toggleCompare = (e) => {
        e.stopPropagation();
        if (checked) {
            removeFromCompare(agency.id);
        } else {
            addToCompare(agency);
        }
    };

    const disabled = !checked && selectedAgencies.length >= 3;

    return (
        <div className="card-hover" style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                    src={agency.images[0]}
                    alt={agency.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    className="card-img"
                />
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    boxShadow: 'var(--shadow-sm)',
                    backdropFilter: 'blur(4px)'
                }}>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={toggleCompare}
                        disabled={disabled}
                        style={{ cursor: disabled ? 'not-allowed' : 'pointer', accentColor: 'var(--primary)' }}
                    />
                    <span style={{ color: disabled ? 'var(--text-muted)' : 'var(--text-main)' }}>{t('card.compare')}</span>
                </div>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                        <Link href={`/agencies/${agency.slug}`} style={{ textDecoration: 'none' }} className="hover-underline">
                            {agency.name}
                        </Link>
                    </h3>
                    <span className="badge badge-primary">{agency.rating} ★</span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    📍 {agency.city}, {agency.country}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: 'auto' }}>
                    {agency.treatments.slice(0, 3).map(t => (
                        <span key={t} style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', color: 'var(--secondary)', fontWeight: 500 }}>
                            {t}
                        </span>
                    ))}
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.875rem' }}>
                        {t('card.price')}: <span style={{ color: 'var(--primary)' }}>{agency.priceRange}</span>
                    </span>
                    <Link href={`/agencies/${agency.slug}`} className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                        {t('card.view_profile')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
