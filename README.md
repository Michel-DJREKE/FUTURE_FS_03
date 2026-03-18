
# 🛒 Oya Confiserie – Premium Pantry Experience

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.11-yellow.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-38B2AC.svg)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black.svg)](https://ui.shadcn.com/)

Bienvenue sur **Oya Confiserie**, une plateforme e-commerce moderne et élégante dédiée à la vente de produits agroalimentaires et confiseries en Afrique. Ce projet incarne l'excellence digitale pour une expérience d'achat premium, adaptée au marché africain.

---

## 📋 Table des matières

- [🚀 Objectif du projet](#-objectif-du-projet)
- [🌍 Contexte](#-contexte)
- [🎨 Design & Expérience Utilisateur](#-design--expérience-utilisateur)
- [🖼️ Fonctionnalités principales](#️-fonctionnalités-principales)
- [🛠️ Technologies utilisées](#️-technologies-utilisées)
- [🚀 Installation & Démarrage](#-installation--démarrage)
- [📁 Structure du projet](#-structure-du-projet)
- [🧪 Tests](#-tests)
- [📊 Performance](#-performance)
- [🔒 Sécurité](#-sécurité)
- [🌐 Déploiement](#-déploiement)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)
- [👥 Équipe](#-équipe)
- [📞 Contact](#-contact)
- [🙏 Remerciements](#-remerciements)

---

## 🚀 Objectif du projet

Créer une solution digitale performante et innovante pour l'alimentation générale en Afrique, visant à :

- **Faciliter l'accès** aux produits du quotidien pour tous les Africains
- **Améliorer l'expérience d'achat** en ligne avec une interface intuitive
- **Valoriser les produits locaux** africains et promouvoir l'économie locale
- **Augmenter les ventes** grâce à une plateforme moderne et fiable
- **Réduire les intermédiaires** entre producteurs et consommateurs
- **Promouvoir une alimentation saine** et diversifiée

---

## 🌍 Contexte

Ce projet a été conçu spécifiquement pour le marché africain (Togo et Afrique de l'Ouest), en tenant compte des réalités locales :

### 📱 Contraintes techniques
- **Utilisation majoritaire du mobile** : 80% des utilisateurs accèdent via smartphone
- **Connexions internet limitées** : Optimisation pour les réseaux 3G/4G
- **Stockage local** : Utilisation intensive du localStorage pour la persistance

### 💰 Contraintes économiques
- **Moyens de paiement locaux** : Intégration Mobile Money (MTN, Moov, Orange)
- **Paiement à la livraison** : Option privilégiée pour les zones rurales
- **Prix accessibles** : Produits adaptés au pouvoir d'achat local

### 🌍 Contraintes culturelles
- **Langues multiples** : Support français, anglais, et langues locales
- **Préférences alimentaires** : Catalogue adapté aux goûts africains
- **Confiance digitale** : Interface rassurante pour les nouveaux utilisateurs

---

## 🎨 Design & Expérience Utilisateur

### 🎨 Palette de couleurs
- **Primaire** : Violet premium (#8B5CF6) et Bleu royal (#1E40AF)
- **Neutres** : Blanc (#FFFFFF) et Noir (#000000)
- **Accents** : Vert pour les succès, Rouge pour les erreurs

### 📝 Typographie
- **Police principale** : Poppins (Google Fonts)
- **Hiérarchie** : Titre (48px), Sous-titre (32px), Corps (16px)
- **Poids** : Light (300), Regular (400), Medium (500), Bold (700)

### ✨ Animations & Interactions
- **Transitions fluides** : Durée 300ms avec ease-in-out
- **Hover effects** : Scale et opacity pour l'interactivité
- **Loading states** : Skeletons et spinners pour le feedback utilisateur
- **Micro-interactions** : Animations subtiles pour améliorer l'UX

### 📱 Responsive Design
- **Mobile-first approach** : Conception optimisée pour mobile
- **Breakpoints** : 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Performance** : Images optimisées, lazy loading, code splitting

---

## 🖼️ Fonctionnalités principales

### 🏠 Page d'accueil
- **Hero section** : Carrousel dynamique avec call-to-action impactants
- **Navigation intuitive** : Menu sticky avec catégories principales
- **Sections thématiques** :
  - Produits populaires
  - Nouveautés (NewArrivalsSection)
  - Promotions spéciales (PromotionsSection)
  - Témoignages clients
  - À propos de l'entreprise

### 🛍️ Catalogue produits
**Produits agroalimentaires :**
- 🌱 Fruits et légumes frais (mangues, avocats, tomates locales)
- 🥩 Viandes et poissons (poulet local, poissons de mer)
- 🥛 Produits laitiers (lait frais, yaourts artisanaux)
- 🌶️ Épices et condiments (piment, gingembre, ail africains)
- 🫒 Huiles et vinaigres (huile de palme rouge, vinaigre local)
- 🌾 Céréales et légumineuses (maïs, haricots, riz local)
- 🥫 Produits transformés (conserves, sauces, plats préparés)

**Produits de confiserie :**
- 🍫 Chocolats et bonbons (chocolats locaux, bonbons traditionnels)
- 🍪 Biscuits et gâteaux (biscuits au beurre, gâteaux traditionnels)
- 🎂 Confiseries traditionnelles africaines (koki, alloco sucré)
- 🥜 Produits sans sucre (fruits secs, noix, graines)

### 🛒 Panier d'achat
- **Gestion intelligente** : Ajout/suppression/modification des quantités
- **Calcul automatique** : Total TTC avec frais de livraison
- **Persistance** : Sauvegarde automatique dans localStorage
- **Validation** : Contrôle des stocks et quantités disponibles
- **Récupération** : Possibilité de récupérer un panier abandonné

### 💳 Système de paiement
**Méthodes intégrées :**
- **Mobile Money** : MTN Mobile Money, Moov Money, Orange Money
- **Paiement à la livraison** : Option disponible pour toutes les commandes
- **Cartes bancaires** : Visa, Mastercard (via passerelles sécurisées)
- **Paiement échelonné** : Pour les commandes importantes

### 📱 Expérience mobile optimisée
- **PWA features** : Installation possible sur mobile
- **Touch gestures** : Swipe pour naviguer, pinch pour zoom
- **Offline mode** : Consultation du catalogue hors ligne
- **Push notifications** : Alertes sur les promotions et livraisons

### 🔍 Recherche & Filtres avancés
- **Recherche intelligente** : Par nom, description, ingrédients
- **Filtres multi-critères** :
  - Catégorie (Alimentation, Confiserie, Épices)
  - Prix (Tranches personnalisables)
  - Disponibilité (En stock, Rupture)
  - Origine (Local, Importé)
- **Tri dynamique** : Popularité, Prix croissant/décroissant, Nouveauté


### 📞 Support client intégré
- **Chat en ligne** : Support instantané pendant les heures d'ouverture
- **FAQ intelligente** : Base de connaissances avec recherche
- **Contact WhatsApp** : Bouton direct vers le service client
- **Système de tickets** : Suivi des demandes et réclamations

---
### ⚡ Core Technologies
- **Frontend Framework** : React 18.3.1 avec hooks modernes
- **Language** : TypeScript 5.6.3 pour la sécurité des types
- **Build Tool** : Vite 5.4.11 pour un développement ultra-rapide
- **Styling** : Tailwind CSS 3.4.14 + shadcn/ui pour un design système cohérent

### 🔧 Libraries & Tools
- **Routing** : React Router DOM 6.28.0 pour la navigation SPA
- **State Management** : React Context + useReducer pour la gestion d'état
- **Forms** : React Hook Form 7.54.0 + Zod 3.23.8 pour la validation
- **UI Components** : Radix UI primitives pour l'accessibilité
- **Icons** : Lucide React 0.468.0 pour les icônes cohérentes
- **Animations** : Tailwind CSS Animate pour les transitions fluides

---

## 🚀 Installation & Démarrage

### 📋 Prérequis système

- **Node.js** : Version 18.0.0 ou supérieure
- **npm** : Version 8.0.0 ou supérieure (fourni avec Node.js)
- **Git** : Pour cloner le repository
- **Navigateur moderne** : Chrome 90+, Firefox 88+, Safari 14+


## 📁 Structure du projet

```
oya-s-premium-pantry/
├── public/                     # Assets statiques
├── src/
│   ├── assets/                 # Images et ressources
│   ├── components/             # Composants réutilisables
│   │   ├── ui/                # Composants shadcn/ui
│   │   ├── HeroSection.tsx    # Section hero de la page d'accueil
│   │   ├── ProductGrid.tsx    # Grille des produits
│   │   ├── CartDrawer.tsx     # Panier coulissant
│   │   ├── NewArrivalsSection.tsx  # Section nouveautés
│   │   ├── PromotionsSection.tsx   # Section promotions
│   │   └── ...                 # Autres composants
│   ├── pages/                 # Pages de l'application
│   │   ├── Index.tsx          # Page d'accueil
│   │   └── NotFound.tsx       # Page 404
│   ├── hooks/                 # Hooks personnalisés
│   │   ├── useCart.tsx        # Gestion du panier
│   │   ├── use-mobile.tsx     # Détection mobile
│   │   └── use-toast.ts       # Notifications toast
│   ├── lib/                   # Utilitaires
│   │   └── utils.ts           # Fonctions helper
│   ├── data/                  # Données statiques
│   │   └── products.ts        # Catalogue produits
│   ├── test/                  # Tests
│   │   ├── setup.ts           # Configuration tests
│   │   └── example.test.ts    # Exemple de test
│   ├── App.tsx                # Composant principal
│   ├── main.tsx               # Point d'entrée
│   └── vite-env.d.ts          # Types Vite
├── .env.example               # Variables d'environnement exemple
├── .gitignore                 # Fichiers ignorés par Git
├── components.json            # Configuration shadcn/ui
├── eslint.config.js           # Configuration ESLint
├── index.html                 # Template HTML
├── package.json               # Dépendances et scripts
├── playwright.config.ts       # Configuration Playwright
├── postcss.config.js          # Configuration PostCSS
├── tailwind.config.ts         # Configuration Tailwind
├── tsconfig.json              # Configuration TypeScript
├── tsconfig.app.json          # Config TS pour l'app
├── tsconfig.node.json         # Config TS pour Node
├── vite.config.ts             # Configuration Vite
├── vitest.config.ts           # Configuration Vitest
└── README.md                  # Documentation du projet
```

---


## 📊 Performance

### ⚡ Métriques Core Web Vitals

- **LCP (Largest Contentful Paint)** : < 2.5s
- **FID (First Input Delay)** : < 100ms
- **CLS (Cumulative Layout Shift)** : < 0.1

### 📈 Scores Lighthouse

- **Performance** : 95+ / 100
- **Accessibilité** : 90+ / 100
- **Bonnes pratiques** : 95+ / 100
- **SEO** : 90+ / 100

### 📦 Optimisations implémentées

- **Code splitting** : Chargement paresseux des routes
- **Image optimization** : WebP, lazy loading, responsive images
- **Bundle analysis** : Monitoring de la taille du bundle
- **Caching** : Service worker pour le cache offline
- **Compression** : Gzip/Brotli activés

---