# Couleur d'arrière-plan — Migration HTML/CSS v4 → v5

## Changement de classe pour les couleurs de fond

| Classe v4                         | Classe v5                 |
| --------------------------------- | ------------------------- |
| `has-background-success`          | `bg-success`              |
| `has-background-success-fade`     | `bg-success-subtle`       |
| `has-background-warning`          | `bg-warning`              |
| `has-background-warning-fade`     | `bg-warning-subtle`       |
| `has-background-error`            | `bg-error`                |
| `has-background-error-fade`       | `bg-error-subtle`         |
| `has-background-info`             | `bg-information`          |
| `has-background-info-fade`        | `bg-information-subtle`   |
| `has-background-accent`           | `bg-accent`               |
| `has-background-accent-fade`      | `bg-accent-subtle`        |
| `has-background-brand`            | `bg-brand`                |
| `has-background-brand-fade`       | `bg-brand-subtle`         |
| `has-background-disabled`         | `bg-disabled`             |
| `has-background-disabled-fade`    | `bg-disabled`             |
| `has-background-main`             | `bg-primary`              |
| `has-background-main-fade`        | `bg-primary-subtle`       |
| `has-background-font-placeholder` | `bg-placeholder`          |
| `has-background-stroke`           | `bg-secondary`            |
| `has-background-stroke-fade`      | `bg-secondary-subtle`     |
| `has-background-neutral`          | `bg-secondary`            |
| `has-background-neutral-fade`     | `bg-secondary-subtle`     |
| `has-background-background`       | `bg-inverse`              |
| `has-background-white`            | `bg-inverse`              |
| `has-background-grey`             | `bg-secondary`            |

## Exemples d'application

```html
<!-- v4 -->
<div class="has-background-main">Contenu principal</div>
<section class="has-background-info-fade">Section informative</section>
<div class="has-background-brand">Bandeau marque</div>
<div class="has-background-success">Message de succès</div>

<!-- v5 -->
<div class="bg-primary">Contenu principal</div>
<section class="bg-information-subtle">Section informative</section>
<div class="bg-brand">Bandeau marque</div>
<div class="bg-success">Message de succès</div>
```

## Précautions de portée

- **Cible** : Ne migrer que les classes utilitaires de couleur de fond (`has-background-*`).
- **Composants avec styles encapsulés** : Vérifier si des composants portent une classe spécifique v4 pour leur fond qui ne doit pas être traitée comme un simple helper global.
