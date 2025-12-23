'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useComparison } from '@/context/ComparisonContext';
import { useLanguage } from '@/context/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const { selectedAgencies } = useComparison();
    const { t } = useLanguage();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="glass" style={{
            borderBottom: '1px solid var(--border)',
            padding: '0.75rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.025em' }}>
                    HealthHaven
                </Link>

                {/* Desktop Menu */}
                <div className="hide-on-mobile" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <Link href="/agencies" style={{
                        fontWeight: 500,
                        color: pathname === '/agencies' ? 'var(--primary)' : 'var(--text-main)',
                        transition: 'color 0.2s'
                    }}>
                        {t('nav.marketplace')}
                    </Link>

                    <Link href="/compare" className="btn btn-secondary" style={{ position: 'relative' }}>
                        {t('nav.compare')}
                        {selectedAgencies.length > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-6px',
                                right: '-6px',
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                borderRadius: '50%',
                                width: '18px',
                                height: '18px',
                                fontSize: '0.7rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}>
                                {selectedAgencies.length}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="show-on-mobile"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        color: 'var(--text-main)',
                        cursor: 'pointer'
                    }}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <Link
                        href="/agencies"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                            fontWeight: 500,
                            padding: '0.5rem',
                            color: pathname === '/agencies' ? 'var(--primary)' : 'var(--text-main)'
                        }}
                    >
                        {t('nav.marketplace')}
                    </Link>

                    <Link
                        href="/compare"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="btn btn-secondary"
                        style={{ justifyContent: 'center' }}
                    >
                        {t('nav.compare')} ({selectedAgencies.length})
                    </Link>
                </div>
            )}
        </nav>
    );
}
