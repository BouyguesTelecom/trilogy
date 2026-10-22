# Progress — Migration HTML/CSS v4 → v5

## Changement

Sur l'élément `.progress`, la classe de couleur par défaut `is-primary` devient `is-secondary`.

| Classe v4 sur Progress | Classe v5 sur Progress |
|------------------------|------------------------|
| `is-primary` | `is-secondary` |

Les autres classes de Progress (`is-small`, `is-stacked`, classes de statut…) ne sont pas concernées par cette règle.

## Portée obligatoire

Ne migrer `is-primary` que sur un élément portant `progress`. **Ne pas remplacer globalement** `is-primary` : Button et d'autres composants l'utilisent toujours.

```html
<!-- Avant -->
<progress class="progress is-primary is-small" value="40" max="100"></progress>
<button class="button is-primary">...</button>

<!-- Après : seul Progress est migré -->
<progress class="progress is-secondary is-small" value="40" max="100"></progress>
<button class="button is-primary">...</button>
```

Si l'élément n'est pas clairement un Progress Trilogy, laisser la classe inchangée et signaler le cas.
