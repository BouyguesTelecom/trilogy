# Box — Migration HTML/CSS v4 → v5

## Changement

La classe de fond portée par la racine du composant Box change de `has-{couleur}` vers `has-background-{couleur-v5}`. En v5, la classe attendue pour un fond accent est `has-background-accent`, et non `has-accent`.

## Correspondances courantes

| Classe v4 sur Box | Classe v5 sur Box |
|-------------------|-------------------|
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

Pour les autres anciens noms neutres, disabled et stroke, suivre les mappings de fond de [react-background-color.md](react-background-color.md) et confirmer le token selon l'usage visuel.

## Portée obligatoire

Migrer la classe uniquement sur l'élément racine identifié comme Box (par exemple l'élément portant `box`). **Ne pas faire de remplacement global** des classes `has-accent`, `has-info`, etc. : d'autres composants peuvent encore les utiliser avec une signification différente. Ne pas modifier les classes des descendants du Box sans règle spécifique.

```html
<!-- Avant -->
<div class="box has-accent">...</div>
<div class="tag has-accent">...</div>

<!-- Après : seul Box est migré -->
<div class="box has-background-accent">...</div>
<div class="tag has-accent">...</div>
```

Si la racine Box ne peut pas être identifiée avec certitude, signaler le cas plutôt que modifier la classe.
