import { agencies } from '@/data/mockData';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return agencies.map((agency) => ({
        slug: agency.slug,
    }));
}

export default async function AgencyDetailPage({ params }) {
    const { slug } = await params;
    const agency = agencies.find(a => a.slug === slug);

    if (!agency) {
        notFound();
    }

    return (
        <main className="container" style={{ padding: '3rem 1rem' }}>
            <Link href="/agencies" style={{ display: 'inline-block', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                ← Acentaları Keşfetmeye Geri Dön
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '3rem', alignItems: 'start' }}>

                {/* Left Column: Content */}
                <div>
                    <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem', maxHeight: '400px', width: '100%' }}>
                        <img src={agency.images[0]} alt={agency.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{agency.name}</h1>
                        <span className="badge badge-primary" style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>{agency.rating} ★</span>
                    </div>

                    <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        📍 {agency.city}, {agency.country}
                    </p>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Hakkımızda</h2>
                        <p style={{ lineHeight: '1.8', color: '#475569' }}>
                            {agency.description}
                            {/* Add some dummy content for length */}
                            {' '}Dedikli uluslararası hasta için özel bakım sağlamak. JCI tarafından yetkisiz ve istihdam için serin bir atmosfer oluşturur.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>İşçilikler</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {agency.treatments.map(t => (
                                <span key={t} style={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e2e8f0',
                                    padding: '0.5rem 1rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontWeight: 500,
                                    color: 'var(--secondary)'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Değerlendirme ({agency.reviews.length})</h2>
                        {agency.reviews.length > 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {agency.reviews.map(review => (
                                    <div key={review.id} style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <span style={{ fontWeight: 600 }}>{review.user}</span>
                                            <span style={{ color: 'var(--warning)' }}>{'★'.repeat(Math.round(review.rating))}</span>
                                        </div>
                                        <p style={{ color: 'var(--text-muted)' }}>"{review.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No reviews yet.</p>
                        )}
                    </div>
                </div>

                {/* Right Column: CTA Box */}
                <div style={{ position: 'sticky', top: '100px' }}>
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-lg)' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>İşçilikler?</h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Fiyat Aralığı</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{agency.priceRange}</span>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem', padding: '1rem' }}>
                            Ücretsiz Danışmanlık Talep Et
                        </button>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            Ücretsiz danışmanlık talep etmek için ödeme yapmaya gerek yoktur.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}
