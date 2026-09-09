// src/data/hero-expositores.ts

export type Territory = 'yungas' | 'valles' | 'puna' | 'quebrada';

export type HeroExhibitor = {
  id: string;
  name: string;
  territory: Territory;
  category?: string;
  image: string;
  href?: string;
};

export const heroExhibitors: HeroExhibitor[] = [
  // Yungas
  {
    id: 'ledesma',
    name: 'Ledesma',
    territory: 'yungas',
    category: 'Agroindustria & Biocombustibles',
    image: '/images/expositores/yungas/ledemsayungas.webp',
    href: '/expositores',
  },
  // Valles
  {
    id: 'villanueva-hijos',
    name: 'Villanueva e Hijos',
    territory: 'valles',
    category: 'Construcción & Desarrollo',
    image: '/images/expositores/valles/villanuevaehijos.webp',
    href: '/expositores',
  },
  {
    id: 'nga-group',
    name: 'NGA Group',
    territory: 'valles',
    category: 'Tecnología & Servicios',
    image: '/images/expositores/valles/nga-group_1.jpg',
    href: '/expositores',
  },
  {
    id: 'lenarduzzi',
    name: 'Lenarduzzi Automotores',
    territory: 'valles',
    category: 'Automotriz & Movilidad',
    image: '/images/expositores/valles/lenarduzzi-automotores.jpg',
    href: '/expositores',
  },
  {
    id: 'consejo-microempresa',
    name: 'Consejo de la Microempresa',
    territory: 'valles',
    category: 'Finanzas & Desarrollo PyME',
    image: '/images/expositores/valles/consejodelamicroempresajujuy.jpg',
    href: '/expositores',
  },
  {
    id: 'enet-palpala',
    name: 'ENET Nº 1 Palpalá',
    territory: 'valles',
    category: 'Innovación & Educación',
    image: '/images/expositores/valles/cropped-enet-palpala-1.jpeg',
    href: '/expositores',
  },
  // Puna
  {
    id: 'minera-exar',
    name: 'Minera Exar',
    territory: 'puna',
    category: 'Minería & Litio',
    image: '/images/expositores/puna/camaraminerajujuyexar.webp',
    href: '/expositores',
  },
  {
    id: 'mina-pirquitas',
    name: 'Mina Pirquitas',
    territory: 'puna',
    category: 'Minería',
    image: '/images/expositores/puna/MINAPIQUITAS.jpg',
    href: '/expositores',
  },
  {
    id: 'hanacolla',
    name: 'Hanacolla',
    territory: 'puna',
    category: 'Turismo & Cultura Andina',
    image: '/images/expositores/puna/Pachamama-HANACOLLA-335-scaled.jpg',
    href: '/expositores',
  },
];
