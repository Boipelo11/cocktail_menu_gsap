const navLinks = [
  {
    id: 'cocktails',
    title: 'Cocktails'
  },
  {
    id: 'about',
    title: 'About Us'
  },
  {
    id: 'work',
    title: 'The Art'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const cocktailLists = [
  {
    name: 'Mojito',
    country: 'CU',
    detail: 'Mint, lime & rum',
    price: 'R85'
  },
  {
    name: 'Margarita',
    country: 'MX',
    detail: 'Tequila, lime & orange liqueur',
    price: 'R90'
  },
  {
    name: 'Amarula Espresso Martini',
    country: 'ZA',
    detail: 'Amarula, vodka & espresso',
    price: 'R95'
  },
  {
    name: 'Strawberry Daiquiri',
    country: 'CU',
    detail: 'Strawberry, lime & rum',
    price: 'R90'
  }
]

const mockTailLists = [
  {
    name: 'Tropical Sunset',
    country: 'ZA',
    detail: 'Pineapple, orange & grenadine',
    price: 'R65'
  },
  {
    name: 'Passionfruit Spritz',
    country: 'ZA',
    detail: 'Passionfruit, lime & soda',
    price: 'R70'
  },
  {
    name: 'Strawberry Mojito',
    country: 'ZA',
    detail: 'Strawberry, mint & lime',
    price: 'R65'
  },
  {
    name: 'Rooibos Fizz',
    country: 'ZA',
    detail: 'Rooibos, lemon & sparkling water',
    price: 'R60'
  }
]

const profileLists = [
  {
    imgPath: '/images/profile1.png'
  },
  {
    imgPath: '/images/profile2.png'
  },
  {
    imgPath: '/images/profile3.png'
  },
  {
    imgPath: '/images/profile4.png'
  }
]

const featureLists = [
  'Perfectly balanced blends',
  'Garnished to perfection',
  'Ice-cold every time',
  'Expertly shaken & stirred'
]

const goodLists = [
  'Handpicked ingredients',
  'Signature techniques',
  'Bartending artistry in action',
  'Freshly muddled flavors'
]

const storeInfo = {
  heading: 'Where to Find Us',
  address: '456, Raq Blvd. #404, Los Angeles, CA 90210',
  contact: {
    phone: '(555) 987-6543',
    email: 'hello@jsmcocktail.com'
  }
}

const openingHours = [
  { day: 'Mon–Thu', time: '11:00am – 12am' },
  { day: 'Fri', time: '11:00am – 2am' },
  { day: 'Sat', time: '9:00am – 2am' },
  { day: 'Sun', time: '9:00am – 1am' }
]

const socials = [
  {
    name: 'Instagram',
    icon: '/images/insta.png',
    url: '#'
  },
  {
    name: 'X (Twitter)',
    icon: '/images/x.png',
    url: '#'
  },
  {
    name: 'Facebook',
    icon: '/images/fb.png',
    url: '#'
  }
]

const sliderLists = [
  {
    id: 1,
    name: 'Passionfruit Martini',
    image: '/images/drink1.png',
    title: 'Tropical, Tangy & Irresistible',
    description:
      'A silky blend of vodka, passionfruit, and vanilla with a bright citrus finish. Tropical, smooth, and made for a night out.'
  },
  {
    id: 2,
    name: 'Watermelon Cooler',
    image: '/images/drink2.png',
    title: 'Fresh, Juicy & Refreshing',
    description:
      'Fresh watermelon meets vodka, lime, and a hint of mint in this crisp and refreshing cocktail. Light, fruity, and perfect for sunny days.'
  },
  {
    id: 3,
    name: 'Strawberry Sunset',
    image: '/images/drink3.png',
    title: 'Sweet, Fruity & Vibrant',
    description:
      'Fresh strawberries, pineapple, and a splash of citrus come together in this bright and juicy cocktail with a smooth, refreshing finish.'
  },
  {
    id: 4,
    name: 'Sunset Spritz',
    image: '/images/drink4.png',
    title: 'Bright, Citrus & Refreshing',
    description:
      'A vibrant blend of orange, passionfruit, and sparkling bubbles with a splash of citrus. Fresh, fruity, and made to brighten your evening.'
  }
]

export {
  cocktailLists,
  featureLists,
  goodLists,
  mockTailLists,
  navLinks,
  openingHours,
  profileLists,
  sliderLists,
  socials,
  storeInfo
}
