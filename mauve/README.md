# 🚀 SITE POLITIQUE COMPLET - PRÊT À DÉPLOYER

## 📁 CONTENU DU PACK

Ce pack contient **9 pages HTML** avec tout le CSS intégré (inline) :

| Fichier | Description |
|---------|-------------|
| `index.html` | Page d'accueil avec slider |
| `mouvement.html` | Histoire et valeurs |
| `equipe.html` | L'équipe dirigeante |
| `programme.html` | Le programme politique |
| `actualites.html` | Les actualités |
| `agenda.html` | Les événements |
| `contact.html` | Formulaire de contact |
| `adhesion.html` | Page d'adhésion |
| `404.html` | Page d'erreur |

---

## 🎯 DÉPLOIEMENT SUR GITHUB PAGES

### Option 1 : Upload direct (le plus simple)

1. Va sur ton repository GitHub
2. Clique sur **Add file** → **Upload files**
3. Glisse TOUS les fichiers HTML (pas le dossier, les fichiers !)
4. Clique sur **Commit changes**
5. Va dans **Settings** → **Pages**
6. Sous "Source", choisis **main** et **/root**
7. Clique **Save**
8. Attends 2-3 minutes, ton site sera sur `https://ton-pseudo.github.io/ton-repo/`

### Option 2 : Git en ligne de commande

```bash
git clone https://github.com/ton-pseudo/ton-repo.git
cd ton-repo
# Copie tous les fichiers HTML ici
git add .
git commit -m "Site complet"
git push
```

---

## ⚠️ ERREURS COURANTES

### ❌ "Mon site est cassé / pas de style"
**Cause** : Tu as uploadé des fichiers qui référencent des CSS externes
**Solution** : Utilise MES fichiers, ils ont TOUT le CSS en inline

### ❌ "Page 404"
**Cause** : Le fichier n'est pas au bon endroit
**Solution** : Les fichiers doivent être à la RACINE du repo, pas dans un sous-dossier

### ❌ "Les liens ne marchent pas"
**Cause** : Mauvaise structure de dossiers
**Solution** : Tous les fichiers HTML doivent être au même niveau

---

## 🎨 PERSONNALISATION

### Changer la couleur principale
Cherche `--blue:#002eff` dans chaque fichier et remplace par ta couleur.

### Changer le logo
Cherche `https://www.mr.be/wp-content/uploads/2023/09/Logonew-retina.png` et remplace par l'URL de ton logo.

### Changer les textes
Modifie directement le HTML de chaque fichier.

---

## 📱 CARACTÉRISTIQUES

✅ 100% responsive (mobile, tablette, desktop)
✅ CSS inline (aucune dépendance externe)
✅ Fonts chargées depuis mr.be
✅ Icônes Font Awesome (CDN)
✅ Design professionnel style MR
✅ SEO-friendly

---

## 🆘 BESOIN D'AIDE ?

Si ton site ne fonctionne pas :
1. Vérifie que les fichiers sont à la racine du repo
2. Vérifie que GitHub Pages est activé
3. Attends 2-3 minutes après chaque modification
4. Vide le cache de ton navigateur (Ctrl+Shift+R)

Bonne chance ! 🎉
