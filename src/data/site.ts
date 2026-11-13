/**
 * Alle bedrijfsgegevens en vaste beloftes op één plek.
 * Alles tussen [HAKEN] is een placeholder: vul in en de hele site past zich aan.
 */
export const site = {
  name: 'Sparkdesign',
  url: 'https://www.sparkdesign.nl', // [DOMEIN] ook aanpassen in astro.config.mjs
  description:
    'Een professionele website voor €500 vaste prijs. Binnen 21 dagen live, 3 feedbackrondes en je betaalt pas als je site online staat.',
  owner: '[JOUW NAAM]',
  email: '[info@sparkdesign.nl]',
  phoneDisplay: '[06 12 34 56 78]',
  /** Internationaal formaat zonder + of spaties, bijv. 31612345678 */
  whatsapp: '31600000000',
  whatsappText: 'Hoi! Ik heb interesse in een website van Sparkdesign.',
  kvk: '[KVK-NUMMER]',
  city: '[PLAATS]',
  responseTime: '[1 werkdag]',

  /** Web3Forms: maak gratis een key aan op web3forms.com met je e-mailadres */
  web3formsKey: 'JOUW-WEB3FORMS-ACCESS-KEY',

  // De vaste beloftes: deze getallen komen overal op de site terug.
  price: 500,
  daysToLive: 21,
  feedbackRounds: 3,
  upfront: 0,
  hostingPerMonth: 10,

  cta: 'Vraag je gratis ontwerp aan',
  ctaShort: 'Gratis ontwerp',
  reassurance: '€0 vooraf · je betaalt pas als je site live staat',
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`;

/** Prijskaart: wat zit erin en wat kost extra. */
export const included: string[] = [
  'Een eigen ontwerp, afgestemd op jouw zaak',
  'Werkt perfect op telefoon, tablet en laptop',
  'Snel en goed vindbaar in Google (basis-SEO)',
  'Contactformulier dat direct in je mail landt',
  'Tot [5] secties op één heldere pagina',
  `3 feedbackrondes: we schaven tot het klopt`,
  'Online op je eigen domein, inclusief SSL-slotje',
  'Uitleg hoe alles werkt bij de oplevering',
];

export const hosting = {
  title: `Hosting €${site.hostingPerMonth} per maand`,
  text: '[WAT ZIT ERIN? Bijv. hosting, SSL, back-ups, kleine tekstwijzigingen.] Maandelijks opzegbaar: [JA/NEE].',
};

export const extras: { label: string; price: string }[] = [
  { label: '[Extra pagina]', price: '[€X]' },
  { label: '[Teksten laten schrijven]', price: '[€X]' },
  { label: '[Logo-ontwerp]', price: '[€X]' },
  { label: '[Webshop of boekingssysteem]', price: '[op aanvraag]' },
];

/** Werkwijze: drie stappen. */
export const steps = [
  {
    title: 'Kennismaken',
    when: 'Week 1',
    text: 'We bellen of drinken koffie. Jij vertelt over je zaak, ik stel de vragen. Gratis en vrijblijvend.',
  },
  {
    title: 'Ontwerp',
    when: 'Week 1–2',
    text: `Je krijgt gratis een ontwerp van je site. Niet helemaal goed? Je hebt ${site.feedbackRounds} feedbackrondes.`,
  },
  {
    title: 'Live',
    when: 'Uiterlijk dag 21',
    text: 'Ik bouw je site en zet hem online. Pas als hij live staat en jij tevreden bent, betaal je €500.',
  },
];
