# 📘 DOCUMENTATION COMPLÈTE
## Site Web Politique - Fork & Personnalisation

---

# TABLE DES MATIÈRES

1. [Fichiers fournis](#1-fichiers-fournis)
2. [Guide de fork et personnalisation](#2-guide-de-fork-et-personnalisation)
3. [SEO et référencement](#3-seo-et-référencement)
4. [Viralité et partage social](#4-viralité-et-partage-social)
5. [Fichiers techniques (sitemap & robots)](#5-fichiers-techniques)
6. [Hébergement et mise en ligne](#6-hébergement-et-mise-en-ligne)
7. [Checklist de lancement](#7-checklist-de-lancement)
8. [Ressources et outils](#8-ressources-et-outils)

---

# 1. FICHIERS FOURNIS

| Fichier | Description |
|---------|-------------|
| `mon-mouvement-seo-complet.html` | Page d'accueil complète avec SEO, partage social, compteurs |
| `sitemap.xml` | Plan du site pour Google |
| `robots.txt` | Instructions pour les moteurs de recherche |
| `DOCUMENTATION.md` | Ce fichier |

### Structure recommandée de ton site :

```
📁 mon-site/
├── 📄 index.html (page d'accueil)
├── 📄 sitemap.xml
├── 📄 robots.txt
├── 📄 programme.html
├── 📄 equipe.html
├── 📄 actualites.html
├── 📄 agenda.html
├── 📄 contact.html
├── 📄 adhesion.html
├── 📄 mentions-legales.html
├── 📄 confidentialite.html
├── 📁 images/
│   ├── logo.png
│   ├── og-image.jpg (1200x630)
│   ├── twitter-card.jpg (1200x600)
│   ├── favicon.png (32x32)
│   └── 📁 articles/
├── 📁 css/ (optionnel)
│   └── style.css
└── 📁 js/ (optionnel)
    └── main.js
```

---

# 2. GUIDE DE FORK ET PERSONNALISATION

## 2.1 Outils nécessaires

| Outil | Gratuit | Usage | URL |
|-------|---------|-------|-----|
| **VS Code** | ✅ | Éditeur de code | code.visualstudio.com |
| **Live Server** | ✅ | Extension VS Code | Marketplace VS Code |
| **Canva** | ✅ | Créer logo + images | canva.com |
| **Figma** | ✅ | Design avancé | figma.com |
| **TinyPNG** | ✅ | Compresser images | tinypng.com |
| **Netlify** | ✅ | Hébergement | netlify.com |

## 2.2 Personnaliser les couleurs

Dans le fichier HTML, trouve la section `:root` dans le CSS :

```css
:root {
    /* 🎨 COULEURS PRINCIPALES - MODIFIE ICI */
    --color-primary: #002eff;        /* Couleur principale */
    --color-primary-dark: #0022cc;   /* Couleur principale foncée */
    --color-primary-light: #3355ff;  /* Couleur principale claire */
    --color-secondary: #f59e0b;      /* Couleur accent */
}
```

### Palettes suggérées par orientation :

| Orientation | Principale | Foncée | Usage |
|-------------|------------|--------|-------|
| **Gauche** | `#E63946` | `#B91C1C` | Rouge dynamique |
| **Écolo** | `#2D6A4F` | `#1B4332` | Vert nature |
| **Centre** | `#7209B7` | `#5B21B6` | Violet moderne |
| **Droite** | `#002eff` | `#0022cc` | Bleu institutionnel |
| **Libéral** | `#F59E0B` | `#D97706` | Or/Jaune |
| **Social-démocrate** | `#DC2626` | `#991B1B` | Rouge classique |

## 2.3 Modifier le nom et le logo

### Changer le titre du site :
```html
<title>MON MOUVEMENT | Pour une Belgique qui nous ressemble</title>
```

### Changer le logo (image) :
```html
<img src="images/mon-logo.png" alt="Mon Mouvement" width="206" height="90">
```

### Ou utiliser un logo texte :
```html
<a href="index.html" class="logo-center">
    <span style="font-size: 28px; font-weight: 700; color: #fff;">
        MON MOUVEMENT
    </span>
</a>
```

## 2.4 Modifier la navigation

```html
<nav class="nav-left">
    <a href="qui-sommes-nous.html" class="nav-link">Qui sommes-nous</a>
    <a href="programme.html" class="nav-link">Programme</a>
    <a href="actualites.html" class="nav-link">Actualités</a>
</nav>

<nav class="nav-right">
    <a href="agenda.html" class="nav-link">Agenda</a>
    <a href="contact.html" class="nav-link">Contact</a>
    <a href="adhesion.html" class="btn-adhesion">Rejoindre</a>
</nav>
```

## 2.5 Modifier les réseaux sociaux

```html
<div class="social-header">
    <a href="https://twitter.com/TON_COMPTE"><i class="fab fa-x-twitter"></i></a>
    <a href="https://facebook.com/TA_PAGE"><i class="fab fa-facebook-f"></i></a>
    <a href="https://instagram.com/TON_COMPTE"><i class="fab fa-instagram"></i></a>
    <a href="https://linkedin.com/company/TON_COMPTE"><i class="fab fa-linkedin-in"></i></a>
    <a href="https://youtube.com/@TON_COMPTE"><i class="fab fa-youtube"></i></a>
    <a href="https://tiktok.com/@TON_COMPTE"><i class="fab fa-tiktok"></i></a>
</div>
```

## 2.6 Modifier les textes du slider

```html
<h1 class="slide-title">TON TITRE ACCROCHEUR ICI</h1>
```

## 2.7 Modifier les compteurs

```html
<div class="proof-item">
    <div class="proof-number">
        <span class="counter" data-target="15847">0</span>
    </div>
    <div class="proof-label">Membres actifs</div>
</div>
```

Change `data-target="15847"` par ton nombre réel.

## 2.8 Créer de nouvelles pages

1. Duplique `index.html`
2. Renomme en `programme.html`
3. Garde le header et le footer
4. Remplace le contenu central

---

# 3. SEO ET RÉFÉRENCEMENT

## 3.1 Balises META essentielles

Ces balises sont **déjà incluses** dans le fichier fourni :

```html
<!-- SEO de base -->
<title>Mon Mouvement | Pour une Belgique qui nous ressemble</title>
<meta name="description" content="Description de 155 caractères max...">
<meta name="keywords" content="politique, belgique, mouvement, élections">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.monmouvement.be/">
```

### Règles pour le title :
- **60 caractères max** (visible dans Google)
- Format : `Titre de la page | Nom du site`

### Règles pour la description :
- **155 caractères max**
- Inclure un appel à l'action
- Inclure les mots-clés principaux

## 3.2 Open Graph (Facebook, LinkedIn, WhatsApp)

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.monmouvement.be/">
<meta property="og:title" content="Mon Mouvement | Pour une Belgique qui nous ressemble">
<meta property="og:description" content="Rejoignez les 15 000 citoyens...">
<meta property="og:image" content="https://www.monmouvement.be/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

### Image OG obligatoire :
- **Taille** : 1200 x 630 pixels
- **Format** : JPG ou PNG
- **Contenu** : Logo + slogan + couleur de fond

## 3.3 Twitter Card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@MonMouvement">
<meta name="twitter:title" content="Mon Mouvement">
<meta name="twitter:description" content="Description...">
<meta name="twitter:image" content="https://www.monmouvement.be/images/twitter-card.jpg">
```

### Image Twitter :
- **Taille** : 1200 x 600 pixels

## 3.4 Schema.org (Rich Snippets Google)

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "PoliticalParty",
    "name": "Mon Mouvement",
    "url": "https://www.monmouvement.be",
    "logo": "https://www.monmouvement.be/images/logo.png",
    "description": "Description...",
    "foundingDate": "2026",
    "sameAs": [
        "https://www.facebook.com/MonMouvement",
        "https://twitter.com/MonMouvement"
    ]
}
</script>
```

## 3.5 Mots-clés stratégiques à cibler

### Outils pour trouver des mots-clés :
| Outil | URL | Gratuit |
|-------|-----|---------|
| Google Trends | trends.google.fr | ✅ |
| Ubersuggest | neilpatel.com/ubersuggest | ✅ (limité) |
| AnswerThePublic | answerthepublic.com | ✅ (limité) |
| Google Autocomplete | google.be | ✅ |

### Exemples de mots-clés politiques belges :
```
- "élections belgique 2026"
- "nouveau parti politique belgique"
- "programme politique fiscalité"
- "adhérer parti politique"
- "mouvement citoyen belgique"
- "réforme pension belgique"
- "[région] politique"
```

## 3.6 Structure de page optimisée

```html
<!-- Une seule H1 par page -->
<h1>Notre programme économique pour la Belgique</h1>

<!-- Hiérarchie logique -->
<h2>1. Réforme fiscale</h2>
    <h3>Baisse des charges sur le travail</h3>
    <h3>Simplification pour les PME</h3>

<h2>2. Emploi et formation</h2>
    <h3>Crédit formation universel</h3>
```

## 3.7 Bonnes pratiques SEO

| Élément | Bonne pratique |
|---------|----------------|
| **URL** | Courte, lisible : `/programme-economie` |
| **Images** | Toujours avec attribut `alt` descriptif |
| **Liens internes** | Lier les pages entre elles |
| **Contenu** | Minimum 800-1500 mots par page |
| **Mobile** | Site 100% responsive |
| **Vitesse** | Score > 80 sur PageSpeed Insights |

---

# 4. VIRALITÉ ET PARTAGE SOCIAL

## 4.1 Barre de partage flottante

Déjà intégrée dans le fichier fourni. Elle apparaît au scroll et contient :
- Facebook
- Twitter/X
- WhatsApp
- LinkedIn
- Copier le lien

## 4.2 Boutons de partage sur articles

```html
<div class="article-share">
    <a href="#" class="article-share-btn facebook" 
       onclick="shareArticle('facebook', 'url', 'titre'); return false;">
        <i class="fab fa-facebook-f"></i>
    </a>
    <!-- Répéter pour twitter, whatsapp, linkedin -->
</div>
```

## 4.3 Fonctions JavaScript de partage

```javascript
function shareOnFacebook(e) {
    e.preventDefault();
    window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
        'facebook-share',
        'width=580,height=400'
    );
}

function shareOnTwitter(e) {
    e.preventDefault();
    window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`,
        'twitter-share',
        'width=580,height=400'
    );
}

function shareOnWhatsApp(e) {
    e.preventDefault();
    window.open(
        `https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`,
        'whatsapp-share'
    );
}

function shareOnLinkedIn(e) {
    e.preventDefault();
    window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
        'linkedin-share',
        'width=580,height=400'
    );
}

function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
        showToast('Lien copié !', 'success');
    });
}
```

## 4.4 Contenus viraux à créer

| Format | Viralité | Exemple |
|--------|----------|---------|
| 🎯 **Infographie** | ⭐⭐⭐⭐⭐ | "5 chiffres chocs sur les impôts" |
| 🎬 **Vidéo courte** | ⭐⭐⭐⭐⭐ | Discours 60 sec, réaction actu |
| 📊 **Comparatif** | ⭐⭐⭐⭐ | "Notre programme vs les autres" |
| 💬 **Citation choc** | ⭐⭐⭐⭐ | Image avec citation du leader |
| 📝 **Carrousel** | ⭐⭐⭐ | "10 mesures en 10 slides" |
| 🗳️ **Sondage** | ⭐⭐⭐⭐ | "Êtes-vous pour ou contre ?" |

## 4.5 Stratégie réseaux sociaux

### Fréquence de publication :
| Plateforme | Fréquence | Meilleur moment |
|------------|-----------|-----------------|
| Facebook | 1-2x/jour | 12h-14h, 19h-21h |
| Twitter/X | 3-5x/jour | 8h, 12h, 18h |
| Instagram | 1x/jour + stories | 11h-13h, 19h-21h |
| TikTok | 1-3x/jour | 19h-22h |
| LinkedIn | 3-5x/semaine | 8h-10h (mardi-jeudi) |

### Hashtags recommandés :
```
#Belgique #PolitiqueBelge #Elections2026
#Wallonie #Bruxelles #Flandre
#[TonMouvement] #[TonSlogan]
#Fiscalité #Emploi #Pension #Climat
```

## 4.6 Techniques d'accroche (hooks)

### ❌ Mauvais :
```
"Notre position sur la réforme fiscale"
"Communiqué de presse du mouvement"
```

### ✅ Bon :
```
"Vous payez 45% d'impôts. Voici comment on va changer ça."
"Ce que le gouvernement vous cache sur les pensions"
```

### Émotions qui fonctionnent :
| Émotion | Exemple |
|---------|---------|
| **Colère** | "Ils nous ont menti pendant 10 ans" |
| **Espoir** | "Ensemble, on peut vraiment changer ça" |
| **Fierté** | "La Belgique peut redevenir un exemple" |
| **Urgence** | "Il nous reste 6 mois pour agir" |

## 4.7 Call-to-action efficaces

```html
<div class="cta-box">
    <h3>Vous êtes d'accord ?</h3>
    <p>Rejoignez les 15 000 citoyens qui veulent changer les choses.</p>
    <a href="/adhesion" class="btn-cta">Adhérer maintenant</a>
    <a href="#" class="btn-share">Partager cet article</a>
</div>
```

---

# 5. FICHIERS TECHNIQUES

## 5.1 sitemap.xml

Le fichier `sitemap.xml` doit être placé à la **racine** de ton site.

### Structure :
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.monmouvement.be/</loc>
        <lastmod>2026-01-09</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <!-- Ajouter toutes les pages -->
</urlset>
```

### Valeurs de priority :
| Type de page | Priority |
|--------------|----------|
| Accueil | 1.0 |
| Pages principales | 0.8-0.9 |
| Articles | 0.6-0.7 |
| Pages légales | 0.3 |

### Valeurs de changefreq :
| Fréquence de mise à jour | Valeur |
|--------------------------|--------|
| Tous les jours | `daily` |
| Toutes les semaines | `weekly` |
| Tous les mois | `monthly` |
| Rarement | `yearly` |

## 5.2 robots.txt

Le fichier `robots.txt` doit être placé à la **racine** de ton site.

### Structure minimale :
```
User-agent: *
Allow: /
Sitemap: https://www.monmouvement.be/sitemap.xml
```

### Bloquer des pages :
```
Disallow: /admin/
Disallow: /membre/dashboard/
```

## 5.3 Soumettre aux moteurs de recherche

### Google Search Console :
1. Va sur https://search.google.com/search-console
2. Ajoute ta propriété (ton domaine)
3. Vérifie la propriété (fichier HTML ou DNS)
4. Va dans "Sitemaps" → Ajoute `sitemap.xml`

### Bing Webmaster Tools :
1. Va sur https://www.bing.com/webmasters
2. Ajoute ton site
3. Soumets ton sitemap

---

# 6. HÉBERGEMENT ET MISE EN LIGNE

## 6.1 Option A : Netlify (recommandé)

**Avantages** : Gratuit, HTTPS automatique, déploiement facile

### Étapes :
1. Crée un compte sur [netlify.com](https://netlify.com)
2. Clique sur "Add new site" → "Deploy manually"
3. Glisse-dépose ton dossier de site
4. Tu obtiens : `ton-site.netlify.app`
5. (Optionnel) Connecte ton domaine personnalisé

## 6.2 Option B : GitHub Pages

**Avantages** : Gratuit, versioning Git intégré

### Étapes :
1. Crée un compte [github.com](https://github.com)
2. Crée un repository : `mon-mouvement`
3. Upload tes fichiers
4. Va dans Settings → Pages → Source: main
5. Tu obtiens : `ton-pseudo.github.io/mon-mouvement`

## 6.3 Option C : Hébergement classique

**Fournisseurs francophones** :
| Fournisseur | Prix/an | URL |
|-------------|---------|-----|
| OVH | ~30€ | ovh.com |
| Gandi | ~35€ | gandi.net |
| Infomaniak | ~60€ | infomaniak.com |
| o2switch | ~60€ | o2switch.fr |

## 6.4 Domaine personnalisé

**Où acheter** :
- OVH : ~10€/an pour un .be
- Gandi : ~12€/an
- Namecheap : ~8€/an pour un .com

**Configuration DNS** :
```
Type: A
Name: @
Value: [IP de ton hébergeur]

Type: CNAME
Name: www
Value: ton-site.netlify.app
```

---

# 7. CHECKLIST DE LANCEMENT

## Avant lancement :

### Contenu :
- [ ] Tous les textes "Lorem ipsum" remplacés
- [ ] Toutes les images personnalisées (pas celles de mr.be !)
- [ ] Informations de contact à jour
- [ ] Mentions légales rédigées
- [ ] Politique de confidentialité RGPD

### Technique :
- [ ] Toutes les meta tags renseignées
- [ ] Image OG créée (1200x630)
- [ ] Image Twitter créée (1200x600)
- [ ] Favicon uploadé
- [ ] sitemap.xml à la racine
- [ ] robots.txt à la racine
- [ ] HTTPS activé
- [ ] Test mobile OK
- [ ] Test sur Chrome, Firefox, Safari

### Réseaux sociaux :
- [ ] Comptes créés sur toutes les plateformes
- [ ] Liens sociaux mis à jour dans le header/footer
- [ ] Test de partage sur Facebook
- [ ] Test de partage sur Twitter
- [ ] Test de partage sur WhatsApp

### Analytics :
- [ ] Google Analytics configuré
- [ ] Google Search Console configuré
- [ ] Sitemap soumis à Google

## Semaine 1 :

- [ ] Annonce officielle sur tous les réseaux
- [ ] Email aux contacts existants
- [ ] Communiqué de presse (si applicable)
- [ ] 3-5 premiers articles publiés

## Mois 1 :

- [ ] 10-15 articles publiés
- [ ] 1-2 contenus viraux (infographie/vidéo)
- [ ] 100+ followers sur chaque réseau
- [ ] Premiers backlinks obtenus

---

# 8. RESSOURCES ET OUTILS

## Outils gratuits essentiels :

| Catégorie | Outil | URL |
|-----------|-------|-----|
| **SEO** | Google Search Console | search.google.com/search-console |
| **SEO** | PageSpeed Insights | pagespeed.web.dev |
| **SEO** | Ubersuggest | neilpatel.com/ubersuggest |
| **Analytics** | Google Analytics 4 | analytics.google.com |
| **Analytics** | Plausible (privacy) | plausible.io |
| **Design** | Canva | canva.com |
| **Design** | Figma | figma.com |
| **Images** | TinyPNG | tinypng.com |
| **Images** | Squoosh | squoosh.app |
| **Images** | Unsplash | unsplash.com |
| **Réseaux** | Buffer | buffer.com |
| **Réseaux** | Later | later.com |
| **Email** | Mailchimp | mailchimp.com |
| **Formulaires** | Tally | tally.so |
| **Formulaires** | Formspree | formspree.io |
| **Vidéo** | CapCut | capcut.com |
| **Icônes** | Font Awesome | fontawesome.com |
| **Icônes** | Lucide | lucide.dev |

## Tester son site :

| Test | Outil |
|------|-------|
| Performance | pagespeed.web.dev |
| Mobile | search.google.com/test/mobile-friendly |
| Open Graph | opengraph.xyz |
| Twitter Card | cards-dev.twitter.com/validator |
| Schema | search.google.com/test/rich-results |
| Accessibilité | wave.webaim.org |

## Apprendre :

| Sujet | Ressource |
|-------|-----------|
| SEO | moz.com/beginners-guide-to-seo |
| HTML/CSS | developer.mozilla.org |
| JavaScript | javascript.info |
| Marketing | hubspot.com/resources |

---

# SUPPORT

Pour toute question ou amélioration, tu peux :
1. Modifier directement le code HTML
2. Demander de l'aide à Claude
3. Consulter les ressources listées ci-dessus

---

**Bonne chance avec ton mouvement !** 🚀

*Documentation générée le 9 janvier 2026*
