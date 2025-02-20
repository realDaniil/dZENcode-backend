export const orders = [
  {
    id: 1,
    title: 'Компьютеры',
    date: '2025-01-19 12:09:33',
    description: 'desc',
    type: 'Desktop',
    get products() {
      return productsComputers;
    }
  },
  {
    id: 2,
    title: 'Телефоны',
    date: '2024-06-29 12:09:33',
    description: 'desc',
    type: 'Smartphone',
    get products() {
      return productsPhones;
    }
  },
  {
    id: 3,
    title: 'Прочее',
    date: '2024-09-08 12:09:33',
    description: 'desc',
    type: 'Other',
    get products() {
      return productsOther;
    }
  }
];

export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'uploads/comp.png',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'uploads/comp2.png',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  }
];

export const productsComputers = [
  {
    id: 1001,
    serialNumber: 1001,
    isNew: 1,
    photo: 'uploads/computer1.png',
    title: 'Gaming PC Alpha',
    type: 'Desktop',
    specification: 'Intel i9, 32GB RAM, RTX 4080',
    guarantee: { start: '2024-01-01 10:00:00', end: '2026-01-01 10:00:00' },
    price: [
      { value: 74000, symbol: 'UAH', isDefault: 1 },
      { value: 2000, symbol: 'USD', isDefault: 0 }
    ],
    order: 1,
    date: '2024-03-01 14:30:00'
  },
  {
    id: 1002,
    serialNumber: 1002,
    isNew: 1,
    photo: 'uploads/computer2.png',
    title: 'PC High Core',
    type: 'Desktop',
    specification: 'Intel i5, 16GB RAM, Intel UHD',
    guarantee: { start: '2024-02-01 10:00:00', end: '2026-02-01 10:00:00' },
    price: [
      { value: 25900, symbol: 'UAH', isDefault: 1 },
      { value: 700, symbol: 'USD', isDefault: 0 }
    ],
    order: 1,
    date: '2024-06-05 11:00:00'
  },
  {
    id: 1003,
    serialNumber: 1003,
    isNew: 1,
    photo: 'uploads/computer3.png',
    title: 'Ultra Comp Super Gamma Pro 2000',
    type: 'Desktop',
    specification: 'AMD Ryzen 7, 16GB RAM, Radeon RX',
    guarantee: { start: '2024-01-15 09:00:00', end: '2026-01-15 09:00:00' },
    price: [
      { value: 22600, symbol: 'UAH', isDefault: 1 },
      { value: 800, symbol: 'USD', isDefault: 0 }
    ],
    order: 1,
    date: '2024-02-10 13:45:00'
  },
  {
    id: 1004,
    serialNumber: 1004,
    isNew: 0,
    photo: 'uploads/computer4.png',
    title: 'Office PC Beta',
    type: 'Desktop',
    specification: 'AMD Ryzen 7, 16GB RAM, Radeon RX',
    guarantee: { start: '2024-01-15 09:00:00', end: '2026-01-15 09:00:00' },
    price: [
      { value: 18500, symbol: 'UAH', isDefault: 1 },
      { value: 500, symbol: 'USD', isDefault: 0 }
    ],
    order: 1,
    date: '2025-02-10 13:45:00'
  },
  {
    id: 1005,
    serialNumber: 1005,
    isNew: 1,
    photo: 'uploads/computer5.png',
    title: 'Gaming Beast Zeta',
    type: 'Desktop',
    specification: 'Intel i7, 16GB RAM, GTX 1660 Ti',
    guarantee: { start: '2024-03-01 10:00:00', end: '2026-03-01 10:00:00' },
    price: [
      { value: 55500, symbol: 'UAH', isDefault: 1 },
      { value: 1500, symbol: 'USD', isDefault: 0 }
    ],
    order: 1,
    date: '2024-01-15 12:00:00'
  },
  {
    id: 1006,
    serialNumber: 1006,
    isNew: 1,
    photo: 'uploads/computer6.png',
    title: 'Workstation Pro Z',
    type: 'Desktop',
    specification: 'AMD Ryzen 9, 64GB RAM, RTX 3090',
    guarantee: { start: '2024-04-01 10:00:00', end: '2026-04-01 10:00:00' },
    price: [
      { value: 129500, symbol: 'UAH', isDefault: 1 },
      { value: 3500, symbol: 'USD', isDefault: 0 }
    ],
    order: 1,
    date: '2024-11-17 16:00:00'
  },
  {
    id: 1007,
    serialNumber: 1007,
    isNew: 0,
    photo: 'uploads/computer7.png',
    title: 'Compact Work PC',
    type: 'Desktop',
    specification: 'Intel i3, 8GB RAM, Integrated Graphics',
    guarantee: { start: '2024-05-01 10:00:00', end: '2026-05-01 10:00:00' },
    price: [
      { value: 14800, symbol: 'UAH', isDefault: 1 },
      { value: 400, symbol: 'USD', isDefault: 0 }
    ],
    order: 1,
    date: '2024-03-18 09:00:00'
  }
];

export const productsPhones = [
  {
    id: 2001,
    serialNumber: 2001,
    isNew: 1,
    photo: 'uploads/phone1.png',
    title: 'iPhone 16 Pro Max',
    type: 'Smartphone',
    specification: '6.5" OLED, 128GB, 5G',
    guarantee: { start: '2024-02-01 12:00:00', end: '2025-02-01 12:00:00' },
    price: [
      { value: 39960, symbol: 'UAH', isDefault: 1 },
      { value: 999, symbol: 'USD', isDefault: 0 }
    ],
    order: 2,
    date: '2024-03-25 16:00:00'
  },
  {
    id: 2002,
    serialNumber: 2002,
    isNew: 0,
    photo: 'uploads/phone2.png',
    title: 'Samsung S24 Ultra',
    type: 'Smartphone',
    specification: '6.1" LCD, 64GB, 4G',
    guarantee: { start: '2024-02-05 10:00:00', end: '2025-02-05 10:00:00' },
    price: [
      { value: 14000, symbol: 'UAH', isDefault: 1 },
      { value: 350, symbol: 'USD', isDefault: 0 }
    ],
    order: 2,
    date: '2024-10-28 09:45:00'
  },
  {
    id: 2003,
    serialNumber: 2003,
    isNew: 1,
    photo: 'uploads/phone3.png',
    title: 'Google Pixel 9',
    type: 'Smartphone',
    specification: '6.8" AMOLED, 256GB, 5G',
    guarantee: { start: '2024-01-25 08:00:00', end: '2025-01-25 08:00:00' },
    price: [
      { value: 52000, symbol: 'UAH', isDefault: 1 },
      { value: 1300, symbol: 'USD', isDefault: 0 }
    ],
    order: 2,
    date: '2024-02-20 12:30:00'
  }
];

export const productsOther = [
  {
    id: 3001,
    serialNumber: 3001,
    isNew: 1,
    photo: 'uploads/other1.png',
    title: 'iPad Pro 12',
    type: 'Other',
    specification: '12.9" Retina, 512GB',
    guarantee: { start: '2024-02-01 14:00:00', end: '2025-02-01 14:00:00' },
    price: [
      { value: 44000, symbol: 'UAH', isDefault: 1 },
      { value: 1100, symbol: 'USD', isDefault: 0 }
    ],
    order: 3,
    date: '2024-02-22 15:00:00'
  },
  {
    id: 3002,
    serialNumber: 3002,
    isNew: 1,
    photo: 'uploads/other2.png',
    title: 'Apple Watch',
    type: 'Other',
    specification: '1.8" OLED, GPS, LTE',
    guarantee: { start: '2024-01-20 09:30:00', end: '2025-01-20 09:30:00' },
    price: [
      { value: 11960, symbol: 'UAH', isDefault: 1 },
      { value: 299, symbol: 'USD', isDefault: 0 }
    ],
    order: 3,
    date: '2023-01-20 10:15:00'
  },
  {
    id: 3003,
    serialNumber: 3003,
    isNew: 0,
    photo: 'uploads/other3.png',
    title: 'Air Pods',
    type: 'Other',
    specification: 'Bluetooth 5.3, Noise Cancelling',
    guarantee: { start: '2024-02-10 11:00:00', end: '2025-02-10 11:00:00' },
    price: [
      { value: 10000, symbol: 'UAH', isDefault: 1 },
      { value: 250, symbol: 'USD', isDefault: 0 }
    ],
    order: 3,
    date: '2024-04-17 17:20:00'
  },
  {
    id: 3004,
    serialNumber: 3004,
    isNew: 1,
    photo: 'uploads/other4.png',
    title: 'JBL Party Box',
    type: 'Other',
    specification: 'High quality, EU standards',
    guarantee: { start: '2024-02-10 11:00:00', end: '2025-02-10 11:00:00' },
    price: [
      { value: 26000, symbol: 'UAH', isDefault: 1 },
      { value: 650, symbol: 'USD', isDefault: 0 }
    ],
    order: 3,
    date: '2025-02-18 17:20:00'
  }
];
