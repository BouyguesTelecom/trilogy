# Couleur d'arrière-plan (prop className) — Migration React v4 → v5

## Changement de classe pour les couleurs de fond dans className

En React, les consommateurs appliquent souvent des classes helpers de couleur de fond via la prop `className` sur des composants Trilogy (`Box`, `Section`, `Container`, `Columns`, `Column`, `Card`, etc.) ou sur des balises JSX natives (`div`, `section`, etc.).

La correspondance des classes v4 (`has-background-*`) vers les classes v5 (`bg-*`) est identique à celle du HTML/CSS.

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

## Exemples d'application en JSX / TSX

### Chaîne statique

```tsx
// v4
<Box className="has-background-main">Contenu</Box>
<Section className="has-background-brand">Section</Section>
<div className="has-background-info">Information</div>

// v5
<Box className="bg-primary">Contenu</Box>
<Section className="bg-brand">Section</Section>
<div className="bg-information">Information</div>
```

### Classes multiples

```tsx
// v4
<Box className="p-4 has-background-main-fade">Détail</Box>

// v5
<Box className="p-4 bg-primary-subtle">Détail</Box>
```

### Template literals / expressions dynamiques

```tsx
// v4
<div className={`card ${isActive ? "has-background-main" : "has-background-neutral-fade"}`}>Carte</div>

// v5
<div className={`card ${isActive ? "bg-primary" : "bg-secondary-subtle"}`}>Carte</div>
```

### Utilitaires (`clsx`, `classnames`)

```tsx
// v4
<Box className={clsx("custom-box", { "has-background-main": isPrimary, "has-background-disabled": isDisabled })}>
  Contenu
</Box>

// v5
<Box className={clsx("custom-box", { "bg-primary": isPrimary, "bg-disabled": isDisabled })}>
  Contenu
</Box>
```

## Précautions de portée

- **Cible** : Ne migrer que les classes de couleur de fond passées dans la prop `className`.
- **Props dédiées de composants** : Ne pas confondre avec les props dédiées comme `backgroundColor` ou `background` sur certains composants React (qui reçoivent des valeurs d'énumération ou des tokens, pas des classes CSS).
