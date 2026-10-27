# Tag — Migration HTML/CSS v4 → v5

## Changement

Sur l'élément racine du Tag (portant `tag`), la classe de variante `is-{couleur}` devient `has-background-{couleur-v5}-subtle`.

| Classe v4 sur Tag | Classe v5 sur Tag |
|-------------------|-------------------|
| `is-success` | `has-background-success-subtle` |
| `is-info` | `has-background-information-subtle` |
| `is-warning` | `has-background-warning-subtle` |
| `is-error` | `has-background-error-subtle` |

Les autres classes de variante v4 (`is-main`, `is-accent`…) n'ont pas de correspondance documentée : les signaler sans les convertir.

## Portée obligatoire

Ne migrer que la classe de variante sur la racine `.tag`. **Ne pas remplacer globalement** `is-success`, `is-info`, etc. : Button, Table et d'autres composants ont leurs propres règles. Les classes `is-inverted` et `is-small` du Tag restent inchangées.

```html
<!-- Avant -->
<span class="tag is-info is-small">...</span>
<button class="button is-info">...</button>

<!-- Après : seul le Tag est migré -->
<span class="tag has-background-information-subtle is-small">...</span>
<button class="button is-info">...</button>
```

Si l'élément n'est pas clairement un Tag Trilogy, laisser la classe inchangée et signaler le cas. Pour la prop React `variant`, voir [react-tag.md](react-tag.md).
