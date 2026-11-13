import type { ImageMetadata } from 'astro';

/**
 * Over mij. Zet je foto in src/assets/ en importeer hem hier, bijv.:
 *   import foto from '../assets/foto.jpg';
 *   photo: foto,
 */
export const overMij: {
  title: string;
  paragraphs: string[];
  points: { title: string; text: string }[];
  photo?: ImageMetadata;
  photoAlt: string;
} = {
  title: 'Hoi, ik ben [JOUW NAAM].',
  paragraphs: [
    'Sparkdesign is geen bureau met accountmanagers en lange lijnen. Je spreekt mij, van de eerste kop koffie tot de dag dat je site live gaat.',
    '[JOUW VERHAAL: 2–3 korte zinnen. Wie ben je, waarom doe je dit en wat vind je leuk aan het werken met ondernemers?]',
  ],
  points: [
    { title: 'Eén aanspreekpunt', text: 'Je belt of appt gewoon mij. Geen doorverbinden.' },
    { title: 'Gewone taal', text: 'Geen vakjargon. Ik leg uit wat ik doe, en waarom.' },
    { title: 'Snel antwoord', text: 'Een vraag? Je hoort binnen [1 werkdag] van me.' },
  ],
  photo: undefined,
  photoAlt: '[JOUW NAAM], oprichter van Sparkdesign',
};
