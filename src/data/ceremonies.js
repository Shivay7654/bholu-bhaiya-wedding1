// ============================================================
// CENTRAL DATA FILE — Ravi Prakash weds Jyoti Singh
// ============================================================

const BASE = import.meta.env.BASE_URL || '/';

export const weddingInfo = {
  groom: 'Ravi Prakash',
  bride: 'Jyoti Singh',
  coupleTitle: 'Ravi Prakash weds Jyoti Singh',
  coupleNames: 'Ravi Prakash ♡ Jyoti Singh',
  monogram: 'R ♡ J',
  weddingDate: '21 November 2026',
  weddingDatesSpan: '21 – 22 November 2026',
  // Countdown to Barat on 21 November 2026 at 6:00 PM IST
  countdownTarget: '2026-11-21T18:00:00+05:30',
  couplePhoto: `${BASE}images/couple.jpg`,
  palaceBg: `${BASE}images/marriage-palace.jpg`,
  hotelPhoto: `${BASE}images/mangalam-hotel.jpg`,
  tagline: 'Two families... One beautiful journey...',
  subTagline: 'Join us as we celebrate love, tradition and togetherness.',

  // Story timeline
  story: [
    {
      year: '2022',
      title: 'When Paths Crossed',
      description: 'A serendipitous evening where a conversation over warm masala chai turned into hours of endless laughter and shared dreams.',
    },
    {
      year: '2024',
      title: 'The Unspoken Promise',
      description: 'Under a canopy of starlit skies, Ravi asked Jyoti to walk by his side for a lifetime. With tears of joy, she said YES!',
    },
    {
      year: '2026',
      title: 'Forever Begins',
      description: 'Surrounded by the warmth of our families, ancient Vedic rituals, and sacred vows, we celebrate the uniting of two hearts into one at Manglam Hotel.',
    },
  ],

  // Venue details — Manglam Hotel, Sasaram
  venue: {
    name: 'Manglam Hotel & Marriage Hall',
    shortName: 'Manglam Hotel',
    city: 'Sasaram',
    district: 'Rohtas',
    state: 'Bihar',
    country: 'India',
    address: 'Company Sarai, Behind Dr. Upendra Rai, Near Prabhakar More, Sasaram, Rohtas, Bihar — 821115',
    mapsLink: 'https://www.google.com/maps/search/Manglam+Hotel+Sasaram+Rohtas+Bihar',
    phone: '+91 99390 78115',
    email: 'celebration@ravi-jyoti.wedding',
    image: `${BASE}images/mangalam-hotel.jpg`,
  },
};

// ============================================================
// CEREMONY DATA — 4 Ceremonies with User's Exact Dates & Times
// ============================================================

export const ceremonies = [
  {
    id: 'tilak',
    name: 'TILAK',
    title: 'TILAK',
    subtitle: 'A BLESSING BEGINS',
    day: 'SATURDAY',
    date: '21 NOV 2026',
    time: '11:00 AM',
    venueName: 'Manglam Hotel, Sasaram',
    iconType: 'kalash',
    themeColor: '#7E121D',
    accentColor: '#D4AF37',
    image: `${BASE}images/tilak.jpg`,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-traditional-indian-wedding-rituals-43229-large.mp4',
    description:
      'The sacred ceremony marking the formal acceptance and blessing of the groom with auspicious vermilion, Vedic chants, and warm family acceptance at Manglam Hotel.',
    rituals: [
      'Ganesh Vandana & Holy Invocation',
      'Auspicious Tilak & Akshat application by elders',
      'Exchange of traditional royal gifts and sweets',
      'Blessings from family elders and celebratory feast',
    ],
    dressCode: 'Traditional Indian Festive Attire · Red / Crimson & Gold',
  },
  {
    id: 'haldi',
    name: 'HALDI',
    title: 'HALDI',
    subtitle: 'COLORS OF LOVE',
    day: 'SATURDAY',
    date: '21 NOV 2026',
    time: '01:00 PM',
    venueName: 'Manglam Hotel, Sasaram',
    iconType: 'haldi',
    themeColor: '#B8860B',
    accentColor: '#FFD700',
    image: `${BASE}images/haldi.jpg`,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-an-indian-bride-43228-large.mp4',
    description:
      'A joyful celebration of vibrant turmeric, fragrant marigolds, playful laughter, and blessings to bestow radiant joy upon the couple at Manglam Hotel.',
    rituals: [
      'Traditional Mangal Snan preparation',
      'Application of aromatic turmeric, sandalwood & rose water',
      'Phoolon ki Holi (shower of fresh marigold petals)',
      'Folk wedding songs and joyful dance with loved ones',
    ],
    dressCode: 'Bright Sunny Yellow & Sunshine Pastels',
  },
  {
    id: 'barat',
    name: 'BARAT',
    title: 'BARAT',
    subtitle: 'A GRAND ARRIVAL',
    day: 'SATURDAY',
    date: '21 NOV 2026',
    time: '06:00 PM',
    venueName: 'Manglam Hotel, Sasaram',
    iconType: 'barat',
    themeColor: '#0E2954',
    accentColor: '#F5C754',
    image: `${BASE}images/barat.jpg`,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-groom-and-wedding-guests-dancing-43230-large.mp4',
    description:
      'The exuberant royal wedding procession! Ravi arrives on a decorated white steed with dancing baraatis, live dhol beats, fireworks, and the grand Jaimala & Vedic Pheras at Manglam Hotel.',
    rituals: [
      'Groom Sehra Bandi & Royal Ghodi Chadhai',
      'Grand Swagatam at Manglam Hotel Gates with floral garlands',
      'The Spectacular Varmala / Jaimala Exchange under fireworks',
      'Sacred Vedic Pheras around the Agni Kund',
    ],
    dressCode: 'Royal Evening Glamour · Sherwanis, Suits & Bridal Lehengas',
  },
  {
    id: 'vidai',
    name: 'VIDAI',
    title: 'VIDAI',
    subtitle: 'A HEARTFELT FAREWELL',
    day: 'SUNDAY',
    date: '22 NOV 2026',
    time: '06:00 AM',
    venueName: 'Manglam Hotel, Sasaram',
    iconType: 'vidai',
    themeColor: '#4A1521',
    accentColor: '#F2B5B5',
    image: `${BASE}images/vidai.jpg`,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bride-holding-hands-with-groom-at-wedding-43227-large.mp4',
    description:
      'A deeply touching dawn farewell as Jyoti takes leave with showers of rice and rose petals, stepping into her new journey with Ravi from Manglam Hotel.',
    rituals: [
      'Kanya Daan blessings & Vedic completion',
      'Rice tossing (Throwing handfuls of puffed rice for prosperity)',
      'Emotional embrace with parents, siblings and family',
      'Departure in flower-adorned bridal carriage',
    ],
    dressCode: 'Graceful Traditional Indian Silks',
  },
];

export const getCeremonyById = (id) => ceremonies.find((c) => c.id === id);

export const getAdjacentCeremonies = (id) => {
  const idx = ceremonies.findIndex((c) => c.id === id);
  return {
    prev: idx > 0 ? ceremonies[idx - 1] : null,
    next: idx < ceremonies.length - 1 ? ceremonies[idx + 1] : null,
  };
};
