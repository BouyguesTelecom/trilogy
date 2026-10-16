# Icon — Migration HTML/CSS v4 → v5

## Changement

La classe de fond de l'Icon possède déjà le préfixe `has-background-` en v4. Ce préfixe reste inchangé en v5 : migrer uniquement le nom legacy de couleur. En particulier, `info` devient `information`.

## Correspondances courantes

| Classe v4 sur Icon | Classe v5 sur Icon |
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

Pour les autres anciens noms neutres, disabled et stroke, suivre les mappings de [react-background-color.md](react-background-color.md). Cette règle concerne uniquement le fond de l'Icon : ne pas modifier sa classe `is-*` de couleur d'icône ou ses classes d'état.

## Portée obligatoire

Migrer uniquement le suffixe de couleur de fond sur un élément identifié comme racine d'Icon (par exemple portant `icon`). Ne pas ajouter ni supprimer le préfixe `has-background-`, ni remplacer globalement `info`. Cette règle concerne uniquement le fond de l'Icon : ne pas modifier sa classe `is-*` de couleur de glyphe ou ses classes d'état.

```html
<!-- Avant -->
<span class="icon has-background-info">...</span>
<span class="button has-accent">...</span>

<!-- Après : seul le fond d'Icon est migré -->
<span class="icon has-background-information">...</span>
<span class="button has-accent">...</span>
```

Si la classe représente la couleur du glyphe plutôt que son fond, ne pas appliquer cette migration ; vérifier l'API et signaler le cas ambigu.
