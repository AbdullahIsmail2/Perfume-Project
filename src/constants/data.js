import images from './images';

const perfumes= [
  {
    title: "Mystique d'/Or",
    price: '£80',
    vol: '100ml',
  },
  {
    title: 'Opulence Royale',
    price: '£50',
    vol: '50ml',
  },
  {
    title: 'Enchanté Lumière ',
    price: '£60',
    vol: '60ml',
  },
  {
    title: 'Celestial Elixir',
    price: '£70',
    vol: '70ml',
  },
  {
    title: 'Grandeur Aura',
    price: '£90',
    vol: '90ml',
  },
];
// 50ml: £42.50
// 80ml: £60
// 100ml: £75
// 150ml: £100
// 180ml: £115
// 200ml: £125

const colognes = [
  {
    title: 'Elysian Cascade',
    price: '£90',
    vol: '90ml',
  },
  {
    title: "Radiant Splendor ",
    price: '£40',
    vol: '40ml',
  },
  {
    title: 'Noble Majesty',
    price: '£80',
    vol: '80ml',
  },
  {
    title: 'Luxe Paradigm',
    price: '£70',
    vol: '70ml',
  },
  {
    title: 'Harmonic Aura',
    price: '£50',
    vol: '50ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { perfumes, colognes, awards };
