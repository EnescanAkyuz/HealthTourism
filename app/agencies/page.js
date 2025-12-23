'use client';

import { useState } from 'react';
import { agencies, treatments } from '@/data/mockData';
import AgencyCard from '@/components/AgencyCard';
import Filters from '@/components/Filters';

export default function AgenciesPage() {
    const [selectedTreatments, setSelectedTreatments] = useState([]);
    const [priceFilter, setPriceFilter] = useState('');

    const handleTreatmentChange = (t) => {
        if (selectedTreatments.includes(t)) {
            setSelectedTreatments(selectedTreatments.filter(x => x !== t));
        } else {
            setSelectedTreatments([...selectedTreatments, t]);
        }
    };

    const filteredAgencies = agencies.filter(agency => {
        // Filter by Treatment
        if (selectedTreatments.length > 0) {
            const hasTreatment = agency.treatments.some(t => selectedTreatments.includes(t));
            if (!hasTreatment) return false;
        }
        // Filter by Price
        if (priceFilter && agency.priceRange !== priceFilter) return false;

        return true;
    });

    return (
        <main className="container" style={{ padding: '2rem 1rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Öne Çıkan Acentalar</h1>

            <div className="agencies-layout">
                <aside>
                    <Filters
                        treatments={treatments}
                        selectedTreatments={selectedTreatments}
                        onTreatmentChange={handleTreatmentChange}
                        priceFilter={priceFilter}
                        onPriceChange={setPriceFilter}
                    />
                </aside>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {filteredAgencies.map(agency => (
                        <AgencyCard key={agency.id} agency={agency} />
                    ))}

                    {filteredAgencies.length === 0 && (
                        <div style={{ padding: '2rem', textAlign: 'center', gridColumn: '1/-1', backgroundColor: 'white', borderRadius: 'var(--radius-lg)' }}>
                            <p style={{ color: 'var(--text-muted)' }}>Acentalar bulunamadı.</p>
                            <button
                                className="btn btn-secondary"
                                style={{ marginTop: '1rem' }}
                                onClick={() => { setSelectedTreatments([]); setPriceFilter(''); }}
                            >
                                Filtreleri Temizle
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
