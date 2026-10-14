# Icon — Migration HTML/CSS v4 → v5

## Changement

Pour un composant Icon, la classe de couleur de fond passe de `has-{couleur}` à `has-background-{couleur-v5}`. Par exemple, le fond accent devient `has-background-accent`, et le fond information devient `has-background-information`.

## Correspondances courantes

| Classe v4 sur Icon | Classe v5 sur Icon |
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

Pour les autres anciens noms neutres, disabled et stroke, suivre les mappings de [react-background-color.md](react-background-color.md). Cette règle concerne uniquement le fond de l'Icon : ne pas modifier sa classe `is-*` de couleur d'icône ou ses classes d'état.

## Portée obligatoire

Ne modifier la classe que sur un élément identifié comme racine d'Icon (par exemple portant `icon`). **Ne pas remplacer globalement** les classes `has-accent`, `has-info`, etc. sur le projet ou sur les autres composants.

```html
<!-- Avant -->
<span class="icon has-accent">...</span>
<span class="button has-accent">...</span>

<!-- Après : seul le fond d'Icon est migré -->
<span class="icon has-background-accent">...</span>
<span class="button has-accent">...</span>
```

Si la classe représente la couleur du glyphe plutôt que son fond, ne pas appliquer cette migration ; vérifier l'API et signaler le cas ambigu.
