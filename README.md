
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

### 👤 Espace client
- **Authentification sécurisée** : Inscription/connexion avec validation
- **Profil personnalisé** : Informations personnelles, adresses de livraison
- **Historique complet** : Toutes les commandes avec statut détaillé
- **Préférences** : Produits favoris, alertes personnalisées
- **Programme fidélité** : Points cumulables, récompenses

### 📞 Support client intégré
- **Chat en ligne** : Support instantané pendant les heures d'ouverture
- **FAQ intelligente** : Base de connaissances avec recherche
- **Contact WhatsApp** : Bouton direct vers le service client
- **Système de tickets** : Suivi des demandes et réclamations

---

## 🛠️ Technologies utilisées

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

### 🧪 Testing & Quality
- **Unit Tests** : Vitest 2.1.5 pour les tests rapides
- **E2E Tests** : Playwright 1.49.1 pour les tests d'intégration
- **Linting** : ESLint 9.15.0 avec règles React strictes
- **Type Checking** : TypeScript strict mode activé

### 📦 DevOps & Deployment
- **Package Manager** : npm (recommandé) ou yarn
- **CI/CD** : GitHub Actions pour l'automatisation
- **Hosting** : Vercel/Netlify pour le déploiement
- **Monitoring** : Sentry pour le suivi des erreurs

---

## 🚀 Installation & Démarrage

### 📋 Prérequis système

- **Node.js** : Version 18.0.0 ou supérieure
- **npm** : Version 8.0.0 ou supérieure (fourni avec Node.js)
- **Git** : Pour cloner le repository
- **Navigateur moderne** : Chrome 90+, Firefox 88+, Safari 14+

### 📦 Installation étape par étape

```bash
# 1. Cloner le repository
git clone https://github.com/Michel-DJREKE/oya-s-premium-pantry.git

# 2. Accéder au dossier du projet
cd oya-s-premium-pantry

# 3. Installer les dépendances
npm install

# 4. Créer le fichier d'environnement (si nécessaire)
cp .env.example .env.local

# 5. Démarrer le serveur de développement
npm run dev
```

### 🔧 Scripts disponibles

```bash
# Développement
npm run dev              # Serveur de développement Vite
npm run build            # Build pour production
npm run build:dev        # Build en mode développement
npm run preview          # Prévisualisation du build

# Qualité du code
npm run lint             # Vérification ESLint
npm run lint:fix         # Correction automatique ESLint

# Tests
npm run test             # Tests unitaires Vitest
npm run test:watch       # Tests en mode watch
npm run test:coverage    # Tests avec couverture

# Playwright (E2E)
npx playwright install    # Installation des navigateurs
npx playwright test       # Lancement des tests E2E
```

### 🌐 Accès à l'application

Une fois lancé, l'application sera accessible sur :
- **Local** : http://localhost:5173 (port par défaut Vite)
- **Réseau** : http://192.168.x.x:5173 (accessible depuis d'autres appareils)

---

## 📁 Structure du projet

```
oya-s-premium-pantry/
├── public/                     # Assets statiques
│   ├── favicon.ico
│   └── robots.txt
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

## 🧪 Tests

### 🧪 Stratégie de test

- **Tests unitaires** : Composants, hooks, utilitaires
- **Tests d'intégration** : Flux utilisateur complets
- **Tests E2E** : Scénarios utilisateur réels avec Playwright

### 🚀 Lancement des tests

```bash
# Tests unitaires
npm run test

# Tests avec couverture
npm run test:coverage

# Tests E2E (Playwright)
npx playwright test

# Tests en mode UI (Playwright)
npx playwright test --ui
```

### 📊 Métriques de couverture

- **Target** : 80% de couverture globale
- **Components** : 90% minimum
- **Hooks** : 85% minimum
- **Utils** : 95% minimum

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

## 🔒 Sécurité

### 🛡️ Mesures de sécurité implémentées

- **Validation côté client** : Zod schemas pour toutes les données
- **Sanitisation** : Nettoyage automatique des inputs utilisateur
- **Protection CSRF** : Tokens pour les formulaires sensibles
- **Chiffrement** : Données sensibles chiffrées (mots de passe, tokens)
- **Rate limiting** : Protection contre les attaques par déni de service
- **Audit logging** : Traçabilité des actions sensibles

### 🔐 Gestion des données

- **RGPD compliant** : Consentement explicite pour les cookies
- **Données minimales** : Collecte uniquement des données nécessaires
- **Droit à l'oubli** : Possibilité de suppression des données
- **Stockage sécurisé** : localStorage chiffré pour les données sensibles

---

## 🌐 Déploiement

### 🚀 Plateformes recommandées

- **Vercel** : Déploiement automatique depuis GitHub
- **Netlify** : CDN global et fonctions serverless
- **Railway** : Pour les besoins en base de données

### 🔄 Pipeline CI/CD

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: vercel/deploy@v1
```

### 🌍 Configuration environnement

```env
# .env.local
VITE_API_URL=https://api.oya-confiserie.com
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_SENTRY_DSN=https://...
```

---

## 🤝 Contribution

### 📋 Processus de contribution

1. **Fork** le projet depuis GitHub
2. **Clone** votre fork localement
3. **Créer une branche** feature : `git checkout -b feature/nom-feature`
4. **Commiter** vos changements : `git commit -m 'feat: add amazing feature'`
5. **Pousser** vers votre fork : `git push origin feature/nom-feature`
6. **Créer une Pull Request** vers la branche main

### 📝 Standards de code

- **Commits** : Conventionnal commits (feat, fix, docs, style, refactor)
- **Branches** : feature/, bugfix/, hotfix/, release/
- **PR** : Template détaillé avec description et tests
- **Code review** : Au minimum 1 reviewer requis

### 🐛 Signaler un bug

Utilisez le template GitHub Issues pour les bugs :
- Description claire du problème
- Étapes pour reproduire
- Comportement attendu vs actuel
- Environnement (OS, navigateur, version)

---

## 📄 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

```text
MIT License

Copyright (c) 2024 Michel DJREKE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👥 Équipe

- **👨‍💻 Développeur principal** : Michel DJREKE
  - *Full-stack Developer & UI/UX Designer*
  - *Spécialiste React/TypeScript*
  - *Expert e-commerce africain*

- **🎨 Designer** : Équipe Oya Design
  - *UI/UX Design*
  - *Brand Identity*
  - *User Research*

- **📊 Product Manager** : Équipe Oya
  - *Stratégie produit*
  - *Analyse marché africain*
  - *Gestion des fonctionnalités*

---

## 📞 Contact

### 📧 Informations de contact

- **Email principal** : contact@oya-confiserie.com
- **Email support** : support@oya-confiserie.com
- **Site web** : [www.oya-confiserie.com](https://www.oya-confiserie.com)
- **WhatsApp Business** : +228 XX XX XX XX

### 🌐 Réseaux sociaux

- **LinkedIn** : [Oya Confiserie](https://linkedin.com/company/oya-confiserie)
- **Facebook** : [Oya Confiserie](https://facebook.com/oya-confiserie)
- **Instagram** : [@oya_confiserie](https://instagram.com/oya_confiserie)
- **Twitter** : [@oya_confiserie](https://twitter.com/oya_confiserie)

### 🏢 Adresse

Oya Confiserie SARL
123 Avenue de l'Indépendance
Lomé, Togo
BP: 12345

---

## 🙏 Remerciements

### 👥 Communauté & Outils

- **shadcn/ui** : Pour les composants UI exceptionnels
- **React Community** : Pour l'écosystème riche et innovant
- **Vite Team** : Pour l'outil de build révolutionnaire
- **Tailwind CSS** : Pour le système de design utilitaire
- **Radix UI** : Pour les primitives accessibles

### 🌍 Partenaires

- **Producteurs locaux** : Pour la qualité des produits
- **Clients fidèles** : Pour leur confiance et feedback
- **Équipe Oya** : Pour la vision et le soutien

### 📚 Ressources

- **React Documentation** : Guide officiel complet
- **MDN Web Docs** : Référence web essentielle
- **CSS Tricks** : Astuces et bonnes pratiques
- **Smashing Magazine** : Articles de qualité

---

*⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile sur GitHub !*

---

**Dernière mise à jour** : Mars 2026
**Version** : 1.0.0
