# Couleur de texte — Migration HTML/CSS v4 → v5

## Changement

Sur `TableTr` (`<tr>`), `TableHead` (`<thead>`) et `TableBody` (`<tbody>`), la classe de couleur de texte passe de `is-{couleur}` à `has-text-{couleur-v5}`.

| Classe v4 | Classe v5 |
|-----------|-----------|
| `is-success` | `has-text-success` |
| `is-warning` | `has-text-warning` |
| `is-error` | `has-text-error` |
| `is-info` | `has-text-information` |
| `is-accent` | `has-text-accent` |
| `is-brand` | `has-text-brand` |
| `is-disabled` | `has-text-disabled` |
| `is-main` | `has-text-primary` |
| `is-font-placeholder` | `has-text-placeholder` |
| `is-white` | `has-text-inverse` |
| `is-grey` | `has-text-secondary` |
| `is-stroke` | `has-text-secondary` |

Les noms de couleur suivent [react-text-color.md](react-text-color.md). Les anciennes classes `*-fade` n'ont pas d'équivalent texte : les signaler sans les convertir.

## Fond de TableHead / TableBody

La classe de fond de `<thead>` et `<tbody>` garde son préfixe `has-background-` ; seul le suffixe legacy change (ex. `has-background-info` → `has-background-information`), selon les correspondances de [html-box.md](html-box.md).

## Portée obligatoire

Ne migrer que les classes de couleur portées par un `<tr>`, `<thead>` ou `<tbody>` d'une table Trilogy. **Ne pas remplacer globalement** `is-success`, `is-info`, etc. : Alert, Button, Box (`highlighted`) et d'autres composants ont leurs propres règles ou gardent ces classes.

```html
<!-- Avant -->
<table class="table">
  <thead class="is-main has-background-main-fade">...</thead>
  <tbody class="is-info">
    <tr class="is-error">...</tr>
  </tbody>
</table>
<span class="tag is-info">...</span>

<!-- Après : seules les lignes / sections de table sont migrées -->
<table class="table">
  <thead class="has-text-primary has-background-secondary-subtle">...</thead>
  <tbody class="has-text-information">
    <tr class="has-text-error">...</tr>
  </tbody>
</table>
<span class="tag is-info">...</span>
```

Si l'élément n'appartient pas clairement à une table Trilogy, laisser la classe inchangée et signaler le cas.
