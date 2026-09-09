// src/i18n/index.ts
export type Locale = 'es' | 'en';

export const translations = {
  nav: {
    home: { es: 'Inicio', en: 'Home' },
    theExpo: { es: 'La Expo', en: 'The Expo' },
    b2b: { es: 'Vinculate B2B', en: 'B2B Matchmaking' },
    exhibitors: { es: 'Expositores', en: 'Exhibitors' },
    agenda: { es: 'Agenda', en: 'Schedule' },
    news: { es: 'Novedades', en: 'News' },
    tickets: { es: 'Entradas', en: 'Tickets' },
    visit: { es: 'Visitá', en: 'Visit Us' },
    buyTickets: { es: 'Comprar entradas', en: 'Buy tickets' },
  },
} as const;

export function t(key: keyof typeof translations.nav, locale: Locale = 'es') {
  return translations.nav[key]?.[locale] || '';
}
