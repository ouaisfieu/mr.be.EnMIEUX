# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer à **MR EN MIEUX** ! Ce document vous guidera à travers le processus de contribution.

## 📋 Table des matières

- [Code de Conduite](#-code-de-conduite)
- [Comment Contribuer](#-comment-contribuer)
- [Signaler un Bug](#-signaler-un-bug)
- [Proposer une Fonctionnalité](#-proposer-une-fonctionnalité)
- [Soumettre une Pull Request](#-soumettre-une-pull-request)
- [Standards de Code](#-standards-de-code)
- [Commits](#-commits)

---

## 📜 Code de Conduite

En participant à ce projet, vous acceptez de respecter notre code de conduite :

- 🤝 Soyez respectueux et inclusif
- 💬 Communiquez de manière constructive
- 🎯 Concentrez-vous sur ce qui est le mieux pour la communauté
- 🙏 Acceptez les critiques constructives avec grâce

---

## 🚀 Comment Contribuer

### 1. Fork le Repository

Cliquez sur le bouton "Fork" en haut à droite de la page GitHub.

### 2. Clonez votre Fork

```bash
git clone https://github.com/VOTRE-USERNAME/mr-en-mieux.git
cd mr-en-mieux
```

### 3. Créez une Branche

```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```

### 4. Faites vos Modifications

Codez, testez, vérifiez !

### 5. Committez

```bash
git add .
git commit -m "Add: description de votre changement"
```

### 6. Poussez

```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

### 7. Créez une Pull Request

Allez sur GitHub et cliquez sur "New Pull Request".

---

## 🐛 Signaler un Bug

Avant de signaler un bug :

1. ✅ Vérifiez que le bug n'a pas déjà été signalé
2. ✅ Testez avec la dernière version du code

### Template de Bug Report

```markdown
**Description du Bug**
Une description claire et concise du bug.

**Pour Reproduire**
Étapes pour reproduire le comportement :
1. Aller sur '...'
2. Cliquer sur '....'
3. Scroller jusqu'à '....'
4. Voir l'erreur

**Comportement Attendu**
Une description claire de ce qui devrait se passer.

**Captures d'écran**
Si applicable, ajoutez des captures d'écran.

**Environnement**
 - OS: [ex. Windows 11, macOS Sonoma]
 - Navigateur: [ex. Chrome 120, Firefox 121]
 - Résolution: [ex. 1920x1080]
```

---

## 💡 Proposer une Fonctionnalité

### Template de Feature Request

```markdown
**La fonctionnalité est-elle liée à un problème ?**
Une description claire du problème. Ex. Je suis frustré quand [...]

**Décrivez la solution souhaitée**
Une description claire de ce que vous voulez voir arriver.

**Décrivez les alternatives considérées**
Une description des solutions alternatives que vous avez envisagées.

**Contexte additionnel**
Tout autre contexte ou captures d'écran.
```

---

## 📝 Soumettre une Pull Request

### Checklist avant de soumettre

- [ ] Mon code suit les standards du projet
- [ ] J'ai testé mes changements sur mobile et desktop
- [ ] J'ai testé sur Chrome, Firefox et Safari
- [ ] Mon code ne génère pas d'erreurs dans la console
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Mes commits suivent la convention de nommage

### Template de Pull Request

```markdown
## Description
Une description claire des changements apportés.

## Type de changement
- [ ] Bug fix (changement non-breaking qui corrige un problème)
- [ ] Nouvelle fonctionnalité (changement non-breaking qui ajoute une fonctionnalité)
- [ ] Breaking change (changement qui casserait une fonctionnalité existante)
- [ ] Documentation

## Comment cela a-t-il été testé ?
Décrivez les tests effectués.

## Captures d'écran (si applicable)
Ajoutez des captures d'écran.

## Checklist
- [ ] Mon code suit les guidelines du projet
- [ ] J'ai fait une self-review de mon code
- [ ] J'ai commenté mon code si nécessaire
- [ ] J'ai mis à jour la documentation
- [ ] Mes changements ne génèrent pas de warnings
```

---

## 📐 Standards de Code

### HTML

```html
<!-- ✅ Bon -->
<section class="hero-section">
    <div class="container">
        <h1>Titre Principal</h1>
        <p>Description</p>
    </div>
</section>

<!-- ❌ Mauvais -->
<div class="hero">
<div class="container">
<h1>Titre</h1><p>Description</p>
</div></div>
```

- Utilisez des éléments sémantiques (`<section>`, `<article>`, `<nav>`, etc.)
- Indentation de 4 espaces
- Attributs sur une seule ligne si < 3 attributs
- Commentaires pour les sections importantes

### CSS

```css
/* ✅ Bon */
.card {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: var(--mr-white);
    border-radius: var(--radius-md);
    transition: var(--transition);
}

.card:hover {
    transform: translateY(-5px);
}

/* ❌ Mauvais */
.card{display:flex;flex-direction:column;padding:20px;background:#fff;border-radius:15px;}
.card:hover{transform:translateY(-5px)}
```

- Utilisez les variables CSS définies dans `:root`
- Une propriété par ligne
- Espace après les deux-points
- Groupez les propriétés logiquement

### JavaScript

```javascript
// ✅ Bon
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

// ❌ Mauvais
function init(){
var menu=document.querySelector('.menu-toggle')
menu.addEventListener('click',function(){document.querySelector('nav').classList.toggle('active')})
}
```

- Utilisez `const` et `let`, jamais `var`
- Noms de fonctions descriptifs
- Commentaires pour la logique complexe
- Vérifiez l'existence des éléments DOM

---

## 📝 Commits

### Convention de Nommage

```
Type: Description courte (max 50 caractères)

Corps du message (optionnel, max 72 caractères par ligne)
Expliquez le QUOI et le POURQUOI, pas le COMMENT.

Refs: #123 (optionnel, référence à une issue)
```

### Types de Commits

| Type | Description |
|------|-------------|
| `Add` | Nouvelle fonctionnalité |
| `Fix` | Correction de bug |
| `Update` | Mise à jour d'une fonctionnalité existante |
| `Remove` | Suppression de code/fichiers |
| `Refactor` | Refactoring du code |
| `Style` | Changements de style (CSS, formatage) |
| `Docs` | Documentation |
| `Test` | Ajout/modification de tests |

### Exemples

```bash
# ✅ Bons commits
git commit -m "Add: mobile navigation menu"
git commit -m "Fix: header not sticky on Safari"
git commit -m "Update: improve card hover animation"
git commit -m "Docs: update README with new screenshots"

# ❌ Mauvais commits
git commit -m "fix"
git commit -m "updates"
git commit -m "WIP"
git commit -m "asdfasdf"
```

---

## 🏷️ Labels des Issues

| Label | Description |
|-------|-------------|
| `bug` | Quelque chose ne fonctionne pas |
| `enhancement` | Nouvelle fonctionnalité |
| `documentation` | Amélioration de la doc |
| `good first issue` | Bon pour les débutants |
| `help wanted` | Aide demandée |
| `duplicate` | Issue dupliquée |
| `wontfix` | Ne sera pas corrigé |

---

## 🙏 Merci !

Merci de prendre le temps de contribuer ! Chaque contribution, grande ou petite, est appréciée.

Si vous avez des questions, n'hésitez pas à ouvrir une issue ou à nous contacter.

**Happy coding!** 🚀
