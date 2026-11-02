# Couleur de texte (prop className) — Migration React v4 → v5

## Changement de classe pour les couleurs de texte dans className

En React, les consommateurs appliquent souvent des classes helpers de couleur via la prop `className` sur des composants Trilogy (`Text`, `Title`, `Paragraph`, `Box`, etc.) ou sur des balises JSX natives.

La correspondance des classes v4 (`is-*`) vers les classes v5 (`text-*`) est identique à celle du HTML/CSS.

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

## Exemples d'application en JSX / TSX

### Chaîne statique

```tsx
// v4
<Text className="is-main">Texte principal</Text>
<Title className="is-brand">Titre</Title>
<span className="is-info">Info</span>

// v5
<Text className="text-primary">Texte principal</Text>
<Title className="text-brand">Titre</Title>
<span className="text-information">Info</span>
```

### Classes multiples

```tsx
// v4
<Text className="is-size-6 is-main-fade">Détail</Text>

// v5
<Text className="is-size-6 text-primary-subtle">Détail</Text>
```

### Template literals / expressions dynamiques

```tsx
// v4
<span className={`badge ${isValid ? "is-success" : "is-error"}`}>Statut</span>

// v5
<span className={`badge ${isValid ? "text-success" : "text-error"}`}>Statut</span>
```

### Utilitaires (`clsx`, `classnames`)

```tsx
// v4
<Text className={clsx("custom-text", { "is-main": isPrimary, "is-disabled": isDisabled })}>
  Contenu
</Text>

// v5
<Text className={clsx("custom-text", { "text-primary": isPrimary, "text-disabled": isDisabled })}>
  Contenu
</Text>
```

## Précautions de portée

- **Cible** : Ne migrer que les classes de couleur de texte passées dans la prop `className`.
- **Props de composants** : Ne pas confondre avec les props dédiées des composants (ex. `status="info"` ou `variant="main"` sur un composant ne sont pas des `className`).
- **Modificateurs de composants** : Ne pas modifier à l'aveugle les classes de variantes de composants (ex. `<Button className="is-primary" />` représente une variante de bouton, pas un helper de couleur de texte).
