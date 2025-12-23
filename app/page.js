'use client';

import Link from 'next/link';
import { agencies } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';
import AgencyCard from '@/components/AgencyCard';

export default function Home() {
    const { t } = useLanguage();

    return (
        <main>
            <div style={{
                position: 'relative',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Image with Parallax-like fixed attachment or absolute positioning */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1,
                    filter: 'brightness(0.6)'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, animation: 'fadeInUp 0.8s ease-out' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '1.5rem',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        textShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}>
                        {t('hero.title')}
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                        marginBottom: '2.5rem',
                        maxWidth: '700px',
                        marginInline: 'auto',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        opacity: 0.95
                    }}>
                        {t('hero.subtitle')}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/agencies" className="btn btn-primary" style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.125rem',
                            borderRadius: 'var(--radius-full)',
                            boxShadow: '0 10px 25px -5px rgba(13, 148, 136, 0.4)',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                            {t('hero.cta')}
                        </Link>
                    </div>
                </div>
            </div>

            <section className="container" style={{ padding: '6rem 1rem' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: 'var(--text-main)'
                }}>
                    {t('landing.featured')}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {agencies.slice(0, 3).map(agency => (
                        <AgencyCard key={agency.id} agency={agency} />
                    ))}
                </div>
            </section>
        </main>
    );
}
