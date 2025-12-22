'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ComparisonContext = createContext();

export function ComparisonProvider({ children }) {
    const [selectedAgencies, setSelectedAgencies] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('comparison_agencies');
        if (saved) {
            try {
                setSelectedAgencies(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse comparison data', e);
            }
        }
    }, []);

    useEffect(() => {
        if (selectedAgencies.length > 0) {
            localStorage.setItem('comparison_agencies', JSON.stringify(selectedAgencies));
        }
    }, [selectedAgencies]);

    const addToCompare = (agency) => {
        if (selectedAgencies.length >= 3) {
            alert('You can compare up to 3 agencies only.');
            return;
        }
        if (selectedAgencies.find(a => a.id === agency.id)) return;

        setSelectedAgencies([...selectedAgencies, agency]);
    };

    const removeFromCompare = (agencyId) => {
        const newSelection = selectedAgencies.filter(a => a.id !== agencyId);
        setSelectedAgencies(newSelection);
        if (newSelection.length === 0) {
            localStorage.removeItem('comparison_agencies');
        }
    };

    const isSelected = (agencyId) => {
        return selectedAgencies.some(a => a.id === agencyId);
    };

    return (
        <ComparisonContext.Provider value={{ selectedAgencies, addToCompare, removeFromCompare, isSelected }}>
            {children}
        </ComparisonContext.Provider>
    );
}

export function useComparison() {
    return useContext(ComparisonContext);
}
