'use client';

import { useComparison } from '@/context/ComparisonContext';
import Link from 'next/link';

export default function ComparePage() {
    const { selectedAgencies, removeFromCompare } = useComparison();

    if (selectedAgencies.length === 0) {
        return (
            <main className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Öne Çıkan Acentalar</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Acentaları karşılaştırmak için henüz herhangi bir acenta seçmediniz.</p>
                <Link href="/agencies" className="btn btn-primary">
                    Acentaları Keşfet
                </Link>
            </main>
        );
    }

    return (
        <main className="container" style={{ padding: '3rem 1rem' }}>
            <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Öne Çıkan Acentalar</h1>
                <Link href="/agencies" className="btn btn-secondary">
                    + Acenta Ekle
                </Link>
            </header>

            <div className="table-responsive" style={{ paddingBottom: '1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '20%' }}></th>
                            {selectedAgencies.map(agency => (
                                <th key={agency.id} style={{ padding: '1rem', textAlign: 'left', minWidth: '250px' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src={agency.images[0]} alt={agency.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{agency.name}</h3>
                                        <button
                                            onClick={() => removeFromCompare(agency.id)}
                                            style={{
                                                position: 'absolute', top: -10, right: -10,
                                                background: 'white', border: '1px solid #e2e8f0',
                                                borderRadius: '50%', width: '2rem', height: '2rem', cursor: 'pointer',
                                                color: 'var(--danger)', fontSize: '1.25rem',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                                            }}
                                            title="Remove"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderTop: '1px solid #e2e8f0' }}>
                            <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>Konum</td>
                            {selectedAgencies.map(agency => (
                                <td key={agency.id} style={{ padding: '1rem' }}>
                                    {agency.city}, {agency.country}
                                </td>
                            ))}
                        </tr>
                        <tr style={{ borderTop: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                            <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>Puan</td>
                            {selectedAgencies.map(agency => (
                                <td key={agency.id} style={{ padding: '1rem' }}>
                                    <span className="badge badge-primary">{agency.rating} ★</span>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                                        ({agency.reviews.length} değerlendirme)
                                    </span>
                                </td>
                            ))}
                        </tr>
                        <tr style={{ borderTop: '1px solid #e2e8f0' }}>
                            <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>Fiyat Aralığı</td>
                            {selectedAgencies.map(agency => (
                                <td key={agency.id} style={{ padding: '1rem', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
                                    {agency.priceRange}
                                </td>
                            ))}
                        </tr>
                        <tr style={{ borderTop: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                            <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>İşçilikler</td>
                            {selectedAgencies.map(agency => (
                                <td key={agency.id} style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {agency.treatments.map(t => (
                                            <span key={t} style={{ fontSize: '0.75rem', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '4px' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <tr style={{ borderTop: '1px solid #e2e8f0' }}>
                            <td style={{ padding: '1rem' }}></td>
                            {selectedAgencies.map(agency => (
                                <td key={agency.id} style={{ padding: '1rem' }}>
                                    <Link href={`/agencies/${agency.slug}`} className="btn btn-primary" style={{ width: '100%' }}>
                                        Profili Görüntüle
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}
