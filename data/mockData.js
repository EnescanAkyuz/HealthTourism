
export const agencies = [
    {
        id: '1',
        slug: 'istanbul-estetik-merkezi',
        name: 'İstanbul Estetik Merkezi',
        country: 'Türkiye',
        city: 'İstanbul',
        treatments: ['Saç Ekimi', 'Burun Estetiği', 'Diş Kaplama'],
        priceRange: '₺₺',
        rating: 4.8,
        reviews: [
            { id: 'r1', user: 'Ayşe Y.', rating: 5, comment: 'Harika hizmet ve mükemmel sonuçlar!' },
            { id: 'r2', user: 'Mehmet D.', rating: 4.5, comment: 'Profesyonel kadro, tavsiye ederim.' }
        ],
        description: 'İstanbul\'da saç ekimi ve plastik cerrahi konusunda uzmanlaşmış öncü bir estetik merkezi.',
        images: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'],
    },
    {
        id: '2',
        slug: 'seul-guzellik-klinigi',
        name: 'Seul Güzellik Kliniği',
        country: 'Güney Kore',
        city: 'Seul',
        treatments: ['Burun Estetiği', 'Yüz Germe', 'Cilt Bakımı'],
        priceRange: '₺₺₺',
        rating: 4.9,
        reviews: [
            { id: 'r3', user: 'Zeynep K.', rating: 5, comment: 'Teknoloji harikası bir tesis.' }
        ],
        description: 'Seul\'ün kalbinde dünya standartlarında K-Beauty tedavilerini deneyimleyin.',
        images: ['https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'],
    },
    {
        id: '3',
        slug: 'bangkok-medi-wellness',
        name: 'Bangkok Medi Wellness',
        country: 'Tayland',
        city: 'Bangkok',
        treatments: ['Diş İmplantı', 'Tam Vücut Check-up', 'Wellness Spa'],
        priceRange: '₺',
        rating: 4.6,
        reviews: [],
        description: 'Uygun fiyatlarla Tayland misafirperverliğini tıbbi mükemmellikle birleştiriyoruz.',
        images: ['https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'],
    },
    {
        id: '4',
        slug: 'meksika-bariatrik-uzmanlari',
        name: 'Meksika Bariatrik Uzmanları',
        country: 'Meksika',
        city: 'Tijuana',
        treatments: ['Mide Küçültme', 'Gastrik Bypass'],
        priceRange: '₺₺',
        rating: 4.7,
        reviews: [],
        description: 'Sınırın hemen ötesinde en yüksek puanlı bariatrik cerrahi merkezi.',
        images: ['https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800'],
    }
];

export const treatments = [
    'Saç Ekimi',
    'Burun Estetiği',
    'Diş Kaplama',
    'Diş İmplantı',
    'Yüz Germe',
    'Mide Küçültme',
    'Wellness Spa',
    'Cilt Bakımı',
    'Tam Vücut Check-up',
    'Gastrik Bypass'
];
