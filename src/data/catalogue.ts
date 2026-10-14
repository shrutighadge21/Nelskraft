export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: "refractory-products" | "biomass-fuels" | "mineral-materials";
  categoryName: string;
  shortDesc: string;
  description: string;
  applications: string[];
  specs: ProductSpecItem[];
  image: string;
  featured?: boolean;
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
    image: "/images/cat-refractory.jpg",
    itemCount: 8
  },
  {
    id: "biomass-fuels",
    slug: "biomass-fuels",
    title: "Biomass Fuels",
    tagline: "Sustainable fuel solutions for efficient combustion.",
    description: "Clean-burning, high-calorific eco-friendly alternatives to coal engineered for industrial boilers, kilns and low-emission power units.",
    image: "/images/cat-biomass.jpg",
    itemCount: 2
  },
  {
    id: "mineral-materials",
    slug: "mineral-materials",
    title: "Mineral Materials",
    tagline: "Quality minerals for industrial use.",
    description: "High-purity ball clays and graded silica sand with rigorous chemical consistency for advanced ceramics and industrial casting.",
    image: "/images/cat-minerals.jpg",
    itemCount: 2
  }
];

export const PRODUCTS: ProductItem[] = [
  // --- REFRACTORY PRODUCTS ---
  {
    id: "high-alumina-brick-powder",
    name: "High Alumina Brick Powder",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "70% Al₂O₃ refractory powder for bricks, mortar, welding flux and iron filter nozzle mouths.",
    description: "High Alumina Brick Powder is engineered for superior refractory performance at operating temperatures reaching 1700°C. Formulated with 70% Al₂O₃ content, it provides critical thermal stability and chemical corrosion resistance for demanding metallurgical lining applications.",
    applications: [
      "Refractory Bricks Manufacturing",
      "High-Temperature Mortar Formulations",
      "Welding Flux Processing",
      "Nozzle Mouth for Iron Filter Manufacturing"
    ],
    specs: [
      { label: "Al₂O₃ Content", value: "70%" },
      { label: "Maximum Operating Temperature", value: "1700°C" },
      { label: "Grain Size Range", value: "0 - 5 mm" },
      { label: "Mesh Size", value: "60 Mesh (Fines)" }
    ],
    image: "/images/cat-refractory.jpg",
    featured: true
  },
  {
    id: "refractories-boiler-bed-material",
    name: "Refractories Boiler Bed Material (IS-8 Grade)",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Specialized bed material for Circulating Fluidized Bed (CFB) boilers operating up to 1400°C.",
    description: "Engineered specifically for CFB boiler environments, this IS-8 Grade bed material exhibits low attrition rates, controlled bulk density (1000-1100 kg/m³), and optimal fluidization characteristics under prolonged high temperatures.",
    applications: [
      "Circulating Fluidized Bed (CFB) Boilers",
      "Atmospheric Fluidized Bed Combustion (AFBC) Boilers",
      "Thermal Power & Cogeneration Units"
    ],
    specs: [
      { label: "Grade", value: "IS-8 Grade" },
      { label: "Al₂O₃ Content", value: "35% – 40%" },
      { label: "SiO₂ Content", value: "45% – 55%" },
      { label: "Size Distribution", value: "0.85 mm – 2.36 mm" },
      { label: "Bulk Density", value: "1000 – 1100 kg/m³" },
      { label: "Operating Temperature", value: "1400°C" }
    ],
    image: "/images/app-boiler.jpg",
    featured: true
  },
  {
    id: "refractories-mortar",
    name: "Refractories Mortar",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Fire and air setting bonding mortar for furnace construction and refractory brick linings.",
    description: "Nelskraft Refractories Mortar provides exceptional bonding strength between refractory firebricks. Formulated in 60 & 100 mesh fines with 50% to 70% Al₂O₃, it prevents slag penetration and gas leakage in extreme furnace thermal cycles.",
    applications: [
      "Furnace Lining & Construction",
      "Refractory Brick Joint Laying",
      "Kiln Crown & Wall Sealing",
      "Chimney & Duct Joint Works"
    ],
    specs: [
      { label: "Al₂O₃ Content", value: "50% – 70%" },
      { label: "Operating Temperature", value: "1600°C" },
      { label: "Grain Size Range", value: "0 – 1 mm" },
      { label: "Mesh Size", value: "60 & 100 Mesh (Fines)" },
      { label: "Setting Type", value: "Fire and Air Setting" }
    ],
    image: "/images/cat-refractory.jpg",
    featured: false
  },
  {
    id: "refractories-castable",
    name: "Refractories Castable",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Customizable dense monolithic castable refractory for furnace repairs and casting installations.",
    description: "Nelskraft Refractories Castable is a premium monolithic refractory tailored for furnace walls, roofs, burner blocks, and launders. Size distribution and alumina content are customizable according to specific customer requirements and operating thermal profiles.",
    applications: [
      "Monolithic Furnace Construction",
      "Burner Block Linings",
      "Ladle Preheaters & Flue Gas Ducts",
      "Quick In-situ Furnace Patching"
    ],
    specs: [
      { label: "Al₂O₃ Content Grades", value: "50%, 60%, 70%" },
      { label: "Temperature Rating (50% Al₂O₃)", value: "1400°C" },
      { label: "Temperature Rating (60% Al₂O₃)", value: "1500°C" },
      { label: "Temperature Rating (70% Al₂O₃)", value: "1600°C" },
      { label: "Available Sizes", value: "0-1mm, 1-3mm & 3-5mm" },
      { label: "Customization", value: "Custom grain sizes and chemical ratios available" }
    ],
    image: "/images/app-furnace.jpg",
    featured: true
  },
  {
    id: "fireclay",
    name: "Fireclay",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Finely ground fireclay for furnace construction, brick bonding and thermal sealing up to 1600°C.",
    description: "Specially processed natural refractory fireclay with balanced alumina-silica composition. Delivers superior workability, plasticity and bonding when laying refractory brick linings in furnaces, kilns, and flue stacks.",
    applications: [
      "Furnace Construction",
      "Refractory Brick Lining Bonding",
      "Tundish & Ladle Grouting",
      "Thermal Insulation Sealing"
    ],
    specs: [
      { label: "Al₂O₃ Content", value: "30% – 50%" },
      { label: "Operating Temperature", value: "1400°C – 1600°C" },
      { label: "Mesh Size", value: "60 & 100 Mesh (Fines)" },
      { label: "Functionality", value: "High thermal plasticity and cohesion" }
    ],
    image: "/images/cat-refractory.jpg",
    featured: false
  },
  {
    id: "cat-9-cement",
    name: "CAT - 9 Cement",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Heavy-duty refractory cement formulated specifically for turbine power units and severe heat zones.",
    description: "CAT - 9 is an ultra-reliable refractory cement designed for turbine power units, boiler ducting, and power plant infrastructure. It stands up to extreme thermal shocks and constant operational vibrations up to 1600°C.",
    applications: [
      "Turbine Power Generation Units",
      "Power Plant Enclosure Linings",
      "High-Vibration Thermal Seals",
      "Industrial Gas Duct Linings"
    ],
    specs: [
      { label: "Mesh Size", value: "60 Mesh" },
      { label: "Operating Temperature", value: "1600°C" },
      { label: "Application Profile", value: "Turbine Power Units & Energy Plants" }
    ],
    image: "/images/app-industrial.jpg",
    featured: false
  },
  {
    id: "refractories-brick-powder-is8",
    name: "Refractories Brick Powder (IS-8 Grade)",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Grade IS-8 refractory powder for nozzle mouths, welding fluxes, mortars, and foundry filters.",
    description: "Processed from select IS-8 grade refractory materials, this brick powder is available in multiple particle graduations. It delivers consistent chemical characteristics and excellent thermal shock resistance.",
    applications: [
      "Iron Filter Manufacturing",
      "Nozzle Mouth Casting",
      "Refractory Mortar & Grouting",
      "Welding Flux Formulations"
    ],
    specs: [
      { label: "Grade", value: "IS-8 Grade" },
      { label: "Al₂O₃ Content", value: "40% – 70%" },
      { label: "Operating Temperature", value: "1400°C – 1700°C" },
      { label: "Available Sizes", value: "0-1mm, 1-3mm & 3-5mm" },
      { label: "Customization", value: "Custom grain and chemical composition upon request" }
    ],
    image: "/images/cat-refractory.jpg",
    featured: false
  },
  {
    id: "is-6-and-is-8-bricks",
    name: "IS-6 & IS-8 Refractory Bricks",
    category: "refractory-products",
    categoryName: "Refractory Products",
    shortDesc: "Standardized IS-6 (1400°C) and IS-8 (1500°C) dense refractory bricks for structural masonry.",
    description: "Certified Indian Standard refractory bricks engineered for structural furnace lining, boiler walls, and incinerators. Characterized by high compressive strength, controlled porosity, and dimensional accuracy.",
    applications: [
      "Industrial Furnace Walls & Hearths",
      "Boiler Chambers & Fireboxes",
      "Incinerator Linings",
      "Chimney & Flue Duct Masonry"
    ],
    specs: [
      { label: "IS-6 Grade Al₂O₃ Content", value: "30%" },
      { label: "IS-6 Grade Temperature", value: "1400°C" },
      { label: "IS-8 Grade Al₂O₃ Content", value: "40%" },
      { label: "IS-8 Grade Temperature", value: "1500°C" }
    ],
    image: "/images/cat-refractory.jpg",
    featured: false
  },

  // --- BIOMASS FUELS ---
  {
    id: "biomass-pellets",
    name: "Biomass Pellets",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    shortDesc: "High-density cylindrical biomass fuel pellets with GCV 3200-3700 kcal/kg, low moisture & minimal ash.",
    description: "Our high-quality biomass pellets are a reliable and eco-friendly alternative to coal, designed for efficient combustion in industrial applications. They reduce carbon emissions and operational fuel costs while ensuring reliable year-round availability.",
    applications: [
      "Industrial Boilers & Steam Generation",
      "Thermal Power Plants & Co-firing",
      "Process Heaters & Furnaces",
      "Textile, Food & Chemical Processing Plants"
    ],
    specs: [
      { label: "Gross Calorific Value (GCV)", value: "3200 – 3700 kcal/kg" },
      { label: "Sizes Available", value: "8 mm, 16 mm (or custom per client)" },
      { label: "Moisture Content", value: "4% – 6%" },
      { label: "Environmental Advantage", value: "Low carbon footprint, clean combustion" },
      { label: "Supply Chain", value: "Consistent year-round availability" }
    ],
    image: "/images/cat-biomass.jpg",
    featured: true
  },
  {
    id: "de-oiled-cashew-nut-shell-cake",
    name: "De-oiled Cashew Nut Shell Cake (Bio Shell Cake)",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    shortDesc: "High-energy biomass fuel with GCV 4200-4600 kcal/kg derived after Cashew Nut Shell Liquid extraction.",
    description: "Cashew De-Oiled Cake, also known as Bio Shell Cake, is an eco-friendly biomass fuel derived from cashew nut shells after the extraction of Cashew Nut Shell Liquid (CNSL). This fuel offers exceptionally high calorific value (4200-4600 GCV) and burns cleanly with minimal ash production, making it a viable replacement for coal in industrial boilers, kilns, and furnaces.",
    applications: [
      "Industrial Boilers & Thermic Fluid Heaters",
      "Cement & Lime Kilns",
      "High-Heat Industrial Furnaces",
      "Direct Coal Replacement in Heavy Industry"
    ],
    specs: [
      { label: "Gross Calorific Value (GCV)", value: "4200 – 4600 kcal/kg" },
      { label: "Moisture Content", value: "10%" },
      { label: "Ash Characteristics", value: "Minimal ash residue, clean burning" },
      { label: "Source Material", value: "Cashew Nut Shell after CNSL extraction" }
    ],
    image: "/images/cat-biomass.jpg",
    featured: true
  },

  // --- MINERAL MATERIALS ---
  {
    id: "ball-clay",
    name: "Ball Clay",
    category: "mineral-materials",
    categoryName: "Mineral Materials",
    shortDesc: "High-plasticity ceramic ball clay with 35.1% Al₂O₃, high green strength and superior fired brightness.",
    description: "Ball clay’s exceptional plasticity makes it essential in ceramic manufacturing, allowing easy shaping for intricate designs. Its high green strength prevents cracks during handling, while superior bonding enhances durability, making it ideal for high-quality ceramics.",
    applications: [
      "Ceramic Tile & Sanitaryware Manufacturing",
      "Electrical Porcelain & Tableware",
      "Refractory Bonding Clay",
      "Precision Casting & Vitrified Enamels"
    ],
    specs: [
      { label: "SiO₂ (XRF)", value: "47.2%" },
      { label: "Al₂O₃ (XRF)", value: "35.1%" },
      { label: "Fe₂O₃ (XRF)", value: "0.85%" },
      { label: "TiO₂ (XRF)", value: "1.50%" },
      { label: "K₂O (XRF)", value: "0.10%" },
      { label: "CaO (XRF)", value: "0.05%" },
      { label: "MgO (XRF)", value: "0.01%" },
      { label: "L.O.I", value: "14.4%" },
      { label: "Water of Plasticity", value: "42%" },
      { label: "Residue 350#", value: "< 1%" },
      { label: "Dry MOR", value: "30 kg/cm² (Extruded Bar)" },
      { label: "Soluble Salts", value: "< 600 ppm" },
      { label: "Fired Colour L value (1205°C)", value: "> 90" },
      { label: "Fired Shrinkage (1205°C)", value: "12%" },
      { label: "Fired MOR (1205°C)", value: "> 300 kg/cm²" },
      { label: "Water Absorption (1205°C)", value: "< 14%" }
    ],
    image: "/images/app-ceramic.jpg",
    featured: true
  },
  {
    id: "silica-sand",
    name: "Silica Sand",
    category: "mineral-materials",
    categoryName: "Mineral Materials",
    shortDesc: "High-purity industrial mineral with 84-93% SiO₂ for chemical stability and thermal resistance.",
    description: "Silica sand is a high-purity industrial mineral primarily composed of silicon dioxide (SiO₂). It is widely used in various industries for its chemical stability, durability, and high-temperature resistance. The material is available in different grades to meet the requirements of diverse applications.",
    applications: [
      "Foundry Casting & Core Making",
      "Glass & Ceramic Manufacturing",
      "Refractory Mortars & Castable Aggregates",
      "Industrial Filtration Systems"
    ],
    specs: [
      { label: "Silica (SiO₂)", value: "84.00% – 93.00%" },
      { label: "Alumina (Al₂O₃)", value: "2.00% – 8.00%" },
      { label: "Iron (Fe₂O₃)", value: "0.30% – 1.80%" },
      { label: "Calcium (CaO)", value: "0.30% – 3.00%" },
      { label: "Magnesium (MgO)", value: "0.30% – 4.00%" },
      { label: "Sulphur (SO₃)", value: "0.44% – 2.00%" },
      { label: "Sodium (Na₂O)", value: "0.03% – 0.07%" },
      { label: "Loss on Ignition (L.O.I)", value: "1.00% – 5.00%" }
    ],
    image: "/images/cat-minerals.jpg",
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
