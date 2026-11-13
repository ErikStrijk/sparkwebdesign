import type { ImageMetadata } from 'astro';

/**
 * Portfolio-items. Zet een afbeelding in src/assets/portfolio/ en importeer hem hier, bijv.:
 *   import bakker from '../assets/portfolio/bakker.jpg';
 *   { ..., image: bakker }
 * Zonder afbeelding toont de site een nette placeholder.
 */
export type PortfolioItem = {
  title: string;
  meta: string;
  text: string;
  url?: string;
  image?: ImageMetadata;
  imageAlt?: string;
};

export const portfolio: PortfolioItem[] = [
  { title: '[PORTFOLIO-ITEM 1]', meta: '[Branche] · [Plaats]', text: '[Eén zin over de opdracht en wat het opleverde.]' },
  { title: '[PORTFOLIO-ITEM 2]', meta: '[Branche] · [Plaats]', text: '[Eén zin over de opdracht en wat het opleverde.]' },
  { title: '[PORTFOLIO-ITEM 3]', meta: '[Branche] · [Plaats]', text: '[Eén zin over de opdracht en wat het opleverde.]' },
];
