# Hero — Migration HTML/CSS v4 → v5

## Changement

La classe de fond portée par la racine du composant Hero change de `has-{couleur}` vers `has-background-{couleur-v5}`. En v5, un Hero accent doit porter `has-background-accent`, et non `has-accent`.

## Correspondances courantes

| Classe v4 sur Hero | Classe v5 sur Hero |
|--------------------|--------------------|
| `has-white` | `has-background-primary` |
| `has-main` | `has-background-secondary` |
| `has-main-fade` | `has-background-secondary-subtle` |
| `has-accent` | `has-background-accent` |
| `has-accent-fade` | `has-background-accent-subtle` |
| `has-brand` | `has-background-brand` |
| `has-brand-fade` | `has-background-brand-subtle` |
| `has-success` / `has-success-fade` | `has-background-success` / `has-background-success-subtle` |
| `has-info` / `has-info-fade` | `has-background-information` / `has-background-information-subtle` |
| `has-warning` / `has-warning-fade` | `has-background-warning` / `has-background-warning-subtle` |
| `has-error` / `has-error-fade` | `has-background-error` / `has-background-error-subtle` |

Pour les autres anciens noms neutres, disabled et stroke, suivre les mappings de [react-background-color.md](react-background-color.md) et confirmer le token selon l'usage visuel.

## Portée obligatoire

Migrer uniquement la classe de fond sur la racine identifiée comme Hero (par exemple l'élément portant `hero`). **Ne pas remplacer globalement** `has-accent`, `has-info`, etc., car ces classes peuvent avoir d'autres usages. Ne pas changer les classes des descendants.

```html
<!-- Avant -->
<section class="hero has-accent">...</section>
<div class="tag has-accent">...</div>

<!-- Après : seul Hero est migré -->
<section class="hero has-background-accent">...</section>
<div class="tag has-accent">...</div>
```

Si l'élément racine Hero n'est pas identifiable sans ambiguïté, laisser la classe inchangée et signaler le cas.
