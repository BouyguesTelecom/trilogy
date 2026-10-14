# Section — Migration HTML/CSS v4 → v5

## Changement

La classe de fond de Section possède déjà le préfixe `has-background-` en v4. Ce préfixe reste inchangé en v5 : seule la valeur `info` devient `information`.

| Classe v4 sur Section | Classe v5 sur Section |
|-----------------------|------------------------|
| `has-background-info` | `has-background-information` |
| `has-background-info-fade` | `has-background-information-subtle` |
| `has-background-information` | `has-background-information` (inchangée) |
| `has-background-information-subtle` | `has-background-information-subtle` (inchangée) |

Pour les autres couleurs de fond, consulter [react-background-color.md](react-background-color.md) pour les correspondances de noms. Cette règle documente spécifiquement le renommage `info` → `information` côté HTML/CSS.

## Portée obligatoire

Appliquer la conversion uniquement au suffixe de la classe de fond sur la racine identifiée comme Section. Ne pas ajouter ni supprimer `has-background-` et ne pas remplacer globalement `info` dans le projet, le contenu textuel, les noms d'icônes, les statuts ou les autres composants.

```html
<!-- Avant -->
<section class="section has-background-info">...</section>
<div class="tag has-info">...</div>

<!-- Après : seule la Section est migrée -->
<section class="section has-background-information">...</section>
<div class="tag has-info">...</div>
```

Si l'élément n'est pas clairement identifié comme Section ou si la classe a un autre rôle que son fond, laisser l'usage inchangé et demander confirmation.
