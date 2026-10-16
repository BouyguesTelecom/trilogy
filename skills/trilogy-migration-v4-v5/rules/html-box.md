# Box — Migration HTML/CSS v4 → v5

## Changement

Pour `Box`, `BoxContent` et `BoxFooter`, le préfixe de classe v4 contient déjà `has-background-`. **Ne pas ajouter un second préfixe et ne pas convertir `has-accent`** : la migration porte sur le nom de la couleur quand il a changé, pas sur la structure de la classe.

## Correspondances courantes

| Classe v4 sur Box / BoxContent / BoxFooter | Classe v5 |
|--------------------------------------------|-----------|
| `has-background-white` | `has-background-primary` |
| `has-background-main` | `has-background-secondary` |
| `has-background-main-fade` | `has-background-secondary-subtle` |
| `has-background-accent` | `has-background-accent` (inchangée) |
| `has-background-accent-fade` | `has-background-accent-subtle` |
| `has-background-brand` | `has-background-brand` (inchangée) |
| `has-background-brand-fade` | `has-background-brand-subtle` |
| `has-background-success` / `has-background-success-fade` | `has-background-success` / `has-background-success-subtle` |
| `has-background-info` / `has-background-info-fade` | `has-background-information` / `has-background-information-subtle` |
| `has-background-warning` / `has-background-warning-fade` | `has-background-warning` / `has-background-warning-subtle` |
| `has-background-error` / `has-background-error-fade` | `has-background-error` / `has-background-error-subtle` |

Pour les autres anciens noms neutres, disabled et stroke, suivre les mappings de fond de [react-background-color.md](react-background-color.md) et confirmer le token selon l'usage visuel.

## Portée obligatoire

Migrer les noms de couleur uniquement sur l'élément de `Box`, `BoxContent` ou `BoxFooter` qui porte `has-background-*`. Ces classes gardent leur préfixe dans v5. La conversion d'information est `has-background-info` → `has-background-information`; ne jamais transformer cela en `has-info` ou ajouter un second `has-background-`. Ne pas faire de remplacement global : d'autres composants et classes peuvent avoir des usages distincts.

```html
<!-- Avant -->
<div class="box has-background-info">...</div>
<div class="box-content has-background-accent">...</div>
<div class="box-footer has-background-info-fade">...</div>
<div class="tag has-accent">...</div>

<!-- Après : préfixe inchangé, seul le nom de couleur évolue -->
<div class="box has-background-information">...</div>
<div class="box-content has-background-accent">...</div>
<div class="box-footer has-background-information-subtle">...</div>
<div class="tag has-accent">...</div>
```

Si l'élément Box/BoxContent/BoxFooter ne peut pas être identifié avec certitude, signaler le cas plutôt que modifier la classe.

## Box highlighted

Une Box `is-highlighted` porte aussi une classe `is-{couleur}` pour la couleur de sa bordure gauche. Le préfixe `is-` est conservé ; seul le nom de couleur suit les correspondances du tableau ci-dessus.

| Classe v4 (avec `is-highlighted`) | Classe v5 |
|-----------------------------------|-----------|
| `is-white` | `is-primary` |
| `is-main` | `is-secondary` |
| `is-main-fade` | `is-secondary-subtle` |
| `is-info` / `is-info-fade` | `is-information` / `is-information-subtle` |
| `is-success` / `is-success-fade` | `is-success` / `is-success-subtle` |
| `is-warning` / `is-warning-fade` | `is-warning` / `is-warning-subtle` |
| `is-error` / `is-error-fade` | `is-error` / `is-error-subtle` |
| `is-accent` / `is-accent-fade` | `is-accent` / `is-accent-subtle` |
| `is-brand` / `is-brand-fade` | `is-brand` / `is-brand-subtle` |

Ne migrer ces classes que sur un élément portant à la fois `box` et `is-highlighted`.

```html
<!-- Avant -->
<div class="box is-highlighted is-info">...</div>

<!-- Après -->
<div class="box is-highlighted is-information">...</div>
```
