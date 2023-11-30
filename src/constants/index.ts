import { slugify } from '../utils'

export const tickets = [
  {
    name: 'Music Festival',
    slug: slugify('Music Festival'),
    description: 'Drake Concrete & more ...',
    isVip: false,
    count: 10,
    price: 100,
  },
  {
    name: 'Hockey Game',
    slug: slugify('Hockey Game'),
    description: 'Maple Leafs vs Canucks hockey game ...',
    isVip: true,
    count: 10,
    price: 200,
  },
]