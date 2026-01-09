## 🚀 GUIDE COMPLET : Fork & Personnalisation

---

### 1. RÉCUPÉRER LE FICHIER

Tu as déjà le fichier `mr-clone-exact.html`. Télécharge-le et renomme-le :
```
mon-mouvement.html
```

---

### 2. OUTILS NÉCESSAIRES

| Outil | Gratuit | Usage |
|-------|---------|-------|
| **VS Code** | ✅ | Éditeur de code |
| **Live Server** (extension VS Code) | ✅ | Prévisualisation en direct |
| **Canva** ou **Figma** | ✅ | Créer logo + images |
| **TinyPNG** | ✅ | Compresser images |
| **Netlify** ou **GitHub Pages** | ✅ | Hébergement gratuit |

---

### 3. STRUCTURE DU CODE À MODIFIER

```
📄 mon-mouvement.html
│
├── <head>
│   ├── <title> .............. Nom du site (onglet navigateur)
│   ├── <link rel="icon"> .... Favicon
│   └── <style> .............. TOUT LE CSS
│
├── <body>
│   ├── #header-outer ........ Header + Navigation
│   ├── .hero-slider ......... Slider accueil
│   ├── .section-blue ........ Section 3 colonnes bleues
│   ├── .section-actu ........ Actualités
│   ├── .section-agenda ...... Événements
│   ├── .section-cta ......... Appel à l'action
│   └── .footer .............. Pied de page
│
└── <script> ................. JavaScript (slider, menu)
```

---

### 4. PERSONNALISATION ÉTAPE PAR ÉTAPE

#### 🎨 A. CHANGER LES COULEURS

Cherche ces lignes dans le CSS (début du fichier) :

```css
/* AVANT - Bleu MR */
background: #002eff;
color: #002eff;

/* APRÈS - Ta couleur */
background: #E63946;  /* Rouge */
color: #E63946;
```

**Palette suggérées :**
| Style | Principale | Secondaire |
|-------|------------|------------|
| Gauche | `#E63946` (rouge) | `#1D3557` |
| Écolo | `#2D6A4F` (vert) | `#40916C` |
| Centre | `#7209B7` (violet) | `#3A0CA3` |
| Droite | `#002eff` (bleu) | `#0022cc` |

#### 🔤 B. CHANGER LE NOM / LOGO

**1. Titre du site :**
```html
<title>Accueil - MON MOUVEMENT</title>
```

**2. Logo (header + footer) :**
```html
<!-- Remplacer l'URL de l'image -->
<img src="https://www.mr.be/..." alt="MR">

<!-- Par ton logo -->
<img src="images/mon-logo.png" alt="Mon Mouvement">
```

**3. Ou logo texte :**
```html
<!-- Remplacer l'image par du texte -->
<a href="#" class="logo-center">
    <span style="font-size: 28px; font-weight: 700; color: #fff;">
        MON MOUVEMENT
    </span>
</a>
```

#### 📝 C. MODIFIER LES TEXTES

**Slider - Titres :**
```html
<h1 class="slide-title">TON TITRE ICI</h1>
```

**Section bleue :**
```html
<h3>Notre histoire</h3>  <!-- Changer -->
<p>Texte descriptif...</p>  <!-- Changer -->
```

**Articles :**
```html
<h3 class="article-title">Titre de l'article</h3>
<p class="article-excerpt">Résumé de l'article...</p>
```

#### 🖼️ D. CHANGER LES IMAGES

**Images du slider :**
```html
<div class="slide-bg" style="background-image: url('TON-IMAGE.jpg');"></div>
```

**Images articles :**
```html
<img src="images/article-1.jpg" alt="Description">
```

**Avatars auteurs :**
```html
<img src="images/avatar-marie.jpg" alt="Marie">
```

> 💡 **Conseil :** Utilise des images de 1920x1080px minimum pour le slider

#### 🔗 E. MODIFIER LA NAVIGATION

```html
<nav class="nav-left">
    <a href="qui-sommes-nous.html" class="nav-link">Qui sommes-nous</a>
    <a href="actualites.html" class="nav-link">Actualités</a>
    <a href="programme.html" class="nav-link">Programme</a>
</nav>

<nav class="nav-right">
    <a href="agenda.html" class="nav-link">Agenda</a>
    <a href="contact.html" class="nav-link">Contact</a>
    <a href="adhesion.html" class="btn-adhesion">Rejoindre</a>
</nav>
```

#### 📱 F. RÉSEAUX SOCIAUX

```html
<div class="social-header">
    <a href="https://twitter.com/TON_COMPTE"><i class="fab fa-x-twitter"></i></a>
    <a href="https://facebook.com/TON_PAGE"><i class="fab fa-facebook-f"></i></a>
    <a href="https://instagram.com/TON_COMPTE"><i class="fab fa-instagram"></i></a>
</div>
```

---

### 5. CRÉER PLUSIEURS PAGES

**Structure de dossier recommandée :**
```
📁 mon-site/
├── 📄 index.html (accueil)
├── 📄 programme.html
├── 📄 equipe.html
├── 📄 actualites.html
├── 📄 contact.html
├── 📄 adhesion.html
├── 📁 images/
│   ├── logo.png
│   ├── hero-1.jpg
│   └── ...
└── 📁 css/
    └── style.css (optionnel, tu peux extraire le CSS)
```

**Pour créer une nouvelle page :**
1. Duplique `index.html`
2. Renomme en `programme.html`
3. Garde header + footer
4. Change le contenu au milieu

---

### 6. HÉBERGEMENT GRATUIT

#### Option A : Netlify (le plus simple)
1. Va sur [netlify.com](https://netlify.com)
2. Crée un compte gratuit
3. Drag & drop ton dossier
4. Tu obtiens : `ton-site.netlify.app`
5. Tu peux connecter un domaine custom

#### Option B : GitHub Pages
1. Crée un compte [github.com](https://github.com)
2. Nouveau repository : `mon-mouvement`
3. Upload tes fichiers
4. Settings → Pages → Source: main
5. Tu obtiens : `ton-pseudo.github.io/mon-mouvement`

#### Option C : Domaine personnalisé
- Achète un domaine sur **OVH**, **Gandi** ou **Namecheap** (~10€/an)
- Connecte-le à Netlify (gratuit) ou à un hébergement

---

### 7. CHECKLIST AVANT LANCEMENT

- [ ] Nom et logo personnalisés
- [ ] Couleurs modifiées
- [ ] Tous les textes "Lorem ipsum" remplacés
- [ ] Images originales (pas celles de MR.be !)
- [ ] Liens de navigation fonctionnels
- [ ] Réseaux sociaux à jour
- [ ] Mentions légales / RGPD
- [ ] Test mobile
- [ ] Test sur différents navigateurs

---

### 8. POUR ALLER PLUS LOIN

| Fonctionnalité | Solution |
|----------------|----------|
| Formulaire de contact | Formspree.io (gratuit) |
| Newsletter | Mailchimp (gratuit jusqu'à 500 contacts) |
| Paiement adhésion | Stripe / HelloAsso |
| Blog dynamique | Ajouter un CMS (Netlify CMS) |
| Statistiques | Google Analytics |

---

**Tu veux que je te crée une version déjà personnalisée avec ton nom de mouvement et tes couleurs ?** Dis-moi juste :
1. Nom du mouvement
2. Couleur principale (ou orientation politique)
3. Slogan
