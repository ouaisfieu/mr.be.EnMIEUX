## 🚀 GUIDE SEO & VIRALITÉ POLITIQUE

---

### PARTIE 1 : SEO TECHNIQUE

#### A. BALISES META ESSENTIELLES

Ajoute ça dans le `<head>` de chaque page :

```html
<head>
    <!-- SEO de base -->
    <title>Mon Mouvement | Pour une Belgique qui nous ressemble</title>
    <meta name="description" content="Rejoignez le mouvement citoyen qui veut changer la politique. Programme, actualités, adhésion. Ensemble, reprenons le pouvoir.">
    <meta name="keywords" content="politique belgique, mouvement citoyen, parti politique, élections, démocratie">
    <meta name="author" content="Mon Mouvement">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://www.monmouvement.be/">

    <!-- Open Graph (Facebook, LinkedIn) -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.monmouvement.be/">
    <meta property="og:title" content="Mon Mouvement | Pour une Belgique qui nous ressemble">
    <meta property="og:description" content="Rejoignez le mouvement citoyen qui veut changer la politique.">
    <meta property="og:image" content="https://www.monmouvement.be/images/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="fr_BE">
    <meta property="og:site_name" content="Mon Mouvement">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@MonMouvement">
    <meta name="twitter:title" content="Mon Mouvement | Pour une Belgique qui nous ressemble">
    <meta name="twitter:description" content="Rejoignez le mouvement citoyen qui veut changer la politique.">
    <meta name="twitter:image" content="https://www.monmouvement.be/images/twitter-card.jpg">

    <!-- Schema.org (Google) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "PoliticalParty",
        "name": "Mon Mouvement",
        "url": "https://www.monmouvement.be",
        "logo": "https://www.monmouvement.be/images/logo.png",
        "description": "Mouvement politique citoyen belge",
        "foundingDate": "2026",
        "sameAs": [
            "https://www.facebook.com/MonMouvement",
            "https://twitter.com/MonMouvement",
            "https://www.instagram.com/MonMouvement"
        ]
    }
    </script>
</head>
```

#### B. IMAGE OG (PARTAGE RÉSEAUX SOCIAUX)

**Dimensions obligatoires :**
| Plateforme | Taille | Usage |
|------------|--------|-------|
| Facebook/LinkedIn | 1200 x 630 px | og:image |
| Twitter | 1200 x 600 px | twitter:image |
| WhatsApp | 400 x 400 px | Miniature |

**Créer avec Canva (gratuit) :**
- Template "Publication Facebook"
- Logo + slogan + couleur de fond
- Texte lisible en petit format

#### C. PERFORMANCE (GOOGLE ADORE LA VITESSE)

```html
<!-- Préchargement des polices -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Images WebP (30% plus légères) -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description" loading="lazy">
</picture>

<!-- Lazy loading natif -->
<img src="photo.jpg" alt="Description" loading="lazy">
```

**Outils gratuits :**
| Outil | URL | Usage |
|-------|-----|-------|
| PageSpeed Insights | pagespeed.web.dev | Score performance |
| TinyPNG | tinypng.com | Compresser images |
| Squoosh | squoosh.app | Convertir en WebP |

#### D. STRUCTURE URL & FICHIERS

```
✅ BON
https://monmouvement.be/programme-economie
https://monmouvement.be/actualites/reforme-fiscale-2026

❌ MAUVAIS  
https://monmouvement.be/page?id=123
https://monmouvement.be/article_v2_final_NEW.html
```

**Fichiers techniques à créer :**

```xml
<!-- sitemap.xml (à la racine) -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.monmouvement.be/</loc>
        <lastmod>2026-01-09</lastmod>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.monmouvement.be/programme</loc>
        <lastmod>2026-01-09</lastmod>
        <priority>0.8</priority>
    </url>
    <!-- Ajouter toutes les pages -->
</urlset>
```

```txt
<!-- robots.txt (à la racine) -->
User-agent: *
Allow: /
Sitemap: https://www.monmouvement.be/sitemap.xml
```

---

### PARTIE 2 : SEO CONTENU

#### A. MOTS-CLÉS STRATÉGIQUES

**Outils gratuits pour trouver les mots-clés :**
| Outil | Usage |
|-------|-------|
| Google Trends | trends.google.fr - Tendances recherches |
| Ubersuggest | neilpatel.com/ubersuggest - Volume recherche |
| AnswerThePublic | answerthepublic.com - Questions des gens |
| Google autocomplete | Tape dans Google, regarde suggestions |

**Mots-clés politiques belges à cibler :**
```
- "élections belgique 2026"
- "nouveau parti politique belgique"
- "programme politique fiscalité"
- "adhérer parti politique"
- "mouvement citoyen belgique"
- "réforme pension belgique"
- "[ta région] politique"
```

#### B. STRUCTURE DE PAGE OPTIMISÉE

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

#### C. CONTENU QUI RANKE

**Articles à publier régulièrement :**

| Type | Fréquence | Exemple |
|------|-----------|---------|
| Réaction actualité | 2-3x/semaine | "Notre position sur [événement]" |
| Article de fond | 1x/semaine | "10 propositions pour l'emploi" |
| Interview/Portrait | 2x/mois | "Rencontre avec notre candidat à [ville]" |
| Communiqué presse | Selon actu | "Le mouvement dénonce..." |

**Format optimal :**
- **Titre** : 60 caractères max (visible dans Google)
- **Description** : 155 caractères max
- **Contenu** : 800-1500 mots minimum
- **Images** : 2-3 par article avec balises alt

---

### PARTIE 3 : VIRALITÉ

#### A. ÉLÉMENTS DE PARTAGE INTÉGRÉS

Ajoute des boutons de partage sur chaque page :

```html
<!-- Barre de partage flottante -->
<div class="share-bar">
    <!-- Facebook -->
    <a href="https://www.facebook.com/sharer/sharer.php?u=URL_DE_LA_PAGE" 
       target="_blank" class="share-btn facebook">
        <i class="fab fa-facebook-f"></i>
    </a>
    
    <!-- Twitter/X -->
    <a href="https://twitter.com/intent/tweet?url=URL_DE_LA_PAGE&text=TEXTE" 
       target="_blank" class="share-btn twitter">
        <i class="fab fa-x-twitter"></i>
    </a>
    
    <!-- WhatsApp -->
    <a href="https://wa.me/?text=TEXTE%20URL_DE_LA_PAGE" 
       target="_blank" class="share-btn whatsapp">
        <i class="fab fa-whatsapp"></i>
    </a>
    
    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/sharing/share-offsite/?url=URL_DE_LA_PAGE" 
       target="_blank" class="share-btn linkedin">
        <i class="fab fa-linkedin-in"></i>
    </a>
    
    <!-- Copier lien -->
    <button onclick="copyLink()" class="share-btn copy">
        <i class="fas fa-link"></i>
    </button>
</div>

<style>
.share-bar {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1000;
}

.share-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    transition: transform 0.3s, box-shadow 0.3s;
    border: none;
    cursor: pointer;
}

.share-btn:hover {
    transform: scale(1.15);
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

.share-btn.facebook { background: #1877f2; }
.share-btn.twitter { background: #000; }
.share-btn.whatsapp { background: #25d366; }
.share-btn.linkedin { background: #0a66c2; }
.share-btn.copy { background: #666; }

@media (max-width: 768px) {
    .share-bar {
        left: auto;
        right: 10px;
        top: auto;
        bottom: 20px;
        flex-direction: row;
    }
    .share-btn {
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
}
</style>

<script>
function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert('Lien copié !');
}
</script>
```

#### B. CONTENUS VIRAUX À CRÉER

| Format | Viralité | Exemple |
|--------|----------|---------|
| 🎯 **Infographie** | ⭐⭐⭐⭐⭐ | "5 chiffres chocs sur les impôts" |
| 🎬 **Vidéo courte** | ⭐⭐⭐⭐⭐ | Discours 60 sec, réaction actu |
| 📊 **Comparatif** | ⭐⭐⭐⭐ | "Notre programme vs les autres" |
| 💬 **Citation choc** | ⭐⭐⭐⭐ | Image avec citation du leader |
| 📝 **Thread/Carrousel** | ⭐⭐⭐ | "10 mesures en 10 slides" |
| 🗳️ **Sondage** | ⭐⭐⭐⭐ | "Êtes-vous pour ou contre ?" |

#### C. STRATÉGIE RÉSEAUX SOCIAUX

**Fréquence de publication :**
| Plateforme | Fréquence | Meilleur moment |
|------------|-----------|-----------------|
| Facebook | 1-2x/jour | 12h-14h, 19h-21h |
| Twitter/X | 3-5x/jour | 8h, 12h, 18h |
| Instagram | 1x/jour + stories | 11h-13h, 19h-21h |
| TikTok | 1-3x/jour | 19h-22h |
| LinkedIn | 3-5x/semaine | 8h-10h (mardi-jeudi) |

**Hashtags politiques belges :**
```
#Belgique #PolitiqueBelge #Elections2026
#Wallonie #Bruxelles #Flandre
#[TonMouvement] #[TonSlogan]
#Fiscalité #Emploi #Pension #Climat
```

#### D. TECHNIQUES DE VIRALITÉ

**1. Le "hook" (accroche) :**
```
❌ "Notre position sur la réforme fiscale"
✅ "Vous payez 45% d'impôts. Voici comment on va changer ça."

❌ "Communiqué de presse du mouvement"
✅ "Ce que le gouvernement vous cache sur les pensions"
```

**2. L'émotion :**
| Émotion | Exemple de titre |
|---------|------------------|
| Colère | "Ils nous ont menti pendant 10 ans" |
| Espoir | "Ensemble, on peut vraiment changer ça" |
| Fierté | "La Belgique peut redevenir un exemple" |
| Urgence | "Il nous reste 6 mois pour agir" |

**3. Call-to-action clair :**
```html
<!-- À la fin de chaque article -->
<div class="cta-box">
    <h3>Vous êtes d'accord ?</h3>
    <p>Rejoignez les 15 000 citoyens qui veulent changer les choses.</p>
    <a href="/adhesion" class="btn-cta">Adhérer maintenant</a>
    <a href="#" class="btn-share">Partager cet article</a>
</div>
```

**4. Preuve sociale :**
```html
<!-- Compteurs animés -->
<div class="social-proof">
    <div class="counter">
        <span class="number" data-target="15000">0</span>
        <span class="label">Membres</span>
    </div>
    <div class="counter">
        <span class="number" data-target="200">0</span>
        <span class="label">Sections locales</span>
    </div>
</div>
```

---

### PARTIE 4 : OUTILS GRATUITS

| Catégorie | Outil | URL |
|-----------|-------|-----|
| **SEO** | Google Search Console | search.google.com/search-console |
| **SEO** | Ubersuggest | neilpatel.com/ubersuggest |
| **Analytics** | Google Analytics 4 | analytics.google.com |
| **Analytics** | Plausible (privacy) | plausible.io |
| **Réseaux** | Buffer (gratuit 3 comptes) | buffer.com |
| **Réseaux** | Later (Instagram) | later.com |
| **Design** | Canva | canva.com |
| **Vidéo** | CapCut | capcut.com |
| **Email** | Mailchimp (gratuit 500) | mailchimp.com |
| **Formulaires** | Tally (illimité gratuit) | tally.so |

---

### PARTIE 5 : CHECKLIST LANCEMENT

#### Avant lancement :
- [ ] Toutes les meta tags en place
- [ ] Image OG créée (1200x630)
- [ ] sitemap.xml généré
- [ ] robots.txt créé
- [ ] Google Search Console configuré
- [ ] Google Analytics installé
- [ ] Boutons de partage fonctionnels
- [ ] Test de partage sur Facebook, Twitter, WhatsApp

#### Semaine 1 :
- [ ] Soumettre sitemap à Google
- [ ] Créer comptes réseaux sociaux
- [ ] Premier post d'annonce
- [ ] Email aux contacts existants

#### Mois 1 :
- [ ] 8-10 articles publiés
- [ ] 1 contenu viral (infographie/vidéo)
- [ ] 100 premiers followers sur chaque réseau
- [ ] Premiers backlinks (presse locale, blogs)

---

**Tu veux que je t'intègre directement ces éléments SEO et partage dans ton fichier HTML ?** 🎯
