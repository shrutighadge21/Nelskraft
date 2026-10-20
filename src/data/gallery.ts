export interface GalleryItem {
  id: string;
  name: string;
  category:
    | "refractory-products"
    | "biomass-fuels"
    | "industrial-minerals"
    | "industrial-applications";
  categoryName: string;
  image: string;
}

export const GALLERY_CATEGORIES = [
  { id: "all", name: "All Works" },
  { id: "refractory-products", name: "Refractory Products" },
  { id: "biomass-fuels", name: "Biomass Fuels" },
  { id: "industrial-minerals", name: "Industrial Minerals" },
  { id: "industrial-applications", name: "Industrial Applications" },
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  // ─── REFRACTORY PRODUCTS ───
  {
    id: "gal-ref-1",
    name: "High Alumina Brick Powder",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_3_img_0_37.jpeg",
  },
  {
    id: "gal-ref-2",
    name: "Refractories Boiler Bed Material (IS-8 Grade)",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_3_img_1_38.jpeg",
  },
  {
    id: "gal-ref-3",
    name: "Refractories Mortar",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_4_img_0_44.jpeg",
  },
  {
    id: "gal-ref-4",
    name: "Refractories Castable",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_4_img_1_45.jpeg",
  },
  {
    id: "gal-ref-5",
    name: "Refractory Fireclay",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_5_img_0_51.jpeg",
  },
  {
    id: "gal-ref-6",
    name: "CAT - 9 Refractory Cement",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_5_img_1_52.jpeg",
  },
  {
    id: "gal-ref-7",
    name: "Refractories Brick Powder (IS-8 Grade)",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_6_img_0_58.jpeg",
  },
  {
    id: "gal-ref-8",
    name: "IS-8 Brick Powder Aggregate Mix",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_6_img_1_59.jpeg",
  },
  {
    id: "gal-ref-9",
    name: "IS - 6 Refractory Bricks",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_7_img_0_65.jpeg",
  },
  {
    id: "gal-ref-10",
    name: "IS - 8 Refractory Bricks",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/catalogue/page_7_img_1_66.jpeg",
  },
  {
    id: "gal-ref-11",
    name: "Industrial Refractory Lining Structure",
    category: "refractory-products",
    categoryName: "Refractory Products",
    image: "/images/about-bricks.jpg",
  },

  // ─── BIOMASS FUELS ───
  {
    id: "gal-bio-1",
    name: "High-Density Biomass Pellets",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    image: "/images/catalogue/page_8_img_0_71.jpeg",
  },
  {
    id: "gal-bio-2",
    name: "Industrial Biomass Fuel Cylinders",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    image: "/images/catalogue/page_8_img_1_72.jpeg",
  },
  {
    id: "gal-bio-3",
    name: "Graded Biomass Pellets Sample",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    image: "/images/catalogue/page_8_img_2_73.jpeg",
  },
  {
    id: "gal-bio-4",
    name: "De-oiled Cashew Nut Shell Cake",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    image: "/images/catalogue/page_9_img_0_78.jpeg",
  },
  {
    id: "gal-bio-5",
    name: "Bio Cashew Shell Cake Jar Display",
    category: "biomass-fuels",
    categoryName: "Biomass Fuels",
    image: "/images/catalogue/page_9_img_1_79.jpeg",
  },

  // ─── INDUSTRIAL MINERALS ───
  {
    id: "gal-min-1",
    name: "Ball Clay Raw Mineral Lumps",
    category: "industrial-minerals",
    categoryName: "Industrial Minerals",
    image: "/images/catalogue/page_10_img_1_87.jpeg",
  },
  {
    id: "gal-min-2",
    name: "Ball Clay Mining & Quarry Site",
    category: "industrial-minerals",
    categoryName: "Industrial Minerals",
    image: "/images/catalogue/page_10_img_0_85.jpeg",
  },
  {
    id: "gal-min-3",
    name: "High-Purity Graded Silica Sand",
    category: "industrial-minerals",
    categoryName: "Industrial Minerals",
    image: "/images/catalogue/page_11_img_2_95.jpeg",
  },
  {
    id: "gal-min-4",
    name: "Industrial Silica Sand Aggregate",
    category: "industrial-minerals",
    categoryName: "Industrial Minerals",
    image: "/images/catalogue/page_11_img_1_94.jpeg",
  },
  {
    id: "gal-min-5",
    name: "Silica Sand Extraction Facility",
    category: "industrial-minerals",
    categoryName: "Industrial Minerals",
    image: "/images/catalogue/page_11_img_0_93.jpeg",
  },

  // ─── INDUSTRIAL APPLICATIONS ───
  {
    id: "gal-app-1",
    name: "High-Temperature Furnace Lining Construction",
    category: "industrial-applications",
    categoryName: "Industrial Applications",
    image: "/images/app-furnace.jpg",
  },
  {
    id: "gal-app-2",
    name: "Circulating Fluidized Bed Boiler System",
    category: "industrial-applications",
    categoryName: "Industrial Applications",
    image: "/images/app-boiler.jpg",
  },
  {
    id: "gal-app-3",
    name: "Precision Ceramic Manufacturing Application",
    category: "industrial-applications",
    categoryName: "Industrial Applications",
    image: "/images/app-ceramic.jpg",
  },
  {
    id: "gal-app-4",
    name: "Heavy Industrial Kiln & Plant Operations",
    category: "industrial-applications",
    categoryName: "Industrial Applications",
    image: "/images/app-industrial.jpg",
  },
  {
    id: "gal-app-5",
    name: "Thermal Processing & Refractory Infrastructure",
    category: "industrial-applications",
    categoryName: "Industrial Applications",
    image: "/images/hero-industrial.jpg",
  },
  {
    id: "gal-app-6",
    name: "Nelskraft Industrial Sample Testing & Display",
    category: "industrial-applications",
    categoryName: "Industrial Applications",
    image: "/images/catalogue/page_1_img_0_22.jpeg",
  },
];
