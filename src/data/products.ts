import prodRizBasmati from "@/assets/prod-riz-basmati.jpg";
import prodRizLocal from "@/assets/prod-riz-local.jpg";
import prodHuilePalme from "@/assets/prod-huile-palme.jpg";
import prodHuileArachide from "@/assets/prod-huile-arachide.jpg";
import prodSucre from "@/assets/prod-sucre.jpg";
import prodBissap from "@/assets/prod-bissap.jpg";
import prodSardines from "@/assets/prod-sardines.jpg";
import prodTomate from "@/assets/prod-tomate.jpg";
import prodGari from "@/assets/prod-gari.jpg";
import prodPiment from "@/assets/prod-piment.jpg";
import prodPetitfour from "@/assets/prod-petitfour.jpg";
import prodGateau from "@/assets/prod-gateau.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  badge?: "Local" | "Premium" | "Promo";
  description: string;
  image: string;
}

export const categories = [
  "Tous",
  "Riz & Céréales",
  "Huiles",
  "Sucre & Boissons",
  "Conserves",
  "Produits Locaux",
  "Confiserie",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "1",
    name: "Riz Basmati Premium",
    price: 8500,
    category: "Riz & Céréales",
    badge: "Premium",
    description: "Riz basmati long grain de qualité supérieure, parfumé et léger. Idéal pour accompagner vos plats africains.",
    image: prodRizBasmati,
  },
  {
    id: "2",
    name: "Riz Local du Togo",
    price: 5500,
    category: "Riz & Céréales",
    badge: "Local",
    description: "Riz cultivé localement au Togo, soutenant l'agriculture locale. Saveur authentique garantie.",
    image: prodRizLocal,
  },
  {
    id: "3",
    name: "Huile de Palme Rouge",
    price: 3200,
    category: "Huiles",
    badge: "Local",
    description: "Huile de palme rouge artisanale, pressée à froid. Incontournable de la cuisine ouest-africaine.",
    image: prodHuilePalme,
  },
  {
    id: "4",
    name: "Huile d'Arachide 1L",
    price: 4800,
    category: "Huiles",
    description: "Huile d'arachide pure, parfaite pour les fritures et les sauces traditionnelles.",
    image: prodHuileArachide,
  },
  {
    id: "5",
    name: "Sucre en Poudre 1kg",
    price: 1500,
    category: "Sucre & Boissons",
    description: "Sucre blanc fin de qualité supérieure pour toutes vos préparations.",
    image: prodSucre,
  },
  {
    id: "6",
    name: "Bissap Séché Premium",
    price: 2800,
    category: "Sucre & Boissons",
    badge: "Local",
    description: "Fleurs d'hibiscus séchées pour préparer le jus de bissap traditionnel.",
    image: prodBissap,
  },
  {
    id: "7",
    name: "Sardines à l'Huile",
    price: 1200,
    category: "Conserves",
    description: "Sardines de qualité en conserve, riches en protéines et oméga-3.",
    image: prodSardines,
  },
  {
    id: "8",
    name: "Concentré de Tomates",
    price: 900,
    category: "Conserves",
    description: "Double concentré de tomates, base essentielle pour vos sauces.",
    image: prodTomate,
  },
  {
    id: "9",
    name: "Gari de Manioc",
    price: 2200,
    category: "Produits Locaux",
    badge: "Local",
    description: "Gari de manioc finement moulu, aliment de base ouest-africain de qualité.",
    image: prodGari,
  },
  {
    id: "10",
    name: "Piment Frais Séché",
    price: 1800,
    category: "Produits Locaux",
    badge: "Local",
    description: "Piments séchés locaux pour relever vos plats avec authenticité.",
    image: prodPiment,
  },
  {
    id: "11",
    name: "Petit Four Assortis",
    price: 12000,
    category: "Confiserie",
    badge: "Premium",
    description: "Assortiment de petits fours artisanaux : macarons, financiers, tartelettes. Boîte de 12 pièces.",
    image: prodPetitfour,
  },
  {
    id: "12",
    name: "Gâteau Marbré",
    price: 6500,
    category: "Confiserie",
    badge: "Premium",
    description: "Gâteau marbré moelleux au chocolat et vanille, fait maison avec des ingrédients de qualité.",
    image: prodGateau,
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
};