import { Room, Amenity, Review, GalleryItem } from './types';

export const roomsData: Room[] = [
  {
    id: 'solo-executive',
    name: 'Solo Executive',
    type: 'solo',
    price: 1200,
    ac: false,
    wifi: true,
    bedType: 'Twin Single Bed',
    capacity: '1 Adult',
    size: '180 sq. ft.',
    description: 'Perfect for solo travelers looking for high-quality lodging on a budget.',
    longDescription: 'Our Solo Executive room offers an ideal combination of utility, cleanliness, and minimalism. Styled with soft neutral tones, it includes a cozy twin bed with clean premium linens, work table, high-speed Wi-Fi, and a pristine private bathroom to refresh yourself.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0aBby0XzovevaopmfFZVLDTQFrGFeYKai4NVLn9rsQ1jTI4vwhbgGxr6TUT-m8pRek9NlaX25cjLmwp3zOwY31EhiN_Y6cClMDVUR6cd5UIWuouUxO0oWGh3dUOjpkva3pBoRsW9e1VaRTTO4bnSbpEsGkssI1FjRfo8VvHQ8btQuags4zhc--Voqg5SC8sXUA5UpqtVeSXbITntEtph9AEYzfghy6QJ97rEilrhNEOEDNqjXbCmOYMlTu85iD9dtzslVY0MrcYA',
    amenities: ['Free High-Speed Wi-Fi', 'Refreshing Ventilation', 'Daily Housekeeping', '24/7 Room Service', 'Prisine Washroom'],
  },
  {
    id: 'business-deluxe',
    name: 'Business Deluxe (AC)',
    type: 'business',
    price: 2500,
    ac: true,
    wifi: true,
    bedType: 'Comfort King Bed',
    capacity: '2 Adults',
    size: '280 sq. ft.',
    description: 'Spacious and climate-controlled with premium bedding for ultimate rest.',
    longDescription: 'Specifically designed for corporate executives and demanding travelers. Features a beautifully illuminated floral wooden headboard that creates a warm, premium ambient glow at night, modern air-conditioning, dedicated study seat, high-speed connection, and complete privacy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgp6lQ4Hw4ZW0-9MPwcwicxyHab_Uvrzm8WbpHOdXlj__JiU9XwqTFO6NOfeOwhGJ6PpseDzyASvy7Ze2P7mse0u8u7SJni7x530-Y3V-6W1VzzgGkXtWC1Fesd6HxHbGUeAp-eMxPxRCCzhJWxST-kfHy0eXLxrYUonU4mCZhAcNfukPxGQfC8Wzt0Ielc9kLfcv7UPbhIi6HtW0QI3z3-3LI6g4EjnG_ly9kYMMWNhEmfsFR0UneUVKo7vVNBeGYg36730Fwkf0',
    amenities: ['Silent Split AC', 'Free High-Speed Wi-Fi', 'King Premium Mattress', 'Ambient Glow Lighting', 'LED TV', 'Premium Toiletries'],
    topChoice: true,
  },
  {
    id: 'family-premium',
    name: 'Family Premium (AC)',
    type: 'family',
    price: 4000,
    ac: true,
    wifi: true,
    bedType: 'Double Queen Beds',
    capacity: 'Up to 4 Adults',
    size: '420 sq. ft.',
    description: 'Enhanced space with multiple bedding arrangements and premium seating.',
    longDescription: 'The ultimate space for families visiting Washim. Boasting two luxurious queen-sized beds, a separate seating lounge corner, a large Smart TV for entertainment, modern air-conditioning, and beautiful wooden wardrobes to accommodate all belongings easily.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0h6p44Iro28hXBpn9_4qyGEUX0P-pV2SK6SEsTcT0daxjifMERBV5OBAcnAPJ-DF4xvPSxVq-2Y2Yd837OQX5cWwfgcqlMT__ro82SGKlrihQ7qNEgrU56FgpTcrO44f_IXNJmwK737NHrZKg7BLPePxdETG0xx_0M8N2El5uoBm5Odicy8JYYJQDTFPzit3US8WQcdmYSo_tTTrWCvdJy2vtvboX6awzQCXUCIUPLrm9P54dhaITptyur1n7i1GdbRSit7ozSY',
    amenities: ['Double Queen Bedding', 'Powerful Air Conditioning', 'Free High-Speed Wi-Fi', 'Smart LED TV', 'Tea & Coffee Maker', 'Spacious Seating Area']
  }
];

export const amenitiesData: Amenity[] = [
  {
    id: 'wifi',
    name: 'High-Speed Wi-Fi',
    icon: 'wifi',
    description: 'Complimentary high-speed fiber internet throughout the guest house.'
  },
  {
    id: 'breakfast',
    name: 'Free Breakfast',
    icon: 'free_breakfast',
    description: 'Fresh and tasty local Maharashtrian breakfast prepared daily.'
  },
  {
    id: 'parking',
    name: 'Free Parking',
    icon: 'local_parking',
    description: 'Spacious secure parking area for both two-wheelers and four-wheelers.'
  },
  {
    id: 'ac',
    name: 'AC Rooms',
    icon: 'ac_unit',
    description: 'Powerful silent split air-conditioning systems for climate comfort.'
  },
  {
    id: 'service',
    name: '24/7 Room Service',
    icon: 'room_service',
    description: 'Round-the-clock responsive team to answer any service query or laundry need.'
  }
];

export const reviewsData: Review[] = [
  {
    id: 'rev-1',
    name: 'Rahul Kulkarni',
    rating: 5,
    comment: 'Excellent service and very clean rooms. The staff is very polite and helpful. Highly recommended for family stays in Washim.',
    date: '2 weeks ago',
    avatar: 'RK',
    userType: 'Verified Guest'
  },
  {
    id: 'rev-2',
    name: 'Sneha Patil',
    rating: 4,
    comment: 'Convenient location near Pusad Naka close to transportation hubs. The breakfast was fresh and tasty. Good value for money. Will definitely stay again.',
    date: '1 month ago',
    avatar: 'SP',
    userType: 'Business Traveler'
  },
  {
    id: 'rev-3',
    name: 'Abhishek Deshmukh',
    rating: 5,
    comment: 'Stayed in the Deluxe AC Room. The ambient lighting of the room headboard is spectacular. Exceptionally clean sheets, helpful check-in process, and secure parking.',
    date: '3 weeks ago',
    avatar: 'AD',
    userType: 'Family Vacation'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'exterior',
    title: 'Rajeshwari Guest House Grand Exterior at Night',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYsQvoa6G1kHeNs8DE2WQIJmiTDjYBSE3p3D8nrSxpDf39S01dj4Z1blJmNO7hp2iMNvGvcF05L3eEfq3MTfOz_f6pscqUVqycG7_wz4xQBpYfncoI2cMaLiwhDVA6fGz85MNTjo-JNARIysJ-UqF5JV7-erRRpjSrFOMHEB33v6M-wRWbyxifMdOSdTC9fbSPkpXeGwkFdTRTn-2XjSYOMVIbOBGyuRHfg0o9T6nq5qnVdt0jiTBm-seRS4NXD11El68yWXIgneM'
  },
  {
    id: 'gal-2',
    category: 'reception',
    title: 'Warm Lobby and Modern Billing Counter',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrI5YmXOJPzYlsxsO9JOEfrnlbA9F-dP562QS3hWDsWNybEdWXmsF3cXj1PK1zHnMZC2ahFmDYremo8CBOT4zc5hfaxEjk2DJgylvQeuXCnPElmUAcGOu3mTjEpUXhbCofWc9TcJUmGFppLIpbbtyeBTbGVEZjHFDP3hd84zIIlZ5BF83t2eJGZcChIocLlz7munop5eSkrPloGZfmd1lgYM_ojN9RSUJDQC4d9I_O3J_qrDVgByIyATNACfQHz8-1f7-iAFkEACQ'
  },
  {
    id: 'gal-3',
    category: 'rooms',
    title: 'Prisinte Bedding with Floral Headboard and Backlight',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgp6lQ4Hw4ZW0-9MPwcwicxyHab_Uvrzm8WbpHOdXlj__JiU9XwqTFO6NOfeOwhGJ6PpseDzyASvy7Ze2P7mse0u8u7SJni7x530-Y3V-6W1VzzgGkXtWC1Fesd6HxHbGUeAp-eMxPxRCCzhJWxST-kfHy0eXLxrYUonU4mCZhAcNfukPxGQfC8Wzt0Ielc9kLfcv7UPbhIi6HtW0QI3z3-3LI6g4EjnG_ly9kYMMWNhEmfsFR0UneUVKo7vVNBeGYg36730Fwkf0'
  },
  {
    id: 'gal-4',
    category: 'amenities',
    title: 'Modern and Spotless Ensuite Bathroom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzqJxiliFXFEn6CnQ8yANAMGISaO-FoxYQ52EX5gQK6xv9mu98kbWMphRGP9KVmxF_LH1OEFEOMzcxkNT3qNbPUcZC7vrExF6QUB_3kXjtczsrTIGZBxnkmTzLzIDNQ--rK6rvb7CkJIJ16YnaARaww8pSCYbdiknD-dXU1fEoUcr_tprfrECGlfVeND2jv28bkq5P7O2aczve1BnyWHvV1hLowUXfO45VCHEdXepGS_B5t3-KWjsLN8zwGU3vCNp2OEro-oQytyU'
  },
  {
    id: 'gal-5',
    category: 'amenities',
    title: 'Sunny Communal Sitting Area and Lounge',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvXYwnG9ICA0XFynqXZChx4ATMU2zpTkrgWaKvklqDHYitdrPGwsFKmpOhP9jck2t7zSH5ldCHaptuXGQcKIavf-vK9q0bh3XTEwq3BNKtM127xS3osP0_w235eCGE68N5ydjN3MKtiBLzhZW0xWugQMEfVP1TwcVX77eVw_cPyPN1pbqSr8n-x079-inYBv8EGSBFGlkMiTjeKbK6uKpOvA-7Qeod0fFX78ytw59CZR2Y5gePD9oeJXYPLCcbGJVX3WK1g9_lobk'
  },
  {
    id: 'gal-6',
    category: 'rooms',
    title: 'Solo Suite Design for Relaxing Travel',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0aBby0XzovevaopmfFZVLDTQFrGFeYKai4NVLn9rsQ1jTI4vwhbgGxr6TUT-m8pRek9NlaX25cjLmwp3zOwY31EhiN_Y6cClMDVUR6cd5UIWuouUxO0oWGh3dUOjpkva3pBoRsW9e1VaRTTO4bnSbpEsGkssI1FjRfo8VvHQ8btQuags4zhc--Voqg5SC8sXUA5UpqtVeSXbITntEtph9AEYzfghy6QJ97rEilrhNEOEDNqjXbCmOYMlTu85iD9dtzslVY0MrcYA'
  }
];

export const faqData = [
  {
    q: "Where is Rajeshwari Guest House located?",
    a: "We are located at Pusad Naka, Akola Road, Washim, Maharashtra 444505. This central location connects perfectly to shopping, medical facilities, and transportation units."
  },
  {
    q: "How can I contact the guest house?",
    a: "You can call us directly on our mobile number +91 82086 01647 or send us an instant WhatsApp chat using the WhatsApp button for direct reservation inquiries."
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Standard Check-In time is 2:00 PM and Check-Out time is 12:00 PM (Noon). If you require early availability or late exit, please inform us in advance so we can assist if rooms are empty."
  },
  {
    q: "Is parking safely available?",
    a: "Absolutely. We secure free dedicated parking slots right on site under camera surveillance to protect your family cars or tour vehicles."
  },
  {
    q: "Do you have dining services of your own?",
    a: "We prepare and serve fresh hot breakfast options (such as Poha, Upma, or Parathas) every morning. Additionally, since Pusad Naka sits centrally, several premium multi-cuisine restaurants, delivery spots, and family diners are within 1-5 minutes walk."
  }
];
