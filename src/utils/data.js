const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 1099,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Backpack",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 300,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://placehold.co/300x300/f5f5f0/1C1C1E?text=T-Shirt",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 1155,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Jacket",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 900,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Slim+Fit",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 6950,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Bracelet",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 7500,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Micropave",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 3999,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Ring",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10999,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Earrings",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 999,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
    category: "electronics",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Hard+Drive",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 699,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\" hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=SSD",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 5000,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=SSD+256GB",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 25000,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Gaming+Drive",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 19999,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Monitor",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 70000,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Gaming+Monitor",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 2599,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable …",
    category: "women's clothing",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Snowboard+Jacket",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Fleece Lined Quilted Puffer Jacket",
    price: 3899,
    description:
      "100% Polyester; Imported; Rubber Sole; Shaft Measures approximately low-top from arch; Lace-up front closure; Soft, comfortable lining; Padded insole; Lightweight and flexible outsole",
    category: "women's clothing",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Puffer+Jacket",
    rating: {
      rate: 4.3,
      count: 250,
    },
  },
  {
    id: 17,
    title:
      "Rain Jacket Women Windbreaker Autumn Raincoats Lightweight Packable Hooded",
    price: 1299,
    description:
      "Lightweight and packable rain jacket for women. Perfect for outdoor activities, hiking, camping, and everyday wear. Features adjustable hood, elastic cuffs, and water-resistant material to keep you dry in light rain.",
    category: "women's clothing",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Rain+Jacket",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 1999,
    description:
      "Solid Short Sleeve Boat Neck V Neck Tee. Perfect for casual wear, work, or everyday comfort. Made from soft, breathable fabric that feels great against the skin. Available in multiple colors to match your style.",
    category: "women's clothing",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Boat+Neck+Tee",
    rating: {
      rate: 4.2,
      count: 230,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture Wicking Workout T-Shirt",
    price: 1299,
    description:
      "Moisture-wicking fabric keeps you dry and comfortable during workouts. Short sleeve design with a relaxed fit for easy movement. Perfect for gym, running, yoga, or any active lifestyle.",
    category: "women's clothing",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Workout+Tee",
    rating: {
      rate: 4.5,
      count: 410,
    },
  },
  {
    id: 20,
    title: "Danvoy Women's Open Front Chunky Knit Cardigan",
    price: 2499,
    description:
      "Cozy open-front cardigan with chunky knit design. Perfect for layering over your favorite outfits. Soft, warm fabric that's ideal for fall and winter. Available in various colors to complement your wardrobe.",
    category: "women's clothing",
    image: "https://placehold.co/300x300/f5f5f0/1C1C1E?text=Knit+Cardigan",
    rating: {
      rate: 4.1,
      count: 260,
    },
  },
];

export default data;
