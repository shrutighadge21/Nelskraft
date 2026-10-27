export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductVariety {
  id: string;
  name: string;
  image: string;
  thumbnails?: string[];
  specs: ProductSpecItem[];
  description?: string;
  additionalInfo?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: "refractory-products" | "biomass-fuels" | "industrial-minerals" | "mineral-materials";
  categoryName: string;
  shortDesc: string;
  description: string;
  applications: string[];
  specs: ProductSpecItem[];
  image: string;
  thumbnails?: string[];
  featured?: boolean;
  varieties?: ProductVariety[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
}

export const COMPANY_DETAILS = {
  name: "Nelskraft Refractory Pvt. Ltd.",
  shortName: "Nelskraft",
  tagline: "Building Durability, Enabling Sustainability.",
  taglineAlt: "BUILDING DURABILITY. ENABLING SUSTAINABILITY.",
  cin: "U23990PN2024PTC233992",
  gstin: "27AAJCN8508Q1ZM",
  phone: "+91 7020309001",
  phoneDisplay: "+91 7020309001",
  whatsappNumber: "917020309001",
  email: "info@nelskraft.com",
  website: "www.nelskraft.com",
  address: {
    line1: "S. No. 315/1, Grace Villa, Waghere Colony-1",
    line2: "Pimpri Gaon, Pimpri",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    pincode: "411017",
    full: "S. No. 315/1, Grace Villa, Waghere Colony-1, Pimpri Gaon, Pimpri, Pune, Maharashtra – 411017, India."
  },
  advisoryFocus: [
    "Refractory Industries",
    "Ceramic Engineering",
    "Biofuels & Biomass",
    "Boiler Design & Maintenance",
    "Geology & Mineralogy",
    "Supply Chain Logistics",
    "Strategic Operations"
  ]
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "refractory-products",
    slug: "refractory-products",
    title: "Refractory Products",
    tagline: "High-performance materials for high-temperature applications.",
    description: "Formulated for severe thermal environments up to 1700°C, furnace linings, boiler beds and continuous industrial heat resistance.",
    image: "/images/about-bricks.jpg",
    itemCount: 9
  },
  {
    id: "biomass-fuels",
    slug: "biomass-fuels",
    title: "Biomass Fuels",
    tagline: "Sustainable fuel solutions for efficient combustion.",
    description: "Clean-burning, high-calorific eco-friendly alternatives to coal engineered for industrial boilers, kilns and low-emission power units.",
    image: "/images/catalogue/pine-wood-pellets.jpg",
    itemCount: 3
  },
  {
    id: "industrial-minerals",
    slug: "industrial-minerals",
    title: "Industrial Minerals",
    tagline: "Quality minerals for industrial use.",
    description: "High-purity ball clays and graded silica sand with rigorous chemical consistency for advanced ceramics and industrial casting.",
    image: "/images/catalogue/page_10_img_1_87.jpeg",
    itemCount: 2
  }
];

export const PRODUCTS: ProductItem[] = [
  // --- 01. REFRACTORY PRODUCTS (9 Entries) ---
  {
    id: "high-alumina-brick-powder",
    name: "High Alumina Brick Powder",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Used in refractory bricks, mortar, welding flux, and nozzle mouth.",
    description: "High alumina brick powder is used in refractory bricks, mortar, welding flux and nozzle mouth (for iron filter manufacturing).",
    applications: [
      "Refractory Bricks Manufacturing",
      "High-Temperature Mortar Formulations",
      "Welding Flux Processing",
      "Nozzle Mouth (for Iron Filter manufacturing)"
    ],
    specs: [
      { label: "Size", value: "0 - 5 mm" },
      { label: "Al₂O₃ Content", value: "70%" },
      { label: "Mesh Size", value: "60 (fines)" },
      { label: "Temperature", value: "1700°C" }
    ],
    image: "/images/catalogue/page_3_img_0_37.jpeg",
    thumbnails: [
      "/images/catalogue/page_3_img_0_37.jpeg",
      "/images/catalogue/page_4_img_0_44.jpeg",
      "/images/catalogue/page_3_img_1_38.jpeg"
    ],
    featured: true
  },
  {
    id: "refractories-boiler-bed-material",
    name: "Refractories Boiler Bed Material (IS-8 Grade)",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Utilized in CFB boiler applications.",
    description: "Refractories boiler bed material IS-8 grade engineered specifically for Circulating Fluidized Bed (CFB) boiler usage with optimal thermal stability.",
    applications: [
      "CFB Boiler Usage",
      "Atmospheric Fluidized Bed Combustion (AFBC) Boilers",
      "Thermal Power & Cogeneration Units"
    ],
    specs: [
      { label: "Size", value: "0.85mm - 2.36mm" },
      { label: "Al₂O₃ Content", value: "35% - 40%" },
      { label: "SiO₂ Content", value: "45% - 55%" },
      { label: "Bulk Density", value: "1000 - 1100 m³" },
      { label: "Operating Temperature", value: "1400°C" }
    ],
    image: "/images/catalogue/page_3_img_1_38.jpeg",
    thumbnails: [
      "/images/catalogue/page_3_img_1_38.jpeg",
      "/images/catalogue/page_6_img_1_59.jpeg",
      "/images/catalogue/page_4_img_1_45.jpeg"
    ],
    featured: true
  },
  {
    id: "refractories-mortar",
    name: "Refractories Mortar",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Fire and air setting mortar for furnace construction.",
    description: "Fire and air setting mortar used for furnace construction and brick lining works, ensuring tight, durable bonding.",
    applications: [
      "Fire and Air Setting Mortar",
      "Furnace Construction",
      "Brick Lining Works"
    ],
    specs: [
      { label: "Size", value: "0 - 1 mm" },
      { label: "Mesh", value: "60 & 100 (Fines)" },
      { label: "Al₂O₃ Content", value: "50% - 70%" },
      { label: "Temperature", value: "1600°C" }
    ],
    image: "/images/catalogue/page_4_img_0_44.jpeg",
    thumbnails: [
      "/images/catalogue/page_4_img_0_44.jpeg",
      "/images/catalogue/page_3_img_0_37.jpeg",
      "/images/catalogue/page_5_img_0_51.jpeg"
    ],
    featured: false
  },
  {
    id: "refractories-castable",
    name: "Refractories Castable",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Used in furnace construction.",
    description: "Dense monolithic refractories castable for furnace construction. Size and chemical percentage can be customized according to customer preferences.",
    applications: [
      "Furnace Construction",
      "Monolithic Repairs",
      "Industrial Burner Linings"
    ],
    specs: [
      { label: "Size", value: "0 - 1mm, 1-3mm & 3-5 mm" },
      { label: "Al₂O₃ Content", value: "50% - 70%" },
      { label: "Temperature (50% Al₂O₃)", value: "1400°C" },
      { label: "Temperature (60% Al₂O₃)", value: "1500°C" },
      { label: "Temperature (70% Al₂O₃)", value: "1600°C" },
      { label: "Customization", value: "Customized per customer preferences" }
    ],
    image: "/images/catalogue/page_4_img_1_45.jpeg",
    thumbnails: [
      "/images/catalogue/page_4_img_1_45.jpeg",
      "/images/catalogue/page_6_img_1_59.jpeg",
      "/images/catalogue/page_4_img_0_44.jpeg"
    ],
    featured: true
  },
  {
    id: "fireclay",
    name: "Fireclay",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Used for furnace construction and brick lining.",
    description: "Finely ground natural fireclay for tasks related to furnace construction and brick lining with excellent thermal bonding properties.",
    applications: [
      "Furnace Construction",
      "Brick Lining Works",
      "Thermal Sealing"
    ],
    specs: [
      { label: "Mesh", value: "60 & 100 (Fines)" },
      { label: "Al₂O₃ Content", value: "30% - 50%" },
      { label: "Temperature", value: "1400°C - 1600°C" }
    ],
    image: "/images/catalogue/page_5_img_0_51.jpeg",
    thumbnails: [
      "/images/catalogue/page_5_img_0_51.jpeg",
      "/images/catalogue/page_5_img_1_52.jpeg",
      "/images/catalogue/page_4_img_0_44.jpeg"
    ],
    featured: false
  },
  {
    id: "cat-9-cement",
    name: "CAT - 9 Cement",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Used in cement applications in turbine power units.",
    description: "Specialized refractory cement formulated for high-vibration, intense thermal conditions in turbine power units.",
    applications: [
      "Cement Applications in Turbine Power Units",
      "High-Vibration Thermal Enclosures",
      "Power Plant Duct Linings"
    ],
    specs: [
      { label: "Mesh Size", value: "60 mesh" },
      { label: "Temperature", value: "1600°C" },
      { label: "Application", value: "Turbine Power Units" }
    ],
    image: "/images/catalogue/page_5_img_1_52.jpeg",
    thumbnails: [
      "/images/catalogue/page_5_img_1_52.jpeg",
      "/images/catalogue/page_5_img_0_51.jpeg",
      "/images/catalogue/page_6_img_0_58.jpeg"
    ],
    featured: false
  },
  {
    id: "refractories-brick-powder-is8",
    name: "Refractories Brick Powder (IS-8 Grade)",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Refractory bricks, mortar, welding flux, and nozzle mouth.",
    description: "IS-8 grade brick powder for refractory bricks, mortar, welding flux, and nozzle mouth (for iron filter manufacturing). Size and chemical percentage can be customized.",
    applications: [
      "Refractory Bricks & Mortar",
      "Welding Flux Formulations",
      "Nozzle Mouth (for Iron Filter manufacturing)"
    ],
    specs: [
      { label: "Size", value: "0 - 1 mm, 1-3mm & 3-5mm" },
      { label: "Al₂O₃ Content", value: "40% - 70%" },
      { label: "Temperature", value: "1400°C - 1700°C" },
      { label: "Customization", value: "Customized according to customer preferences" }
    ],
    image: "/images/catalogue/page_6_img_0_58.jpeg",
    thumbnails: [
      "/images/catalogue/page_6_img_0_58.jpeg",
      "/images/catalogue/page_6_img_1_59.jpeg",
      "/images/catalogue/page_3_img_0_37.jpeg"
    ],
    featured: false
  },
  {
    id: "is-6-bricks",
    name: "IS - 6 Bricks",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Standardized IS-6 dense refractory bricks for 1400°C masonry.",
    description: "Certified IS-6 grade refractory bricks engineered for furnace construction, boiler walls, and high-temperature thermal masonry.",
    applications: [
      "Furnace Walls & Masonry",
      "Boiler Fireboxes",
      "Incinerator Linings"
    ],
    specs: [
      { label: "Al₂O₃ Content", value: "30%" },
      { label: "Temperature", value: "1400°C" }
    ],
    image: "/images/catalogue/page_7_img_0_65.jpeg",
    thumbnails: [
      "/images/catalogue/page_7_img_0_65.jpeg",
      "/images/catalogue/page_7_img_1_66.jpeg",
      "/images/about-bricks.jpg"
    ],
    featured: false
  },
  {
    id: "is-8-bricks",
    name: "IS-8 Bricks",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "High-duty IS-8 dense refractory bricks for 1500°C masonry.",
    description: "Certified IS-8 grade refractory bricks formulated with 40% alumina content for superior structural endurance up to 1500°C.",
    applications: [
      "High-Temperature Furnace Chambers",
      "Industrial Kiln Walls",
      "Heavy-Duty Chimney Masonry"
    ],
    specs: [
      { label: "Al₂O₃ Content", value: "40%" },
      { label: "Temperature", value: "1500°C" }
    ],
    image: "/images/catalogue/page_7_img_1_66.jpeg",
    thumbnails: [
      "/images/catalogue/page_7_img_1_66.jpeg",
      "/images/catalogue/page_7_img_0_65.jpeg",
      "/images/about-bricks.jpg"
    ],
    featured: false
  },

  // --- 02. BIOMASS FUELS (3 Entries) ---
  {
    id: "biomass-pellets",
    name: "Biomass Pellets",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    shortDesc: "Biomass pellets are compact, cylindrical fuels made from biomass materials for industrial heating and combustion applications.",
    description: "Biomass pellets are compact, cylindrical fuels made from biomass materials for industrial heating and combustion applications.",
    applications: [
      "Industrial Boilers & Steam Generation",
      "Thermal Power Plants & Co-firing",
      "Process Heaters & Furnaces",
      "Textile, Food & Chemical Processing Plants"
    ],
    specs: [],
    image: "/images/catalogue/pellets-rice-husk.jpg",
    thumbnails: [
      "/images/catalogue/pellets-rice-husk.jpg",
      "/images/catalogue/pine-wood-pellets.jpg",
      "/images/catalogue/pellets-soya-rice-husk.jpg"
    ],
    featured: true,
    varieties: [
      {
        id: "rice-husk-pellets",
        name: "Rice Husk Pellets",
        image: "/images/catalogue/pellets-rice-husk.jpg",
        thumbnails: [
          "/images/catalogue/pellets-rice-husk.jpg"
        ],
        description:
          "Our high-quality biomass pellets are a reliable and eco-friendly alternative to coal, designed for efficient combustion in industrial applications. Reduces carbon footprint and fuel costs.",
        specs: [
          { label: "Gross Calorific Value (GCV)", value: "3200–3700" },
          { label: "Sizes Available", value: "8 mm, 16 mm and as per customer requirement" },
          { label: "Moisture", value: "4%–6%" },
          { label: "Advantage", value: "Sustainable & Cost-Effective" },
          { label: "Supply", value: "Consistent year-round availability" }
        ]
      },
      {
        id: "pine-wood-pellets",
        name: "Pine Wood Pellets",
        image: "/images/catalogue/pine-wood-pellets.jpg",
        thumbnails: [
          "/images/catalogue/pine-wood-pellets.jpg"
        ],
        description: "Biomass fuel pellets made from pine wood, supplied for industrial heating applications.",
        specs: [
          { label: "GCV", value: "4400" },
          { label: "Moisture", value: "6.68%" },
          { label: "Ash", value: "1.19%" },
          { label: "Size", value: "6 mm" }
        ]
      },
      {
        id: "soya-rice-husk-pellets",
        name: "Soya & Rice Husk Pellets",
        image: "/images/catalogue/pellets-soya-rice-husk.jpg",
        thumbnails: [
          "/images/catalogue/pellets-soya-rice-husk.jpg"
        ],
        description: "Cylindrical biomass fuel pellets made from soya and rice husk feedstock for industrial heating applications.",
        specs: [
          { label: "GCV", value: "3800" },
          { label: "Moisture", value: "5.65%" },
          { label: "Ash", value: "13.18%" },
          { label: "Size", value: "6 mm" }
        ]
      }
    ]
  },
  {
    id: "biomass-briquettes",
    name: "Biomass Briquettes",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    shortDesc: "Biomass briquettes are compressed solid fuels made from biomass residues for industrial heating and combustion applications.",
    description: "Biomass briquettes are compressed solid fuels made from biomass residues for industrial heating and combustion applications.",
    applications: [
      "Industrial Boilers & Steam Generation",
      "Process Furnaces & Kilns",
      "Thermic Fluid Heaters",
      "Direct Commercial Coal Replacement"
    ],
    specs: [
      { label: "GCV", value: "4000" },
      { label: "Moisture", value: "6.20%" },
      { label: "Ash", value: "8.0%" }
    ],
    image: "/images/catalogue/briquettes-bagasse-sawdust.jpg",
    thumbnails: [
      "/images/catalogue/briquettes-bagasse-sawdust.jpg",
      "/images/catalogue/briquettes-soya-rice.jpg"
    ],
    featured: true,
    varieties: [
      {
        id: "sugarcane-bagasse-sawdust-briquettes",
        name: "Sugarcane Bagasse & Sawdust Mix Briquettes",
        image: "/images/catalogue/briquettes-bagasse-sawdust.jpg",
        thumbnails: [
          "/images/catalogue/briquettes-bagasse-sawdust.jpg"
        ],
        description: "Compressed briquettes made from a mixture of sugarcane bagasse and sawdust for industrial heating applications.",
        specs: [
          { label: "GCV", value: "4000" },
          { label: "Moisture", value: "6.20%" },
          { label: "Ash", value: "8.0%" }
        ]
      },
      {
        id: "soya-rice-husk-briquettes",
        name: "Soya & Rice Husk Mix Briquettes",
        image: "/images/catalogue/briquettes-soya-rice.jpg",
        thumbnails: [
          "/images/catalogue/briquettes-soya-rice.jpg"
        ],
        description: "Compressed biomass briquettes made from a mixture of soya and rice husk for industrial heating applications.",
        specs: [
          { label: "GCV", value: "4000" },
          { label: "Moisture", value: "2%" },
          { label: "Ash", value: "13.2%" }
        ]
      }
    ]
  },
  {
    id: "de-oiled-cashew-nut-shell-cake",
    name: "De-oiled Cashew Nut Shell Cake",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    shortDesc: "Eco-friendly biomass fuel derived from cashew nut shells after CNSL extraction.",
    description: "Eco-friendly biomass fuel derived from cashew nut shells after CNSL extraction.",
    applications: [
      "Industrial Boilers & Thermic Fluid Heaters",
      "Cement & Lime Kilns",
      "High-Heat Industrial Furnaces",
      "Direct Coal Replacement in Heavy Industry"
    ],
    specs: [],
    image: "/images/catalogue/cashew-nut-shell-cake.jpg",
    thumbnails: [
      "/images/catalogue/cashew-nut-shell-cake.jpg",
      "/images/catalogue/page_9_img_1_79.jpeg"
    ],
    featured: true
  },

  // --- 03. INDUSTRIAL MINERALS (2 Entries) ---
  {
    id: "ball-clay",
    name: "Ball Clay",
    category: "industrial-minerals",
    categoryName: "Industrial Minerals",
    shortDesc: "Exceptional plasticity and bonding for high-quality ceramics.",
    description: "Ball clay’s exceptional plasticity makes it essential in ceramic manufacturing, allowing easy shaping for intricate designs. Its high green strength prevents cracks during handling, while superior bonding enhances durability, making it ideal for high-quality ceramics.",
    applications: [
      "Ceramic Manufacturing & Sanitaryware",
      "Electrical Porcelain & Tableware",
      "Refractory Bonding Clay",
      "Precision Casting"
    ],
    specs: [
      { label: "SiO₂", value: "47.2%" },
      { label: "Al₂O₃", value: "35.1%" },
      { label: "Fe₂O₃", value: "0.85%" },
      { label: "TiO₂", value: "1.50%" },
      { label: "Water of Plasticity", value: "42%" },
      { label: "Dry MOR", value: "30 kg/cm² (Extruded Bar)" },
      { label: "Fired Shrinkage (1205°C)", value: "12%" },
      { label: "Fired MOR (1205°C)", value: "> 300 kg/cm²" }
    ],
    image: "/images/catalogue/page_10_img_1_87.jpeg",
    thumbnails: [
      "/images/catalogue/page_10_img_1_87.jpeg",
      "/images/catalogue/page_10_img_0_85.jpeg",
      "/images/catalogue/page_11_img_2_95.jpeg"
    ],
    featured: true
  },
  {
    id: "silica-sand",
    name: "Silica Sand",
    category: "industrial-minerals",
    categoryName: "Industrial Minerals",
    shortDesc: "High-purity industrial mineral for chemical stability and durability.",
    description: "Silica sand is a high-purity industrial mineral primarily composed of silicon dioxide (SiO₂). It is widely used in various industries for its chemical stability, durability, and high-temperature resistance. The material is available in different grades to meet the requirements of diverse applications.",
    applications: [
      "Foundry Casting & Core Making",
      "Glass & Ceramic Manufacturing",
      "Refractory Mortars & Castable Aggregates",
      "Industrial Filtration Systems"
    ],
    specs: [
      { label: "Silica (SiO₂)", value: "84.00 - 93.00%" },
      { label: "Alumina (Al₂O₃)", value: "2.00 - 8.00%" },
      { label: "Iron (Fe₂O₃)", value: "0.30 - 1.80%" },
      { label: "Loss on Ignition", value: "1.00 - 5.00%" }
    ],
    image: "/images/catalogue/page_11_img_0_93.jpeg",
    thumbnails: [
      "/images/catalogue/page_11_img_0_93.jpeg",
      "/images/catalogue/page_11_img_1_94.jpeg",
      "/images/catalogue/page_11_img_2_95.jpeg"
    ],
    featured: true
  }
];

export const APPLICATIONS_LIST = [
  {
    id: "furnace-construction",
    title: "Furnace Construction",
    subtitle: "High-Temperature Thermal Linings",
    description: "Refractory bricks, mortars, and high-alumina castables engineered to withstand 1400°C - 1700°C molten metallurgy and thermal shocks.",
    image: "/images/app-furnace.jpg",
    iconName: "Flame"
  },
  {
    id: "boiler-applications",
    title: "Boiler Applications",
    subtitle: "Fluidized Bed & Combustion Systems",
    description: "Low-attrition boiler bed material (IS-8 Grade) and dense castables designed specifically for CFB/AFBC steam and power units.",
    image: "/images/app-boiler.jpg",
    iconName: "Factory"
  },
  {
    id: "ceramic-industry",
    title: "Ceramic Industry",
    subtitle: "High-Plasticity Raw Materials",
    description: "High green strength ball clay (35.1% Al₂O₃) and high-purity silica sand for ceramic tiles, sanitaryware, and electrical porcelain.",
    image: "/images/app-ceramic.jpg",
    iconName: "Layers"
  },
  {
    id: "industrial-use",
    title: "Industrial Use",
    subtitle: "Continuous Plant Operations",
    description: "Eco-friendly biomass pellets, bio shell cake, and specialized CAT-9 cement for low-carbon heavy industrial facilities.",
    image: "/images/app-industrial.jpg",
    iconName: "Cog"
  }
];

export const COMMITMENTS_LIST = [
  {
    title: "Sustainable Material Solutions",
    description: "Providing biomass fuels that reduce reliance on fossil coal alongside environmentally responsible mineral sourcing.",
    icon: "Leaf"
  },
  {
    title: "Quality-Focused Approach",
    description: "Rigorous quality control and precise chemical characterization (XRF) to ensure predictable performance in critical thermal setups.",
    icon: "ShieldCheck"
  },
  {
    title: "Customer-Centric Support",
    description: "Dedicated relationship managers and timely Management Information System (MIS) reports to guide evidence-based decisions.",
    icon: "Users"
  }
];

export function getWhatsAppUrl(productName?: string): string {
  const phone = COMPANY_DETAILS.whatsappNumber;
  let text = `Hello Nelskraft Refractory Pvt. Ltd., I am interested in discussing industrial material requirements.`;
  if (productName) {
    text = `Hello Nelskraft Refractory Pvt. Ltd., I would like to enquire about "${productName}" from your catalogue. Please provide specifications and commercial details.`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
