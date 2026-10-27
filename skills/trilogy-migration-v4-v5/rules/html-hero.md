# Hero — Migration HTML/CSS v4 → v5

## Changement

La classe de fond du Hero possède déjà le préfixe `has-background-` en v4. Le préfixe reste inchangé en v5 : migrer uniquement le nom legacy de la couleur. En particulier, `info` devient `information`.

## Correspondances courantes

| Classe v4 sur Hero | Classe v5 sur Hero |
|--------------------|--------------------|
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

Pour les autres anciens noms neutres, disabled et stroke, suivre les mappings de [react-background-color.md](react-background-color.md) et confirmer le token selon l'usage visuel.

## Portée obligatoire

Migrer le suffixe de couleur uniquement sur la racine identifiée comme Hero (par exemple l'élément portant `hero`). Ne pas ajouter ni supprimer le préfixe `has-background-`. Ne pas remplacer globalement `info`, ni modifier les classes des descendants.

```html
<!-- Avant -->
<section class="hero has-background-info">...</section>
<div class="tag has-accent">...</div>

<!-- Après : seul Hero est migré -->
<section class="hero has-background-information">...</section>
<div class="tag has-accent">...</div>
```

Si l'élément racine Hero n'est pas identifiable sans ambiguïté, laisser la classe inchangée et signaler le cas.
