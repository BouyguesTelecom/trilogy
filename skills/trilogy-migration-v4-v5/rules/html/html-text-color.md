# Couleur de texte — Migration HTML/CSS v4 → v5

## Changement de classe pour les couleurs de text

| Classe v4             | Classe v5                 |
| --------------------- | ------------------------- |
| `is-success`          | `text-success`            |
| `is-success-fade`     | `text-success-subtle`     |
| `is-warning`          | `text-warning`            |
| `is-warning-fade`     | `text-warning-subtle`     |
| `is-error`            | `text-error`              |
| `is-error-fade`       | `text-error-subtle`       |
| `is-info`             | `text-information`        |
| `is-info-fade`        | `text-information-subtle` |
| `is-accent`           | `text-accent`             |
| `is-accent-fade`      | `text-accent-subtle`      |
| `is-brand`            | `text-brand`              |
| `is-brand-fade`       | `text-brand-subtle`       |
| `is-disabled`         | `text-disabled`           |
| `is-disabled-fade`    | `text-disabled`           |
| `is-main`             | `text-primary`            |
| `is-main-fade`        | `text-primary-subtle`     |
| `is-font-placeholder` | `text-placeholder`        |
| `is-stroke`           | `text-secondary`          |
| `is-stroke-fade`      | `text-secondary-subtle`   |
| `is-neutral`          | `text-secondary`          |
| `is-neutral-fade`     | `text-secondary-subtle`   |
| `is-background`       | `text-inverse`            |
| `is-white`            | `text-inverse`            |
| `is-grey`             | `text-secondary`          |

## Exemples d'application

```html
<!-- v4 -->
<p class="is-main">Texte principal</p>
<span class="is-info">Information</span>
<span class="is-brand">Texte marque</span>
<span class="is-success">Succès</span>

<!-- v5 -->
<p class="text-primary">Texte principal</p>
<span class="text-information">Information</span>
<span class="text-brand">Texte marque</span>
<span class="text-success">Succès</span>
```

## Précautions de portée

- **Cible** : Ne migrer que les classes appliquées comme utilitaires de couleur sur du texte (`<span>`, `<p>`, titres, labels, etc.).
- **Composants** : Ne pas remplacer à l'aveugle les modificateurs de variantes ou d'états d'autres composants v4 (ex. `.button.is-primary`, modificateurs d'input ou de card), sauf lorsqu'il s'agit explicitement de la classe utilitaire de couleur de texte.
